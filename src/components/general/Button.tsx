import { ButtonHTMLAttributes } from "react";

const Button = ({
  children,
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...rest}
      className={`border rounded-xl px-4 py-2 text-sm shadow-md cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 focus:outline-hidden ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
