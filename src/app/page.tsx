import { Code } from "lucide-react";
import { getServerSession } from "next-auth";

import { Paragraph } from "@/components/ui/paragraph";
import { Button } from "@/components/ui/button";
import { ContentWrapper } from "@/components/ui/content-wrapper";
import { PageHeading } from "@/components/ui/page-heading";

import { clientRoutes } from "@/constants/routes";

import { options } from "@/next-auth/options";

const HomePage = async () => {
  const session = await getServerSession(options);

  const href = session ? clientRoutes.gists : clientRoutes.signIn;

  return (
    <ContentWrapper>
      <PageHeading>Gists Clone</PageHeading>

      <div className="text-center">
        <Paragraph>A simple site to display, create, and manage your gists.</Paragraph>
      </div>

      {session ? (
        <Button bgColor="gray" size="large" href={href}>
          <Code /> <span>View Gists</span>
        </Button>
      ) : null}
    </ContentWrapper>
  );
};

export default HomePage;
