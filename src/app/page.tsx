'use client';

import { Truck, Construction, Trash2, BarChart3, Zap, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="relative">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-sm font-medium mb-8">
              <Truck className="w-3.5 h-3.5 animate-pulse" />
              Industrial Hire AI — Bootstrap $0 MVP
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
              <span className="text-foreground">AI-Powered</span>
              <br />
              <span className="bg-gradient-to-r from-brand-400 to-safety-400 bg-clip-text text-transparent">
                Industrial Hire
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Plant hire, waste management, and logistics — automated by AI. 
              MCP-powered tools for construction, skip hire, and commercial vehicle fleets.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/equipment" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl gradient-brand text-white font-semibold text-base hover:opacity-90 transition-opacity shadow-lg shadow-brand-500/25">
                <Construction className="w-5 h-5" />
                Equipment Hire
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="/waste" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-card border border-border text-foreground font-semibold text-base hover:bg-accent transition-colors">
                <Trash2 className="w-5 h-5" />
                Waste Management
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            Five Domains, <span className="text-brand-400">One Platform</span>
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { domain: 'grabhire.ai', desc: 'Plant & machinery hire', icon: Truck },
              { domain: 'planthire.ai', desc: 'Construction equipment', icon: Construction },
              { domain: 'muckaway.ai', desc: 'Waste & skip hire', icon: Trash2 },
              { domain: 'optimobile.ai', desc: 'Fleet optimization', icon: Zap },
              { domain: 'commercialvehicle.ai', desc: 'Commercial transport', icon: BarChart3 },
            ].map((item) => (
              <div key={item.domain} className="rounded-xl bg-card border border-border p-6 text-center hover:border-brand-500/30 transition-colors">
                <item.icon className="w-8 h-8 text-brand-400 mx-auto mb-4" />
                <h3 className="text-sm font-mono font-semibold mb-2">{item.domain}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
