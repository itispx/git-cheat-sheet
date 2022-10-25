import React from "react";
import "./Code.scss";

import { toast } from "react-toastify";

export interface CodeProps {
  inline?: boolean;
  children: React.ReactNode;
}

const Code: React.FC<CodeProps> = ({ inline, children }) => {
  function copyToClipboard(): void {
    const command = children?.toString().replace(/,/g, "");

    navigator.clipboard.writeText(command ?? "");

    toast.success("Copied to Clipboard!");
  }

  return inline ? (
    <code className="code">{children}</code>
  ) : (
    <>
      <br /> <br />
      <div className="code-background" onClick={copyToClipboard}>
        <code className="code">{children}</code>
      </div>
      <br />
      <br />
    </>
  );
};

export default Code;
