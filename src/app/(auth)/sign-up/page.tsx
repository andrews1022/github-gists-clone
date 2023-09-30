import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";

import { GitHubAuthButton } from "@/components/GitHubAuthButton";
import { options } from "@/next-auth/options";
import { clientRoutes } from "@/constants/routes";

const SignUpPage = async () => {
  const session = await getServerSession(options);

  if (session) {
    redirect(clientRoutes.root);
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-7xl">Sign Up</h1>

      <div className="bg-gray-100 rounded-lg mt-5 p-7 w-2/4 flex flex-col gap-y-4">
        <GitHubAuthButton text="up" />

        <div className="bg-gray-400 h-px w-1/2 mx-auto" />

        <p className="text-center text-sm text-gray-600">
          If you do have an account, please{" "}
          <Link className="text-blue-500 hover:underline" href={clientRoutes.signIn}>
            Sign in
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
