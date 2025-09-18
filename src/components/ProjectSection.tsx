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
        <h2 className="text-center text-accent text-3xl mb-8">{title}</h2>
      ) : (
        <h3 className="mt-10 text-accent text-xl">{title}</h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Project key={`${title}-${index}`} project={project} />
        ))}
      </div>
    </>
  )
}