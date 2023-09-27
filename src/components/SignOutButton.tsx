"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

const SignOutButton = () => {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return <Button onClick={handleSignOut}>Sign out</Button>;
};

export { SignOutButton };
