import React from "react";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import docco from "react-syntax-highlighter/dist/esm/styles/hljs/docco";
import "./CodeBlock.css";

SyntaxHighlighter.registerLanguage("javascript", js);

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <div className="custom-code-block-container">
      <SyntaxHighlighter
        language={language}
        style={docco}
        className="custom-code-block"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
