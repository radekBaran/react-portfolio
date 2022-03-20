import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/rados%C5%82aw-baran-a93b71102/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/radekBaran" target="_blank">
        <BsGithub />
      </a>
      {/* <a href="https://linkedin.com" target='_blank'></a> */}
    </div>
  );
}

export default HeaderSocials;
