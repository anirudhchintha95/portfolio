import { useRef, useState } from "react";
import HoverGlowCard from "./general/HoverGlow";
import Modal from "./general/Modal";

type HistoryTrack = "work" | "education";

type Interval = {
  id: string;
  title: string;
  at: string;
  description?: string;
  track: HistoryTrack;
  /** Older boundary (visually lower) */
  start: string;
  /** Newer boundary (visually higher) */
  end: string;

  // modal stuff
  modal?: {
    description: string[];
    skills: string;
  };
};

const INTERVALS: Interval[] = [
  {
    id: "icims-ft",
    title: "Software Engineer",
    at: "iCIMS Inc., Holmdel, NJ",
    track: "work",
    start: "24 June 2024",
    end: "Present",
    modal: {
      description: [
        "Collaborated with the team to separate the Angular frontend and NodeJS backend mono-repo into individual repositories and integrate the frontend into Jenkins pipelines with the help of Redis caching, enabling parallel deployments and reducing frontend deploy time by approximately 30%.",
        "Introduced automation testing standards by implementing Angular Testing Library throughout the application, enhancing code quality, and reducing the time taken to run tests and post-deployment bugs.",
        "Upgraded Angular from v15 to v18, removed deprecated/unmaintained libraries, and introduced Signals, optimizing frontend performance and modernizing the application.",
        "Delivered campaign automation features to enhance candidate engagement and support CRM-to-CXM rebranding initiative.",
        "Optimized and added more features in Angular and NodeJS, improving user experience and providing better solutions for continuous candidate engagement.",
        "Enhanced filter UI by adding categorized expansion panels, search feature, and new filters, cutting filter selection time by 25% and boosting recruiter efficiency.",
        "Maintained OWASP, accessibility, and internationalization standards to ensure secure, inclusive, and globally adaptable applications.",
        "Contributed to sprint planning and feature discussions, maintaining less than 5% churn rate and often led or facilitated cross-team technical conversations.",
      ],
      skills:
        "JavaScript · NodeJs · Agile Methodologies · Angular · Bitbucket · Amazon Web Services (AWS) · Continuous Integration and Continuous Delivery (CI/CD) · HTML · Software Development · Cascading Style Sheets (CSS) · Scrum · TypeScript",
    },
  },
  {
    id: "icims-intern",
    title: "Software Engineer Intern",
    at: "iCIMS Inc., Holmdel, NJ",
    track: "work",
    start: "5 June 2023",
    end: "17 May 2024",
    modal: {
      description: [
        "Contributed to the development and release of a few minor bugs and features in Angular JS.",
        "Developed Image Preview, Delete, and Cropping mechanisms that added an easy way to manage images.",
        "Contributed towards developing and updating CRM to CXM.",
        "Contributed to the development of features for updated and upgraded CRM(CXM).",
      ],
      skills:
        "JavaScript · NodeJs · Agile Methodologies · Angular · Bitbucket · HTML · Software Development · Scrum · ReactJS · TypeScript",
    },
  },
  {
    id: "stevens-ms",
    title: "MS in Computer Science",
    at: "Stevens Institute of Technology, Hoboken, NJ",
    track: "education",
    start: "1 September 2022",
    end: "17 May 2024",
    modal: {
      description: [
        "Specialised in Full-Stack Development, Agile Methodologies and DBMS",
      ],
      skills:
        "ReactJS · Agile Methodologies · NodeJs · Python (Programming Language) · HTML · PostgreSQL · Git · JavaScript · Scrum",
    },
  },
  {
    id: "wal-senior",
    title: "Senior Software Engineer",
    at: "West Agile Labs Pvt Ltd, Hyderabad, India",
    track: "work",
    start: "1 July 2021",
    end: "31 July 2022",
    modal: {
      description: [
        "Led development of ReactJS-based customer-facing mobile-friendly order management system, increasing sales by 30%.",
        "Built and optimized PostgreSQL queries, reducing execution time by 15% and improving system responsiveness.",
        "Maintained a B2C React Native application to place and track orders in real time, enhancing user experience.",
        "Automated deployment workflows using GitHub Actions and integrated AWS SNS to enable real-time mobile push notifications.",
        "Introduced Jest and React Testing Library for unit testing, reducing post-deployment bugs by 25%.",
        "Guided and mentored junior engineers while actively participating in interview processes to build strong engineering teams.",
      ],
      skills:
        "Git · JavaScript · NodeJs · Agile Methodologies · PostgreSQL · Amazon Web Services (AWS) · Continuous Integration and Continuous Delivery (CI/CD) · HTML · Software Development · Cascading Style Sheets (CSS) · Scrum · Redux.js · ReactJS · React Native · Amazon Simple Notification Service (SNS) · Amazon EC2",
    },
  },
  {
    id: "wal-engineer",
    title: "Software Engineer",
    at: "West Agile Labs Pvt Ltd, Hyderabad, India",
    track: "work",
    start: "1 June 2017",
    end: "30 June 2021",
    modal: {
      description: [
        "Developed backend APIs using Ruby on Rails, enhancing system functionality and reliability.",
        "Expanded to full-stack with VueJS and Ruby on Rails, optimizing frontend performance and user experience.",
        "Created a closed Ruby gem for managing enterprise password policies, improving security compliance by 30%.",
      ],
      skills:
        "Git · Ruby on Rails · Ruby · JavaScript · Agile Methodologies · PostgreSQL · Vue.js · Amazon Web Services (AWS) · Continuous Integration and Continuous Delivery (CI/CD) · HTML · Software Development · Cascading Style Sheets (CSS) · Scrum · ReactJS",
    },
  },
  {
    id: "bits-bachelors",
    title: "MScTech in Information Systems",
    at: "Birla Institute of Technology and Science, Hyderabad Campus",
    track: "education",
    description: "Equivalent to Bachelor of Science",
    start: "8 August 2012",
    end: "18 December 2016",
    modal: {
      description: ["Equivalent to Bachelor of Science"],
      skills: "C · SQL · Git · C++ · Java",
    },
  },
];

