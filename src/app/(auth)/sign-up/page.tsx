import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

import { GitHubAuthButton } from "@/components/GitHubAuthButton";
import { ContentWrapper } from "@/components/ui/content-wrapper";
import { PageHeading } from "@/components/ui/page-heading";
import { clientRoutes } from "@/constants/routes";
import { options } from "@/next-auth/options";

const SignUpPage = async () => {
  const session = await getServerSession(options);

  if (session) {
    redirect(clientRoutes.root);
  }

  return (
    <ContentWrapper>
      <PageHeading>Sign Up</PageHeading>

      <div className="bg-gray-100 rounded-lg p-7 flex flex-col items-center gap-y-4 w-full text-center sm:w-9/12 lg:w-2/4">
        <GitHubAuthButton text="up" />

        <div className="bg-gray-400 h-px w-1/2 mx-auto" />

        <p className="text-sm text-gray-600">
          If you do have an account, please{" "}
          <Link className="text-blue-500 hover:underline" href={clientRoutes.signIn}>
            Sign in
          </Link>
          .
        </p>
      </div>
    </ContentWrapper>
  );
};

export default SignUpPage;
