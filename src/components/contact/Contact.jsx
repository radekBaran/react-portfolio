import React from "react";
import "./contact.css";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import ContactItem from "./ContactItem";

function Contact() {
  return (
    <section id="contact">
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__content">
          <div className="contact__cards">
            <ContactItem
              icon={<MdOutlineMail className="contact__icon" />}
              header="Email"
              content="bradek@onet.pl"
            />
            <ContactItem
              icon={<BsTelephone className="contact__icon" />}
              header="Phone number"
              content="+48 722 079 178"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
