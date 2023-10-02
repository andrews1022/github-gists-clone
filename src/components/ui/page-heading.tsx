import type { ReactNode } from "react";

type PageHeadingProps = {
  children: ReactNode;
};

const PageHeading = ({ children }: PageHeadingProps) => {
  return <h1 className="text-5xl xs:text-6xl sm:text-7xl">{children}</h1>;
};

export { PageHeading };
