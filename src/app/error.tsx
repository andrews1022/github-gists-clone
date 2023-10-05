"use client";

import { Home } from "lucide-react";
import { signOut } from "next-auth/react";

import { Paragraph } from "@/components/ui/paragraph";
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

      <Paragraph>Something went wrong there.</Paragraph>

      <Button bgColor="gray" size="large" onClick={handleGoHome}>
        <Home /> Go Home
      </Button>
    </ContentWrapper>
  );
};

export default RootErrorPage;
