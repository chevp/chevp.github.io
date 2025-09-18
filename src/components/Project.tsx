import { Project as ProjectType } from '@/data/projects'

interface ProjectProps {
  project: ProjectType
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className="bg-primary border border-border rounded-lg p-5 transition-transform duration-200 hover:-translate-y-0.5 hover:border-accent">
      <h3 className="text-text text-lg mb-2.5">{project.name}</h3>
      <p className="text-sm text-muted">{project.desc}</p>
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2.5 text-accent no-underline hover:text-accent-hover"
        >
          {project.text}
        </a>
      )}
    </div>
  )
}