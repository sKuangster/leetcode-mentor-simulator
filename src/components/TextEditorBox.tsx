"use client";

import { useState, useMemo } from "react";
import Editor from "react-simple-code-editor";

// ✅ import Prism from the main entry, NOT prism-core
import Prism from "prismjs";

// load the languages you need
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";

// pick a theme
import "prismjs/themes/prism.css";

type Lang = "javascript" | "typescript" | "python" | "java" | "c";

export default function TextEditorBox({ language = "javascript" as Lang }) {
    const [code, setCode] = useState("");

  // memo the Prism grammar so re-highlighting is fast when language changes
    const grammar = useMemo(
    () => (Prism.languages[language] ?? Prism.languages.javascript),
    [language]
    );

  return (
    <Editor
      value={code}
      onValueChange={setCode}
      highlight={(text) => Prism.highlight(text, grammar, language)}
      padding={12}
      style={{
        fontFamily: '"Fira Code", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
        fontSize: 14,
        border: "1px solid #ddd",
        borderRadius: 8,
        background: "#fafafa",
        minHeight: 250,
      }}
    />
  );
}
