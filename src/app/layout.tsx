import type { Metadata } from 'next';
import Link from 'next/link';
import { Truck } from 'lucide-react';
import MobileMenu from '@/src/components/MobileMenu';
import './globals.css';

export const metadata: Metadata = {
  title: 'Industrial Hire AI — AI-Powered Plant Hire, Grab Lorries, Skip Hire & Fleet Management',
  description: 'AI-powered plant hire, grab lorries, skip hire, and fleet management for UK construction.',
  keywords: ['plant hire', 'grab hire', 'skip hire', 'construction', 'fleet management', 'AI'],
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://industrialhire.ai',
    siteName: 'Industrial Hire AI',
    title: 'Industrial Hire AI — AI-Powered Plant Hire, Grab Lorries, Skip Hire & Fleet Management',
    description: 'AI-powered plant hire, grab lorries, skip hire, and fleet management for UK construction.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industrial Hire AI — AI-Powered Plant Hire, Grab Lorries, Skip Hire & Fleet Management',
    description: 'AI-powered plant hire, grab lorries, skip hire, and fleet management for UK construction.',
  },
  alternates: {
    canonical: 'https://industrialhire.ai',
  },
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Industrial Hire AI',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://industrialhire.ai',
  description: 'AI-powered plant hire, grab lorries, skip hire, and fleet management for UK construction.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
      <body className="min-h-screen bg-background antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground focus:outline-none">
          Skip to content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Navigation() {
  return (
    <header className="sticky top-0 z-50 glass border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <Link href="/" className="text-lg font-bold">
              <span className="text-brand-400">Industrial</span>
              <span className="text-white">Hire</span>
              <span className="text-brand-300">.AI</span>
            </Link>
          </div>

          <MobileMenu />
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <a href="#domains" className="text-muted-foreground hover:text-foreground transition-colors">Domains</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#pricing" className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-lg gradient-brand text-white hover:opacity-90 transition-opacity">
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
              <a href="#domains" className="block hover:text-foreground">Domains</a>
              <a href="#features" className="block hover:text-foreground">Features</a>
              <a href="#pricing" className="block hover:text-foreground">Pricing</a>
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
          <div>
            <h4 className="text-sm font-semibold mb-3">Resources</h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <a href="#" className="block hover:text-foreground">Documentation</a>
              <a href="#" className="block hover:text-foreground">API Reference</a>
              <a href="#" className="block hover:text-foreground">Compliance Guides</a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <div className="space-y-2 text-xs text-muted-foreground">
              <a href="#" className="block hover:text-foreground">About</a>
              <a href="#" className="block hover:text-foreground">Contact</a>
              <a href="#" className="block hover:text-foreground">Careers</a>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center text-xs text-muted-foreground">
          <p>&copy; 2026 Industrial Hire AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
