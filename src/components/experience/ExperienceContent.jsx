import React from "react";

const ExperienceContent = (props) => {
  return (
    <article className="service">
      <div className="service__head">
        <h3>{props.header}</h3>
      </div>
      <ul className="service__list">{props.content}</ul>
    </article>
  );
};

export default ExperienceContent;
