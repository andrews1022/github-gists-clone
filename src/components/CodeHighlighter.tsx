"use client";

import { Highlight, themes } from "prism-react-renderer";
import type { Token } from "prism-react-renderer";

type CodeHighlighterProps = {
  code: string;
  fileNameAndExtension: string;
};

const MAX_NUMBER_OF_LINES = 10;

const CodeHighlighter = ({ code, fileNameAndExtension }: CodeHighlighterProps) => {
  return (
    <Highlight theme={themes.oneLight} code={code} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre style={style} className="p-4 overflow-x-scroll rounded-lg">
          {tokens.length < MAX_NUMBER_OF_LINES && <p>Add extra lines to get up to 10</p>}

          {tokens.length > MAX_NUMBER_OF_LINES && (
            <p>Remove {tokens.length - MAX_NUMBER_OF_LINES} lines</p>
          )}

          {tokens.length === MAX_NUMBER_OF_LINES && <p>Perfect!</p>}

          {/* {tokens.slice(0, MAX_NUMBER_OF_LINES).map((line, i) => (
            <div key={i} {...getLineProps({ line })} className="hi">
              <span className="1">{i + 1}</span>
              {line.map((token, index) => (
                <span
                  key={index}
                  {...getTokenProps({ token })}
                  className={index === 0 ? "pl-4" : ""}
                />
              ))}
            </div>
          ))} */}

          {/* {tokens.length < MAX_NUMBER_OF_LINES ? (
            <>
              {Array.from({ length: MAX_NUMBER_OF_LINES - tokens.length }).map((_, index) => (
                <div key={index} className="hi">
                  <span className="1">{index}</span>
                </div>
              ))}
            </>
          ) : null} */}

          {/* {tokens.length < MAX_NUMBER_OF_LINES ? (
            <div>
              <p>Insert {MAX_NUMBER_OF_LINES - tokens.length} lines</p>
            </div>
          ) : null} */}
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
