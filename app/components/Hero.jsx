'use client';

import { useEffect, useRef, useState } from 'react';

// Note: Transaction feed data below is entirely simulated for illustrative purposes.
const TRANSACTIONS = [
  'ACH_CREDIT | $4,872.00 | FLAGGED → CLEARED',
  'WIRE_TRANSFER | $128,500.00 | REVIEW_PENDING',
  'ACH_DEBIT | $892.50 | MODEL_SCORE: 0.03',
  'FRAUD_ALERT | $34,000.00 | BLOCKED ✗',
  'ACH_CREDIT | $1,250.00 | CLEARED ✓',
  'ML_INFERENCE | latency: 12ms | PASS',
  'ACCOUNT_OPEN | risk_score: 0.91 | REJECTED',
  'BATCH_JOB | records processed | COMPLETE',
  'ANOMALY_DETECT | pattern match | FLAGGED',
  'ACH_CREDIT | $7,300.00 | CLEARED ✓',
  'WIRE_TRANSFER | $450,000.00 | HOLD_REVIEW',
  'ML_PIPELINE | XGBoost | ACC: 95.1%',
  'ACH_DEBIT | $355.00 | MODEL_SCORE: 0.07',
  'FRAUD_RING | accounts | NEUTRALIZED',
  'SPARK_JOB | distributed | 2m 04s',
];

const STATS = [
  { value: '5+', label: 'Years in FinTech' },
  { value: '25+', label: 'Production Services' },
  { value: '95%', label: 'Model Accuracy' },
  { value: '99.9%', label: 'System Uptime' },
];

function AnimatedCounter({ target, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const numeric = parseFloat(target.replace(/[^0-9.]/g, ''));
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * numeric));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  const suffix = target.replace(/[0-9.]/g, '');
  return (
    <span ref={ref} className="font-display font-bold text-3xl md:text-4xl text-ink-primary">
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const doubled = [...TRANSACTIONS, ...TRANSACTIONS];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-bg-primary">
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-dot-grid" />

      {/* Radial glow from top */}
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      {/* Scan line effect */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-mint/20 to-transparent animate-scan pointer-events-none" />

      {/* Transaction feed — right side */}
      <div className="absolute right-0 top-0 bottom-0 w-72 lg:w-80 hidden lg:block">
        <div className="ticker-wrap h-full opacity-25 py-8">
          <div className="ticker-inner flex flex-col gap-3 pr-8 pl-4">
            {doubled.map((tx, i) => (
              <div
                key={i}
                className="font-mono text-[10px] text-mint/70 border-l border-mint/20 pl-3 py-1 whitespace-nowrap"
              >
                {tx}
              </div>
            ))}
          </div>
        </div>
        {/* fade right edge */}
        <div className="absolute inset-0 bg-gradient-to-l from-bg-primary via-transparent to-transparent pointer-events-none" />
        {/* Simulated data disclaimer */}
        <p className="absolute bottom-4 right-4 text-[9px] font-mono text-ink-deep/40 text-right">
          * Simulated data for illustrative purposes only
        </p>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div
            className={`mb-8 transition-all duration-700 delay-100 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mint/25 bg-mint/[0.06] text-mint text-xs font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
              Available for Senior Engineering Roles · Toronto, ON
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-display font-extrabold leading-[1.05] tracking-tight transition-all duration-700 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink-primary block">
              I build the systems
            </span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl block">
              that{' '}
              <span className="gradient-text glow-text">stop financial</span>
            </span>
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ink-primary block">
              crime at scale.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`mt-8 text-base md:text-lg text-ink-muted font-sans leading-relaxed max-w-2xl transition-all duration-700 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Senior Software Engineer at{' '}
            <span className="text-ink-primary font-medium">Nasdaq</span>,
            architecting high-throughput fraud detection engines, real-time
            transaction processors, and cloud-native microservices protecting
            thousands of financial institutions across North America.
          </p>

          {/* Tech stack tags */}
          <div
            className={`mt-6 flex flex-wrap gap-2 transition-all duration-700 delay-400 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {['Java', 'Spring Boot', 'AWS', 'Apache Spark', 'XGBoost', 'PostgreSQL', 'Terraform'].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md bg-bg-card border border-edge text-ink-dim text-xs font-mono"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 delay-500 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-mint text-bg-primary font-display font-bold text-sm tracking-wide transition-all duration-300 hover:bg-mint-dim hover:shadow-[0_0_30px_rgba(0,229,160,0.35)] hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-edge-light text-ink-muted font-sans text-sm transition-all duration-300 hover:border-mint/40 hover:text-mint hover:bg-mint/[0.06]"
            >
              Get in Touch →
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className={`mt-16 lg:mt-20 transition-all duration-700 delay-[600ms] ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-edge-light to-transparent mb-8" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="group">
                <AnimatedCounter target={stat.value} />
                <p className="mt-1 text-xs font-mono text-ink-dim uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] font-mono text-ink-dim uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-mint/60 to-transparent" />
      </div>
    </section>
  );
}
