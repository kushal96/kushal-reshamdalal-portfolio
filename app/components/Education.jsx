'use client';

import { useEffect, useRef } from 'react';

const EDUCATION = [
  {
    degree: 'Master of Applied Computer Science',
    school: 'Dalhousie University',
    location: 'Halifax, Nova Scotia',
    period: '2019 – 2020',
    highlight: 'Graduated top of cohort',
    details: [
      'Focus areas: Data Management, Advanced Web Systems, Human-Computer Interaction',
      'Completed in under 2 years while building production-grade academic projects',
      'Transition from hardware-focused undergrad to full-stack systems engineering',
    ],
    badge: 'M.ACS',
    badgeColor: 'text-mint border-mint/30 bg-mint/[0.06]',
  },
  {
    degree: 'Bachelor of Technology — Computer Engineering',
    school: 'Chandubhai S. Patel Institute of Technology, CHARUSAT University',
    location: 'Gujarat, India',
    period: '2014 – 2018',
    highlight: null,
    details: [
      'Specialization in networking, systems programming, and embedded systems',
      'Published two peer-reviewed research papers during undergrad — IoT security and smart building cybersecurity',
      'Earned Cisco CCNA with a perfect score of 1000/1000',
    ],
    badge: 'B.Tech',
    badgeColor: 'text-steel border-steel/30 bg-steel/[0.06]',
  },
];

const PUBLICATIONS = [
  {
    title: 'A Comprehensive Study of Application Layer Protocols (ALP) for IoT Applications',
    type: 'Research Paper',
    desc: 'Analyzed MQTT, CoAP, AMQP and other ALP protocols across performance, security, and scalability dimensions for large-scale IoT deployments.',
  },
  {
    title: 'Cyber Security in Smart Buildings: An Assessment',
    type: 'Research Paper',
    desc: 'Evaluated attack surfaces and mitigation strategies in connected building infrastructure — BMS, HVAC, access control, and sensor networks.',
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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className="relative py-28 bg-bg-primary">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-edge-light to-transparent" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="reveal mb-16">
          <span className="font-mono text-xs text-mint uppercase tracking-[0.2em]">
            05 / Education
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-ink-primary mt-3">
            Academic foundation
          </h2>
        </div>

        {/* Degrees */}
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {EDUCATION.map((edu, i) => (
            <div
              key={edu.degree}
              className={`reveal reveal-delay-${i + 1} card-base rounded-2xl p-6 md:p-7 group`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <span
                  className={`font-mono text-xs px-3 py-1 rounded-full border ${edu.badgeColor} shrink-0`}
                >
                  {edu.badge}
                </span>
                <span className="font-mono text-xs text-ink-dim">{edu.period}</span>
              </div>

              <h3 className="font-display font-bold text-lg text-ink-primary leading-tight mb-1 group-hover:text-mint transition-colors duration-300">
                {edu.degree}
              </h3>

              <p className="text-sm text-ink-muted font-sans mb-1">{edu.school}</p>
              <p className="text-xs font-mono text-ink-dim mb-4">{edu.location}</p>

              {/* Highlight badge */}
              {edu.highlight && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-mint/[0.06] border border-mint/20 mb-5">
                  <span className="text-mint text-xs">★</span>
                  <span className="text-xs font-mono text-mint/90">{edu.highlight}</span>
                </div>
              )}

              {/* Details */}
              <div className="h-px bg-edge mb-4" />
              <ul className="space-y-2">
                {edu.details.map((d, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <span className="text-mint text-xs mt-1 shrink-0 font-mono">▹</span>
                    <p className="text-xs text-ink-dim font-sans leading-relaxed">{d}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Publications */}
        <div className="reveal reveal-delay-3">
          <p className="font-mono text-xs text-ink-dim uppercase tracking-widest mb-5">
            Peer-Reviewed Publications
          </p>
          <div className="space-y-4">
            {PUBLICATIONS.map((pub, i) => (
              <div
                key={pub.title}
                className={`reveal reveal-delay-${i + 4} flex gap-5 p-5 rounded-xl bg-bg-card border border-edge skill-pill cursor-default`}
              >
                <div className="shrink-0 mt-0.5">
                  <span className="font-mono text-[10px] px-2 py-1 rounded border border-ink-deep text-ink-dim">
                    {pub.type}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-ink-primary font-sans font-medium leading-snug mb-1.5">
                    {pub.title}
                  </p>
                  <p className="text-xs text-ink-dim font-sans leading-relaxed">{pub.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
