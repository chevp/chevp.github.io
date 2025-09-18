import { Project as ProjectType } from '@/data/projects'

interface ProjectProps {
  project: ProjectType
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="project">
      <h3>{project.name}</h3>
      <p>{project.desc}</p>
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.text}
        </a>
      )}
    </div>
  )
}