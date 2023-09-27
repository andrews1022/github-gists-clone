"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const RootErrorPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-y-6">
      <h1 className="text-7xl">Oops!</h1>

      <p className="text-xl">
        Something went wrong there. You can try refreshing the page, or go back home.
      </p>

      <button
        className="bg-teal-600 text-white mr-6 py-2 px-4"
        onClick={() => router.refresh()}
        type="button"
      >
        Refresh
      </button>

      <Link
        className="border-2 border-gray-800 text-2xl py-2 px-12 rounded-lg hover:bg-gray-800 hover:text-white transition-colors flex items-center gap-x-2"
        href="/"
      >
        Go Home
      </Link>
    </div>
  );
};

export default RootErrorPage;
