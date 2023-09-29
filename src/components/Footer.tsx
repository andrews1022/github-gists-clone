import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t-gray-200 border-t mt-auto p-5 flex flex-col items-center">
      <p className="text-sm">
        Built by{" "}
        <a
          href="https://twitter.com/andrew_devsrc"
          target="_blank"
          rel="noreferrer"
          className="inline-block group opacity-70 hover:opacity-100 transition-opacity"
        >
          andrew_devsrc
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-150 h-px bg-gray-400" />
        </a>
        . View the source code for this project on{" "}
        <a
          href="https://github.com/andrews1022/github-gists-clone"
          target="_blank"
          rel="noreferrer"
          className="inline-block group opacity-70 hover:opacity-100 transition-opacity"
        >
          GitHub
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-150 h-px bg-gray-400" />
        </a>
        .
      </p>

      <p className="flex items-center gap-x-2 mt-1 text-sm">
        This is just a side project I built for fun. Please don't get mad at me Microsoft{" "}
        <Heart fill="red" stroke="red" />
      </p>
    </footer>
  );
};

export { Footer };
