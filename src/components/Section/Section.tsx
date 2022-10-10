import React from "react";
import "./Section.scss";

interface Props {
  id: number;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ id, title, children }) => {
  return (
    <section className={`Section ${id % 2 === 0 ? "White" : "Black"}`}>
      <h1>{title}</h1>
      <br />
      <p>{children}</p>
    </section>
  );
};

export default Section;
