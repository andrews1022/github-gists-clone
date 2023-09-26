import { Roboto } from "next/font/google";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  description: "Full stack clone of GitHub Gists",
  title: "GitHub Gists Clone"
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
