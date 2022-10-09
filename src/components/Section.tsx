import React from "react";
import "./Section.scss";

interface Props {
  id: number;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ id, title, children }) => {
  return (
    <section className={`section ${id % 2 === 0 ? ".white" : ".black"}`}>
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  );
};

export default Section;
