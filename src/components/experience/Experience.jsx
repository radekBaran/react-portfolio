import React from "react";
import "./experience.css";
import { BsCheck2 } from "react-icons/bs";
import ExperienceItem from "./ExperienceItem";
import ExperienceContent from "./ExperienceContent";

const Experience = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>

      <div className="container services__container">
        <ExperienceContent
          header="Integration Software Developer PKO Bank Polski SA | September 2019 - present"
          content={
            <>
              <ExperienceItem content="Integration of IT systems using IBM Integration Tools and SpringBoot microservices" />
              <ExperienceItem content="Designin and implementig the GUI based on the React.js library" />
              <ExperienceItem content="Maintenance and development of existing application solutions" />
              <ExperienceItem content="Designing software with specific functional requirements" />
              <ExperienceItem content="Support for system users" />
              <ExperienceItem content="Diagnosing and fixing bugs" />
              <ExperienceItem content="Participation in development tests and analyzes" />
              <ExperienceItem content="Designing, testing and developing applications" />
              <ExperienceItem content="Preparation of technical documentation" />
            </>
          }
        />
        <ExperienceContent
          header="Java Developer PKO Bank Polski SA | February 2018 - September 2019"
          content={
            <>
              <ExperienceItem content="Design and implementation of business processess" />
              <ExperienceItem content="Maintenance and development of existing application solutions" />
              <ExperienceItem content="Diagnosing and fixing bugs" />
              <ExperienceItem content="Developing and testing applications" />
            </>
          }
        />
        <ExperienceContent
          header="Java Developer Britenet | January 2017 - February 2018"
          content={
            <>
              <ExperienceItem content="Maintenance and development of existing application solutions" />
              <ExperienceItem content="Diagnosing and fixing bugs" />
              <ExperienceItem content="Participation in development tests and analyzes" />
            </>
          }
        />
      </div>
    </section>
  );
};

export default Experience;
