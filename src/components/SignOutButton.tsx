"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { clientRoutes } from "@/constants/routes";

const SignOutButton = () => {
  const handleSignOut = () => {
    signOut({ callbackUrl: clientRoutes.root });
  };

  return <Button onClick={handleSignOut}>Sign out</Button>;
};

export { SignOutButton };
