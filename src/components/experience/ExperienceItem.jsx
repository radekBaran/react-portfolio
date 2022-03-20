import React from "react";
import { BsCheck2 } from "react-icons/bs";

const ExperienceItem = (props) => {
  return (
    <li>
      <BsCheck2 className="service__list-icon" />
      <p>{props.content}</p>
    </li>
  );
};

export default ExperienceItem;
