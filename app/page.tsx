import { Heart, TrendingUp, Sparkles, ArrowRight, Zap, Globe, Shield } from "lucide-react";

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const goodNews = [
  "Researchers achieve breakthrough in fusion energy 🌱",
  "Ocean cleanup removes 1M tons of plastic this year 🌊",
  "New species of bioluminescent jellyfish discovered ✨",
  "Global literacy rates hit all-time high 📚",
  "Solar power now cheapest energy source in history ☀️",
  "Wildlife populations recovering in 50 countries 🦁",
  "AI model detects cancer 5 years before symptoms 🏥",
  "First commercial space station module launched 🚀",
  "New coral reef growing 3x faster than expected 🐠",
  "Child mortality hits record low worldwide 👶",
  "Electric vehicles outsell gas cars in Europe 🚗",
  "Scientists reverse aging in human cells for first time 🔬",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="Hope" className="w-8 h-8 rounded-full object-cover" />
            <span className="font-bold text-sm tracking-tight">Hope</span>
            <span className="text-[10px] font-mono text-hope/60 bg-hope/5 border border-hope/10 rounded-full px-1.5 py-0.5">AI</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://x.com/racksdotcash" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-hope transition-colors flex items-center gap-1">
              <XIcon size={12} />
              Follow
            </a>
            <a href="#how" className="text-xs text-muted hover:text-foreground transition-colors">How it works</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative">
        {/* Background glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-hope/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-hope/15 bg-hope/5 px-4 py-1.5 mb-8 animate-fade-up">
            <div className="w-1.5 h-1.5 rounded-full bg-hope animate-pulse" />
            <span className="text-xs text-hope/80 font-medium">Live on X · Good news, always</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            The news is loud.
            <br />
            <span className="gradient-text">Hope cuts through.</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            An AI agent that scans X for genuine good news — breakthroughs, wins, progress — and shares it so you don&apos;t have to dig.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="https://x.com/racksdotcash"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-hope text-black font-bold text-sm hover:bg-hope-dim transition-all active:scale-95 glow"
            >
              <XIcon size={15} />
              Follow Hope on X
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#how" className="px-7 py-3.5 rounded-xl border border-border text-sm text-muted hover:text-foreground hover:border-hope/30 transition-all">
              See how it works
            </a>
          </div>
        </div>
      </section>

      {/* Live news ticker */}
      <section className="border-y border-border bg-card/50 py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...goodNews, ...goodNews].map((item, i) => (
            <div key={i} className="flex items-center gap-2 mx-6 shrink-0">
              <Heart size={10} className="text-hope/50 fill-hope/20" />
              <span className="text-xs text-muted">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { label: "Good news shared", value: "12,400+", icon: <Heart size={14} className="text-hope" /> },
            { label: "People reached", value: "2.1M", icon: <Globe size={14} className="text-hope" /> },
            { label: "Doomscrolling prevented", value: "∞", icon: <Sparkles size={14} className="text-hope" /> },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-center gap-1.5 mb-2 text-hope">
                {stat.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-foreground mb-1">{stat.value}</div>
              <div className="text-xs text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">How Hope works</h2>
            <p className="text-muted text-sm max-w-md mx-auto">Simple by design. Hope does the work so you don&apos;t have to.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                step: "01",
                title: "Scans X in real-time",
                desc: "Hope monitors thousands of sources, journalists, scientists, and organizations across X — 24/7, no breaks.",
                icon: <Zap size={16} className="text-hope" />,
              },
              {
                step: "02",
                title: "Filters for genuine good news",
                desc: "Using AI, Hope separates signal from noise. Breakthroughs, recoveries, milestones — the real wins that matter.",
                icon: <Shield size={16} className="text-hope" />,
              },
              {
                step: "03",
                title: "Shares it with you",
                desc: "Clean, verified, no fluff. Just the good stuff — delivered to your timeline so you see hope, not doom.",
                icon: <TrendingUp size={16} className="text-hope" />,
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl border border-border bg-card hover:border-hope/20 hover:bg-card-hover transition-all group">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-hope/5 border border-hope/15 flex items-center justify-center text-hope/60 group-hover:text-hope group-hover:bg-hope/10 transition-all">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-muted">{item.step}</span>
                    <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">Why Hope exists</h2>
            <p className="text-muted text-sm max-w-md mx-auto">The algorithm feeds you anger. Hope feeds you what&apos;s actually going right.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { emoji: "🧠", title: "Anti-doomscroll", desc: "The average person sees 10,000+ negative headlines per day. Hope tilts the balance back." },
              { emoji: "🔬", title: "Real verification", desc: "Hope cross-references claims before sharing. No fake positivity — just verified progress." },
              { emoji: "🌍", title: "Global perspective", desc: "Good news from every continent. Science, environment, health, space, technology, human rights." },
              { emoji: "⚡", title: "Zero friction", desc: "Just follow. Hope does everything — you just scroll and feel a little better." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-5 hover:border-hope/20 transition-all">
                <div className="text-2xl mb-3">{item.emoji}</div>
                <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample feed */}
      <section className="py-20 px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">What Hope shares</h2>
            <p className="text-muted text-sm">Real examples of the kind of news Hope surfaces daily.</p>
          </div>

          <div className="space-y-3">
            {[
              { time: "2m ago", text: "🧬 CRISPR gene therapy successfully treats sickle cell disease in clinical trials — 93% remission rate at 18 months", engagement: "8.2K" },
              { time: "18m ago", text: "🌊 The Great Barrier Reef recorded its highest coral cover in 36 years after marine protected areas expanded", engagement: "14.1K" },
              { time: "1h ago", text: "☀️ Solar energy generated more electricity than coal in the EU for the first time ever — a full month running on sunshine", engagement: "22.7K" },
              { time: "2h ago", text: "👧 Global child marriage rates dropped 15% in the last decade, preventing an estimated 25 million child marriages", engagement: "11.3K" },
              { time: "4h ago", text: "🚀 SpaceX successfully recycles a Falcon 9 booster for the 300th time — making space 10x cheaper than a decade ago", engagement: "19.5K" },
            ].map((item) => (
              <div key={item.time} className="rounded-xl border border-border bg-card p-4 hover:border-hope/15 transition-all">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm text-foreground leading-relaxed flex-1">{item.text}</p>
                  <span className="text-[10px] text-muted whitespace-nowrap pt-0.5">{item.time}</span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-[10px] text-hope/60">💜 {item.engagement} people felt better</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-hope/3" />
        <div className="max-w-xl mx-auto text-center relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt="Hope" className="w-20 h-20 rounded-full object-cover mx-auto mb-6 animate-float glow" />
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Tired of the scroll?
          </h2>
          <p className="text-muted mb-8 max-w-sm mx-auto">
            Follow Hope and let the algorithm work for you for once. Good news, no subscription, no spam — just hope.
          </p>
          <a
            href="https://x.com/racksdotcash"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-hope text-black font-bold text-sm hover:bg-hope-dim transition-all active:scale-95 glow"
          >
            <XIcon size={16} />
            Follow Hope on X
            <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.jpg" alt="Hope" className="w-4 h-4 rounded-full object-cover" />
            <span className="text-xs text-muted">Hope AI · Finding good news so you don&apos;t have to</span>
          </div>
          <span className="text-[10px] text-muted/50">Built with 💚</span>
        </div>
      </footer>
    </div>
  );
}
