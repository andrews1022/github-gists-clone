"use client";

import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

import { clientRoutes } from "@/constants/routes";

type GitHubAuthButtonProps = {
  text: "in" | "up";
};

const GitHubAuthButton = ({ text }: GitHubAuthButtonProps) => {
  const handleClick = () => {
    signIn("github", { callbackUrl: clientRoutes.gists });
  };

  return (
    <button
      className="border-2 border-gray-800 text-2xl py-2 px-12 rounded-lg hover:bg-gray-800 hover:text-white transition-colors items-center flex gap-x-2 mx-auto"
      onClick={handleClick}
      type="button"
    >
      <Github /> <span>Sign {text} with GitHub</span>
    </button>
  );
};

export { GitHubAuthButton };
