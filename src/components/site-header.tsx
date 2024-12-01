import { Globe2 } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Globe2 className="w-6 h-6 text-primary" />
          <span className="font-semibold text-lg">DomainSwitcher</span>
        </div>
        <nav className="flex items-center gap-6">
          <a
            href="https://blog.peterchen97.cn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Blog
          </a>
          <a
            href="https://x.com/Peter_s_sun"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Twitter
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}