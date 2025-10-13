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
    <section aria-label="Ask AI" className="px-4 sm:px-0">
      {/* Answer / Error */}
      <div
        className="mx-auto max-w-xl rounded-xl bg-white dark:bg-indigo-100 shadow-md ring-1 ring-gray-200"
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
        className="mx-auto mt-6 max-w-xl flex items-center border pl-4 gap-2 bg-white dark:bg-indigo-100 border-gray-500/30 h-[46px] rounded-full overflow-hidden w-full shadow-md"
        onSubmit={onSubmit}
      >
        <label htmlFor="Question" className="relative flex-1">
          <span className="sr-only">Question</span>
          <input
            ref={inputRef}
            id="Question"
            type="text"
            placeholder="e.g., What backend frameworks has he used?"
            autoComplete="off"
            value={q}
            onChange={setQuestion}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            aria-invalid={qError ? "true" : "false"}
            aria-describedby={qError ? "question-error" : undefined}
            className="w-full h-full outline-none text-sm text-gray-500 dark:text-gray-800 shadow-none"
          />
        </label>
        <Button
          disabled={disabled || !q.trim()}
          type="submit"
          className="bg-indigo-500 w-24 h-9 !rounded-full text-sm text-white mr-[5px]"
        >
          {loading ? (
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mb-1 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            "Ask AI"
          )}
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
            className="!rounded-full px-3 py-1.5 text-xs"
            title={prompt}
          >
            {prompt}
          </Button>
        ))}
      </div>
    </section>
  );
}
