"use client";

import { Highlight, themes } from "prism-react-renderer";

type CodeHighlighterFullProps = {
  code: string;
};

const CodeHighlighterFull = ({ code }: CodeHighlighterFullProps) => {
  return (
    <Highlight theme={themes.oneLight} code={code} language="tsx">
      {({ getLineProps, getTokenProps, style, tokens }) => (
        <pre style={style} className="p-4 overflow-x-scroll rounded-lg w-full">
          {tokens.map((line, index) => (
            <div key={index} {...getLineProps({ line })}>
              <span className={index < 9 ? "pl-2.5" : ""}>{index + 1}</span>

              {line.map((token, idx) => (
                <span key={idx} {...getTokenProps({ token })} className={idx === 0 ? "pl-4" : ""} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export { CodeHighlighterFull };
