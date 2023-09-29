import { PlusCircle } from "lucide-react";
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
import { CodeHighlighter } from "@/components/CodeHighlighter";

// const supportedLanguages = [
//   "javascript",
//   "typescript",
//   "jsx",
//   "tsx",
//   "swift",
//   "kotlin",
//   "objectivec",
//   "js-extras",
//   "reason",
//   "rust",
//   "graphql",
//   "yaml",
//   "go",
//   "cpp",
//   "markdown"
// ];

// const languageObjects = supportedLanguages.map((language) => {
//   let fileExtension = "";
//   // Determine file extension based on language
//   switch (language) {
//     case "javascript":
//     case "jsx":
//     case "js-extras":
//       fileExtension = "js";
//       break;
//     case "typescript":
//     case "tsx":
//       fileExtension = "ts";
//       break;
//     case "swift":
//       fileExtension = "swift";
//       break;
//     case "kotlin":
//       fileExtension = "kt";
//       break;
//     case "objectivec":
//       fileExtension = "m";
//       break;
//     case "reason":
//       fileExtension = "re";
//       break;
//     case "rust":
//       fileExtension = "rs";
//       break;
//     case "graphql":
//       fileExtension = "graphql";
//       break;
//     case "yaml":
//       fileExtension = "yaml";
//       break;
//     case "go":
//       fileExtension = "go";
//       break;
//     case "cpp":
//       fileExtension = "cpp";
//       break;
//     case "markdown":
//       fileExtension = "md";
//       break;
//     default:
//       fileExtension = "";
//   }

//   return { language, fileExtension };
// });

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
                  <CardDescription>{gist.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <CodeHighlighter
                    code={gist.code}
                    fileNameAndExtension={gist.fileNameAndExtension}
                  />
                </CardContent>

                <CardFooter>
                  <Link href={`/gists/${gist.gistId}`}>View Gist</Link>
                </CardFooter>
              </Card>
            ))
          : null}
      </div>
    </div>
  );
};

export default GistsPage;
