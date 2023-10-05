import { Code, LogIn } from "lucide-react";
import { getServerSession } from "next-auth";

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

      <p className="text-center text-xl">
        A simple site to display, create, and manage your gists.
      </p>

      {session ? (
        <Button bgColor="gray" shade="dark" size="large" href={href}>
          <Code /> <span>View Gists</span>
        </Button>
      ) : null}
    </ContentWrapper>
  );
};

export default HomePage;
