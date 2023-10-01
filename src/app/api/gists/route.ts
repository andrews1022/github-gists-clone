import { eq } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { clientRoutes } from "@/constants/routes";

import { db } from "@/drizzle/config";
import { gists } from "@/drizzle/schema";

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

export const revalidate = 0;

// add data to supabase postgres database
export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    // pull the fields out of the request body
    const { fileNameAndExtension, description, code } = gistSchema.parse(body);

    const session = await getServerSession(options);

    if (session?.user) {
      // check if a gist with the same file name and extension already exists in the database
      const existingGist = await db.query.gists.findFirst({
        where: (gists, { eq }) => eq(gists.fileNameAndExtension, fileNameAndExtension)
      });

      if (existingGist) {
        return NextResponse.json(
          {
            message:
              "A gist with that file name and extension already exists. Please enter a different one."
          },
          {
            status: 409
          }
        );
      }

      // insert the new gist into the database
      const newGist = await db.insert(gists).values({
        userId: session.user.userId!,
        fileNameAndExtension,
        description,
        code
      });

      // revalidate the cache for the gists page
      revalidatePath(clientRoutes.gists);

      return NextResponse.json(
        {
          newGist,
          message: "User created successfully!",
          revalidated: true,
          now: Date.now()
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

export const DELETE = async (request: NextRequest) => {
  try {
    const { gistId } = await request.json();

    const existingGist = await db.query.gists.findFirst({
      where: (gists, { eq }) => eq(gists.gistId, gistId)
    });

    if (!existingGist) {
      return NextResponse.json(
        {
          message: "Gist not found. Nothing has been deleted."
        },
        {
          status: 404
        }
      );
    }

    // delete the gist
    const deleted = await db.delete(gists).where(eq(gists.gistId, gistId));

    // if the delete query fails, return a 500 error
    if (!deleted) {
      return NextResponse.json(
        {
          message: "Something went wrong!"
        },
        {
          status: 500
        }
      );
    }

    // if the delete query succeeds, revalidate the gists path and return a 204 response
    revalidatePath(clientRoutes.gists);

    return NextResponse.json({ status: 204 });
  } catch (error) {
    // log the error
    console.error(error);

    // return a 500 error
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
