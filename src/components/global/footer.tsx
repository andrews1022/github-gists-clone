import { Heart } from "lucide-react";

import { SemiTransparentLink } from "@/components/ui/semi-transparent-link";
import { clientRoutes } from "@/constants/routes";

const Footer = () => {
  return (
    <footer className="border-t-gray-200 border-t mt-auto p-5 flex flex-col items-center text-sm space-y-2">
      <p>
        Built by{" "}
        <SemiTransparentLink href="https://twitter.com/andrew_devsrc" isExternal>
          andrew_devsrc
        </SemiTransparentLink>{" "}
        . View the source code for this project on{" "}
        <SemiTransparentLink href="https://github.com/andrews1022/github-gists-clone" isExternal>
          GitHub
        </SemiTransparentLink>
        .
      </p>

      <p className="flex items-center gap-x-2 text-sm">
        This is just a side project I built for fun. Please don't get mad at me Microsoft{" "}
        <Heart fill="red" stroke="red" />
      </p>

      <nav>
        <ul className="flex items-center gap-x-2">
          <li>
            <SemiTransparentLink href={clientRoutes.privacyPolicy} isExternal={false}>
              Privacy Policy
            </SemiTransparentLink>
          </li>

          <li>|</li>

          <li>
            <SemiTransparentLink href={clientRoutes.termsOfUse} isExternal={false}>
              Terms of Use
            </SemiTransparentLink>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export { Footer };
