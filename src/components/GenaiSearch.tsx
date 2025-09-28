import { useState } from "react";
import CloseButton from "./CloseButton";
import Button from "./Button";

export default function AskAI() {
  const [q, setQ] = useState("");
  const [qError, setQError] = useState<string | null>(null);
  const [a, setA] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  function setQuestion(e: React.ChangeEvent<HTMLInputElement>) {
    setQError(null);
    setQ(e.target.value);
  }

  function handleClose() {
    setA(null);
    setErr(null);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const question = q.trim();

    if (!question) {
      setQError("Please enter a question");
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
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Something went wrong");
      setA(data.answer ?? "I don't know");
    } catch {
      setErr("Request failed");
    } finally {
      setQ("");
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-screen-xl px-8 sm:px-6 lg:px-8">
      {/* Answer / Error */}
      <div className="mx-auto max-w-xl bg-white rounded-md shadow-lg">
        {err ? (
          <div className="rounded border border-red-300 bg-red-50 p-3 text-sm text-red-800 min-h-[82px]">
            {err}
          </div>
        ) : (
          <div className="relative rounded border border-gray-200 bg-white p-4 text-gray-900 min-h-[82px]">
            {loading ? (
              <>...</>
            ) : a ? (
              <>
                {a}
                <CloseButton
                  className="absolute top-4 right-4 cursor-pointer"
                  onClick={handleClose}
                />
              </>
            ) : (
              <span className="text-gray-400">
                Type a question about Anirudh`s skills, experience, or education
                below. Answers come from the latest résumé.
              </span>
            )}
          </div>
        )}
      </div>

      {/* Ask AI form */}
      <form
        onSubmit={onSubmit}
        className="mx-auto mt-6 flex max-w-xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
      >
        <label htmlFor="Question" className="flex-1 relative">
          <span className="sr-only">Question</span>

          <input
            id="Question"
            type="text"
            placeholder="e.g., What backend frameworks has he used?"
            className={`pl-4 pr-4 h-12 w-full rounded shadow-md bg-white ${
              qError ? "border-2 border-red-500" : "border border-gray-400"
            } disabled:opacity-60 disabled:cursor-not-allowed dark:text-gray-700`}
            autoComplete="off"
            value={q}
            onChange={setQuestion}
            disabled={loading}
          />
        </label>

        <Button
          type="submit"
          className="h-12 rounded-sm border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-indigo-800 focus:ring-3"
          disabled={loading || !q.trim()}
        >
          {loading ? "Asking…" : "Ask AI"}
        </Button>
      </form>

      {/* Subtext */}
      <p className="mt-2 text-xs text-black text-center dark:text-white">
        Powered by ChatGPT
      </p>

      {/* Suggested prompts */}
      <div className="mx-auto mt-4 flex flex-col max-w-xl gap-2 sm:flex-row sm:items-center sm:justify-center">
        {[
          "What programming languages does Anirudh know?",
          "How many years of ReactJS experience does he have?",
          "Tell me about his education background",
        ].map((prompt) => (
          <Button
            key={prompt}
            onClick={() => setQ(prompt)}
            disabled={loading}
            className="border-gray-300 bg-white text-gray-700 hover:bg-gray-50 !rounded-full"
          >
            {prompt}
          </Button>
        ))}
      </div>
    </div>
  );
}
