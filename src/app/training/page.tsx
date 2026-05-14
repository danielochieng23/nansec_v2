import Link from "next/link";
import { ArrowRight, Award, GraduationCap, Users, Zap } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { siteImages } from "@/data/site-images";

const tracks = [
  {
    title: "Professional certifications",
    desc: "Focused prep and labs aligned to the skills employers verify during technical interviews—not empty certificate mills.",
    icon: Award,
    href: "/contact",
    cta: "Request syllabus",
  },
  {
    title: "Academic partnerships",
    desc: "Semester-style tracks, capstones, and mentor reviews co-developed with faculty when institutions want security depth, not a single elective.",
    icon: GraduationCap,
    href: "/contact",
    cta: "Academic inquiry",
  },
  {
    title: "Intensive bootcamps",
    desc: "Short, high-touch sprints for SOC triage, offsec fundamentals, and cloud security basics with facilitator feedback.",
    icon: Zap,
    href: "/contact",
    cta: "See upcoming dates",
  },
  {
    title: "Corporate learning",
    desc: "Private classes for product engineers, IT, GRC, and executives—with scenarios sampled from your own control vocabulary where appropriate.",
    icon: Users,
    href: "/contact",
    cta: "Shape a cohort",
  },
] as const;

export default function TrainingPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Training"
        title="Upskill the people who actually run your controls"
        description="Nangsec trains defenders and builders using curriculum maintained by consultants who still support live client programs."
        image={{
          src: siteImages.trainingLab,
          alt: "Instructor-led cybersecurity lab and skills development",
        }}
      />

      <section className="border-b border-zinc-200 bg-zinc-50 py-14">
        <div className="container grid gap-6 lg:grid-cols-3">
          {[
            { k: "Instructors", v: "Consultants who split time between classrooms and customer engagements—less theory drift." },
            { k: "Labs", v: "Shared sandboxes with realistic logs, playbooks, and debriefs tied to measurable objectives." },
            { k: "Outcomes", v: "Skills matrices you can hand to hiring managers or map into existing competency frameworks." },
          ].map((x) => (
            <div key={x.k} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">{x.k}</p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{x.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Programs</p>
            <h2 className="mt-2 text-3xl font-semibold text-zinc-900 md:text-4xl">Pick the format that fits your organization</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {tracks.map((t) => (
              <div
                key={t.title}
                className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:border-red-200 hover:shadow-md"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-100 bg-zinc-50 text-primary">
                  <t.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-semibold text-zinc-900">{t.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">{t.desc}</p>
                <Link
                  href={t.href}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-red-800"
                >
                  {t.cta}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-red-100 bg-gradient-to-r from-red-50 via-white to-red-50 py-14">
        <div className="container flex flex-col items-start justify-between gap-6 rounded-2xl border border-red-100 bg-white/80 p-8 shadow-sm md:flex-row md:items-center md:p-10">
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900">Public schedule & closed cohorts</h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-600">
              We rotate open seats quarterly and schedule private deliveries around your release calendar—request the version that lists your geography.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-red-200/80 transition hover:bg-red-600"
          >
            Ask for a calendar
          </Link>
        </div>
      </section>
    </div>
  );
}
