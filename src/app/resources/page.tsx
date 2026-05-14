import Link from "next/link";
import { ArrowUpRight, BookOpen, FileStack, Newspaper } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { siteImages } from "@/data/site-images";

const cards = [
  {
    type: "Case write-up",
    title: "Shrinking dwell time in a payments integration layer",
    desc: "How one team closed visibility gaps by sequencing logging investments instead of buying another black box.",
    icon: FileStack,
  },
  {
    type: "Article",
    title: "Threat modeling APIs when traffic is spikey",
    desc: "A concise pattern language for engineers who need practical controls, not a 40-page STRIDE essay.",
    icon: Newspaper,
  },
  {
    type: "Walkthrough",
    title: "Purple exercise: stolen creds to cloud persistence",
    desc: "Lab notes with mitigations cross-walked to common control libraries your auditors already recognize.",
    icon: BookOpen,
  },
  {
    type: "Case write-up",
    title: "SOC uplift without doubling analyst headcount",
    desc: "Automation, tier design, and leadership metrics for a logistics group operating in multiple countries.",
    icon: FileStack,
  },
  {
    type: "Article",
    title: "Incident communications that survive regulatory glare",
    desc: "Sequencing legal, customer, and investor updates so technical facts stay consistent under pressure.",
    icon: Newspaper,
  },
  {
    type: "Walkthrough",
    title: "Kubernetes admission hardening in practical slices",
    desc: "Checklists sized for sprint work—so platform teams ship improvements every week, not once a year.",
    icon: BookOpen,
  },
] as const;

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Resources"
        title="Reference material you can send to engineering and risk in the same thread"
        description="These summaries are maintained by consultants—not a marketing-only team—so terminology stays aligned with how we deliver work."
        image={{
          src: siteImages.resourcesDocs,
          alt: "Technical documentation and guides for security teams",
        }}
      />

      <section className="bg-zinc-50 py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((c) => (
              <article
                key={c.title}
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:border-red-200 hover:shadow-md"
              >
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  <c.icon className="h-4 w-4 text-primary" strokeWidth={1.75} />
                  {c.type}
                </div>
                <h2 className="text-lg font-semibold text-zinc-900">{c.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">{c.desc}</p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-red-800"
                >
                  Ask for the full piece
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
