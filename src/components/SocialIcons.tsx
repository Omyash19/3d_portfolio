import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href="https://github.com/Omyash19"
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile"
            data-cursor="disable"
          >
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/om-madhavi-6845b2327/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
            data-cursor="disable"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a
            href="mailto:om19work@gmail.com?subject=Portfolio%20Inquiry"
            aria-label="Send email to om19work@gmail.com"
            data-cursor="disable"
          >
            <FaEnvelope />
          </a>
        </span>
      </div>

      <a
        className="resume-button"
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        aria-label="Open resume PDF"
        data-cursor="disable"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
