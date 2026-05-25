'use client';

import { useEffect, useRef } from 'react';

const SKILL_GROUPS = [
  {
    category: 'Backend & Languages',
    icon: '⚙',
    accent: 'mint',
    skills: [
      'Java', 'Spring Boot', 'Scala', 'Python', 'Node.js',
      'C#', '.NET', 'RESTful APIs', 'GraphQL', 'Multithreading',
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁',
    accent: 'steel',
    skills: [
      'AWS Lambda', 'AWS ECS', 'AWS EMR', 'AWS S3', 'AWS DynamoDB',
      'AWS SQS', 'AWS API Gateway', 'Terraform', 'Docker',
      'Kubernetes', 'Jenkins', 'GitHub Actions', 'CI/CD',
    ],
  },
  {
    category: 'Data & Machine Learning',
    icon: '◈',
    accent: 'amber',
    skills: [
      'Apache Spark', 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
      'XGBoost', 'Pandas', 'NumPy', 'Scikit-Learn', 'QueryDSL',
      'AWS Glue', 'Parquet', 'Big Data',
    ],
  },
  {
    category: 'Observability & Practices',
    icon: '◉',
    accent: 'purple',
    skills: [
      'Splunk', 'CloudWatch', 'PagerDuty', 'RabbitMQ', 'Kafka',
      'TDD', 'JUnit', 'Mockito', 'PyTest', 'Code Review',
      'Microservices', 'Event-Driven Architecture',
    ],
  },
];

const ACCENT_STYLES = {
  mint: {
    icon: 'text-mint',
    border: 'border-mint/20',
    header: 'text-mint',
    pill: 'border-edge text-ink-dim hover:border-mint/40 hover:text-mint hover:bg-mint/[0.06]',
  },
  steel: {
    icon: 'text-steel',
    border: 'border-steel/20',
    header: 'text-steel',
    pill: 'border-edge text-ink-dim hover:border-steel/40 hover:text-steel hover:bg-steel/[0.06]',
  },
  amber: {
    icon: 'text-amber-400',
    border: 'border-amber-400/20',
    header: 'text-amber-400',
    pill: 'border-edge text-ink-dim hover:border-amber-400/40 hover:text-amber-400 hover:bg-amber-400/[0.06]',
  },
  purple: {
    icon: 'text-purple-400',
    border: 'border-purple-400/20',
    header: 'text-purple-400',
    pill: 'border-edge text-ink-dim hover:border-purple-400/40 hover:text-purple-400 hover:bg-purple-400/[0.06]',
  },
};

const CERTS = [
  { name: 'DAQ Excellence Award — Nasdaq', detail: 'Earned multiple times for delivering high-priority solutions ahead of deadline' },
  { name: 'CCNA', detail: 'Cisco — Perfect Score 1000/1000' },
  { name: 'IoT Security Research', detail: 'Published: Application Layer Protocols for IoT' },
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="relative py-28 bg-bg-secondary">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-edge-light to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-edge-light to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="reveal mb-16">
          <span className="font-mono text-xs text-mint uppercase tracking-[0.2em]">
            05 / Education
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink-primary mt-3">
            The full toolkit
          </h2>
        </div>

        {/* Skill groups grid */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {SKILL_GROUPS.map((group, i) => {
            const style = ACCENT_STYLES[group.accent];
            return (
              <div
                key={group.category}
                className={`reveal reveal-delay-${i + 1} card-base rounded-2xl p-6 border ${style.border}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className={`text-xl font-mono ${style.icon}`}>{group.icon}</span>
                  <h3 className={`font-display font-bold text-sm uppercase tracking-wider ${style.header}`}>
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-pill px-3 py-1.5 rounded-lg border bg-bg-primary text-xs font-mono cursor-default transition-all duration-200 ${style.pill}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications & Recognition */}
        <div className="reveal reveal-delay-5">
          <p className="font-mono text-xs text-ink-dim uppercase tracking-widest mb-4">
            Certifications &amp; Recognition
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CERTS.map((cert) => (
              <div
                key={cert.name}
                className="flex items-start gap-3 px-4 py-3 rounded-xl bg-bg-card border border-edge skill-pill cursor-default"
              >
                <span className="text-mint text-xs mt-0.5 font-mono shrink-0">✦</span>
                <div>
                  <p className="text-xs text-ink-primary font-sans font-medium leading-tight">
                    {cert.name}
                  </p>
                  <p className="text-[11px] text-ink-dim font-mono mt-0.5">{cert.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