const trackLabel: Record<HistoryTrack, string> = {
  work: "Work",
  education: "Education",
};

const trackBadgeClass: Record<HistoryTrack, string> = {
  work: "bg-indigo-500/10 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200",
  education:
    "bg-amber-500/10 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200",
};

const trackColumn: Record<HistoryTrack, number> = {
  work: 1,
  education: 3,
};

function normalizeDate(date: string) {
  return date.replace(/(\d+)(st|nd|rd|th)/gi, "$1");
}

function parseTimelineDate(date: string): number {
  if (/present/i.test(date)) return Number.MAX_SAFE_INTEGER;
  const parsed = Date.parse(normalizeDate(date));
  if (!Number.isNaN(parsed)) {
    return parsed;
  }
  return Number.MIN_SAFE_INTEGER;
}

const UNIQUE_DATES = Array.from(
  new Set(INTERVALS.flatMap((interval) => [interval.start, interval.end]))
);

UNIQUE_DATES.sort((a, b) => parseTimelineDate(b) - parseTimelineDate(a));

const ROW_INDEX = new Map<string, number>(
  UNIQUE_DATES.map((date, index) => [date, index + 1])
);

type IntervalPlacement = Interval & {
  rowStart: number;
  rowEnd: number;
};

const INTERVALS_WITH_PLACEMENT: IntervalPlacement[] = INTERVALS.map(
  (interval) => {
    const endRow = ROW_INDEX.get(interval.end);
    const startRow = ROW_INDEX.get(interval.start);

    if (!startRow || !endRow) {
      throw new Error(
        `Missing row index for interval ${interval.title} (${interval.start} - ${interval.end})`
      );
    }

    const rowStart = Math.min(endRow, startRow);
    const rowEnd = Math.max(endRow, startRow) + 1;

    return {
      ...interval,
      rowStart,
      rowEnd,
    };
  }
);

