import { clientRoutes } from "@/constants/routes";
import { Home } from "lucide-react";
import Link from "next/link";

const RootNotFound = () => {
  return (
    <div className="flex flex-col items-center gap-y-6">
      <h1 className="text-7xl">Oops!</h1>

      <p className="text-xl">Looks like you tried accessing a page that doesn't exist.</p>

      <Link
        className="border-2 border-gray-800 text-2xl py-2 px-12 rounded-lg hover:bg-gray-800 hover:text-white transition-colors flex items-center gap-x-2"
        href={clientRoutes.root}
      >
        <Home /> Go Home
      </Link>
    </div>
  );
};

export default RootNotFound;
