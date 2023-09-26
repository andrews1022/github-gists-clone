import type { Config } from "drizzle-kit";

const config: Config = {
  schema: "./src/drizzle/schema.ts",
  out: "./src/drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!
  }
};

export default config;