const MOBILE_INTERVALS = [...INTERVALS].sort(
  (a, b) => parseTimelineDate(b.end) - parseTimelineDate(a.end)
);

function TimelineCard({
  title,
  description,
  at,
  track,
  start,
  end,
  modal,
}: Interval) {
  const rangeLabel = `${start} - ${end}`;

  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    queueMicrotask(() => triggerRef.current?.focus());
  };

  return (
    <>
      <HoverGlowCard className="group flex h-full w-full rounded-xl border border-gray-200 bg-white/95 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-gray-800/95">
        <button
          ref={triggerRef}
          type="button"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-label={`Open details for ${title}`}
          className="flex h-full w-full flex-col justify-between rounded-xl bg-transparent p-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 dark:focus-visible:ring-indigo-300 cursor-pointer"
          onClick={handleOpen}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h4 className="text-base font-semibold text-gray-900 dark:text-white">
                {title}
              </h4>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-indigo-500 dark:text-indigo-300">
                {rangeLabel}
              </p>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${trackBadgeClass[track]}`}
            >
              {trackLabel[track]}
            </span>
          </div>
          {description ? (
            <p className="mt-4 text-sm text-gray-600 transition group-hover:text-gray-700 dark:text-neutral-300 dark:group-hover:text-neutral-200">
              {description}
            </p>
          ) : null}
          <p className="mt-4 text-sm text-gray-700 transition group-hover:text-gray-900 dark:text-neutral-200 dark:group-hover:text-white">
            {at}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-indigo-500 opacity-100 sm:opacity-0 transition-opacity group-hover:sm:opacity-100 dark:text-indigo-300">
            View details
            <span aria-hidden>→</span>
          </span>
          <span className="sr-only">Open detailed timeline entry</span>
        </button>
      </HoverGlowCard>

      <Modal
        open={open}
        onClose={handleClose}
        title={
          <span>
            {title}
            <span
              className={[
                "rounded-full px-3 py-1 text-xs font-semibold ml-2",
                trackBadgeClass[track],
              ].join(" ")}
            >
              {trackLabel[track]}
            </span>
          </span>
        }
        modalClassName="!max-w-[80vw]"
      >
        <div className="space-y-6 text-sm leading-relaxed text-gray-700 dark:text-neutral-200">
          <div className="grid gap-2 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-neutral-400">
                Duration
              </p>
              <p>{rangeLabel}</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-neutral-400">
                Location / Org
              </p>
              <p>{at}</p>
            </div>
          </div>

          {modal?.description?.length ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-neutral-400">
                Highlights
              </p>
              <ul className="mt-2 space-y-2 list-disc list-inside text-sm text-gray-700 dark:text-neutral-200">
                {modal.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ) : null}

          {modal?.skills ? (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-neutral-400">
                Skills
              </p>
              <p className="mt-1 whitespace-pre-line text-sm">{modal.skills}</p>
            </div>
          ) : null}
        </div>
      </Modal>
    </>
  );
}

const History = () => {
  return (
    <section>
      {/* Mobile stacked timeline */}
      <div className="space-y-6 sm:hidden">
        {MOBILE_INTERVALS.map((interval) => (
          <TimelineCard key={interval.id} {...interval} />
        ))}
      </div>

      {/* Desktop / tablet dual-lane timeline */}
      <div className="relative hidden auto-rows-[minmax(4.5rem,auto)] grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-x-4 sm:grid">
        <span className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gray-300 to-transparent dark:via-amber-500 sm:block" />

        {INTERVALS_WITH_PLACEMENT.map((interval) => (
          <article
            key={interval.id}
            style={{
              gridColumn: trackColumn[interval.track],
              gridRow: `${interval.rowStart} / ${interval.rowEnd}`,
            }}
            className={`flex px-1.5 sm:px-2.5 py-2 ${
              interval.track === "work" ? "justify-end" : "justify-start"
            }`}
          >
            <TimelineCard {...interval} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default History;
