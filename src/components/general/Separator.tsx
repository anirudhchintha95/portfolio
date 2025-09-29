import React from "react";

const Separator = ({ text }: { text: string | string[] }) => {
  const textArray = React.useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text]
  );

  return (
    <section className="py-8 font-pixel">
      {/* Mobile: stacked */}
      <div className="sm:hidden space-y-3">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600" />
        <h2 className="text-center px-4 text-2xl">
          {textArray.map((line, idx) => (
            <div
              key={idx}
              className="text-gray-900 dark:text-white font-bold"
            >
              {line}
            </div>
          ))}
        </h2>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600" />
      </div>

      {/* sm+: horizontal */}
      <div className="hidden sm:flex items-center">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300 dark:to-gray-600" />
        <h2 className="shrink px-4 text-gray-900 dark:text-white font-bold text-center text-2xl break-words">
          {textArray.join(" ")}
        </h2>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300 dark:to-gray-600" />
      </div>
    </section>
  );
};

export default React.memo(Separator);
