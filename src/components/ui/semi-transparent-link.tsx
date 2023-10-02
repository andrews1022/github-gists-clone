import Link from "next/link";
import type { ReactNode } from "react";

type SemiTransparentLinkProps = {
  children: ReactNode;
  href: string;
  isExternal: boolean;
};

const SemiTransparentLink = ({ children, href, isExternal }: SemiTransparentLinkProps) => {
  return (
    <Link
      className="inline-block group opacity-70 hover:opacity-100 transition-opacity"
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {children}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-150 h-px bg-gray-400" />
    </Link>
  );
};

export { SemiTransparentLink };
