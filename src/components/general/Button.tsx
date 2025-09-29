import {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
  useMemo,
} from "react";
import Link from "next/link";

type ButtonVariants = "primary" | "outline";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariants;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    keyof ButtonBaseProps | "href"
  > & {
    href: string;
    isExternal?: boolean;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantMappings: Record<ButtonVariants, string> = {
  primary:
    "border-indigo-600 bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-300",
  outline:
    // bg
    "bg-gradient-to-br from-indigo-500/30 via-indigo-400/20 to-indigo-500/30" +
    // focus & hover
    "focus:outline-none focus:ring-2 focus:ring-indigo-300" +
    // border and text
    "border-indigo-600 text-sm font-medium text-indigo-600 hover:bg-indigo-50" +
    // dark mode
    "dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
};

const Button = ({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) => {
  const baseClassName = useMemo(
    () =>
      "border rounded-xl px-4 py-2 text-sm shadow-md cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 focus:outline-hidden" +
      variantMappings[variant],
    [variant]
  );
  const linkClassName = `${baseClassName} inline-block no-underline hover:no-underline ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, target, ...rest } = props as ButtonAsLink;

    return (
      <Link
        {...rest}
        href={href}
        className={linkClassName}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      {...(props as ButtonAsButton)}
      className={`${baseClassName} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
