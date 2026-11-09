
import { Mail, ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="section-container section">

      <div className="contact-box">

        <span className="section-subtitle">
          GET IN TOUCH
        </span>

        <h2>Let's Build Something Together.</h2>

        <p>
          I'm always open to new opportunities,
          collaborations, and meaningful conversations
          about technology.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="btn btn-primary"
        >
          Contact Me
          <ArrowUpRight size={18} />
        </a>

        <div className="contact-socials">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:your-email@example.com">
            <Mail size={20} />
            Email
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;
