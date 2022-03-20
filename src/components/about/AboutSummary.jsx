import React from "react";
import { BsCheck2 } from "react-icons/bs";

const AboutSummary = (props) => {
  return (
    <li>
      <BsCheck2 className="about__icon-summary" /> {props.content}
    </li>
  );
};

export default AboutSummary;
