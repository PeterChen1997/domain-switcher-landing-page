import { useState } from "react";
import {
  Globe2,
  Layers,
  Zap,
  Box,
  ChevronRight,
  Chrome,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import bigPreview from "@/assets/big.png";
import smallPreview from "@/assets/small.png";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <header className="container max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col items-center text-center">
            <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-6">
              <Globe2 className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Switch Domains Like a Pro
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              Instantly switch between domains, manage environments, and
              organize your development workflow with our powerful Chrome
              extension.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="gap-2">
                <Chrome className="w-5 h-5" />
                Add to Chrome
              </Button>
              <a
                href="https://github.com/PeterChen1997/domainswitcher"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="gap-2">
                  <Github className="w-5 h-5" />
                  View on GitHub
                </Button>
              </a>
            </div>
          </div>
        </header>

        {/* Feature Preview */}
        <section className="container max-w-6xl mx-auto px-4 py-16">
          <div className="relative flex gap-6">
            {/* Main Preview */}
            <div className="flex-[3] relative">
              <div
                className="rounded-xl overflow-hidden shadow-2xl border bg-card"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img
                  src={bigPreview}
                  alt="Extension Main Preview"
                  className="w-full object-cover transition-transform duration-700 ease-in-out"
                  style={{
                    transform: isHovered ? "scale(1.02)" : "scale(1)",
                  }}
                />
              </div>
            </div>

            {/* Small Preview */}
            <div className="flex-[2] hidden md:block">
              <div
                className="rounded-xl overflow-hidden shadow-lg border bg-card h-full"
                onMouseEnter={() => setIsHovered2(true)}
                onMouseLeave={() => setIsHovered2(false)}
              >
                <img
                  src={smallPreview}
                  alt="Extension Detail Preview"
                  className="w-full object-cover transition-transform duration-700 ease-in-out"
                  style={{
                    transform: isHovered2 ? "scale(1.02)" : "scale(1)",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Quick Domain Switching
              </h3>
              <p className="text-muted-foreground">
                Switch between domains instantly with just a few clicks. Perfect
                for developers working across multiple environments.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Layers className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Grouping</h3>
              <p className="text-muted-foreground">
                Organize your domains into logical groups. Create separate
                groups for different projects or clients.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Box className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Environment Management
              </h3>
              <p className="text-muted-foreground">
                Easily manage different environments within each group -
                development, staging, production, and more.
              </p>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="container max-w-6xl mx-auto px-4 py-16 bg-muted/50">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                step: 1,
                title: "Install the Extension",
                description:
                  "Add our extension to Chrome with just one click from the Chrome Web Store.",
              },
              {
                step: 2,
                title: "Create Your Groups",
                description:
                  "Organize your domains into groups based on projects, clients, or your preferred structure.",
              },
              {
                step: 3,
                title: "Add Environments",
                description:
                  "Set up different environments within each group for seamless switching between dev, staging, and production.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-4 p-4 rounded-lg bg-background"
              >
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container max-w-6xl mx-auto px-4 py-16">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Boost Your Development Workflow?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our growing community of developers who are streamlining
              their workflow with DomainSwitcher.
            </p>
            <Button size="lg" variant="secondary" className="gap-2">
              Install Now
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

export default App;
