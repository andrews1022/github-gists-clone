import { forwardRef } from "react";
import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ForwardedRef, ReactNode } from "react";

type ButtonProps = {
  bgColor: "emerald" | "gray" | "red" | "sky";
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  size: "small" | "medium" | "large";
  type?: "button" | "submit";
};

type ForwardRefT = HTMLButtonElement | HTMLAnchorElement;
type ForwardRefP = ButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

type ForwardedAnchor = ForwardedRef<HTMLAnchorElement>;
type ForwardedButton = ForwardedRef<HTMLButtonElement>;

const colorVariants = {
  emerald: "border-emerald-600 text-emerald-600 hover:bg-emerald-600",
  gray: "border-gray-800 text-gray-800 hover:bg-gray-800",
  red: "border-red-600 text-red-600 hover:bg-red-600",
  sky: "border-sky-600 text-sky-600 hover:bg-sky-600"
};

const sizeVariants = {
  small: "text-base py-1.5 px-6",
  medium: "text-xl py-1.5 px-8",
  large: "text-xl py-1.5 px-8 xs:text-2xl xs:py-2 xs:px-12"
};

const Button = forwardRef<ForwardRefT, ForwardRefP>(
  ({ bgColor, children, href, onClick, size, type = "button" }, ref) => {
    const colorClasses = colorVariants[bgColor];
    const sizeClasses = sizeVariants[size];

    const classes = `
      flex items-center gap-2 rounded-lg ${sizeClasses}
      border-2 ${colorClasses} hover:text-white transition-colors
    `;

    if (href) {
      return (
        <Link className={classes} href={href} ref={ref as ForwardedAnchor}>
          {children}
        </Link>
      );
    }

    return (
      <button
        className={classes}
        onClick={onClick ? onClick : undefined}
        ref={ref as ForwardedButton}
        type={type}
      >
        {children}
      </button>
    );
  }
);

export { Button };
