import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { db } from "@/drizzle/config";
import { gists } from "@/drizzle/schema";
import { getServerSession } from "next-auth";
import { options } from "@/next-auth/options";

const fileNameAndExtensionRegex = /^[\w-]+\.[\w-]+$/;

const gistSchema = z.object({
  fileNameAndExtension: z
    .string()
    .min(1, "Name must be at least 1 character")
    .max(100, "Name cannot be more than 100 characters")
    .regex(
      new RegExp(fileNameAndExtensionRegex),
      "Name must be a valid file name with extension, eg: useMyCustomHook.ts"
    ),
  description: z
    .string()
    .min(1, "Description must be at least 1 character")
    .max(1000, "Description cannot be more than 1000 characters"),
  code: z.string().min(1, "Description must be at least 1 character")
});

// add data to supabase postgres database
export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    // pull the fields out of the request body
    const { fileNameAndExtension, description, code } = gistSchema.parse(body);

    const session = await getServerSession(options);

    if (session?.user) {
      const newGist = await db.insert(gists).values({
        userId: session.user.userId!,
        fileNameAndExtension,
        description,
        code
      });

      return NextResponse.json(
        {
          newGist,
          message: "User created successfully!"
        },
        {
          status: 201
        }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong!"
      },
      {
        status: 500
      }
    );
  }
};
