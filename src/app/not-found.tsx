import { Home } from "lucide-react";

import { Paragraph } from "@/components/ui/paragraph";
import { Button } from "@/components/ui/button";
import { ContentWrapper } from "@/components/ui/content-wrapper";
import { PageHeading } from "@/components/ui/page-heading";

import { clientRoutes } from "@/constants/routes";

const RootNotFound = () => {
  return (
    <ContentWrapper>
      <PageHeading>Oops!</PageHeading>

      <Paragraph>Looks like you tried accessing a page that doesn't exist.</Paragraph>

      <Button bgColor="gray" size="large" href={clientRoutes.root}>
        <Home /> Go Home
      </Button>
    </ContentWrapper>
  );
};

export default RootNotFound;
