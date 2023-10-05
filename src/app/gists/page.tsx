import { desc, eq } from "drizzle-orm";
import { Code, PlusCircle } from "lucide-react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";

import { CodeHighlighterPreview } from "@/components/CodeHighlighterPreview";
import { Button } from "@/components/ui/button";
import { PageHeading } from "@/components/ui/page-heading";
import { ContentWrapper } from "@/components/ui/content-wrapper";
import { clientRoutes } from "@/constants/routes";
import { db } from "@/drizzle/config";
import { gists } from "@/drizzle/schema";
import { getRelativeTime } from "@/lib/utils";
import { options } from "@/next-auth/options";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/shadcn/ui/card";

const MAXIMUM_NUMBER_OF_CHARACTERS = 80;

const getGists = async () => {
  try {
    const session = await getServerSession(options);

    if (!session) {
      redirect(clientRoutes.signIn);
    }

    const { user } = session;
    const { userId } = user;

    const jists = await db
      .select()
      .from(gists)
      .where(eq(gists.userId, userId!))
      .orderBy(desc(gists.createdAt));

    return jists;
  } catch (error) {
    console.log(`An error occurred when trying to get gists: ${error}`);
  }
};

const GistsPage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect(clientRoutes.signIn);
  }

  const gists = await getGists();

  return (
    <div>
      <ContentWrapper>
        {session?.user?.image ? (
          <Image
            className="rounded-full"
            src={session.user.image}
            alt={`${session.user.name}'s GitHub avatar`}
            height={150}
            width={150}
            priority
          />
        ) : null}

        <PageHeading>{session?.user?.name}'s Gists</PageHeading>

        <Button bgColor="emerald" size="large" href={clientRoutes.createGist}>
          <PlusCircle /> Create Gist
        </Button>
      </ContentWrapper>

      {gists ? (
        <div className="grid gap-6 grid-cols-4 mt-8">
          {gists.map((gist) => (
            <Card key={gist.gistId} className="col-span-full lg:col-span-2">
              <CardHeader>
                <CardTitle>{gist.fileNameAndExtension}</CardTitle>

                {gist.description ? (
                  <CardDescription>
                    {gist.description.length > MAXIMUM_NUMBER_OF_CHARACTERS
                      ? `${gist.description.substring(0, MAXIMUM_NUMBER_OF_CHARACTERS)}...`
                      : gist.description}
                  </CardDescription>
                ) : null}
              </CardHeader>

              <CardContent>
                <CodeHighlighterPreview code={gist.code} />

                {gist.createdAt && gist.updatedAt ? (
                  <CardDescription className="mt-2">
                    Created: {getRelativeTime(gist.createdAt)} | Last updated:{" "}
                    {getRelativeTime(gist.updatedAt)}
                  </CardDescription>
                ) : null}
              </CardContent>

              <CardFooter>
                <Button bgColor="gray" size="small" href={`/gists/${gist.gistId}`}>
                  <Code /> View Gist
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default GistsPage;
