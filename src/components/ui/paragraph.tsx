import type { ReactNode } from "react";

type ParagraphProps = {
  children: ReactNode;
};

const Paragraph = ({ children }: ParagraphProps) => {
  return <p className="text-base sm:text-xl">{children}</p>;
};

export { Paragraph };
