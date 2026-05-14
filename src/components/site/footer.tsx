import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

const serviceCols = [
  {
    title: "Assessment & Testing",
    links: [
      { href: "/services#assessment", label: "Web & API security" },
      { href: "/services#assessment", label: "Mobile & client apps" },
      { href: "/services#assessment", label: "Cloud & network" },
      { href: "/services#assessment", label: "Penetration testing" },
    ],
  },
  {
    title: "Operations & Response",
    links: [
      { href: "/services#managed", label: "SOC retainers" },
      { href: "/services#managed", label: "Threat intelligence" },
      { href: "/services#specialized", label: "Red team exercises" },
      { href: "/services#specialized", label: "Incident response" },
    ],
  },
  {
    title: "Company & Learning",
    links: [
      { href: "/company", label: "Who we are" },
      { href: "/training", label: "Courses & certifications" },
      { href: "/training", label: "Corporate training" },
      { href: "/resources", label: "Guides & articles" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black text-zinc-400">
      <div className="border-b border-zinc-800/80 bg-zinc-950">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">Connect with Nangsec</p>
            <p className="mt-1 text-2xl font-semibold tracking-tight text-white md:text-3xl">Plan your next security move with our team</p>
            <p className="mt-2 max-w-xl text-sm text-zinc-400">
              Whether you need testing, a SOC retainer, or an education roadmap, we will scope work that fits how your organization ships.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <a
              href="tel:+2348000000000"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-zinc-600 hover:bg-zinc-800"
            >
              <Phone className="h-4 w-4 text-red-500" />
              +234 800 000 0000
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/35 transition hover:bg-red-600"
            >
              Email us
            </Link>
          </div>
        </div>
      </div>

      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <div className="flex items-center gap-3 font-semibold tracking-tight text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 font-mono text-sm text-red-500">
              NS
            </span>
            <span className="text-lg">Nangsec Technologies</span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
            Nangsec is a cybersecurity firm focused on assessments, managed detection and response, workforce training, and applied research
            for public and private institutions in Africa and beyond.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-red-500" />
              <a href="mailto:info@nangsec.africa" className="text-zinc-400 hover:text-white">
                info@nangsec.africa
              </a>
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-red-500" />
              Lagos · Nairobi · Accra
            </span>
          </div>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-800 text-zinc-500 transition hover:border-red-600/50 hover:text-red-400"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        {serviceCols.map((col) => (
          <div key={col.title}>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">{col.title}</p>
            <ul className="space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={`${col.title}-${l.label}`}>
                  <Link href={l.href} className="text-zinc-400 transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-zinc-900 py-6 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} Nangsec Technologies. All rights reserved.
      </div>
    </footer>
  );
}
