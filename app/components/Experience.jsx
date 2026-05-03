'use client';

import { useEffect, useRef } from 'react';

const EXPERIENCE = [
  {
    company: 'Nasdaq',
    companyUrl: 'https://www.nasdaq.com',
    role: 'Software Developer Specialist',
    period: 'Apr 2025 – Present',
    location: 'Toronto, ON',
    current: true,
    bullets: [
      'Orchestrated a Lakehouse data pipeline (EMR → S3 as Parquet → RDS), enabling faster and more scalable fraud analysis.',
      'Engineered a Java microservice triggered via AWS Lambda to process 15,000+ daily ACH transactions in real time, reduced analytics execution time.',
      'Maintained high system availability through 24/7 on-call via PagerDuty — 100% first-response resolution rate across 5+ production incidents.',
      'Mentored 4+ engineers and co-op students, reducing onboarding time by 30% through structured documentation in Confluence.',
      'Directed architecture strategy meetings and cross-functional design sessions for 5+ major client deployments.',
    ],
  },
  {
    company: 'Nasdaq',
    companyUrl: 'https://www.nasdaq.com',
    role: 'Senior Software Developer',
    period: 'Dec 2023 – Mar 2025',
    location: 'Toronto, ON',
    current: false,
    bullets: [
      'Architected and deployed 25+ high-performance Java microservices and REST APIs across AWS (ECS, Lambda, API Gateway, DynamoDB, S3, SQS) — improving system reliability by 20%.',
      'Automated infrastructure provisioning with Terraform, reducing operational costs by 15% and improving fault tolerance across environments.',
      'Led stress testing campaigns that uncovered system capacity limits, resulting in 25–30% improved stability under peak load.',
      'Monitored production health via Splunk and CloudWatch; built dashboards with alerting for consistent job execution across releases.',
    ],
  },
  {
    company: 'Verafin (acquired by Nasdaq)',
    companyUrl: 'https://verafin.com',
    role: 'Software Developer',
    period: 'Sep 2020 – Nov 2023',
    location: 'Toronto, ON',
    current: false,
    bullets: [
      'Spearheaded ML-driven fraud detection for account openings using XGBoost — 95% accuracy, 40% reduction in fraudulent signups, millions in losses prevented.',
      'Rewrote Postgres fraud-analytics queries into distributed Spark Scala jobs, cutting execution time from 3 hours to 2 minutes.',
      'Led Champion vs. Challenger dataset analysis (Python + SQL), achieving 100% alignment between challenger models and production decisions before deployment.',
      'Modernized legacy fraud workflow systems, cutting technical debt and improving maintainability across the platform.',
    ],
  },
  {
    company: 'Verafin',
    companyUrl: 'https://verafin.com',
    role: 'Software Developer Intern',
    period: 'May – Aug 2020',
    location: "St. John's, NL",
    current: false,
    bullets: [
      'Led intern team building Data Validator microservice — achieved near-100% accuracy validating imported banking data from major core banking providers.',
      'Transformed 25+ SQL validation workflows into QueryDSL for seamless Java integration, saving 15+ hours of manual validation weekly.',
      'Developed 100+ JUnit/Mockito unit tests using TDD methodology, improving code reliability by 30%.',
    ],
  },
  {
    company: 'Larsen & Toubro',
    companyUrl: 'https://www.larsentoubro.com',
    role: 'Software Developer Intern',
    period: 'Dec 2017 – May 2018',
    location: 'Surat, India',
    current: false,
    bullets: [
      'Revamped legacy system into a scalable web and progressive web application (PWA) using C#, .NET, and MVC — boosting performance by 40% and user engagement by 35%.',
      'Designed and built RESTful APIs enabling cross-team integration, reducing service development time by 25%.',
    ],
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
          el.querySelectorAll('.reveal').forEach((child) =>
            child.classList.add('visible')
          );
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="relative py-28 bg-bg-primary">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-edge-light to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="reveal mb-16">
          <span className="font-mono text-xs text-mint uppercase tracking-[0.2em]">
            03 / Experience
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink-primary mt-3">
            Five years at the frontline
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 md:left-5 top-2 bottom-0 w-px timeline-line" />

          <div className="space-y-10">
            {EXPERIENCE.map((exp, i) => (
              <div
                key={`${exp.company}-${exp.role}`}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} relative pl-12 md:pl-16`}
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-1 w-7 h-7 md:w-10 md:h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    exp.current
                      ? 'bg-mint/15 border-mint/60 animate-glow-pulse'
                      : 'bg-bg-card border-edge-light'
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      exp.current ? 'bg-mint animate-pulse' : 'bg-ink-dim'
                    }`}
                  />
                </div>

                {/* Card */}
                <div className="card-base rounded-2xl p-5 md:p-7 group">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display font-bold text-lg text-ink-primary group-hover:text-mint transition-colors duration-300">
                          {exp.role}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full bg-mint/10 border border-mint/25 text-mint text-[10px] font-mono">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-ink-muted font-sans mt-0.5">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ink-dim whitespace-nowrap shrink-0 mt-1">
                      {exp.period}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-edge mb-4" />

                  {/* Bullets */}
                  <ul className="space-y-2.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="text-mint text-xs mt-1 shrink-0 font-mono">▹</span>
                        <p className="text-sm text-ink-dim font-sans leading-relaxed">{b}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
