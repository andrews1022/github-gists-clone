import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { options } from "@/next-auth/options";

const GistsPage = () => {
  return (
    <div>
      <h1>GistsPage</h1>
    </div>
  );
};

export default GistsPage;
