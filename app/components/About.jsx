'use client';

import { useEffect, useRef } from 'react';

const FAST_FACTS = [
  { icon: '◈', label: 'Location', value: 'Toronto, ON · Canada' },
  { icon: '◈', label: 'Current Role', value: 'Software Developer Specialist, Nasdaq' },
  { icon: '◈', label: 'Education', value: 'MASc Computer Science · Dalhousie University' },
  { icon: '◈', label: 'Open To', value: 'Senior Engineer · Staff Engineer · Fintech' },
];

const CORE_STRENGTHS = [
  {
    title: 'High-Throughput Systems',
    desc: 'Designing event-driven microservices that process tens of thousands of financial transactions per day without dropping a byte.',
    icon: '⚡',
  },
  {
    title: 'Fraud & ML Integration',
    desc: 'Operationalizing machine learning models inside production Java services — from champion/challenger validation to live scoring.',
    icon: '🎯',
  },
  {
    title: 'Cloud-Native Architecture',
    desc: 'Building and operating resilient AWS infrastructure with zero-downtime deployments, Terraform-managed provisioning, and SLA-grade observability.',
    icon: '☁',
  },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach((child) => {
            child.classList.add('visible');
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="relative py-28 bg-bg-primary overflow-hidden">
      {/* Subtle accent line */}
      <div className="absolute left-0 top-0 right-0 h-px bg-gradient-to-r from-transparent via-edge-light to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="reveal mb-16">
          <span className="font-mono text-xs text-mint uppercase tracking-[0.2em]">
            01 / About
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink-primary mt-3">
            Why I do what I do
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio — left */}
          <div className="lg:col-span-3 space-y-6">
            <p className="reveal reveal-delay-1 text-ink-muted text-base leading-relaxed font-sans">
              Before I ever wrote a line of production code, I was publishing research on{' '}
              <span className="text-ink-primary">IoT security and smart building vulnerabilities</span>. 
              That early obsession with how systems get compromised never left me — it just scaled from 
              academic papers to distributed systems handling billions of financial events.
            </p>
            <p className="reveal reveal-delay-2 text-ink-muted text-base leading-relaxed font-sans">
              For the past five-plus years at{' '}
              <span className="text-ink-primary font-medium">Nasdaq (formerly Verafin)</span>, I&apos;ve been 
              the engineer behind the backend that thousands of North American financial institutions rely on 
              to detect money laundering, account fraud, and financial crime before losses occur. The systems 
              I&apos;ve built process millions of transactions daily, surface criminal patterns in real time, 
              and maintain{' '}
              <span className="text-mint font-mono text-sm">99.9% uptime</span> under the weight of major bank SLAs.
            </p>
            <p className="reveal reveal-delay-3 text-ink-muted text-base leading-relaxed font-sans">
              I graduated at the top of my cohort from Dalhousie University&apos;s Applied Computer Science 
              program, which sharpened my instinct for data management and system design. Today I sit at 
              the intersection of{' '}
              <span className="text-ink-primary">backend engineering and applied ML</span> — the kind of 
              engineer who can design the architecture, train the model, and own the production deployment.
            </p>

            {/* Fast facts */}
            <div className="reveal reveal-delay-4 mt-8 grid sm:grid-cols-2 gap-3">
              {FAST_FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-start gap-3 p-4 rounded-xl bg-bg-card border border-edge skill-pill"
                >
                  <span className="text-mint text-sm mt-0.5 font-mono">{fact.icon}</span>
                  <div>
                    <p className="text-[10px] font-mono text-ink-dim uppercase tracking-widest mb-0.5">
                      {fact.label}
                    </p>
                    <p className="text-sm text-ink-muted font-sans">{fact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core strengths — right */}
          <div className="lg:col-span-2 space-y-4">
            <p className="reveal font-mono text-xs text-ink-dim uppercase tracking-widest mb-6">
              Core Strengths
            </p>
            {CORE_STRENGTHS.map((s, i) => (
              <div
                key={s.title}
                className={`reveal reveal-delay-${i + 2} card-base p-5 rounded-xl group cursor-default`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{s.icon}</span>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-ink-primary mb-2">
                      {s.title}
                    </h3>
                    <p className="text-xs text-ink-dim font-sans leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Links */}
            <div className="reveal reveal-delay-5 flex gap-3 pt-2">
              <a
                href="https://www.linkedin.com/in/kushal96"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl border border-edge-light text-center text-xs font-mono text-ink-dim hover:border-mint/40 hover:text-mint transition-all duration-200"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/kushal96"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl border border-edge-light text-center text-xs font-mono text-ink-dim hover:border-mint/40 hover:text-mint transition-all duration-200"
              >
                GitHub ↗
              </a>
              <a
                href="https://kushal-reshamdalal.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl border border-edge-light text-center text-xs font-mono text-ink-dim hover:border-mint/40 hover:text-mint transition-all duration-200"
              >
                Portfolio ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
