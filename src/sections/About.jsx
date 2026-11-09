function About() {
  return (
    <section id="about" className="section-container section">
      <div className="section-heading">
        <span className="section-subtitle">GET TO KNOW ME</span>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>A little about myself.</h3>

          <p>
            I am an Information Systems student with a strong
            interest in software development and emerging
            technologies.
          </p>

          <p>
            I enjoy building web applications using Laravel,
            PHP, React, and Node.js. Beyond web development,
            I am also interested in Data Science, Machine
            Learning, and Deep Learning.
          </p>

          <p>
            I value effective communication, teamwork, and
            continuous learning. I am committed to improving
            my skills and exploring new technologies.
          </p>
        </div>

        <div className="about-info">
          <div className="info-card">
            <span>Education</span>
            <h4>Information Systems</h4>
            <p>University Student</p>
          </div>

          <div className="info-card">
            <span>Main Focus</span>
            <h4>Software Development</h4>
            <p>Web Development & Data Science</p>
          </div>

          <div className="info-card">
            <span>Personal Values</span>
            <h4>Growth & Collaboration</h4>
            <p>Communication · Teamwork · Learning</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
