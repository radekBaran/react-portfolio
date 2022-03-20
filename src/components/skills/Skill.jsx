import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Skill = (props) => {
  return (
    <article className="skills__details">
      <BsFillPatchCheckFill className="skills__details-icon" />
      <div>
        <h4>{props.name}</h4>
      </div>
    </article>
  );
};

export default Skill;
