"use client";

import { Highlight, themes } from "prism-react-renderer";
import type { Token } from "prism-react-renderer";

type CodeHighlighterProps = {
  code: string;
  fileNameAndExtension: string;
};

const MAX_NUMBER_OF_LINES = 10;

// (
//   <div key={index} {...getLineProps({ line })}>
//     <span>{index < 9 ? `0${index + 1}` : index + 1}</span>

//     {/* {JSON.stringify(line, null, 2)} */}
//   </div>
// )

const CodeHighlighter = ({ code, fileNameAndExtension }: CodeHighlighterProps) => {
  return (
    <Highlight theme={themes.oneLight} code={code} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className="p-4 overflow-x-scroll rounded-lg">
          {/* CODE SNIPPET HAS FEWER THAN 10 LINES */}
          {tokens.length < MAX_NUMBER_OF_LINES &&
            tokens.map((line, index) => (
              <div key={index} {...getLineProps({ line })}>
                <span>{index + 1}</span>

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
            Array.from({ length: MAX_NUMBER_OF_LINES - tokens.length }, (_, index) => (
              <div key={index}>
                <span>{tokens.length + index + 1}</span>
              </div>
            ))}

          {/* {Array.from({ length: MAX_NUMBER_OF_LINES - tokens.length }, (_, index) => (
            // <pre>hi</pre>
            <div key={index}>


              <span>{MAX_NUMBER_OF_LINES - index}</span>
            </div>
          ))} */}

          {/* {Array.from({ length: MAX_NUMBER_OF_LINES - tokens.length }).map((_, index) => (
            <div key={index}>
              <span >{index}</span>
            </div>
          ))} */}

          {/* {tokens.length < MAX_NUMBER_OF_LINES &&
            [...tokens, ...Array(MAX_NUMBER_OF_LINES - tokens.length)].map(
              (line: Token[], index) => {
                // Fix the error by calling the `map` method on the `tokens` variable first.
                const lineWithTokens = tokens.map((tk, idx) =>
                  tk.map((t, i) => (
                    <span
                      key={i}
                      {...getTokenProps({ token: t })}
                      className={i === 0 ? "pl-4" : ""}
                    />
                  ))
                );

                return (
                  <div key={index} {...getLineProps({ line })}>
                    <span className="1">{index + 1}</span>

                    {lineWithTokens}
                  </div>
                );
              }
            )} */}

          {/* CODE SNIPPET HAS MORE THAN 10 LINES */}
          {tokens.length > MAX_NUMBER_OF_LINES &&
            tokens.slice(0, MAX_NUMBER_OF_LINES).map((line, index) => (
              <div key={index} {...getLineProps({ line })}>
                {/* <span>{index < 9 ? `0${index + 1}` : index + 1}</span> */}
                <span>{index + 1}</span>

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
                {/* <span>{index < 9 ? `0${index + 1}` : index + 1}</span> */}
                <span>{index + 1}</span>

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

export { CodeHighlighter };

// 1fun printName(name: String) {
// 2    println(name)
// 3}
// 4
// 5// Example usage:
// 6fun main() {
// 7    printName("John") // Output: John
// 8}
// 0
// 1

// 1function printName(name: string): void {
// 2    console.log(name);
// 3}
// 4
// 5// Example usage:
// 6printName("John"); // Output: John
// 0
// 1
// 2
// 3
