import React from "react";
import "./Code.scss";

export interface CodeProps {
  inline?: boolean;
  children: React.ReactNode;
}

const Code: React.FC<CodeProps> = ({ inline, children }) => {
  return inline ? (
    <code className="code">{children}</code>
  ) : (
    <>
      <br /> <br />
      <code className="code">{children}</code> <br />
      <br />
    </>
  );
};

export default Code;
