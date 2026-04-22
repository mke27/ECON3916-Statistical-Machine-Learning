import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm bg-bg border-b border-border">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="text-sm font-bold text-ink tracking-widest">
          ME
        </a>
        <div className="flex items-center gap-6">
          <a href="#projects" className="text-xs text-ink-muted hover:text-ink transition-colors hidden sm:block">
            Projects
          </a>
          <a href="#gallery" className="text-xs text-ink-muted hover:text-ink transition-colors hidden sm:block">
            Gallery
          </a>
          <a href="#skills" className="text-xs text-ink-muted hover:text-ink transition-colors hidden sm:block">
            Skills
          </a>
          <a href="#contact" className="text-xs text-ink-muted hover:text-ink transition-colors hidden sm:block">
            Contact
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
