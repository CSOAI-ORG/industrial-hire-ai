import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Industrial Hire AI — Plant, Waste & Fleet Management',
  description: 'AI-powered industrial hire platform. Plant hire, waste management, skip hire, and fleet optimization across 5 .ai domains.',
  keywords: ['plant hire', 'waste management', 'skip hire', 'fleet optimization', 'construction equipment', 'MCP', 'AI tools'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Navigation() {
  return (
    <header className="sticky top-0 z-50 glass border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <a href="/" className="text-lg font-bold">
              <span className="text-brand-400">Industrial</span>
              <span className="text-white">Hire</span>
              <span className="text-brand-300">.AI</span>
            </a>
          </div>
          
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <a href="/equipment" className="text-muted-foreground hover:text-foreground transition-colors">Equipment</a>
            <a href="/waste" className="text-muted-foreground hover:text-foreground transition-colors">Waste</a>
            <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </nav>
          
          <div className="flex items-center gap-3">
            <a href="/equipment" className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg gradient-brand text-white hover:opacity-90 transition-opacity">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-sm font-semibold mb-3">Platform</h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <a href="/equipment" className="block hover:text-foreground">Equipment Hire</a>
              <a href="/waste" className="block hover:text-foreground">Waste Management</a>
              <a href="/pricing" className="block hover:text-foreground">Pricing</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Domains</h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <span className="block">grabhire.ai</span>
              <span className="block">planthire.ai</span>
              <span className="block">muckaway.ai</span>
              <span className="block">optimobile.ai</span>
              <span className="block">commercialvehicle.ai</span>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-xs text-muted-foreground">
          <p>© 2026 Industrial Hire AI — Bootstrap $0 MVP</p>
        </div>
      </div>
    </footer>
  );
}
