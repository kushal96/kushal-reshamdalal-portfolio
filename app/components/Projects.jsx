'use client';

import { useEffect, useRef } from 'react';

const PROJECTS = [
  {
    tag: 'Production System',
    tagColor: 'text-steel border-steel/30 bg-steel/[0.06]',
    title: 'Real-Time ACH Transaction Engine',
    description:
      'Engineered a Java microservice on AWS Lambda that ingests and processes over 15,000 ACH transactions daily in real time. Replaced a batch-heavy analytics flow, eliminating overnight delays and delivering sub-second decision support for fraud analysts.',
    metrics: [
      { label: '15K+ txns/day', icon: '▸' },
      { label: '60% faster analytics', icon: '▸' },
      { label: '99.9% uptime', icon: '▸' },
    ],
    tech: ['Java', 'Spring Boot', 'AWS Lambda', 'S3', 'SQS', 'EMR', 'Parquet'],
    highlight: 'Validated a POC that improved fraud analysis speed by 70%',
  },
  {
    tag: 'Machine Learning',
    tagColor: 'text-mint border-mint/30 bg-mint/[0.06]',
    title: 'ML Fraud Detection — Account Opening',
    description:
      'Built and deployed an XGBoost classification model trained on behavioral signals to distinguish fraudulent account applications from legitimate ones. Integrated into the production account-opening pipeline with a Champion vs. Challenger validation framework to ensure production-model alignment before any rollout.',
    metrics: [
      { label: '95% model accuracy', icon: '▸' },
      { label: '40% fraud reduction', icon: '▸' },
      { label: '$M+ in losses prevented', icon: '▸' },
    ],
    tech: ['Python', 'XGBoost', 'SQL', 'Pandas', 'Champion/Challenger', 'AWS SageMaker'],
    highlight: '100% stakeholder alignment via rigorous pre-deployment validation',
  },
  {
    tag: 'Performance Engineering',
    tagColor: 'text-amber-400 border-amber-400/30 bg-amber-400/[0.06]',
    title: 'Big Data Query Engine Migration',
    description:
      'Identified a critical performance bottleneck in fraud workflow analytics: complex Postgres queries timing out at 3 hours, blocking daily fraud reviews. Rewrote the entire query layer as distributed Spark Scala jobs with intelligent caching, delivering the same outputs in under 2 minutes.',
    metrics: [
      { label: '3h → 2min runtime', icon: '▸' },
      { label: '99% time reduction', icon: '▸' },
      { label: 'Zero data regression', icon: '▸' },
    ],
    tech: ['Apache Spark', 'Scala', 'PostgreSQL', 'AWS EMR', 'Big Data', 'Caching'],
    highlight: 'Fraud analysts unblocked from a daily 3-hour wait — immediately',
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="relative py-28 bg-bg-secondary overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-edge-light to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-edge-light to-transparent" />

      {/* Background accent */}
      <div className="absolute inset-0 bg-dot-grid-dense opacity-40 pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="reveal mb-16">
          <span className="font-mono text-xs text-mint uppercase tracking-[0.2em]">
            02 / Featured Work
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-3">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-ink-primary">
              Systems built for real stakes
            </h2>
            <p className="text-sm text-ink-dim font-mono">
              Production · High-traffic · Mission-critical
            </p>
          </div>
        </div>

        {/* Project cards */}
        <div className="space-y-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className={`reveal reveal-delay-${i + 1} card-base rounded-2xl p-6 md:p-8 group relative overflow-hidden`}
            >
              {/* Hover glow overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-radial from-mint/[0.03] to-transparent rounded-2xl pointer-events-none" />

              <div className="relative grid md:grid-cols-5 gap-6 md:gap-8">
                {/* Left — main content */}
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`font-mono text-xs px-3 py-1 rounded-full border ${project.tagColor}`}
                    >
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl md:text-2xl text-ink-primary mb-3 group-hover:text-mint transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-ink-muted text-sm leading-relaxed font-sans mb-5">
                    {project.description}
                  </p>

                  {/* Highlight callout */}
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-mint/[0.04] border border-mint/10">
                    <span className="text-mint text-xs mt-0.5">★</span>
                    <p className="text-xs font-mono text-mint/80">{project.highlight}</p>
                  </div>
                </div>

                {/* Right — metrics + tech */}
                <div className="md:col-span-2 flex flex-col justify-between gap-6">
                  {/* Metrics */}
                  <div>
                    <p className="font-mono text-[10px] text-ink-dim uppercase tracking-widest mb-3">
                      Impact Metrics
                    </p>
                    <div className="space-y-2">
                      {project.metrics.map((m) => (
                        <div key={m.label} className="metric-chip w-full justify-start">
                          <span className="text-mint/60">{m.icon}</span>
                          {m.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div>
                    <p className="font-mono text-[10px] text-ink-dim uppercase tracking-widest mb-3">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 rounded-md bg-bg-primary border border-edge text-ink-dim text-[11px] font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional POC note */}
        <div className="reveal reveal-delay-4 mt-8 text-center">
          <p className="text-xs font-mono text-ink-dim">
            + DataValidator Plugin · Twitter Sentiment Engine · Haul-Share SPA · and more
          </p>
        </div>
      </div>
    </section>
  );
}
