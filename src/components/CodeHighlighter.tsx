"use client";

import { Highlight, themes } from "prism-react-renderer";

type CodeHighlighterProps = {
  code: string;
};

const CodeHighlighter = ({ code }: CodeHighlighterProps) => {
  return (
    <Highlight theme={themes.oneLight} code={code} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className="p-4 rounded-lg">
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              <span className="1">{i + 1}</span>
              {line.map((token, index) => (
                <span
                  key={index}
                  {...getTokenProps({ token })}
                  className={index === 0 ? "pl-4" : ""}
                />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeHighlighter;
