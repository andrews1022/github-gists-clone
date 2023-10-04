import { ArrowLeftCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CreateGistForm } from "@/components/CreateGistForm";
import { clientRoutes } from "@/constants/routes";

const CreateGistPage = () => {
  return (
    <div>
      <div className="flex items-start">
        <Button bgColor="gray" shade="800" size="small" href={clientRoutes.gists}>
          <ArrowLeftCircle /> Go Back
        </Button>
      </div>

      <h1 className="mt-6 text-center text-4xl">Create a gist</h1>

      <CreateGistForm />
    </div>
  );
};

export default CreateGistPage;
