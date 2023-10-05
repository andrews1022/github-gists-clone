import { Ban } from "lucide-react";

import { Button } from "@/components/ui/button";
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
      <div className="flex items-start">
        <Button bgColor="red" shade="light" size="small" href={clientRoutes.gists}>
          <Ban /> Cancel edit
        </Button>
      </div>

      <h1 className="mt-6 text-center text-4xl">Edit {gist?.fileNameAndExtension}</h1>

      <EditGistForm gist={gist} />
    </div>
  );
};

export default EditIndividualGistPage;
