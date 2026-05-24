import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import attorney1 from "@/assets/attorney-1.jpg";
import attorney2 from "@/assets/attorney-2.jpg";
import attorney3 from "@/assets/attorney-3.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { label: "Practice", href: "#services" },
  { label: "Counsel", href: "#attorneys" },
  { label: "Outcomes", href: "#stats" },
  { label: "Insights", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const SERVICES = [
  { num: "01", title: "Corporate & M&A", desc: "Cross-border transactions, joint ventures, and complex restructurings for institutions and family offices." },
  { num: "02", title: "Private Wealth", desc: "Discreet succession planning, fiduciary structures, and intergenerational wealth strategy." },
  { num: "03", title: "Litigation & Disputes", desc: "High-stakes commercial litigation and international arbitration before the world's leading tribunals." },
  { num: "04", title: "Capital Markets", desc: "IPOs, debt offerings, and regulatory counsel across NYSE, LSE, and SGX listings." },
  { num: "05", title: "Intellectual Property", desc: "Patent, trademark, and trade secret strategy for technology and luxury brands." },
  { num: "06", title: "Regulatory & Compliance", desc: "Sanctions, AML, and white-collar defense for executives and multinational enterprises." },
];

const ATTORNEYS = [
  { name: "Jonathan Ashford", title: "Founding Partner", focus: "Mergers & Acquisitions", img: attorney1, bio: "Three decades advising sovereign funds and Fortune 100 boards on transformational deals." },
  { name: "Eleanor Vale", title: "Managing Partner", focus: "International Arbitration", img: attorney2, bio: "Lead counsel in over forty ICC and SIAC proceedings with combined value exceeding $14B." },
  { name: "Wei Chen", title: "Senior Partner", focus: "Capital Markets, APAC", img: attorney3, bio: "Architect of landmark dual-listings between Singapore and New York exchanges." },
];

const STATS = [
  { value: "$48B+", label: "Transactions advised" },
  { value: "97%", label: "Favorable outcomes" },
  { value: "32", label: "Jurisdictions" },
  { value: "1987", label: "Established" },
];

const TESTIMONIALS = [
  { quote: "Their command of cross-border structuring is unmatched. Ashford & Vale closed in six weeks what others promised in six months.", author: "CEO, Sovereign Wealth Fund" },
  { quote: "A firm of remarkable discretion and surgical precision. The only call to make when the stakes are existential.", author: "Chairman, FTSE 100 Conglomerate" },
  { quote: "Eleanor and her team transformed a hostile arbitration into a decisive victory. Worth every hour, twice over.", author: "Founder, Private Equity Group" },
];

const FAQS = [
  { q: "Do you take on individual clients?", a: "Yes. We represent founders, executives, principals, and ultra-high-net-worth individuals on matters where precision and discretion are paramount." },
  { q: "What is your engagement model?", a: "We work on fixed-fee retainers, hourly engagements, and success-based structures for transactional and litigation work. Every engagement begins with a confidential consultation." },
  { q: "Where are your offices?", a: "New York, London, Singapore, and Dubai — with co-counsel relationships in twenty-eight additional jurisdictions." },
  { q: "How quickly can we begin?", a: "Initial counsel is typically available within forty-eight hours of your inquiry. Time-critical matters are triaged immediately." },
  { q: "Is the consultation confidential?", a: "Absolutely. All communications are protected under attorney-client privilege from the moment of first contact." },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <Marquee />
      <Services />
      <Stats />
      <Attorneys />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}

function Monogram() {
  return (
    <a href="#top" className="flex items-center gap-3 group">
      <span className="font-serif text-gold text-2xl leading-none">A<span className="text-foreground/70">&amp;</span>V</span>
      <span className="hidden sm:block text-[10px] tracking-[0.3em] text-muted-foreground uppercase border-l border-border pl-3">
        Est. 1987
      </span>
    </a>
  );
}

function Header() {
  return (
    <header id="top" className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Monogram />
        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-gold transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#consultation" className="text-xs tracking-[0.2em] uppercase border border-gold/60 text-gold px-5 py-3 hover:bg-gold hover:text-primary-foreground transition-all duration-300">
          Consultation
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Elite law firm office at dusk" width={1920} height={1080} className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/45 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/30 to-transparent" />
        <div className="absolute top-1/3 -left-40 w-[700px] h-[700px] rounded-full blur-3xl opacity-40" style={{ background: "radial-gradient(circle, oklch(0.78 0.13 80 / 0.25), transparent 60%)" }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30" style={{ background: "radial-gradient(circle, oklch(0.78 0.13 80 / 0.2), transparent 60%)" }} />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full">
        <div className="max-w-3xl">
          <p className="reveal text-xs tracking-[0.4em] uppercase text-gold mb-8 flex items-center gap-4">
            <span className="w-12 h-px bg-gold" /> Counsel of Consequence
          </p>
          <h1 className="reveal reveal-delay-1 font-serif text-5xl sm:text-6xl lg:text-8xl leading-[0.95] tracking-tight mb-8 gold-glow-text">
            Discretion.<br />
            <span className="gold-shimmer italic">Precision.</span><br />
            Conviction.
          </h1>
          <p className="reveal reveal-delay-2 text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12 font-light">
            For nearly four decades, Ashford &amp; Vale has represented the world's most consequential institutions and individuals in matters where ordinary counsel will not suffice.
          </p>
          <div className="reveal reveal-delay-3 flex flex-col sm:flex-row gap-4">
            <a href="#consultation" className="btn-luxe group inline-flex items-center justify-center gap-3 bg-gold text-primary-foreground px-8 py-4 text-xs tracking-[0.25em] uppercase">
              Request Private Consultation
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#services" className="btn-luxe inline-flex items-center justify-center gap-3 border border-gold/40 bg-background/40 backdrop-blur-sm px-8 py-4 text-xs tracking-[0.25em] uppercase text-foreground hover:border-gold hover:text-gold">
              Areas of Practice
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-muted-foreground">
        New York · London · Singapore · Dubai
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Chambers Global Band 1", "Legal 500 Elite", "Financial Times Innovative Lawyers", "IFLR Firm of the Year", "Benchmark Litigation Tier 1"];
  return (
    <div className="border-y border-border bg-card/30 py-6 overflow-hidden">
      <div className="flex gap-16 animate-[shimmer_40s_linear_infinite] whitespace-nowrap" style={{ animation: "marquee 40s linear infinite" }}>
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-xs tracking-[0.3em] uppercase text-muted-foreground flex items-center gap-16">
            <span className="w-1 h-1 bg-gold rounded-full" />
            {item}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }`}</style>
    </div>
  );
}

function SectionLabel({ eyebrow, title, kicker }: { eyebrow: string; title: string; kicker?: string }) {
  return (
    <div className="mb-20">
      <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6 flex items-center gap-4">
        <span className="w-12 h-px bg-gold" /> {eyebrow}
      </p>
      <h2 className="font-serif text-4xl lg:text-6xl tracking-tight max-w-3xl leading-[1.05]">{title}</h2>
      {kicker && <p className="mt-6 max-w-xl text-muted-foreground text-lg font-light leading-relaxed">{kicker}</p>}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <SectionLabel
        eyebrow="Practice Areas"
        title="Six disciplines. One standard of excellence."
        kicker="Each engagement is led by a partner and staffed with the precision of a boutique, with the resources of a global firm."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {SERVICES.map((s) => (
          <article key={s.num} className="group bg-background p-10 hover:bg-card transition-colors duration-500 cursor-default">
            <div className="flex items-start justify-between mb-12">
              <span className="font-serif text-sm text-gold tracking-[0.3em]">{s.num}</span>
              <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500">→</span>
            </div>
            <h3 className="font-serif text-2xl mb-4 group-hover:text-gold transition-colors">{s.title}</h3>
            <p className="text-muted-foreground font-light leading-relaxed text-sm">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section id="stats" className="py-32 px-6 lg:px-12 border-y border-border bg-card/40">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">By the Measure</p>
          <h2 className="font-serif text-3xl lg:text-5xl tracking-tight">A record written in outcomes.</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {STATS.map((s) => (
            <div key={s.label} className="bg-background p-10 lg:p-14 text-center">
              <div className="font-serif text-5xl lg:text-7xl gold-gradient mb-4">{s.value}</div>
              <div className="text-[10px] tracking-[0.35em] uppercase text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Attorneys() {
  return (
    <section id="attorneys" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <SectionLabel
        eyebrow="The Counsel"
        title="Partners who answer directly."
        kicker="No layers. No proxies. Every matter is led by a named partner with personal accountability for the outcome."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {ATTORNEYS.map((a) => (
          <article key={a.name} className="group">
            <div className="relative overflow-hidden aspect-[4/5] mb-6 bg-card">
              <img
                src={a.img}
                alt={a.name}
                loading="lazy"
                width={800}
                height={1024}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold">{a.focus}</span>
              </div>
            </div>
            <h3 className="font-serif text-2xl mb-1">{a.name}</h3>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">{a.title}</p>
            <p className="text-sm text-muted-foreground font-light leading-relaxed">{a.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 lg:px-12 border-y border-border bg-card/40">
      <div className="max-w-7xl mx-auto">
        <SectionLabel eyebrow="In Confidence" title="What our clients quietly say." />
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {TESTIMONIALS.map((t, i) => (
            <blockquote key={i} className="bg-background p-10 lg:p-12 flex flex-col">
              <span className="font-serif text-6xl text-gold leading-none mb-6">&ldquo;</span>
              <p className="font-serif text-xl lg:text-2xl leading-snug mb-8 flex-1 italic font-light">{t.quote}</p>
              <div className="hairline w-16 mb-4" />
              <cite className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground not-italic">{t.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="consultation" className="py-32 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto relative">
        <div className="absolute -inset-px bg-gradient-to-br from-gold/40 via-transparent to-gold/20" />
        <div className="relative bg-card p-12 lg:p-20 border border-gold/30">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">Begin in Confidence</p>
              <h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-6 leading-[1.05]">
                Request a private<br /><span className="italic gold-gradient">consultation.</span>
              </h2>
              <p className="text-muted-foreground font-light text-lg max-w-md leading-relaxed">
                A senior partner will respond within forty-eight hours. All inquiries are protected under attorney-client privilege.
              </p>
            </div>
            <form className="lg:col-span-2 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <Field label="Full Name" type="text" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@firm.com" />
              <Field label="Matter (Brief)" type="text" placeholder="One line, in confidence" />
              <button className="w-full bg-gold text-primary-foreground py-4 text-xs tracking-[0.3em] uppercase hover:bg-gold/90 transition-colors">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <label className="block">
      <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2 block">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-border focus:border-gold py-3 outline-none text-foreground placeholder:text-muted-foreground/50 transition-colors"
      />
    </label>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-32 px-6 lg:px-12 max-w-5xl mx-auto">
      <SectionLabel eyebrow="Questions" title="Considered answers." />
      <div className="border-t border-border">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between py-8 text-left group"
              >
                <span className="font-serif text-xl lg:text-2xl group-hover:text-gold transition-colors pr-8">{f.q}</span>
                <span className={`text-gold text-2xl font-light transition-transform duration-500 shrink-0 ${isOpen ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="text-muted-foreground font-light leading-relaxed max-w-2xl">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-6 lg:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Monogram />
            <p className="mt-6 text-sm text-muted-foreground font-light max-w-sm leading-relaxed">
              Ashford &amp; Vale LLP. A global legal consultancy serving those for whom precision is non-negotiable.
            </p>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Offices</p>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li>432 Park Avenue, New York</li>
              <li>1 Finsbury Square, London</li>
              <li>Marina Bay, Singapore</li>
              <li>DIFC, Dubai</li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-gold mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-muted-foreground font-light">
              <li>+1 (212) 555 0148</li>
              <li>counsel@ashfordvale.law</li>
              <li>By appointment only</li>
            </ul>
          </div>
        </div>
        <div className="hairline mb-8" />
        <div className="flex flex-col md:flex-row justify-between gap-4 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
          <span>© 2026 Ashford &amp; Vale LLP</span>
          <span>Attorney Advertising · Prior results do not guarantee a similar outcome</span>
        </div>
      </div>
    </footer>
  );
}
