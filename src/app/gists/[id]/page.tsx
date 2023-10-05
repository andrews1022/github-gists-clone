import { ArrowLeftCircle, FileEdit } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/ui/page-heading";
import { Paragraph } from "@/components/ui/paragraph";

import { CodeHighlighterFull } from "@/components/CodeHighlighterFull";
import { DeleteGistButton } from "@/components/DeleteGistButton";

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
    <div className="flex flex-col items-start gap-y-6">
      <Button bgColor="gray" size="small" href={clientRoutes.gists}>
        <ArrowLeftCircle /> Go Back
      </Button>

      {gist ? (
        <>
          <div className="self-start sm:self-center">
            <PageHeading>{gist.fileNameAndExtension}</PageHeading>
          </div>

          <Paragraph>{gist.description}</Paragraph>

          <CodeHighlighterFull code={gist.code} />
        </>
      ) : null}

      <div className="flex flex-col gap-y-6 items-center justify-center mx-auto w-3/4 sm:gap-x-6 sm:flex-row">
        <Button bgColor="sky" size="small" href={`/gists/${params.id}/edit`}>
          <FileEdit /> Edit this gist
        </Button>

        <DeleteGistButton />
      </div>
    </div>
  );
};

export default IndividualGistPage;
