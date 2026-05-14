import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Cpu,
  FileCheck,
  Flame,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import Button from "@/components/ui/button";
import { HomeHero } from "@/components/site/home-hero";
import { siteImages } from "@/data/site-images";

const solutions = [
  {
    title: "Offensive & defensive assessment",
    desc: "Structured testing for web systems, mobile apps, APIs, networks, and cloud footprints—with remediation support.",
    icon: Shield,
  },
  {
    title: "Industrial & embedded systems",
    desc: "Reviews for plants, utilities, and other uptime-sensitive environments where safety and availability dominate.",
    icon: Cpu,
  },
  {
    title: "Governance & compliance",
    desc: "ISO-style, sector, and privacy regimes translated into engineering tasks your teams can actually schedule.",
    icon: FileCheck,
  },
  {
    title: "Managed detection & response",
    desc: "Continuous monitoring, tuned detections, and escalation paths that match your internal ownership model.",
    icon: BarChart3,
  },
  {
    title: "Targeted programs",
    desc: "Crisis exercises, adversary emulation, executive briefings, and executive tabletop sessions when stakes spike.",
    icon: Flame,
  },
  {
    title: "Embedded expertise",
    desc: "Fractional leads and specialists so you can scale capacity without long hiring cycles or hollow vendor benches.",
    icon: Users,
  },
  {
    title: "Investigation & recovery",
    desc: "Structured incident work—from first response through evidence handling—to stabilize and learn from events.",
    icon: Zap,
  },
] as const;

const stats = [
  { n: "120+", label: "Completed assessments & remediation programs" },
  { n: "35+", label: "Organizations with long-running engagements" },
  { n: "<1h", label: "Target acknowledgement for P1 incidents on retainer" },
  { n: "3", label: "Regional hubs supporting delivery and training" },
];

