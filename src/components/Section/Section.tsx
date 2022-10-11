import React from "react";
import "./Section.scss";

export interface SectionProps {
  id: number;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section className={`Section ${id % 2 === 0 ? "Light" : "Dark"}`}>
      <h1>{title}</h1>
      <br />
      <p>{children}</p>
    </section>
  );
};

export default Section;
