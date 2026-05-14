import Link from "next/link";
import { Download, FileText, LineChart } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { siteImages } from "@/data/site-images";

const items = [
  {
    type: "Brief" as const,
    title: "Pressure on continent-wide payment switches",
    abstract: "Observation from exercises and assessments focused on settlement windows, third-party connectors, and fraud adjacent abuse.",
    icon: LineChart,
  },
  {
    type: "Guide" as const,
    title: "Standing up detection with limited analysts",
    abstract: "Triage patterns and tooling choices Nangsec uses when teams cannot yet staff a 24/7 floor.",
    icon: FileText,
  },
  {
    type: "Note" as const,
    title: "Signals that precede mobile-wallet takeovers",
    abstract: "Monitoring and customer-education pairs that reduce account-loss cycles without blocking legitimate traffic.",
    icon: FileText,
  },
  {
    type: "Toolkit" as const,
    title: "Starter queries for multi-cloud estates",
    abstract: "Baseline queries and tagging rules you can adapt for sovereign or regulated environments.",
    icon: Download,
  },
  {
    type: "Brief" as const,
    title: "Lateral movement patterns in hybrid workplaces",
    abstract: "Correlations from tabletop and assumed-breach work with actionable containment ordering.",
    icon: LineChart,
  },
  {
    type: "Guide" as const,
    title: "Explaining residual risk without hiding behind heatmaps",
    abstract: "How we translate technical testing into funding decisions leadership can defend to boards and regulators.",
    icon: FileText,
  },
] as const;

export default function ResearchPage() {
  return (
    <div className="bg-zinc-50">
      <PageHero
        eyebrow="Research"
        title="Short-form intelligence from the work we do every week"
        description="These pieces condense patterns our teams see on assessments and retainer engagements—edited so practitioners can act, not just read."
        image={{
          src: siteImages.researchDesk,
          alt: "Researcher analyzing security data and preparing technical notes",
        }}
      />

      <section className="border-b border-zinc-200 bg-white py-8">
        <div className="container flex flex-wrap gap-3">
          {["All", "Brief", "Guide", "Note", "Toolkit"].map((t, i) => (
            <button
              key={t}
              type="button"
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest transition ${
                i === 0
                  ? "border-primary/40 bg-red-50 text-primary"
                  : "border-zinc-200 text-zinc-500 hover:border-zinc-300 hover:text-zinc-800"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:border-red-200 hover:shadow-md"
            >
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <item.icon className="h-4 w-4" strokeWidth={1.75} />
                {item.type}
              </div>
              <h2 className="text-lg font-semibold text-zinc-900">{item.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">{item.abstract}</p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-red-800">
                Request access
                <Download className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
