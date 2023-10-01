import { XCircle } from "lucide-react";

const DeleteGistButton = () => {
  return (
    <button
      className="border-2 border-red-600 text-red-600 text-1xl py-1.5 px-6 rounded-lg hover:bg-red-600 hover:text-white transition-colors flex items-center gap-x-2"
      type="button"
    >
      <XCircle /> Delete this gist
    </button>
  );
};

export { DeleteGistButton };
