import { Roboto } from "next/font/google";

import { Navbar } from "@/components/global/navbar";
import { Footer } from "@/components/global/footer";

import { Toaster } from "@/components/ui/toaster";

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
        <main className="container my-10">{children}</main>
        <Footer />

        <Toaster />
      </body>
    </html>
  );
};

export default RootLayout;
