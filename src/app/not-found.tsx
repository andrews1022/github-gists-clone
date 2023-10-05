import { Home } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ContentWrapper } from "@/components/ui/content-wrapper";
import { PageHeading } from "@/components/ui/page-heading";
import { clientRoutes } from "@/constants/routes";

const RootNotFound = () => {
  return (
    <ContentWrapper>
      <PageHeading>Oops!</PageHeading>

      <p className="text-xl">Looks like you tried accessing a page that doesn't exist.</p>

      <Button bgColor="gray" shade="dark" size="small" href={clientRoutes.root}>
        <Home /> Go Home
      </Button>
    </ContentWrapper>
  );
};

export default RootNotFound;
