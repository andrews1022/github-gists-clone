import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

import { GitHubAuthButton } from "@/components/GitHubAuthButton";
import { ContentWrapper } from "@/components/ui/content-wrapper";
import { PageHeading } from "@/components/ui/page-heading";
import { clientRoutes } from "@/constants/routes";
import { options } from "@/next-auth/options";

const SignInPage = async () => {
  const session = await getServerSession(options);

  if (session) {
    redirect(clientRoutes.root);
  }

  return (
    <ContentWrapper>
      <PageHeading>Sign In</PageHeading>

      <div className="bg-gray-100 rounded-lg p-7 w-2/4 flex flex-col items-center gap-y-4">
        <GitHubAuthButton text="in" />

        <div className="bg-gray-400 h-px w-1/2 mx-auto" />

        <p className="text-sm text-gray-600">
          If you don't have an account, please{" "}
          <Link className="text-blue-500 hover:underline" href={clientRoutes.signUp}>
            Sign up
          </Link>
          .
        </p>
      </div>
    </ContentWrapper>
  );
};

export default SignInPage;
