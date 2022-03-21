import React from "react";
import "./about.css";
import ME from "../../assets/about_me.jpg";
import AboutSummary from "./AboutSummary";

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me" />
          </div>
        </div> */}
        <div className="about__content">
          {/* <p> */}
          <div className="about__content-items">
            Programmer with 5 years of experience in designing and developing
            applications. During this time, I was able to:
            <AboutSummary
              content="Design and implement
              GUI based on React.js for the bank internal applications"
            />
            <AboutSummary
              content="Integrate several
              dozen systems on the ESB based on IBM Integration Tools and Spring
              Boot microservices"
            />
            <AboutSummary
              content="Develop and implement
              departamental business processess"
            />
            I am open to learn new technologies and improve mu cyrrent skills
          </div>
          {/* </p> */}
        </div>
      </div>
    </section>
  );
}

export default About;
