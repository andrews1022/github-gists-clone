"use client";

import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  bgColor: "emerald" | "gray" | "red" | "sky";
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  shade: "600" | "800";
  size: "small" | "medium" | "large";
  type?: "button" | "submit";
}

// create reusable component that could be either a button or a link
const Button = ({
  bgColor,
  children,
  href,
  onClick,
  shade,
  size,
  type = "button"
}: ButtonProps) => {
  const smallSizes = "text-base py-1.5 px-6";
  const mediumSizes = "text-xl py-1.5 px-8";
  const largeSizes = `text-xl py-1.5 px-8 xs:text-2xl xs:py-2 xs:px-12`;

  const determineSize = () => {
    switch (size) {
      case "small":
        return smallSizes;
      case "medium":
        return mediumSizes;
      case "large":
        return largeSizes;
      default:
        return mediumSizes;
    }
  };

  const classes = `
    flex items-center gap-x-2
    rounded-lg
    border-2 border-${bgColor}-${shade} text-${bgColor}-${shade}
    ${determineSize()}
    hover:bg-${bgColor}-${shade} hover:text-white transition-colors
  `;

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick ? onClick : undefined} type={type}>
      {children}
    </button>
  );
};

export { Button };
