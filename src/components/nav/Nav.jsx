import React from "react";
import { useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  const onClick = (source) => {
    switch (source) {
      case "about":
        setActiveNav("#about");
        break;
      case "skills":
        setActiveNav("#skills");
        break;
      case "experience":
        setActiveNav("#experience");
        break;
      case "contact":
        setActiveNav("#contact");
        break;
      default:
        setActiveNav("#");
    }
  };
  return (
    <nav>
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => onClick("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => onClick("about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => onClick("skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#experience"
        onClick={() => onClick("experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => onClick("contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
