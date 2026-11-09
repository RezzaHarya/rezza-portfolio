import {
  ArrowUpRight,
  Download,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="hero section-container">

      <div className="hero-content">

        <span className="hero-label">
          <span className="status-dot"></span>
          Welcome to my portfolio
        </span>

        <h1>
          Hi, I'm <span>Rezza Alfat.</span>
          <br />
          Information Systems Student.
        </h1>

        <p className="hero-description">
          I build web applications and explore the world of
          Data Science, Machine Learning, and Deep Learning.
          Passionate about technology and continuous learning.
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="btn btn-primary"
          >
            Explore My Work
            <ArrowUpRight size={18} />
          </a>

          <a
            href="/cv.pdf"
            className="btn btn-secondary"
            download
          >
            Download CV
            <Download size={18} />
          </a>

        </div>

        <div className="hero-socials">
          <span>Connect with me</span>

          <a
            href="https://github.com/RezzaHarya"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub size={21} />
          </a>

          <a
            href="https://www.linkedin.com/in/rezzaalfat/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn size={21} />
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper">

        <div className="hero-image">

          <img
            src="/images/IMG_1520.jpg"
            alt="Foto profil Rezza"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          <span className="image-placeholder">
            
          </span>

        </div>

        <span className="hero-image-caption">
          Developer · Learner · Explorer
        </span>

      </div>

    </section>
  );
}

export default Home;