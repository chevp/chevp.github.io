import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProjectSection from '@/components/ProjectSection'
import Snowflakes from '@/components/Snowflakes'
import ScrollEffect from '@/components/ScrollEffect'
import { projectData } from '@/data/projects'

export default function Home() {
  return (
    <>
      <Snowflakes />
      <ScrollEffect />
      <Header />
      <section className="section">
        {Object.entries(projectData).map(([category, projects]) => (
          <ProjectSection key={category} title={category} projects={projects} />
        ))}
      </section>
      <Footer />
    </>
  )
}