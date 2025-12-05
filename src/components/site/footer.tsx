import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="container grid gap-8 py-10 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2 font-semibold">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span>Nangsec Technologies</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Securing Africa’s digital future through services, training, and research.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-foreground/90">Services</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              "Penetration Testing",
              "SOC-as-a-Service",
              "Threat Intelligence",
              "Red Teaming",
              "Vulnerability Assessment",
              "Cloud Security",
              "Forensics & IR",
              "Risk & Compliance",
            ].map((s) => (
              <li key={s}>
                <Link href="/services" className="hover:text-foreground">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-foreground/90">Explore</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              { href: "/training", label: "Training" },
              { href: "/research", label: "Research" },
              { href: "/resources", label: "Resources" },
              { href: "/company", label: "Company" },
            ].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-foreground">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="mb-3 text-sm font-semibold text-foreground/90">Contact</p>
          <p>info@nangsec.africa</p>
          <p className="mt-1">Lagos · Nairobi · Accra</p>
        </div>
      </div>
      <div className="border-t border-border/60 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Nangsec Technologies. All rights reserved.
      </div>
    </footer>
  );
}

