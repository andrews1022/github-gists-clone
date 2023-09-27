ALTER TABLE "user" DROP CONSTRAINT "user_username_unique";--> statement-breakpoint
ALTER TABLE "user" DROP CONSTRAINT "user_login_unique";--> statement-breakpoint
ALTER TABLE "account" DROP COLUMN IF EXISTS "providerLogin";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "username";--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "login";