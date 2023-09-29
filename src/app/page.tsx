import { getServerSession } from "next-auth";
import Link from "next/link";

import { options } from "@/next-auth/options";
import { clientRoutes } from "@/constants/routes";

const HomePage = async () => {
  const session = await getServerSession(options);

  return (
    <div className="flex flex-col items-center gap-y-6">
      <h1 className="text-7xl">Gists Clone</h1>

      <p className="text-xl">A simple site to display, create, and manage your gists.</p>

      <Link
        className="border-2 border-gray-800 text-2xl py-2 px-12 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
        href={session ? clientRoutes.gists : clientRoutes.signIn}
      >
        {session ? "View Gists" : "Sign In"}
      </Link>
    </div>
  );
};

export default HomePage;
