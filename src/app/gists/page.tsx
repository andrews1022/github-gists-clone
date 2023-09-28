import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

import { options } from "@/next-auth/options";
import Link from "next/link";

const GistsPage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/sign-in");
  }

  const { user } = session;

  return (
    <div>
      <div className="flex flex-col items-center gap-y-6">
        {user?.image ? (
          <Image
            className="rounded-full"
            src={user.image}
            alt={`${user.name}'s GitHub avatar`}
            height={175}
            width={175}
          />
        ) : null}

        <h1 className="text-5xl">{user?.name}'s Gists</h1>

        <Link
          className="border-2 border-gray-800 text-2xl py-2 px-12 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
          href="/gists/create"
        >
          Create Gist
        </Link>
      </div>

      <p>GISTS WILL GO HERE</p>
    </div>
  );
};

export default GistsPage;
