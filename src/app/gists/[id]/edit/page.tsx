import { Ban } from "lucide-react";
import Link from "next/link";

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
      <Link
        className="border-2 border-red-600 text-red-600 text-1xl py-1.5 px-6 rounded-lg hover:bg-red-600 hover:text-white transition-colors inline-flex items-center gap-x-2"
        href={clientRoutes.gists}
      >
        <Ban /> Cancel edit
      </Link>

      <h1 className="mt-6 text-center text-4xl">Edit {gist?.fileNameAndExtension}</h1>

      <EditGistForm />
    </div>
  );
};

export default EditIndividualGistPage;
