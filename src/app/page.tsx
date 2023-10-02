import { Code, LogIn } from "lucide-react";
import { getServerSession } from "next-auth";
import Link from "next/link";

import { ContentWrapper } from "@/components/ui/content-wrapper";
import { PageHeading } from "@/components/ui/page-heading";
import { clientRoutes } from "@/constants/routes";
import { options } from "@/next-auth/options";

const HomePage = async () => {
  const session = await getServerSession(options);

  return (
    <ContentWrapper>
      <PageHeading>Gists Clone</PageHeading>

      <p className="text-center text-xl">
        A simple site to display, create, and manage your gists.
      </p>

      <Link
        className="border-2 border-gray-800 text-2xl py-2 px-12 rounded-lg hover:bg-gray-800 hover:text-white transition-colors flex items-center gap-x-2"
        href={session ? clientRoutes.gists : clientRoutes.signIn}
      >
        {session ? (
          <>
            <Code /> <span>View Gists</span>
          </>
        ) : (
          <>
            <LogIn /> <span>Sign In</span>
          </>
        )}
      </Link>
    </ContentWrapper>
  );
};

export default HomePage;
