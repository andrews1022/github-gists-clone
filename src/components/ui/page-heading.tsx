import type { ReactNode } from "react";

type PageHeadingProps = {
  children: ReactNode;
};

const PageHeading = ({ children }: PageHeadingProps) => {
  return <h1 className="text-center text-4xl xs:text-5xl sm:text-6xl">{children}</h1>;
};

export { PageHeading };
