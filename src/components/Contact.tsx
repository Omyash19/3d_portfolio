import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        <div className="contact-flex">
          <div className="contact-box contact-primary">
            <div>
              <h4>Connect</h4>
              <p>
                <a href="mailto:om19work@gmail.com" data-cursor="disable">
                  om19work@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h4>Social</h4>
              <div className="contact-social-list">
                <a
                  href="https://github.com/Omyash19"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="contact-social"
                >
                  GitHub <MdArrowOutward />
                </a>
                <a
                  href="https://www.linkedin.com/in/om-madhavi-6845b2327/"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="contact-social"
                >
                  LinkedIn <MdArrowOutward />
                </a>
                <a
                  href="mailto:om19work@gmail.com"
                  data-cursor="disable"
                  className="contact-social"
                >
                  Email <MdArrowOutward />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <h2>
            Designed and Developed by <span>Om Madhavi</span>
          </h2>
          <h5>
            <MdCopyright /> 2026
          </h5>
        </div>
      </div>
    </section>
  );
};

export default Contact;
