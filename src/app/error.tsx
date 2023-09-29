"use client";

import { clientRoutes } from "@/constants/routes";
import { Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RootErrorPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-y-6">
      <h1 className="text-7xl">Oops!</h1>

      <p className="text-xl">
        Something went wrong there. You can try refreshing the page, or go back home.
      </p>

      <button
        className="bg-gray-800 text-white text-2xl py-2 w-56 rounded-lg flex items-center justify-center gap-x-2 hover:bg-gray-600 transition-colors"
        onClick={() => router.refresh()}
        type="button"
      >
        <RefreshCw /> Refresh
      </button>

      <Link
        className="border-2 border-gray-800 text-2xl py-2 w-56 rounded-lg hover:bg-gray-800 hover:text-white transition-colors flex items-center justify-center gap-x-2"
        href={clientRoutes.root}
      >
        <Home /> Go Home
      </Link>
    </div>
  );
};

export default RootErrorPage;
