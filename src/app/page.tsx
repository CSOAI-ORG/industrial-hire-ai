'use client';

import {
  Truck,
  Construction,
  Trash2,
  BarChart3,
  Zap,
  ArrowRight,
  Search,
  CalendarCheck,
  LayoutDashboard,
  Brain,
  Clock,
  ClipboardCheck,
  Calculator,
  Tablet,
  Shield,
  Check,
} from 'lucide-react';

const domains = [
  {
    domain: 'grabhire.ai',
    title: 'GrabHire.ai',
    desc: 'Grab lorry hire and muckaway services',
    icon: Truck,
    color: 'from-amber-500 to-orange-600',
  },
  {
    domain: 'planthire.ai',
    title: 'PlantHire.ai',
    desc: 'Construction plant and equipment rental',
    icon: Construction,
    color: 'from-amber-400 to-amber-600',
  },
  {
    domain: 'muckaway.ai',
    title: 'MuckAway.ai',
    desc: 'Waste removal, skip hire, haulage',
    icon: Trash2,
    color: 'from-yellow-500 to-amber-600',
  },
  {
    domain: 'optimobile.ai',
    title: 'OptiMobile.ai',
    desc: 'Fleet optimisation and tracking',
    icon: Zap,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    domain: 'commercialvehicle.ai',
    title: 'CommercialVehicle.ai',
    desc: 'Commercial vehicle hire and leasing',
    icon: BarChart3,
    color: 'from-sky-500 to-blue-600',
  },
];

const steps = [
  {
    step: '1',
    title: 'Search',
    desc: 'AI matches you with available equipment',
    icon: Search,
  },
  {
    step: '2',
    title: 'Book',
    desc: 'Instant quotes and online booking',
    icon: CalendarCheck,
  },
  {
    step: '3',
    title: 'Manage',
    desc: 'Real-time tracking and compliance',
    icon: LayoutDashboard,
  },
];

const features = [
  { title: 'AI Equipment Matching', desc: 'Intelligent matching based on project requirements, location, and availability.', icon: Brain },
  { title: 'Real-Time Availability', desc: 'Live inventory across all suppliers with instant confirmation.', icon: Clock },
  { title: 'HSE Compliance Checklists', desc: 'Automated health and safety documentation for every hire.', icon: ClipboardCheck },
  { title: 'Transport Cost Calculator', desc: 'Accurate delivery and collection cost estimates in real-time.', icon: Calculator },
  { title: 'Digital Pre-Use Inspections', desc: 'Mobile-first inspection forms with photo evidence capture.', icon: Tablet },
  { title: 'LOLER/PUWER Tracking', desc: 'Automated compliance tracking for lifting and work equipment regulations.', icon: Shield },
];

const pricing = [
  {
    tier: 'Starter',
    price: 'Free',
    period: '',
    desc: 'Search and compare equipment across all domains',
    features: ['Equipment search & comparison', 'Basic availability checks', 'Email support', 'Up to 5 searches/month'],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    tier: 'Pro',
    price: '£49',
    period: '/mo',
    desc: 'Unlimited bookings with compliance tools',
    features: ['Unlimited bookings', 'HSE compliance tools', 'Digital inspections', 'Priority support', 'Cost calculator'],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    tier: 'Enterprise',
    price: '£199',
    period: '/mo',
    desc: 'Full fleet management with API access',
    features: ['Fleet management dashboard', 'API access', 'LOLER/PUWER tracking', 'Custom integrations', 'Dedicated account manager', 'SLA guarantee'],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
              <span className="text-foreground">AI-Powered</span>
              <br />
              <span className="bg-gradient-to-r from-brand-400 to-safety-400 bg-clip-text text-transparent">
                Construction Equipment Hire
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Search, book, and manage plant hire, grab lorries, skip hire, and fleet optimisation — all in one platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="#features" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25">
                <Search className="w-5 h-5" />
                Search Equipment
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#pricing" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold text-base hover:bg-accent transition-colors">
                Get a Quote
              </a>
            </div>

            <p className="text-sm text-muted-foreground">
              5 Domains &bull; 10,000+ Machines &bull; UK-Wide Coverage
            </p>
          </div>
        </div>
      </section>

      {/* Domains */}
      <section id="domains" className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Five Domains, <span className="text-brand-400">One Platform</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Specialised AI-powered platforms covering every aspect of construction equipment hire.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {domains.map((item) => (
              <div key={item.domain} className="group rounded-xl bg-card border border-border p-6 text-center hover:border-brand-500/30 transition-all hover:-translate-y-1">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-mono font-semibold mb-2">{item.domain}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How It <span className="text-brand-400">Works</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From search to site delivery in three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((item, i) => (
              <div key={item.step} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-brand-500/40 to-transparent" />
                )}
                <div className="w-16 h-16 rounded-2xl gradient-brand flex items-center justify-center mx-auto mb-5 shadow-lg shadow-brand-500/20">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-xs font-mono text-brand-400 font-semibold mb-2">STEP {item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Platform <span className="text-brand-400">Features</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Built for the construction industry with compliance and efficiency at its core.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((item) => (
              <div key={item.title} className="rounded-xl bg-card border border-border p-6 hover:border-brand-500/30 transition-colors">
                <item.icon className="w-8 h-8 text-brand-400 mb-4" />
                <h3 className="text-base font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Simple, <span className="text-brand-400">Transparent</span> Pricing
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose the plan that fits your operation. Scale as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((plan) => (
              <div
                key={plan.tier}
                className={`rounded-xl p-6 flex flex-col ${
                  plan.highlighted
                    ? 'bg-card border-2 border-brand-500 shadow-lg shadow-brand-500/10 relative'
                    : 'bg-card border border-border'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full gradient-brand text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-1">{plan.tier}</h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl font-black">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground text-sm">{plan.period}</span>}
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.desc}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all ${
                    plan.highlighted
                      ? 'gradient-brand text-white hover:opacity-90 shadow-lg shadow-brand-500/25'
                      : 'bg-accent border border-border text-foreground hover:bg-accent/80'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-2xl bg-card border border-border p-12 sm:p-16 relative overflow-hidden">
            <div className="absolute inset-0 gradient-mesh opacity-50" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to modernise your <span className="text-brand-400">plant hire</span>?
              </h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Join hundreds of contractors and hire companies already using Industrial Hire AI to streamline their operations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#pricing" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25">
                  Get Started Today
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="#" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent border border-border text-foreground font-semibold hover:bg-accent/80 transition-colors">
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
