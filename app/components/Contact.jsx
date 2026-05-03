'use client';

import { useEffect, useRef, useState } from 'react';

const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'kushalr1096@gmail.com',
    href: 'mailto:kushalr1096@gmail.com',
    icon: '✉',
    description: 'Fastest path to a conversation',
  },
  {
    label: 'LinkedIn',
    value: '/in/kushal96',
    href: 'https://www.linkedin.com/in/kushal96',
    icon: '◈',
    description: 'Full professional background',
  },
  {
    label: 'GitHub',
    value: 'github.com/kushal96',
    href: 'https://github.com/kushal96',
    icon: '◉',
    description: 'Code, projects, contributions',
  },
  {
    label: 'LeetCode',
    value: 'leetcode.com/reshamdalal',
    href: 'https://leetcode.com/reshamdalal/',
    icon: '⚡',
    description: 'Algorithm problem solving',
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="text-[10px] font-mono text-ink-dim hover:text-mint transition-colors duration-200 px-2 py-0.5 rounded border border-transparent hover:border-mint/20"
    >
      {copied ? '✓ copied' : 'copy'}
    </button>
  );
}

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="relative py-28 bg-bg-primary overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-edge-light to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-mint/[0.04] via-transparent to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="reveal mb-16">
          <span className="font-mono text-xs text-mint uppercase tracking-[0.2em]">
            06 / Contact
          </span>
        </div>

        <div className="max-w-3xl">
          {/* Main CTA */}
          <div className="reveal">
            <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-ink-primary leading-[1.05] tracking-tight mb-6">
              Let&apos;s build
              <br />
              <span className="gradient-text">something</span>
              <br />
              that matters.
            </h2>
          </div>

          <p className="reveal reveal-delay-1 text-ink-muted text-base leading-relaxed font-sans mb-12 max-w-lg">
            Open to senior engineering and staff engineer roles in fintech, fraud prevention, and 
            high-scale backend systems. Based in Toronto — eligible for TN, no sponsorship required.
          </p>

          {/* Contact cards */}
          <div className="reveal reveal-delay-2 grid sm:grid-cols-2 gap-3 mb-10">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-5 rounded-xl bg-bg-card border border-edge hover:border-mint/40 hover:bg-bg-hover transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,229,160,0.07)]"
              >
                <span className="text-xl text-ink-dim group-hover:text-mint transition-colors duration-300 mt-0.5">
                  {link.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-mono text-[10px] text-ink-dim uppercase tracking-widest">
                      {link.label}
                    </p>
                    {link.label === 'Email' && <CopyButton text={link.value} />}
                  </div>
                  <p className="text-sm text-ink-primary font-sans truncate mt-0.5 group-hover:text-mint transition-colors duration-200">
                    {link.value}
                  </p>
                  <p className="text-xs text-ink-dim font-sans mt-1">{link.description}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Primary CTA button */}
          <div className="reveal reveal-delay-3 flex flex-wrap gap-4">
            <a
              href="mailto:kushalr1096@gmail.com"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-mint text-bg-primary font-display font-bold text-sm tracking-wide transition-all duration-300 hover:bg-mint-dim hover:shadow-[0_0_40px_rgba(0,229,160,0.4)] hover:-translate-y-0.5"
            >
              Start a Conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/kushal96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-edge-light text-ink-muted text-sm font-sans hover:border-mint/40 hover:text-mint transition-all duration-300"
            >
              Connect on LinkedIn
            </a>
          </div>

          {/* Location note */}
          <p className="reveal reveal-delay-4 mt-10 text-xs font-mono text-ink-deep">
            Toronto, Ontario · Canadian Citizen · TN Eligible · No Sponsorship Required
          </p>
        </div>
      </div>
    </section>
  );
}
