import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ title, children }) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  );
};

export default Section;
