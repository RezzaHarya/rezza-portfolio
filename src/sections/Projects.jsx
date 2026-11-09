import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-container">

        <div className="section-heading">
          <span className="section-label">
            My Work
          </span>

          <h2>
            Featured Projects
          </h2>

          <p>
            A collection of projects I've built while
            learning and applying web development,
            data science, and machine learning.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;