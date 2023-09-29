"use client";

import { Home } from "lucide-react";
import { signOut } from "next-auth/react";

import { clientRoutes } from "@/constants/routes";

const RootErrorPage = () => {
  const handleGoHome = () => {
    signOut({ callbackUrl: clientRoutes.root });
  };

  return (
    <div className="flex flex-col items-center gap-y-6">
      <h1 className="text-7xl">Oops!</h1>

      <p className="text-xl">Something went wrong there.</p>

      <button
        className="border-2 border-gray-800 text-2xl py-2 w-56 rounded-lg hover:bg-gray-800 hover:text-white transition-colors flex items-center justify-center gap-x-2"
        onClick={handleGoHome}
      >
        <Home /> Go Home
      </button>
    </div>
  );
};

export default RootErrorPage;
