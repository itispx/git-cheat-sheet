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
    <section style={style} className={`section ${id % 2 === 0 ? "light" : "dark"}`}>
      <h1 className="title">{title}</h1>
      <p className="body">{children}</p>
    </section>
  );
};

export default Section;
