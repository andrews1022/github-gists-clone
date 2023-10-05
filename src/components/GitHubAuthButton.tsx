"use client";

import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { clientRoutes } from "@/constants/routes";

type GitHubAuthButtonProps = {
  text: "in" | "up";
};

const GitHubAuthButton = ({ text }: GitHubAuthButtonProps) => {
  const handleClick = () => {
    signIn("github", { callbackUrl: clientRoutes.gists });
  };

  return (
    <Button bgColor="gray" shade="dark" size="large" onClick={handleClick}>
      <Github className="hidden xs:block" /> <span>Sign {text} with GitHub</span>
    </Button>
  );
};

export { GitHubAuthButton };
