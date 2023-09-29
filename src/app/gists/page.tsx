import { PlusCircle } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import { clientRoutes } from "@/constants/routes";
import { options } from "@/next-auth/options";

import { eq, lt, gte, ne, and, asc, desc } from "drizzle-orm";
import { db } from "@/drizzle/config";
import { gists, users } from "@/drizzle/schema";

import * as schema from "@/drizzle/schema";
import { drizzle } from "drizzle-orm/postgres-js";
// import {gists } from "@/drizzle/schema";

// import CodeHighlighter from "@/components/CodeHighlighter";

// {
//   "fileName": "useDebounce.ts",
//   "description": "Reusable debounce hook",
//   "code": "import { useEffect, useState } from 'react';\n\nexport const useDebounce = <T>(value: T, delay = 500) => {\n  const [debouncedValue, setDebouncedValue] = useState<T>(value);\n\n  useEffect(() => {\n    const timeout = setTimeout(() => {\n      setDebouncedValue(value);\n    }, delay);\n\n    return () => clearTimeout(timeout);\n  }, [value, delay]);\n\n  return debouncedValue;\n};"
// }

// const codeString = "(num) => num + 1";

// const codeBlockTsx =
//   "import { useEffect, useState } from 'react';\n\nexport const useDebounce = <T>(value: T, delay = 500) => {\n  const [debouncedValue, setDebouncedValue] = useState<T>(value);\n\n  useEffect(() => {\n    const timeout = setTimeout(() => {\n      setDebouncedValue(value);\n    }, delay);\n\n    return () => clearTimeout(timeout);\n  }, [value, delay]);\n\n  return debouncedValue;\n};";

// const codeBlockCpp = "def hi(name): print('Hi ' + name + '!') return";

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

  // const jists = await db.select().from(gists).leftJoin(users, eq(users.id, userId!));
  // const jists = await db.select().from(gists).where(eq(users.id, userId!));
  // const jists = await db.select().from(gists).where(gists.userId.eq(userId))
  // const jists = await db
  //   .select()
  //   .from(gists)
  //   .where(eq(users.id, "72a403c0-b153-473f-bf20-ac6a12c82855"));

  // const jists = await db.select().from([gists, users]).where(eq(users.id, "MY_USER_ID")).and(gists.userId.eq(users.id));

  // const jists = await db
  // .select()
  // .from(gists)
  // .where(gists.userId.in(
  //   db.subquery()
  //     .select(users.id)
  //     .from(users)
  //     .where(eq(users.id, "MY_USER_ID"))
  // ));

  // select all gists where the user id is equal to the user id of the current session
  // const jists = await db.select().from(gists).where(gists.userId.eq(userId));
  const jists = await db
    .select()
    .from(gists)
    .where(eq(gists.userId, userId!))
    .orderBy(desc(gists.createdAt));

  // const jists = await db

  // const client = db
  // const drzDb = drizzle(client, { schema });

  return jists;
};

const GistsPage = async () => {
  if (!session) {
    redirect(clientRoutes.signIn);
  }

  const jists = await getGists();
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

      {jists.length
        ? jists.map((jist) => (
            <div key={jist.gistId} id={jist.gistId}>
              <h2>{jist.fileNameAndExtension}</h2>
            </div>
          ))
        : null}

      {/* <CodeHighlighter code={codeBlockCpp} /> */}
    </div>
  );
};

export default GistsPage;
