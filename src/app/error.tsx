"use client";

import { Home } from "lucide-react";
import { signOut } from "next-auth/react";

import { ContentWrapper } from "@/components/ui/content-wrapper";
import { PageHeading } from "@/components/ui/page-heading";
import { clientRoutes } from "@/constants/routes";

const RootErrorPage = () => {
  const handleGoHome = () => {
    signOut({ callbackUrl: clientRoutes.root });
  };

  return (
    <ContentWrapper>
      <PageHeading>Oops!</PageHeading>

      <p className="text-xl">Something went wrong there.</p>

      <button
        className="border-2 border-gray-800 text-2xl py-2 w-56 rounded-lg hover:bg-gray-800 hover:text-white transition-colors flex items-center justify-center gap-x-2"
        onClick={handleGoHome}
      >
        <Home /> Go Home
      </button>
    </ContentWrapper>
  );
};

export default RootErrorPage;
