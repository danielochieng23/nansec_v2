import Link from "next/link";

const services = [
  {
    slug: "penetration-testing",
    title: "Penetration Testing",
    summary:
      "Adversarial testing across web, mobile, APIs, and infrastructure to uncover exploitable risk.",
  },
  { slug: "soc-as-a-service", title: "SOC-as-a-Service", summary: "Managed detection and response with 24/7 visibility and triage." },
  { slug: "threat-intelligence", title: "Threat Intelligence", summary: "Localized intel, takedowns, brand protection and dark web monitoring." },
  { slug: "red-teaming", title: "Red Teaming", summary: "Assumed-breach and full-scope adversary simulation to harden defenses." },
  { slug: "vulnerability-assessment", title: "Vulnerability Assessment", summary: "Continuous scanning and prioritized remediation roadmaps." },
  { slug: "cloud-security", title: "Cloud Security", summary: "Secure landing zones, IaC reviews, identity hardening and guardrails." },
  { slug: "forensics-ir", title: "Forensics & Incident Response", summary: "Rapid containment, investigation, evidence handling, post-incident reviews." },
  { slug: "risk-compliance", title: "Risk & Compliance", summary: "ISO 27001, SOC 2, PCI DSS, NDPR with practical, risk-based controls." },
];

export default function ServicesPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold">Services</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Strategic security services with clear workflows, deliverables, and case studies. Book a consultation to get started.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <article key={s.slug} className="rounded-xl border border-border/60 bg-card p-6">
            <h2 className="text-xl font-medium">{s.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{s.summary}</p>
            <div className="mt-4 flex gap-4 text-sm">
              <Link href={`/services/${s.slug}`} className="text-primary underline-offset-4 hover:underline">
                View details
              </Link>
              <Link href="/contact" className="text-secondary underline-offset-4 hover:underline">
                Book Consultation
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

