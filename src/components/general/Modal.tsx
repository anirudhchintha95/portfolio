"use client";

import Button from "./Button";
import CloseButton from "./CloseButton";

export interface ModalAction {
  label: string;
  onClick?: () => void;
  href?: string;
  target?: "_blank";
  download?: boolean;
  variant?: "primary" | "outline";
}

export default function Modal({
  open,
  onClose,
  title,
  icon,
  children,
  actions,
  modalClassName,
  modalContentClassName,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  actions?: ModalAction[];
  modalClassName?: string;
  modalContentClassName?: string;
}) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40"
      onClick={onClose}
    >
      <div
        className={[
          "w-full max-w-md rounded-xl bg-white dark:bg-gray-800 shadow-lg flex flex-col",
          modalClassName,
        ].join(" ")}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className={[
            "flex items-center justify-between p-6",
            children ? "border-b border-gray-200 dark:border-gray-700" : "",
          ].join(" ")}
        >
          <div className="flex items-center gap-3">
            {icon && (
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-900 dark:bg-gray-700">
                {icon}
              </div>
            )}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
          </div>

          {/* Close button in top-right */}
          <CloseButton title="Close dialog" onClick={onClose} />
        </div>

        {/* Body (scrollable if tall) */}
        {children ? (
          <div
            className={[
              "p-6 overflow-y-auto max-h-[70vh]",
              modalContentClassName,
            ].join(" ")}
          >
            {children}
          </div>
        ) : (
          <></>
        )}

        {/* Footer */}
        <div
          className={[
            "flex justify-end gap-2 p-6 ",
            children ? "border-t border-gray-200 dark:border-gray-700" : "",
          ].join(" ")}
        >
          {actions?.length ? (
            actions.map((action) => (
              <Button
                key={action.label}
                onClick={action.onClick}
                href={action.href}
                target={action.target}
                download={action.download}
                variant={action.variant ?? "primary"}
              >
                {action.label}
              </Button>
            ))
          ) : (
            <></>
          )}
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
