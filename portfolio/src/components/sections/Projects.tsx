import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-24 border-b border-border">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading title="Projects" subtitle="Selected data science work" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
