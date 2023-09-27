import Link from "next/link";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b-gray-200 border-b">
      <nav className="container py-3">
        <ul className="flex items-center gap-x-6">
          <li>
            <Link className="flex items-center gap-x-2 text-2xl" href="/">
              <Github /> <span>GitHub Gists Clone</span>
            </Link>
          </li>

          <li className="group opacity-70 hover:opacity-100 transition-opacity translate-y-0.5">
            <Link href="/gists">
              Gists
              <span className="mt-px block max-w-0 group-hover:max-w-full transition-all duration-150 h-px bg-gray-400" />
            </Link>
          </li>

          <li className="group opacity-70 hover:opacity-100 transition-opacity translate-y-0.5 ml-auto">
            <Link href="/sign-in">
              Sign In
              <span className="mt-px block max-w-0 group-hover:max-w-full transition-all duration-150 h-px bg-gray-400" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Navbar };
