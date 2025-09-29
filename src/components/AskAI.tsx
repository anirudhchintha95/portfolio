import { useRef, useState } from "react";
import CloseButton from "./general/CloseButton";
import Button from "./general/Button";

type AskAIResponse = {
  answer?: string;
  error?: string;
};

const SUGGESTIONS = [
  "What backend frameworks has he used?",
  "How many years of React experience?",
  "Key projects worth showcasing?",
  "What databases does he know?",
];

export default function AskAI() {
  const [q, setQ] = useState<string>("");
  const [qError, setQError] = useState<string | null>(null);
  const [a, setA] = useState<AskAIResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function setQuestion(e: React.ChangeEvent<HTMLInputElement>) {
    setQError(null);
    setQ(e.target.value);
  }

  function handleClose() {
    setA(null);
    setErr(null);
  }

  function clearInput() {
    setQ("");
    inputRef.current?.focus();
  }

  async function onSubmit(e?: React.FormEvent) {
    e?.preventDefault();
    const question = q.trim();

    if (!question) {
      setQError("Please enter a question");
      inputRef.current?.focus();
      return;
    }

    setLoading(true);
    setErr(null);
    setA(null);
    setQError(null);

    try {
      const res = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data: AskAIResponse = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (res.status === 429)
          throw new Error("Rate limited. Please try again in a moment.");
        if (data?.error) throw new Error(data.error);
        throw new Error("Something went wrong. Please try again.");
      }

      setA({
        answer: data.answer ?? "I don't know.",
      });
    } catch {
      setErr("Request failed");
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") onSubmit();
    if (e.key === "Escape") clearInput();
  }

  async function copyAnswer() {
    const text = a?.answer?.toString() ?? "";
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // ignore
    }
  }

  const disabled = loading;

  return (
    <section className="mx-auto max-w-screen-xl px-8 sm:px-6 lg:px-8">
      {/* Answer / Error */}
      <div
        className="mx-auto max-w-xl rounded-xl bg-white dark:bg-indigo-100 shadow-sm ring-1 ring-gray-200"
        aria-live="polite"
        aria-busy={loading ? "true" : "false"}
      >
        {err ? (
          <div className="min-h-[90px] rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
            {err}
          </div>
        ) : (
          <div className="relative min-h-[90px] rounded-xl p-4 text-gray-900">
            {loading ? (
              <div
                className="flex h-full items-center justify-center"
                role="status"
                aria-label="Loading"
              >
                <div className="w-full">
                  <div className="h-3 w-2/3 animate-pulse rounded bg-gray-200 dark:bg-gray-600" />
                  <div className="mt-2 h-3 w-5/6 animate-pulse rounded bg-gray-200 dark:bg-gray-600" />
                  <div className="mt-2 h-3 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-gray-600" />
                </div>
              </div>
            ) : a?.answer ? (
              <>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-gray-700">
                    AI Answer
                  </h3>
                  <div className="flex gap-2">
                    <Button
                      onClick={copyAnswer}
                      className="!px-3 !py-1 text-xs !border-gray-300 !bg-gray-50 !text-gray-700 !dark:text-gray-700 hover:bg-gray-50"
                    >
                      Copy
                    </Button>
                    <CloseButton
                      onClick={handleClose}
                      aria-label="Clear answer"
                      title="Clear answer"
                    />
                  </div>
                </div>
                <p className="whitespace-pre-wrap text-sm leading-6 text-gray-800">
                  {a.answer}
                </p>
              </>
            ) : (
              <span className="text-gray-500">
                Type a question about Anirudh’s skills, experience, or education
                below. Answers come from the latest résumé.
              </span>
            )}
          </div>
        )}
      </div>

      {/* Ask AI form */}
      <form
        onSubmit={onSubmit}
        className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-center"
      >
        <label htmlFor="Question" className="relative flex-1">
          <span className="sr-only">Question</span>
          <input
            ref={inputRef}
            id="Question"
            type="text"
            placeholder="e.g., What backend frameworks has he used?"
            className={`h-12 w-full rounded-xl bg-white dark:bg-indigo-100 px-4 shadow-sm outline-none focus:ring-2 focus:ring-indigo-300 ${
              qError ? "ring-2 ring-red-400" : "ring-1 ring-gray-300"
            } disabled:cursor-not-allowed disabled:opacity-60 dark:text-gray-800 ${
              !!q ? "pr-[40px]" : ""
            }`}
            autoComplete="off"
            value={q}
            onChange={setQuestion}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            aria-invalid={qError ? "true" : "false"}
            aria-describedby={qError ? "question-error" : undefined}
          />
          {!!q && (
            <CloseButton
              className="absolute right-[20px] top-[20px]"
              onClick={clearInput}
              aria-label="Clear text"
              title="Clear text"
            />
          )}
          {qError && (
            <p id="question-error" className="mt-1 text-xs text-red-600">
              {qError}
            </p>
          )}
        </label>

        <Button
          type="submit"
          className="h-12 border-indigo-600 bg-indigo-600 px-6 text-sm font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-300 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={disabled || !q.trim()}
          aria-label="Ask AI"
          title="Ask AI"
        >
          {loading ? "Thinking…" : "Ask AI"}
        </Button>
      </form>

      {/* Subtext */}
      <p className="mt-2 text-center text-xs text-gray-600 dark:text-indigo-100">
        Powered by ChatGPT
      </p>

      {/* Suggested prompts */}
      <div className="mx-auto mt-4 flex max-w-xl flex-wrap items-center justify-center gap-2">
        {SUGGESTIONS.map((prompt) => (
          <Button
            key={prompt}
            onClick={() => {
              setQ(prompt);
            }}
            variant="outline"
            disabled={disabled}
            className="!rounded-full !border-gray-200 !bg-white dark:!bg-indigo-100 px-3 py-1.5 text-xs !text-gray-700 !hover:bg-gray-50"
            title={prompt}
          >
            {prompt}
          </Button>
        ))}
      </div>
    </section>
  );
}
