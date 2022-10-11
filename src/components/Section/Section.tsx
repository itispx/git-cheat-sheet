import React, { CSSProperties } from "react";
import "./Section.scss";

export interface SectionProps {
  style?: CSSProperties;
  id: number;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ style, id, title, children }) => {
  return (
    <section style={style} className={`Section ${id % 2 === 0 ? "Light" : "Dark"}`}>
      <h1>{title}</h1>
      <br />
      <p>{children}</p>
    </section>
  );
};

export default Section;
