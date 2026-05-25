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
      'Architected an EMR-based Lakehouse data pipeline streaming optimized Parquet outputs to S3 and RDS for fraud analytics, cutting end-to-end analysis time by 70%.',
      'Built an event-driven Java microservice on AWS Lambda processing millions of ACH transactions annually in real time, reducing fraud signal generation latency by 40%.',
      'Led architecture design sessions for 5+ enterprise financial clients, translating business requirements into backend specs and cutting design-to-delivery cycles by 25%.',
      'Mentored 6 engineers and co-ops through structured pairing and onboarding, cutting ramp-up time from 6 weeks to 3 and improving sprint throughput by 15%.',
      'Owned 24/7 on-call rotation via PagerDuty, triaging and resolving 50+ high-severity production incidents across distributed financial systems — cutting MTTR by 30%.',
      'Led cross-functional war rooms during 3+ critical production outages, driving root-cause analysis and hotfix deployment while maintaining 99.9% SLA uptime.',
      'Built 20+ technical runbooks, ADRs, and onboarding guides in Confluence, reducing new-hire ramp time by 30% and cutting repeated senior engineer escalations by 40%.',
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
      'Designed and shipped 25+ Java microservices and REST APIs on AWS (ECS, Lambda, API Gateway, DynamoDB, SQS), reducing on-call alert volume by 20% through improved fault tolerance and automated retries.',
      'Built Splunk and CloudWatch observability dashboards with automated alerting, reducing undetected production job failures by 40% and catching anomalies before they reached customers.',
      'Hardened the CI/CD release process by instituting multi-stage validation gates across Jenkins, Docker QA/staging, and RabbitMQ job checks — achieving zero failed production deployments over 6 months.',
      'Stepped up as acting tech lead for a 7-person squad during a 3-month leadership gap, maintaining sprint velocity and delivering every committed milestone on schedule.',
      'Diagnosed and resolved 30+ bugs including critical production defects impacting major banking clients, reducing customer-reported error rates by 35%.',
      'Automated AWS infrastructure provisioning across 10+ environments with Terraform, cutting deployment time by 60% and reducing cloud costs by 15% through right-sized resource allocation.',
      'Designed and ran load tests simulating peak payment processing volumes, uncovering 4 critical bottlenecks that once resolved improved system reliability by 25–30% under high load.',
      'Resolved high-severity backend failures for major banking clients, tracing root causes to misconfigured timeouts and unindexed queries — reducing API response latency by 20%.',
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
      'Rewrote slow Postgres queries as distributed Spark Scala jobs with intelligent caching, cutting fraud analytics runtime from 3 hours to under 2 minutes — enabling near-real-time fraud signal generation.',
      'Developed an XGBoost fraud detection model for new account openings achieving 95% accuracy, demonstrating significant potential to reduce fraudulent account openings by 60%.',
      'Validated fraud detection microservice outputs against Champion vs. Challenger spreadsheets using Python, SQL, and Excel, achieving 100% alignment with expected production baselines and supporting quarterly model refresh decisions.',
      'Migrated 3 legacy fraud detection modules from a monolith to a service-based architecture, eliminating 15K+ lines of deprecated code and cutting average feature delivery time by 30%.',
      'Introduced cross-squad code review standards adopted across 4 engineering teams, reducing post-merge production defects by 20% and cutting average review turnaround from 2 days to same-day.',
      'Automated recurring fraud data validation and system monitoring with shell scripts, eliminating 8+ hours of weekly manual effort and reducing human-caused monitoring errors by 90%.',
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
      'Led a 4-person intern team to build Data Validator from scratch, achieving 99%+ accuracy across 10+ banking schemas and eliminating manual senior-engineer QA each release.',
      'Converted 25+ manual SQL validation workflows into type-safe QueryDSL queries integrated with the Java backend, eliminating 15+ hours of weekly manual QA effort.',
      'Applied TDD to write 100+ JUnit/Mockito unit tests, increasing code coverage from ~40% to 85% and reducing post-deploy bug reports by 30%.',
      'Presented Data Validator outcomes to Engineering, QA, and Data stakeholders, driving adoption across 3 departments and accelerating production rollout by 2 weeks ahead of schedule.',
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
      'Built 10+ RESTful APIs with shared backend abstractions used across 3 internal teams, reducing new service development time by 25%.',
      'Rebuilt a legacy enterprise system into a full-stack PWA using C#, .NET MVC, and MySQL for 5 departments — improving system performance by 40% and user engagement by 35%.',
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
