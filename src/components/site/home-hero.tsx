import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Cloud, Globe2 } from "lucide-react";
import Button from "@/components/ui/button";
import { HeroCyberBackdrop } from "@/components/site/hero-cyber-backdrop";
import { siteImages } from "@/data/site-images";

export function HomeHero() {
  return (
    <section className="relative flex min-h-svh flex-col overflow-hidden border-b border-zinc-900">
      {/* Photo base */}
      <div className="absolute inset-0 z-0">
        <Image
          src={siteImages.hero}
          alt="Cybersecurity analyst reviewing system defenses in a secure operations setting"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_22%] sm:object-center"
        />
        {/* Readability overlays — keep red brand hints */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/95 via-zinc-950/88 to-zinc-950/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-zinc-950/50 to-red-950/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_70%_20%,rgba(220,38,38,0.15),transparent_55%)]" />
      </div>

      <HeroCyberBackdrop />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center">
        <div className="container max-w-7xl pt-28 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/45 bg-red-950/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-red-200 backdrop-blur-sm">
              Pan-African cybersecurity practice
            </div>
            <h1 className="mt-8 text-pretty text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
              Security built for how your organization <span className="text-red-400">ships and scales</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">
              Nangsec helps teams design, validate, and operate defenses that respect your risk appetite, your regulatory reality, and the skills
              you already have on staff.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild className="rounded-md px-7 font-semibold shadow-lg shadow-red-900/40">
                <Link href="/contact">
                  Talk to our team
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild className="rounded-md border-white/25 bg-white/5 font-semibold text-white backdrop-blur-sm hover:bg-white/10">
                <Link href="/company">Who we are</Link>
              </Button>
            </div>
          </div>

          <div className="mt-14 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
            <div className="flex gap-3">
              <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
              <div>
                <p className="text-sm font-semibold text-zinc-100">Regional delivery</p>
                <p className="text-sm text-zinc-400">Engagements coordinated across West and East Africa with remote-first experts.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
              <div>
                <p className="text-sm font-semibold text-zinc-100">Sector experience</p>
                <p className="text-sm text-zinc-400">Finance, telecom, energy, SaaS, and public institutions—we map controls to your sector.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Cloud className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
              <div>
                <p className="text-sm font-semibold text-zinc-100">Modern stacks</p>
                <p className="text-sm text-zinc-400">Hybrid, multi-cloud, and Kubernetes-heavy estates are our everyday baseline.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
