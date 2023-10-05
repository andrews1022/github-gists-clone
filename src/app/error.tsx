"use client";

import { Home } from "lucide-react";
import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";
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

      <Button bgColor="gray" shade="dark" size="small" onClick={handleGoHome}>
        <Home /> Go Home
      </Button>
    </ContentWrapper>
  );
};

export default RootErrorPage;
