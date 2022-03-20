import React from "react";

const ContactItem = (props) => {
  return (
    <article className="contact__card">
      {props.icon}
      <h5>{props.header}</h5>
      <small>{props.content}</small>
    </article>
  );
};

export default ContactItem;
