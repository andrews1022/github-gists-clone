import { ArrowLeftCircle, FileEdit } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
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
      <div className="flex items-start">
        <Button bgColor="gray" shade="800" size="small" href={clientRoutes.gists}>
          <ArrowLeftCircle /> Go Back
        </Button>
      </div>

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
        <Button bgColor="sky" shade="600" size="small" href={`/gists/${params.id}/edit`}>
          <FileEdit /> Edit this gist
        </Button>

        <DeleteGistButton />
      </div>
    </div>
  );
};

export default IndividualGistPage;
