import React from "react";
import "./skills.css";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section id="skills">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend</h3>
          <div className="skills__content">
            <Skill name="HTML" />
            <Skill name="CSS" />
            <Skill name="JavaScript" />
            <Skill name="TypeScript" />
            <Skill name="MaterialUI" />
            <Skill name="React" />
            <Skill name="Redux" />
          </div>
        </div>
        <div className="skills__backend">
          <h3>Backend</h3>
          <div className="skills__content">
            <Skill name="Java" />
            <Skill name="SpringBoot" />
            <Skill name="MySQL" />
            <Skill name="IBMIntegration" />
            <Skill name="SOAP/REST" />
          </div>
        </div>
        <div className="skills__backend">
          <h3>Others</h3>
          <div className="skills__content">
            <Skill name="GIT" />
            <Skill name="GitLab" />
            <Skill name="JIRA" />
            <Skill name="Confluence" />
            <Skill name="Jenkins" />
            <Skill name="XML" />
            <Skill name="XSD" />
            <Skill name="Scrum" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
