import { Project as ProjectType } from '@/data/projects'
import Project from './Project'

interface ProjectSectionProps {
  title: string
  projects: ProjectType[]
}

export default function ProjectSection({ title, projects }: ProjectSectionProps) {
  return (
    <>
      {title === 'Projects' ? (
        <h2>{title}</h2>
      ) : (
        <h3 className="section-title">{title}</h3>
      )}
      <div className="projects">
        {projects.map((project, index) => (
          <Project key={`${title}-${index}`} project={project} />
        ))}
      </div>
    </>
  )
}