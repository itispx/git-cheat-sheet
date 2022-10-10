import React from "react";
import "./Code.scss";

export interface CodeProps {
  inline?: boolean;
  children: React.ReactNode;
}

const Code: React.FC<CodeProps> = ({ inline, children }) => {
  return inline ? (
    <code className="Code">{children}</code>
  ) : (
    <>
      <br />
      <code className="Code">{children}</code> <br />
      <br />
    </>
  );
};

export default Code;
