import { drizzle } from "drizzle-orm/postgres-js";
import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

import { clientRoutes } from "@/constants/routes";
import { client } from "@/drizzle/config";
import * as schema from "@/drizzle/schema";
import { CodeHighlighterFull } from "@/components/CodeHighlighterFull";

const db = drizzle(client, { schema });

const getGist = async (gistId: string) => {
  const result = await db.query.gists.findFirst({
    where: (gists, { eq }) => eq(gists.gistId, gistId)
  });

  return result;
};

type IndividualGistPageProps = {
  params: {
    id: string;
  };
};

const IndividualGistPage = async ({ params }: IndividualGistPageProps) => {
  const gist = await getGist(params.id);

  return (
    <div>
      <Link
        className="border-2 border-gray-800 text-1xl py-1.5 px-6 rounded-lg hover:bg-gray-800 hover:text-white transition-colors inline-flex items-center gap-x-2"
        href={clientRoutes.gists}
      >
        <ArrowLeftCircle /> Go Back
      </Link>

      <div className="flex flex-col items-center gap-y-6 mt-6">
        {gist ? (
          <>
            <h1 className="text-5xl">{gist.fileNameAndExtension}</h1>

            <p className="text-xl">{gist.description}</p>

            <CodeHighlighterFull code={gist.code} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default IndividualGistPage;
