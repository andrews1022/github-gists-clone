"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { clientRoutes } from "@/constants/routes";

const SignOutButton = () => {
  const handleSignOut = () => {
    signOut({ callbackUrl: clientRoutes.root });
  };

  return (
    <Button bgColor="gray" shade="dark" size="small" onClick={handleSignOut}>
      <LogOut /> <span className="hidden sm:block">Sign out</span>
    </Button>
  );
};

export { SignOutButton };
