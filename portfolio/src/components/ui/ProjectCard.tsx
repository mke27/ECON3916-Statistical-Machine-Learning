import { Project } from "@/lib/types";
import { tagColor } from "@/lib/tagColors";

interface ProjectCardProps {
  project: Project;
}

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col p-6 border border-border bg-bg-subtle rounded-sm hover:border-ink-muted transition-colors">
      <h3 className="text-sm font-bold text-ink mb-3 leading-snug">
        {project.title}
      </h3>
      <p className="text-sm text-ink-muted leading-relaxed mb-5 flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs font-mono px-2 py-0.5 rounded-sm border ${tagColor(tag)}`}
          >
            {tag}
          </span>
        ))}
      </div>
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-3 py-2 text-xs font-mono border border-border text-ink-muted hover:text-ink hover:border-ink-muted transition-colors rounded-sm"
        >
          <GitHubIcon />
          View on GitHub
        </a>
      )}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex items-center justify-center gap-2 w-full px-3 py-2 text-xs font-mono border border-border text-ink-muted hover:text-ink hover:border-ink-muted transition-colors rounded-sm"
        >
          Live Demo →
        </a>
      )}
    </div>
  );
}
