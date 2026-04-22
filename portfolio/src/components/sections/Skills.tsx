import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillTag } from "@/components/ui/SkillTag";
import { skills } from "@/lib/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-24 border-b border-border">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading title="Skills" />
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <SkillTag key={skill} name={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
