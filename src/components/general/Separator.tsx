import React from "react";

const Separator = ({
  text,
  hrefKey,
}: {
  text: string | string[];
  hrefKey: string;
}) => {
  const textArray = React.useMemo(
    () => (Array.isArray(text) ? text : [text]),
    [text]
  );

  return (
    <section className="py-8 font-pixel">
      {/* Mobile: stacked */}
      <div className="sm:hidden space-y-3">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600 m-0" />
        <a
          className="flex flex-col items-center gap-1 px-4 text-center text-2xl my-2"
          href={"#" + hrefKey}
        >
          {textArray.map((line, idx) => (
            <span key={idx} className="text-gray-900 dark:text-white font-bold underline underline-offset-4">
              {line}
            </span>
          ))}
        </a>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600 m-0" />
      </div>

      {/* sm+: horizontal */}
      <div className="hidden sm:flex items-center">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-300 dark:to-amber-500" />
        <a
          className="shrink px-4 text-gray-900 dark:text-white font-bold text-center text-2xl break-words underline underline-offset-4"
          href={"#" + hrefKey}
        >
          {textArray.join(" ")}
        </a>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-300 dark:to-amber-500" />
      </div>
    </section>
  );
};

export default React.memo(Separator);
