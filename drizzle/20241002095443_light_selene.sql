ALTER TABLE "users" ADD COLUMN "firstname" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "lastname" text NOT NULL;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN IF EXISTS "fullname";