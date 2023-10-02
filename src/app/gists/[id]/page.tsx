import { ArrowLeftCircle, FileEdit } from "lucide-react";
import Link from "next/link";

import { CodeHighlighterFull } from "@/components/CodeHighlighterFull";
import { DeleteGistButton } from "@/components/DeleteGistButton";
import { ContentWrapper } from "@/components/ui/content-wrapper";
import { clientRoutes } from "@/constants/routes";
import { getGist } from "@/drizzle/utils";

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
        className="border-2 border-gray-800 text-gray-800 text-1xl py-1.5 px-6 rounded-lg hover:bg-gray-800 hover:text-white transition-colors inline-flex items-center gap-x-2 mb-10"
        href={clientRoutes.gists}
      >
        <ArrowLeftCircle /> Go Back
      </Link>

      <ContentWrapper>
        {gist ? (
          <>
            <h1 className="text-5xl">{gist.fileNameAndExtension}</h1>

            <p className="text-xl">{gist.description}</p>

            <CodeHighlighterFull code={gist.code} />
          </>
        ) : null}
      </ContentWrapper>

      <div className="flex items-center justify-center gap-x-10 mx-auto w-3/4 mt-10">
        <Link
          className="border-2 border-sky-600 text-sky-600 text-1xl py-1.5 px-6 rounded-lg hover:bg-sky-600 hover:text-white transition-colors flex items-center gap-x-2"
          href={`/gists/${params.id}/edit`}
        >
          <FileEdit /> Edit this gist
        </Link>

        <DeleteGistButton />
      </div>
    </div>
  );
};

export default IndividualGistPage;
