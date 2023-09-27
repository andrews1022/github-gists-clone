import GitHubProvider from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "@/drizzle/config";

import type { AuthOptions } from "next-auth";

const options: AuthOptions = {
  adapter: DrizzleAdapter(db),
  pages: {
    signIn: "/sign-in"
  },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_SECRET_ID!
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "database"
  }
};

export { options };
