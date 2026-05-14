import Link from "next/link";
import { Building2, HeartHandshake, Star, Users2 } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { siteImages } from "@/data/site-images";

const blocks = [
  {
    title: "Mission",
    desc: "Nangsec helps African enterprises and public institutions adopt security capabilities that survive board scrutiny, auditor review, and day-to-day shipping pressure.",
    icon: Building2,
  },
  {
    title: "Leadership",
    desc: "Executives stay close to delivery—reviewing methodologies, staffing choices, and escalations instead of delegating everything to a faceless account layer.",
    icon: Users2,
  },
  {
    title: "Careers",
    desc: "We recruit seasoned testers, detection engineers, incident responders, and advisors who want accountability for outcomes, not ticket counts alone.",
    icon: Star,
  },
  {
    title: "Partners",
    desc: "Cloud providers, academic programs, and specialist vendors plug into our engagements when they improve client results—never as mandatory resale.",
    icon: HeartHandshake,
  },
] as const;

export default function CompanyPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Company"
        title="A practitioner-led firm with hubs across West and East Africa"
        description="We combine local context with methods borrowed from global finance, cloud-native startups, and critical infrastructure—then tailor the mix to your operating reality."
        image={{
          src: siteImages.companyTeam,
          alt: "Security and technology team collaborating on priorities",
        }}
      />

      <section className="border-b border-zinc-200 py-16 md:py-24">
        <div className="container grid gap-6 md:grid-cols-2">
          {blocks.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 shadow-sm transition hover:border-red-200"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-200 bg-white text-primary shadow-sm">
                <b.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <h2 className="text-xl font-semibold text-zinc-900">{b.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-50 via-white to-red-50 py-16">
        <div className="container">
          <div className="grid gap-8 rounded-2xl border border-red-100 bg-white p-8 shadow-sm md:grid-cols-2 md:p-12">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900">Clients & references</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Teams bring us in when reporting must be accurate enough for regulators, insurers, and technical owners to share the same facts. We can align reference calls with your sector and technology footprint.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 text-sm text-zinc-600">
              <p>Need to speak with someone who solved constraints similar to yours? We coordinate introductions once mutual NDAs are in place.</p>
              <Link href="/contact" className="text-sm font-semibold text-primary hover:text-red-800">
                Start a reference request →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
