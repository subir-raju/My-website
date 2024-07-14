import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="container contact">
        <h1>CONTACT ME</h1>
        <div className="contact-icon">
          <a href="mailto:subirdeyraju@gmail.com" className="items">
            <MdOutlineMailOutline className="icons" />
          </a>
          <a href="#" className="items">
            <FaLinkedin className="icons" />
          </a>
          <a href="#" className="items">
            <FaGithub className="icons" />
          </a>
          <a href="#" className="items">
            <FaWhatsapp className="icons" />
          </a>
          <a href="#" className="items">
            <FiInstagram className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
