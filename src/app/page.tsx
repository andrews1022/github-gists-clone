import { getServerSession } from "next-auth";
import { options } from "@/next-auth/options";

const HomePage = async () => {
  const session = await getServerSession(options);

  return (
    <div>
      <h1>HomePage</h1>

      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};

export default HomePage;
