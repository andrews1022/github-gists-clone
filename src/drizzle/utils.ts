import { db } from "@/drizzle/config";

const getGist = async (gistId: string) => {
  const result = await db.query.gists.findFirst({
    where: (gists, { eq }) => eq(gists.gistId, gistId)
  });

  return result;
};

export { getGist };
