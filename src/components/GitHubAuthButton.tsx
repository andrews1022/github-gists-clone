"use client";

import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";

type GitHubAuthButtonProps = {
  text: "in" | "up";
};

const GitHubAuthButton = ({ text }: GitHubAuthButtonProps) => {
  const handleClick = () => {
    signIn("github", { callbackUrl: "/gists" });
  };

  return (
    <Button onClick={handleClick} className="flex gap-x-2 mx-auto w-3/4">
      <Github /> <span>Sign {text} with GitHub</span>
    </Button>
  );
};

export { GitHubAuthButton };
