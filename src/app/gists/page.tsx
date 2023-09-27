import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { options } from "@/next-auth/options";

const GistsPage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/sign-in");
  } else {
    return (
      <div>
        <h1>GistsPage</h1>
      </div>
    );
  }
};

export default GistsPage;
