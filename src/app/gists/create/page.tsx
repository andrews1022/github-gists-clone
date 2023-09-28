import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

import { CreateGistForm } from "@/components/CreateGistForm";

const CreateGistPage = () => {
  return (
    <div>
      <Link
        className="border-2 border-gray-800 text-1xl py-1.5 px-6 rounded-lg hover:bg-gray-800 hover:text-white transition-colors inline-flex items-center gap-x-2"
        href="/gists"
      >
        <ArrowLeftCircle /> Go Back
      </Link>

      <h1 className="mt-6 text-center text-4xl">Create a gist</h1>

      <CreateGistForm />
    </div>
  );
};

export default CreateGistPage;
