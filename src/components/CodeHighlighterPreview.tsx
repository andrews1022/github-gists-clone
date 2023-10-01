"use client";

import { Highlight, themes } from "prism-react-renderer";

type CodeHighlighterPreviewProps = {
  code: string;
};

const MAX_NUMBER_OF_LINES = 10;

const CodeHighlighterPreview = ({ code }: CodeHighlighterPreviewProps) => {
  return (
    <Highlight theme={themes.oneLight} code={code} language="tsx">
      {({ getLineProps, getTokenProps, style, tokens }) => (
        <pre style={style} className="p-4 overflow-x-scroll rounded-lg">
          {/* CODE SNIPPET HAS FEWER THAN 10 LINES */}
          {tokens.length < MAX_NUMBER_OF_LINES &&
            tokens.map((line, index) => (
              <div key={index} {...getLineProps({ line })}>
                <span className={index < 9 ? "pl-2.5" : ""}>{index + 1}</span>

                {line.map((token, idx) => (
                  <span
                    key={idx}
                    {...getTokenProps({ token })}
                    className={idx === 0 ? "pl-4" : ""}
                  />
                ))}
              </div>
            ))}

          {/*
            create x number of divs, where x is equal to the result of MAX_NUMBER_OF_LINES - tokens.length
            then map over that array and create a div for each item
            display the index of the item inside a span tag inside the div
            the values display in the span tags should pick up where the line numbers left off
            for example, if the code snippet had 8 lines, the last 2 divs should display 9 and 10
          */}
          {tokens.length < MAX_NUMBER_OF_LINES &&
            Array.from({ length: MAX_NUMBER_OF_LINES - tokens.length }, (_, index) => {
              const adjustedLineNumber = tokens.length + index + 1;

              return (
                <div key={index}>
                  <span className={adjustedLineNumber !== MAX_NUMBER_OF_LINES ? "pl-2.5" : ""}>
                    {adjustedLineNumber}
                  </span>
                </div>
              );
            })}

          {/* CODE SNIPPET HAS MORE THAN 10 LINES */}
          {tokens.length > MAX_NUMBER_OF_LINES &&
            tokens.slice(0, MAX_NUMBER_OF_LINES).map((line, index) => (
              <div key={index} {...getLineProps({ line })}>
                <span className={index < 9 ? "pl-2.5" : ""}>{index + 1}</span>

                {line.map((token, idx) => (
                  <span
                    key={idx}
                    {...getTokenProps({ token })}
                    className={idx === 0 ? "pl-4" : ""}
                  />
                ))}
              </div>
            ))}

          {/* CODE SNIPPET HAS EXACTLY 10 LINES */}
          {tokens.length === MAX_NUMBER_OF_LINES &&
            tokens.map((line, index) => (
              <div key={index} {...getLineProps({ line })}>
                <span className={index < 9 ? "pl-2.5" : ""}>{index + 1}</span>

                {line.map((token, idx) => (
                  <span
                    key={idx}
                    {...getTokenProps({ token })}
                    className={idx === 0 ? "pl-4" : ""}
                  />
                ))}
              </div>
            ))}
        </pre>
      )}
    </Highlight>
  );
};

export { CodeHighlighterPreview };
