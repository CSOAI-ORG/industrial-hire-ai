'use client';

import { useState } from 'react';
import { Check, Zap, Crown, ArrowRight } from 'lucide-react';

const PRICING_TIERS = [
  {
    name: 'Starter',
    price: 'Free',
    period: '',
    description: 'Search and compare equipment across all domains',
    features: [
      { text: 'Equipment search & comparison', included: true },
      { text: 'Basic availability checks', included: true },
      { text: 'Email support', included: true },
      { text: 'Up to 5 searches/month', included: true },
      { text: 'Unlimited bookings', included: false },
      { text: 'HSE compliance tools', included: false },
      { text: 'API access', included: false },
    ],
    cta: 'Get Started Free',
    highlighted: false,
    priceId: null,
  },
  {
    name: 'Pro',
    price: '£49',
    period: '/mo',
    description: 'Unlimited bookings with compliance tools',
    features: [
      { text: 'Unlimited bookings', included: true },
      { text: 'HSE compliance tools', included: true },
      { text: 'Digital inspections', included: true },
      { text: 'Priority support', included: true },
      { text: 'Cost calculator', included: true },
      { text: 'Fleet management dashboard', included: false },
      { text: 'Custom integrations', included: false },
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID || null,
  },
  {
    name: 'Enterprise',
    price: '£199',
    period: '/mo',
    description: 'Full fleet management with API access',
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Fleet management dashboard', included: true },
      { text: 'API access', included: true },
      { text: 'LOLER/PUWER tracking', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'SLA guarantee (99.9%)', included: true },
    ],
    cta: 'Contact Sales',
    highlighted: false,
    priceId: process.env.NEXT_PUBLIC_STRIPE_ENTERPRISE_PRICE_ID || null,
  },
];

export default function PricingPage() {
  const [loading, setLoading] = useState<string | null>(null);

  async function handleCheckout(tier: (typeof PRICING_TIERS)[number]) {
    if (!tier.priceId) return;

    setLoading(tier.name);
    try {
      const res = await fetch('/api/stripe-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId: tier.priceId, tier: tier.name }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || 'Checkout failed. Please try again.');
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error('Checkout error:', err);
      alert('Unable to start checkout. Please try again.');
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Zap className="w-6 h-6 text-brand-400" />
          <span className="text-xs font-mono text-brand-400 uppercase tracking-wider">Pricing</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Simple, <span className="text-brand-400">Transparent</span> Pricing
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that fits your operation. Scale as you grow.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {PRICING_TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-2xl border p-8 transition-all ${
              tier.highlighted
                ? 'border-brand-500 bg-brand-500/5 shadow-lg shadow-brand-500/10'
                : 'border-border bg-card hover:border-brand-500/30'
            }`}>
            {tier.highlighted && (
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-medium mb-4">
                <Zap className="w-3 h-3" />
                Most Popular
              </div>
            )}
            <div className="flex items-center gap-2 mb-4">
              {tier.name === 'Enterprise' ? (
                <Crown className="w-5 h-5 text-brand-400" />
              ) : (
                <Zap className="w-5 h-5 text-muted-foreground" />
              )}
              <h3 className="text-xl font-semibold">{tier.name}</h3>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold">{tier.price}</span>
              <span className="text-muted-foreground ml-2">{tier.period}</span>
            </div>
            <p className="text-sm text-muted-foreground mb-8">{tier.description}</p>
            <ul className="space-y-3 mb-8">
              {tier.features.map((feature) => (
                <li key={feature.text} className="flex items-center gap-3">
                  {feature.included ? (
                    <Check className="w-4 h-4 text-safety-500 flex-shrink-0" />
                  ) : (
                    <span className="w-4 h-4 rounded border border-muted-foreground/20 flex-shrink-0" />
                  )}
                  <span className={`text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground/50'}`}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleCheckout(tier)}
              disabled={loading === tier.name}
              className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-opacity disabled:opacity-50 ${
                tier.highlighted
                  ? 'gradient-brand text-white hover:opacity-90'
                  : 'bg-background border border-border hover:border-brand-500/30'
              }`}>
              {loading === tier.name ? 'Redirecting…' : tier.cta}
              {tier.priceId && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-2xl bg-card border border-border p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Industrial Hire Cluster</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          This platform powers 5 industrial .ai domains: grabhire.ai, planthire.ai, muckaway.ai,
          optimobile.ai, and commercialvehicle.ai
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {['grabhire.ai', 'planthire.ai', 'muckaway.ai', 'optimobile.ai', 'commercialvehicle.ai'].map((domain) => (
            <span key={domain} className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs font-mono">
              {domain}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