const milestones = [
  {
    year: "2024",
    items: ["Published threat notes on payment-fraud chains affecting regional banks", "Expanded vendor-neutral training cohorts with partner universities"],
  },
  {
    year: "2021",
    items: ["Formalized cross-border incident coordination for multinational clients", "Shipped purple-team tooling templates for cloud-native stacks"],
  },
  {
    year: "2018",
    items: ["Stood up red-team and detection engineering under one roof", "Hosted first continent-wide blue-team exercise series"],
  },
  {
    year: "2015",
    items: ["Founded Nangsec with a mandate to pair rigorous testing with local context", "Early work focused on financial services and critical infrastructure"],
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      <HomeHero />

      {/* Capability grid — zinc-50 */}
      <section className="border-b border-zinc-200 bg-zinc-50 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">What we do</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 md:text-4xl">Programs shaped to your industry and estate</h2>
            <p className="mt-4 text-zinc-600">
              Mix project work, recurring testing, and managed operations—so leadership sees continuity instead of one-off PDF drops.
            </p>
          </div>
          <div className="relative mx-auto mt-10 aspect-[2.2/1] w-full max-w-5xl overflow-hidden rounded-2xl border border-zinc-200 shadow-md">
            <Image
              src={siteImages.networkAbstract}
              alt="Abstract network nodes representing interconnected systems under security monitoring"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {solutions.map((s) => (
              <div
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-red-200 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-100 bg-zinc-50 text-primary transition group-hover:border-red-100 group-hover:bg-red-50">
                  <s.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{s.desc}</p>
                <Link href="/services" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-red-700">
                  View services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients — white */}
      <section className="border-b border-zinc-200 py-14">
        <div className="container">
          <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Organizations we support</p>
              <h2 className="text-2xl font-semibold text-zinc-900 md:text-3xl">Teams that treat security as infrastructure, not a slide deck</h2>
            </div>
            <Link href="/company" className="text-sm font-semibold text-primary hover:text-red-700">
              Learn about our work →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {["vercel", "next", "globe", "window", "file", "vercel"].map((i, idx) => (
              <div
                key={`${i}-${idx}`}
                className="flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-6 shadow-sm grayscale transition hover:border-zinc-300 hover:grayscale-0"
              >
                <Image src={`/${i}.svg`} alt="" width={100} height={24} className="h-6 w-auto opacity-70" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats — light red tint */}
      <section className="border-b border-red-100 bg-gradient-to-b from-red-50/80 to-white py-14">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="text-4xl font-semibold tracking-tight text-primary md:text-5xl">{s.n}</p>
                <p className="mt-2 text-sm text-zinc-600">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services strip — zinc-50 */}
      <section className="border-b border-zinc-200 bg-zinc-50 py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Featured offerings</p>
              <h2 className="mt-2 text-3xl font-semibold text-zinc-900 md:text-4xl">From first test to continuous monitoring</h2>
              <p className="mt-3 text-zinc-600">
                Each line of business below connects to named deliverables and follow-up—you always know what “done” looks like.
              </p>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-zinc-900 hover:text-primary">
              Full service list
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {(
              [
                {
                  title: "Penetration testing",
                  desc: "Scoped adversarial testing for customer-facing apps, internal tools, and supporting infrastructure.",
                  image: siteImages.servicesHero,
                  alt: "Digital technology abstract — assessment and testing context",
                },
                {
                  title: "Managed SOC partnership",
                  desc: "Shared responsibility for alert triage, tuning, and escalation according to your internal ownership.",
                  image: siteImages.socOperations,
                  alt: "Operations room style security monitoring and response",
                },
                {
                  title: "Threat intelligence briefings",
                  desc: "Regional and sector-specific reporting with indicators your blue team can plug in quickly.",
                  image: siteImages.cloudSecurity,
                  alt: "Global digital infrastructure representing visibility and intelligence coverage",
                },
              ] as const
            ).map((card) => (
              <article key={card.title} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:border-red-200 hover:shadow-md">
                <div className="relative aspect-[16/10] w-full">
                  <Image src={card.image} alt={card.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-zinc-900">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{card.desc}</p>
                  <Link href="/services" className="mt-6 inline-block text-sm font-semibold text-primary hover:text-red-700">
                    Details →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Research — white */}
      <section className="border-b border-zinc-200 py-16 md:py-20">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="relative aspect-[16/9] w-full shrink-0">
              <Image
                src={siteImages.trainingLab}
                alt="Hands-on cybersecurity training and skills development session"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative p-8 md:p-10">
              <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-red-100/80 blur-3xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Training</p>
              <h2 className="mt-3 text-2xl font-semibold text-zinc-900 md:text-3xl">Skills programs for analysts, builders, and leaders</h2>
              <p className="mt-3 text-zinc-600">
                Hands-on cohorts and private classes that connect classroom lessons to tickets your team already files.
              </p>
              <Button className="mt-8 rounded-md font-semibold shadow-md shadow-red-200/60" asChild>
                <Link href="/training">Training catalog</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 shadow-sm">
            <div className="relative aspect-[16/9] w-full shrink-0">
              <Image
                src={siteImages.researchDesk}
                alt="Security research, analysis, and technical documentation workspace"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="relative p-8 md:p-10">
              <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-zinc-200/80 blur-3xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Research</p>
              <h2 className="mt-3 text-2xl font-semibold text-zinc-900 md:text-3xl">Notes and tooling from the field</h2>
              <p className="mt-3 text-zinc-600">
                Short studies, advisories, and lightweight utilities informed by investigations and testing—not recycled vendor fluff.
              </p>
              <Button variant="outline" className="mt-8 rounded-md border-zinc-300 bg-white font-semibold text-zinc-900 hover:bg-zinc-50" asChild>
                <Link href="/research">Browse outputs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story — zinc-50 */}
      <section className="border-b border-zinc-200 bg-zinc-50 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">How we grew</p>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-900 md:text-4xl">A practice rooted in Africa’s threat and opportunity landscape</h2>
              <p className="mt-4 text-zinc-600">
                Nangsec’s history is defined by long client relationships, transparent methods, and contributors who still work in live environments.
              </p>
              <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
                <Image
                  src={siteImages.companyTeam}
                  alt="Team collaboration and security leadership alignment session"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
            </div>
            <div className="space-y-8 lg:col-span-8">
              {milestones.map((m) => (
                <div key={m.year} className="grid gap-4 border-l-2 border-red-200 pl-6 md:grid-cols-[120px_1fr] md:gap-10">
                  <p className="text-2xl font-semibold text-zinc-900">{m.year}</p>
                  <ul className="space-y-2 text-sm text-zinc-600">
                    {m.items.map((it) => (
                      <li key={it} className="relative">
                        <span className="absolute -left-[29px] top-2 h-2 w-2 rounded-full bg-primary" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote — white */}
      <section className="border-b border-zinc-200 bg-white py-16">
        <div className="container">
          <blockquote className="mx-auto max-w-4xl rounded-2xl border border-zinc-200 bg-zinc-50 px-8 py-10 text-center md:px-12">
            <p className="text-xl font-medium leading-relaxed text-zinc-800 md:text-2xl">
              “Resilience has to work under your regulation, your talent pool, and your uptime reality. Nangsec exists to connect serious
              engineering discipline with that context—so security becomes something you operate, not something you outsource on paper.”
            </p>
            <footer className="mt-8">
              <p className="text-sm font-semibold text-zinc-900">Managing Director, Nangsec Technologies</p>
              <p className="text-xs uppercase tracking-widest text-zinc-500">Leadership</p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Strengths — white */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Why teams choose Nangsec</p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-900 md:text-4xl">Clear ownership, evidence you can trace, and no mystery process</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Depth you can verify",
                desc: "Named engineers on your statements of work, written methodologies, and sample redacted reports before kickoff.",
              },
              {
                title: "Grounded in live environments",
                desc: "Recommendations are filtered through what actually runs in your cloud, data center, and vendor ecosystem.",
              },
              {
                title: "Steady communication",
                desc: "Structured updates for technical owners, risk teams, and executives—without burying anyone in jargon or noise.",
              },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-zinc-900">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights — zinc-50 */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Library</p>
              <h2 className="mt-2 text-3xl font-semibold text-zinc-900">Fresh writing from our consultants</h2>
              <p className="mt-2 text-zinc-600">Short articles you can forward to engineering and risk peers.</p>
            </div>
            <Link href="/resources" className="font-semibold text-primary hover:text-red-700">
              Open resources →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {(
              [
                {
                  tag: "Architecture",
                  title: "Layering controls on high-volume APIs",
                  excerpt: "Rate limits, auth patterns, and abuse detection that survive real traffic—not just lab assumptions.",
                  image: siteImages.cloudSecurity,
                  alt: "Digital connectivity and API security context",
                },
                {
                  tag: "Detection",
                  title: "Signal-to-noise in busy SOCs",
                  excerpt: "Practical triage tweaks our analysts use to protect margin without hiding critical alerts.",
                  image: siteImages.socOperations,
                  alt: "Security monitoring and alert analysis",
                },
                {
                  tag: "Leadership",
                  title: "Questions boards should ask after a test",
                  excerpt: "A concise checklist to turn assessment output into funded remediation and tracked risk acceptance.",
                  image: siteImages.resourcesDocs,
                  alt: "Reviewing security documentation and governance materials",
                },
              ] as const
            ).map((post) => (
              <article key={post.title} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
                <div className="relative aspect-[16/10] w-full">
                  <Image src={post.image} alt={post.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">{post.tag}</p>
                  <h3 className="mt-2 text-lg font-semibold text-zinc-900">{post.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — white */}
      <section className="border-t border-zinc-200 py-16">
        <div className="container">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Client voices</p>
          <h2 className="mt-2 text-3xl font-semibold text-zinc-900">What partners say after the first renewal cycle</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              "The report mapped every finding to an owner and a sprint—our product and infra leads finally shared one backlog.",
              "Their SOC overlay gave us adult supervision on alerts without forcing us to rip out tooling we had already bought.",
              "Training felt like internal drills, not certification cramming. Our juniors could explain findings in stand-ups the next day.",
            ].map((quote, i) => (
              <div key={i} className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
                <p className="text-sm leading-relaxed text-zinc-700">“{quote}”</p>
                <p className="mt-6 text-sm font-semibold text-zinc-900">Security leadership</p>
                <p className="text-xs text-zinc-500">Technology & finance sectors · names withheld</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — soft red band */}
      <section className="border-t border-red-100 bg-gradient-to-r from-red-50 via-white to-red-50 py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-semibold text-zinc-900 md:text-4xl">Tell us what you are trying to defend next</h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            A scoping call is usually enough to map priorities, constraints, and a first milestone. No prerequisites beyond honesty about your
            stack.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild className="rounded-md px-8 font-semibold shadow-md shadow-red-200/80">
              <Link href="/contact">Request a consultation</Link>
            </Button>
            <Button variant="outline" asChild className="rounded-md border-zinc-300 bg-white font-semibold text-zinc-900 hover:bg-zinc-50">
              <Link href="/services">Review capabilities</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
