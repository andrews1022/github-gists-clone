import { ArrowLeftCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CreateGistForm } from "@/components/CreateGistForm";
import { clientRoutes } from "@/constants/routes";
import { PageHeading } from "@/components/ui/page-heading";

const CreateGistPage = () => {
  return (
    <div>
      <div className="flex items-start">
        <Button bgColor="gray" size="small" href={clientRoutes.gists}>
          <ArrowLeftCircle /> Go Back
        </Button>
      </div>

      <div className="my-6">
        <PageHeading>Create a gist</PageHeading>
      </div>

      <CreateGistForm />
    </div>
  );
};

export default CreateGistPage;
