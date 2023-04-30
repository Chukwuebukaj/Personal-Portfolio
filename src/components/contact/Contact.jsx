import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fvo5na8",
      "template_s5r6h9b",
      form.current,
      "n966BZTUvanGXPnwV"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon email" />
            <h4>Email</h4>
            <h5>anunihuebuka01@gmail.com</h5>
            <a href="mailto:anunihuebuka01@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon messenger" />
            <h4>Messenger</h4>
            <h5>Mayjay_e</h5>
            <a href="https://m.me/mayjay.ebuks/" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option whatsapp">
            <BsWhatsapp className="contact__option-icon " />
            <h4>Whatsapp</h4>
            <h5>+2347064527012</h5>
            <a href="https://wa.me/2347064527012" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            cols="30"
            rows="7"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
