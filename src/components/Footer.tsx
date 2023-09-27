const Footer = () => {
  return (
    <footer className="border-t-gray-200 border-t mt-auto py-5 text-center">
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
    </footer>
  );
};

export { Footer };
