import Link from "next/link";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="container py-24 md:py-32">
          <p className="mb-4 text-xs uppercase tracking-widest text-accent">Pan-African Cybersecurity</p>
          <h1 className="max-w-3xl text-pretty text-4xl font-semibold leading-tight md:text-6xl">
            Securing Africa’s Digital Future
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Nangsec Technologies delivers enterprise-grade cybersecurity services, talent-focused training, and applied research across the continent.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">Book Consultation</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container">
        <p className="mb-6 text-xs uppercase tracking-widest text-muted-foreground">Trusted by teams</p>
        <div className="grid grid-cols-2 gap-6 opacity-80 sm:grid-cols-3 md:grid-cols-6">
          {["vercel", "next", "globe", "window", "file", "vercel"].map((i, idx) => (
            <div key={idx} className="flex items-center justify-center rounded-md border border-border/60 bg-card p-4">
              <img src={`/${i}.svg`} alt={i} className="h-6 opacity-70" />
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-16">
        <div className="container">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Services</h2>
              <p className="text-muted-foreground">Penetration testing, SOC-as-a-Service, threat intelligence, and more.</p>
            </div>
            <Link href="/services" className="text-sm text-primary underline-offset-4 hover:underline">
              View all
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: "Penetration Testing", desc: "Adversarial testing across web, mobile, and infrastructure." },
              { title: "SOC-as-a-Service", desc: "Managed detection and response with 24/7 visibility." },
              { title: "Threat Intelligence", desc: "Localized intel, takedowns, and brand protection." },
            ].map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-6">
                <h3 className="text-lg font-medium">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.desc}</p>
                <Link href="/services" className="mt-4 inline-block text-sm text-primary underline-offset-4 hover:underline">
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-6">
            <h2 className="text-2xl font-semibold">Training & Academy</h2>
            <p className="mt-2 text-muted-foreground">UG/PG programs, bootcamps, corporate upskilling, and certifications.</p>
            <Button className="mt-4" asChild>
              <Link href="/training">Explore Training</Link>
            </Button>
          </div>
          <div className="rounded-xl border border-border/60 bg-card p-6">
            <h2 className="text-2xl font-semibold">Research</h2>
            <p className="mt-2 text-muted-foreground">Whitepapers, threat reports, advisories and tooling.</p>
            <Button className="mt-4" variant="secondary" asChild>
              <Link href="/research">View Research</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-16">
        <div className="container">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold">From the Blog</h2>
              <p className="text-muted-foreground">Insights on attacks, blue-teaming, and security leadership.</p>
            </div>
            <Link href="/resources" className="text-sm text-primary underline-offset-4 hover:underline">
              View all
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <article key={i} className="rounded-xl border border-border/60 bg-card p-6">
                <p className="text-xs uppercase tracking-wider text-accent">Advisory</p>
                <h3 className="mt-2 text-lg font-medium">Securing fintech APIs at scale</h3>
                <p className="mt-2 text-sm text-muted-foreground">Best practices for auth, rate-limits, and monitoring across microservices.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border border-border/60 bg-card p-6">
              <p className="text-sm text-muted-foreground">“Nangsec helped us reduce breach risk and pass audits with confidence.”</p>
              <p className="mt-3 text-sm font-medium">CTO, Regional Fintech</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30">
        <div className="container py-16 text-center">
          <h2 className="text-2xl font-semibold">Ready to strengthen your defenses?</h2>
          <p className="mt-2 text-muted-foreground">Speak with our experts and get a tailored roadmap.</p>
          <div className="mt-6 flex justify-center">
            <Button asChild>
              <Link href="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
