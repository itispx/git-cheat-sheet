import React from "react";
import "./Code.scss";

interface Props {
  inline?: boolean;
  children: React.ReactNode;
}

const Code: React.FC<Props> = ({ inline, children }) => {
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
