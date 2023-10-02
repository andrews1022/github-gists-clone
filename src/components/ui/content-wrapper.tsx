import type { ReactNode } from "react";

type ContentWrapperProps = {
  children: ReactNode;
};

const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return <div className="flex flex-col items-center gap-y-6">{children}</div>;
};

export { ContentWrapper };
