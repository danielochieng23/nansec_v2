import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { siteImages } from "@/data/site-images";
import { categoryForSlug, serviceCategories, services } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return { title: "Service" };
  return { title: s.title, description: s.summary };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const catId = categoryForSlug(slug);
  const cat = serviceCategories.find((c) => c.id === catId);

  return (
    <div className="bg-zinc-50">
      <PageHero
        eyebrow={cat?.title ?? "Services"}
        title={s.title}
        description={s.summary}
        image={{
          src: siteImages.networkAbstract,
          alt: "Network graph illustrating attack surface and defensive coverage",
        }}
      >
        <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-red-800">
          <ArrowLeft className="h-4 w-4" />
          Back to services
        </Link>
      </PageHero>

      <section className="border-b border-zinc-200 py-14 md:py-20">
        <div className="container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="text-xl font-semibold text-zinc-900">Deliverables & cadence</h2>
            <ul className="mt-6 space-y-4">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-zinc-700">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 text-primary">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-6 text-sm leading-relaxed text-zinc-600 shadow-sm">
              <p>
                Longer engagements include a standing checkpoint with your technical and risk owners, plus readouts packaged separately for engineering
                and leadership audiences. We will point you to adjacent Nangsec services only when they materially reduce your open risk.
              </p>
            </div>
          </div>
          <aside className="lg:col-span-4">
            <div className="sticky top-28 space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">Start here</p>
              <p className="text-sm text-zinc-600">
                Share your constraints—regulated data, hybrid hosting, or an upcoming audit window—and we will align scope and evidence to match.
              </p>
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-md bg-primary py-3 text-sm font-semibold text-white transition hover:bg-red-600"
              >
                Contact Nangsec
              </Link>
              <Link href="/services" className="block text-center text-sm font-semibold text-primary hover:text-red-800">
                Explore other capabilities
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
