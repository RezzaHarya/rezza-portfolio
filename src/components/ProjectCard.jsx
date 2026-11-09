import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <article className="project-card">

      <div className="project-image">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
        />
      </div>

      <div className="project-content">

        <span className="project-category">
          {project.category}
        </span>

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
              <ExternalLink size={16} />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={16} />
              Source Code
            </a>
          )}

        </div>

      </div>

    </article>
  );
}

export default ProjectCard;