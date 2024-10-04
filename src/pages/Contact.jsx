import "./Contact.css";
import { FaLinkedin, FaInstagram, FaFacebook} from "react-icons/fa";
import 'animate.css';

const Contact = () => {
  return (
    <section className="contact-me-section animate__animated animate__zoomIn">
      <div className="contact-container">
        <h2>Contact Me</h2>

        <p className="contact-description">
          I'm available on social media. Feel free to connect with me!
        </p>
        
        <div className="social-media-icons">
          <a href="https://www.linkedin.com/in/shahneelabaloch9090/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://www.instagram.com/shahneela_baloch?igsh=cHJqMmt1bTg4ZGsy" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.facebook.com/share/ByvxwARbrhMuDfTJ/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
      

        </div>
      </div>
    </section>
  );
};

export default Contact;
