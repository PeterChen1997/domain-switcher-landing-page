import { Globe2, Twitter, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Globe2 className="w-6 h-6 text-primary" />
              <span className="font-semibold text-lg">DomainSwitcher</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Streamline your development workflow with instant domain switching
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Links</h4>
            <div className="space-y-3">
              <a
                href="https://blog.peterchen97.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Blog
              </a>
              <a
                href="https://x.com/Peter_s_sun"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="w-4 h-4" />
                @Peter_s_sun
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Resources</h4>
            <div className="space-y-3">
              <a
                href="https://github.com/PeterChen1997/domainswitcher"
                target="_blank"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub Repository
              </a>
              <a
                href="https://github.com/PeterChen1997/DomainSwitcher/commits/master/"
                target="_blank"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Release Notes
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © {new Date().getFullYear()} DomainSwitcher. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
