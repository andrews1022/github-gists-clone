ALTER TABLE "account" DROP COLUMN IF EXISTS "username";--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_username_unique" UNIQUE("username");