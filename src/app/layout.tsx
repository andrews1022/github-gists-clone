import { Roboto } from "next/font/google";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import "@/styles/globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"]
});

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
      <body className={`${roboto.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
