import { Code, PlusCircle } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { clientRoutes } from "@/constants/routes";
import { options } from "@/next-auth/options";

import { desc, eq } from "drizzle-orm";
import { db } from "@/drizzle/config";
import { gists } from "@/drizzle/schema";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { CodeHighlighterPreview } from "@/components/CodeHighlighterPreview";

const MAXIMUM_NUMBER_OF_CHARACTERS = 80;

const session = await getServerSession(options);

const getGists = async () => {
  if (!session) {
    redirect(clientRoutes.signIn);
  }

  const { user } = session;
  const { userId } = user;

  const jists = await db
    .select()
    .from(gists)
    .where(eq(gists.userId, userId!))
    .orderBy(desc(gists.createdAt));

  return jists;
};

const GistsPage = async () => {
  if (!session) {
    redirect(clientRoutes.signIn);
  }

  const gists = await getGists();
  // console.log("jists: ", jists);

  return (
    <div>
      <div className="flex flex-col items-center gap-y-6">
        {session?.user?.image ? (
          <Image
            className="rounded-full"
            src={session.user.image}
            alt={`${session.user.name}'s GitHub avatar`}
            height={175}
            width={175}
          />
        ) : null}

        <h1 className="text-5xl">{session?.user?.name}'s Gists</h1>

        <Link
          className="border-2 border-emerald-600 text-emerald-600 text-2xl py-2 px-12 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors flex items-center gap-x-2"
          href={clientRoutes.createGist}
        >
          <PlusCircle /> Create Gist
        </Link>
      </div>

      <div className="grid gap-6 grid-cols-4 mt-8">
        {gists.length
          ? gists.map((gist) => (
              <Card key={gist.gistId} className="col-span-full lg:col-span-2">
                <CardHeader>
                  <CardTitle>{gist.fileNameAndExtension}</CardTitle>

                  {gist.description ? (
                    <CardDescription>
                      {gist.description.length > MAXIMUM_NUMBER_OF_CHARACTERS
                        ? `${gist.description.substring(0, MAXIMUM_NUMBER_OF_CHARACTERS)}...`
                        : gist.description}
                    </CardDescription>
                  ) : null}
                </CardHeader>

                <CardContent>
                  <CodeHighlighterPreview code={gist.code} />
                </CardContent>

                <CardFooter>
                  <Link
                    className="border-2 border-gray-800 text-1xl py-1.5 px-6 rounded-lg hover:bg-gray-800 hover:text-white transition-colors flex items-center gap-x-2"
                    href={`/gists/${gist.gistId}`}
                  >
                    <Code /> View Gist
                  </Link>
                </CardFooter>
              </Card>
            ))
          : null}
      </div>
    </div>
  );
};

export default GistsPage;
