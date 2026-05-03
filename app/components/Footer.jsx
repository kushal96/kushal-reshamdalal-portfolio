export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-edge bg-bg-primary">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-lg bg-mint/10 border border-mint/25 flex items-center justify-center text-mint text-xs font-mono font-medium">
              KR
            </span>
            <span className="font-display text-sm text-ink-dim">
              Kushal Reshamdalal
            </span>
          </div>

          {/* Center */}
          <p className="font-mono text-[11px] text-ink-deep text-center">
            Built with Next.js · Tailwind CSS · Deployed with care
          </p>

          {/* Right */}
          <p className="font-mono text-[11px] text-ink-deep">
            © {year} · Toronto, ON
          </p>
        </div>
      </div>
    </footer>
  );
}
