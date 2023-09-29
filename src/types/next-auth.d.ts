import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    userId: string | undefined | null;
  }

  interface Session {
    user: User & {
      userId: string | undefined | null;
    };
  }
}
