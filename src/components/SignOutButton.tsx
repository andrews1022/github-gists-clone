"use client";

import { signOut } from "next-auth/react";
import { clientRoutes } from "@/constants/routes";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

const SignOutButton = () => {
  const handleSignOut = () => {
    signOut({ callbackUrl: clientRoutes.root });
  };

  return (
    <Button bgColor="gray" shade="800" size="small" onClick={handleSignOut}>
      <LogOut /> <span>Sign out</span>
    </Button>
  );
};

export { SignOutButton };
