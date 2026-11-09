
const skillGroups = [
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Backend Development",
    skills: ["PHP", "Laravel", "Node.js", "Express.js"],
  },
  {
    title: "Database",
    skills: ["MySQL", "Database Management"],
  },
  {
    title: "Data & Artificial Intelligence",
    skills: [
      "Data Science",
      "Machine Learning",
      "Deep Learning",
    ],
  },
  {
    title: "Professional Skills",
    skills: [
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Continuous Learning",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-container section">
      <div className="section-heading">
        <span className="section-subtitle">WHAT I WORK WITH</span>
        <h2>Skills & Expertise</h2>
        <p>Technologies and skills I use and continue to develop.</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
