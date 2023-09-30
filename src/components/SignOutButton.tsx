"use client";

import { signOut } from "next-auth/react";
import { clientRoutes } from "@/constants/routes";
import { LogOut } from "lucide-react";

const SignOutButton = () => {
  const handleSignOut = () => {
    signOut({ callbackUrl: clientRoutes.root });
  };

  return (
    <button
      className="border-2 border-gray-800 text-1xl py-1.5 px-6 rounded-lg hover:bg-gray-800 hover:text-white transition-colors flex items-center gap-x-2"
      onClick={handleSignOut}
      type="button"
    >
      <LogOut /> <span>Sign out</span>
    </button>
  );
};

export { SignOutButton };
