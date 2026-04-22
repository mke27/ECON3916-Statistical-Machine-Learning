interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12">
      <h2 className="text-xl font-bold tracking-tight text-ink">{title}</h2>
      {subtitle && (
        <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>
      )}
      <div className="mt-4 w-6 h-px bg-border" />
    </div>
  );
}
