import { Ban } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/ui/page-heading";

import { EditGistForm } from "@/components/EditGistForm";

import { clientRoutes } from "@/constants/routes";

import { getGist } from "@/drizzle/utils";

type EditIndividualGistPageProps = {
  params: {
    id: string;
  };
};

const EditIndividualGistPage = async ({ params }: EditIndividualGistPageProps) => {
  const gist = await getGist(params.id);

  return (
    <div>
      <div className="flex flex-col items-start">
        <Button bgColor="red" size="small" href={clientRoutes.gists}>
          <Ban /> Cancel edit
        </Button>
      </div>

      <div className="flex flex-col items-start my-6 sm:items-center">
        <PageHeading>Editing:</PageHeading>

        <br />

        <h2 className="text-xl xs:text-2xl sm:text-3xl">{gist?.fileNameAndExtension}</h2>
      </div>

      <EditGistForm gist={gist} />
    </div>
  );
};

export default EditIndividualGistPage;
