import PageHeaderContent from "../../components/pageHeaderContent";
import { RiContactsFill } from "react-icons/ri";
import "./styles.scss";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef, Component  } from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_o910659",
        "template_g4akpbh",
        form.current,
        "eTJXrr5YiZP5KaAyz"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Success",
            text: "Message sent successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
           confirmButtonText:"OK"
          })
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<RiContactsFill size={40} />}
      />

      <div className="container contact__container">
        <div className="contact__options">
          <h1>Get in touch</h1>
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>devindrahirabatti26@gmail.com</h5>
            <a href="mailto:devindrahirabatti26@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>Text me</h5>
            <a
              href="https://api.whatsapp.com/send?phone=6363299671"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <h1>Contact me</h1>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" className="button form-submit-button">
            Send Message
          </button>
        </form>

        <div className="contact__options__social">
          <article className="contact__option__social">
           
            <a
              href="https://www.linkedin.com/in/devindra-hirabatti-4b4b3520a/"
              target="_blank"
            >
              <FaLinkedin size={32} className="contact__option-icon" />
            </a>
            <a
              href="https://github.com/program333"
              target="_blank"
            >
              <FaGithub size={32} className="contact__option-icon" />
            </a>
            <a
              href="https://twitter.com/d_hirabatti"
              target="_blank"
            >
             <FaTwitter size={32} className="contact__option-icon" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=6363299671"
              target="_blank"
            >
               <FaWhatsapp size={32} className="contact__option-icon" />
            </a>

            
           
          
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
