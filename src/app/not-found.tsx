import { Home } from "lucide-react";
import Link from "next/link";

import { ContentWrapper } from "@/components/ui/content-wrapper";
import { PageHeading } from "@/components/ui/page-heading";
import { clientRoutes } from "@/constants/routes";

const RootNotFound = () => {
  return (
    <ContentWrapper>
      <PageHeading>Oops!</PageHeading>

      <p className="text-xl">Looks like you tried accessing a page that doesn't exist.</p>

      <Link
        className="border-2 border-gray-800 text-2xl py-2 px-12 rounded-lg hover:bg-gray-800 hover:text-white transition-colors flex items-center gap-x-2"
        href={clientRoutes.root}
      >
        <Home /> Go Home
      </Link>
    </ContentWrapper>
  );
};

export default RootNotFound;
