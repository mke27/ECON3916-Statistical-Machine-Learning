"use client";

import { useState } from "react";
import Image from "next/image";
import { projects } from "@/lib/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

function BarChartIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

function TextIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

const thumbnailIcons = [BarChartIcon, TextIcon, TrendIcon];

interface FilterBtnProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

function FilterBtn({ label, active, onClick }: FilterBtnProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-xs font-mono rounded-sm border transition-colors ${
        active
          ? "bg-ink text-bg border-ink"
          : "border-border text-ink-muted hover:text-ink hover:border-ink-muted"
      }`}
    >
      {label}
    </button>
  );
}

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  const visible = active
    ? projects.filter((p) => p.tags.includes(active))
    : projects;

  return (
    <section id="gallery" className="py-24 border-b border-border">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading title="Project Gallery" subtitle="Filter by technology" />

        {/* Filter row */}
        <div className="flex flex-wrap gap-2 mb-10">
          <FilterBtn
            label="All"
            active={active === null}
            onClick={() => setActive(null)}
          />
          {allTags.map((tag) => (
            <FilterBtn
              key={tag}
              label={tag}
              active={active === tag}
              onClick={() => setActive(active === tag ? null : tag)}
            />
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visible.map((project) => {
            const originalIdx = projects.findIndex((p) => p.title === project.title);
            const Icon = thumbnailIcons[originalIdx % thumbnailIcons.length];

            return (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-sm border border-border aspect-[4/3] hover:border-ink-muted transition-colors"
              >
                {/* Thumbnail — real image or grid placeholder */}
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-bg-subtle"
                    style={{
                      backgroundImage:
                        "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(to right, var(--color-border) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                    }}
                  >
                    <span className="text-ink-muted opacity-30">
                      <Icon />
                    </span>
                    <span className="text-xs font-mono text-ink-muted text-center px-6 leading-relaxed">
                      {project.title}
                    </span>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-5 bg-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 rounded-sm border text-neutral-400 border-neutral-700"
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
                      className="text-xs font-mono text-neutral-500 hover:text-neutral-200 transition-colors underline underline-offset-4"
                    >
                      View on GitHub →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {visible.length === 0 && (
          <p className="text-sm text-ink-muted font-mono text-center py-16">
            No projects match this filter.
          </p>
        )}
      </div>
    </section>
  );
}
