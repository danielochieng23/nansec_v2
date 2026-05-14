import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { siteImages } from "@/data/site-images";
import { serviceCategories, servicesInCategory } from "@/data/services";

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Services"
        title="End-to-end support for testing, operations, and assurance"
        description="Each offering includes defined artifacts, named responsibilities, and a cadence that matches the speed of your engineering and risk teams."
        image={{
          src: siteImages.servicesHero,
          alt: "Abstract digital layers representing security assessment and defense depth",
        }}
      />

      {serviceCategories.map((cat, idx) => {
        const list = servicesInCategory(cat.id);
        const bg = idx % 2 === 0 ? "bg-white" : "bg-zinc-50";
        return (
          <section key={cat.id} id={cat.id} className={`scroll-mt-28 border-b border-zinc-200 py-16 md:py-20 ${bg}`}>
            <div className="container">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">{cat.title}</h2>
                <p className="mt-3 text-zinc-600">{cat.subtitle}</p>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {list.map((s) => (
                  <article
                    key={s.slug}
                    className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:border-red-200 hover:shadow-md"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-50 blur-2xl transition group-hover:bg-red-100/80" />
                    <h3 className="text-xl font-semibold text-zinc-900">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600">{s.summary}</p>
                    <ul className="mt-5 space-y-2 text-sm text-zinc-600">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
                      <Link href={`/services/${s.slug}`} className="inline-flex items-center gap-1 text-primary hover:text-red-800">
                        View details
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link href="/contact" className="text-zinc-500 hover:text-primary">
                        Schedule a call
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="border-t border-red-100 bg-gradient-to-r from-red-50 via-white to-red-50 py-14">
        <div className="container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 md:text-3xl">Need multiple workstreams under one steering group?</h2>
            <p className="mt-2 max-w-xl text-zinc-600">We frequently combine testing cycles, monitoring, and advisory under a single governance rhythm—ask for a sample operating plan.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-red-200/80 transition hover:bg-red-600"
          >
            Plan a scoping call
          </Link>
        </div>
      </section>
    </div>
  );
}
