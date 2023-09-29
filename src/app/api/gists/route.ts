import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

import { db } from "@/drizzle/config";
import { gists, users } from "@/drizzle/schema";
import { getServerSession } from "next-auth";
import { options } from "@/next-auth/options";

// export const GET = (request: Request) => {
//   console.log("get request: ", request);
//   return NextResponse.json({ message: "Hello!", success: true });
// };

// const fileNameAndExtensionRegex = /^[\w-]+\.[\w-]+$/;

// const gistSchema = z.object({
//   fileName: z
//     .string()
//     .min(1, "Name must be at least 1 character")
//     .max(100, "Name cannot be more than 100 characters")
//     .regex(
//       new RegExp(fileNameAndExtensionRegex),
//       "Name must be a valid file name with extension, eg: useMyCustomHook.ts"
//     ),
//   description: z
//     .string()
//     .min(1, "Description must be at least 1 character")
//     .max(1000, "Description cannot be more than 1000 characters"),
//   code: z.string().min(1, "Description must be at least 1 character"),
//   createdAt: z.string().min(1, "Date must be at least 1 character")
// });

export const POST = async (request: NextRequest) => {
  // console.log("post request: ", request);

  // return NextResponse.json({ message: "Hello!", success: true });

  try {
    const body = await request.json();
    // const { fileName, description, code, createdAt } = gistSchema.parse(body);
    // console.log("body: ", body);

    // const currentUser = await db.select({}).from(users)

    // const session = await getServerSession(options);

    // console.log("user: ", session?.user);

    // const newGist = await db.insert(gists).values({
    //   name: "name goes here",
    //   description: "description goes here",
    //   code: "code goes here",
    //   createdAt: "createdAt goes here",
    //   userId: "userId goes here"
    // });

    return NextResponse.json(
      {
        message: "User created successfully!"
      },
      {
        status: 201
      }
    );
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
