import Image from "next/image";

export function Hero() {
  return (
    <section id="hero" className="pt-20 pb-24 border-b border-border">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start gap-10">
          {/* Photo */}
          <div className="flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 rounded-sm overflow-hidden border border-border bg-surface">
            <Image
              src="/5E15600C-8E31-42F3-868A-9EDF13B9128F_1_105_c.png"
              alt="Maya Ellis"
              width={112}
              height={112}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="flex-1">
            <p className="text-xs text-ink-muted tracking-widest uppercase mb-4">
              Portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-ink leading-none mb-3">
              Maya Ellis
            </h1>
            <p className="text-sm text-ink-muted font-mono mb-6">
              Data Science & Economics — Northeastern University
            </p>
            <p className="text-sm text-ink-muted leading-relaxed max-w-md">
              Third-year Data Science and Economics major with experience in data
              and business analysis, with a focus in CRM. Professional interests
              in business analysis and data integration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-4 py-2 text-xs font-mono bg-ink text-bg hover:opacity-75 transition-opacity rounded-sm"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-4 py-2 text-xs font-mono border border-border text-ink-muted hover:text-ink hover:border-ink-muted transition-colors rounded-sm"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
