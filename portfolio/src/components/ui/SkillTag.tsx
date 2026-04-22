interface SkillTagProps {
  name: string;
}

export function SkillTag({ name }: SkillTagProps) {
  return (
    <span className="inline-block px-3 py-1.5 text-sm font-mono text-ink-muted border border-border rounded-sm hover:text-ink hover:border-ink-muted transition-colors cursor-default">
      {name}
    </span>
  );
}
