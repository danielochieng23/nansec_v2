"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/button";

const serviceLinks = [
  { href: "/services#assessment", label: "Security Assessment" },
  { href: "/services#managed", label: "Managed Security" },
  { href: "/services#specialized", label: "Specialized Programs" },
  { href: "/services#compliance", label: "Compliance & Advisory" },
];

const navItems = [
  { href: "/training", label: "Training" },
  { href: "/research", label: "Research" },
  { href: "/resources", label: "Resources" },
  { href: "/company", label: "Company" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [svcOpen, setSvcOpen] = useState(false);
  const svcRef = useRef<HTMLDivElement>(null);

  const servicesActive = pathname.startsWith("/services");

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!svcRef.current?.contains(e.target as Node)) setSvcOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  const linkBase =
    "rounded-md px-3 py-2 text-sm font-medium transition text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900";
  const linkActive = "rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-primary";

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/90 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-[72px] items-center justify-between gap-4">
        <Link href="/" className="group flex items-center gap-3 font-semibold tracking-tight text-zinc-900">
          <span className="flex h-10 w-10 items-center justify-center rounded-md border border-red-200 bg-white font-mono text-sm text-primary shadow-sm transition group-hover:border-primary/40">
            NS
          </span>
          <span className="hidden flex-col text-sm leading-tight sm:flex">
            <span>Nangsec Technologies</span>
            <span className="text-[10px] font-normal uppercase tracking-[0.18em] text-zinc-500">Cybersecurity</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <Link href="/" className={pathname === "/" ? linkActive : linkBase}>
            Home
          </Link>

          <div ref={svcRef} className="relative">
            <button
              type="button"
              onClick={() => setSvcOpen((v) => !v)}
              className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition ${
                servicesActive || svcOpen
                  ? "bg-red-50 text-primary"
                  : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
              }`}
              aria-expanded={svcOpen}
            >
              Services
              <ChevronDown className={`h-4 w-4 transition ${svcOpen ? "rotate-180" : ""}`} />
            </button>
            {svcOpen && (
              <div className="absolute left-0 top-full z-50 mt-2 w-[min(100vw-2rem,380px)] rounded-xl border border-zinc-200 bg-white p-3 shadow-xl shadow-zinc-300/40 ring-1 ring-zinc-100">
                <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">Practice areas</p>
                <ul className="grid gap-1">
                  {serviceLinks.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="block rounded-lg px-3 py-2.5 text-sm text-zinc-700 transition hover:bg-red-50 hover:text-zinc-900"
                        onClick={() => setSvcOpen(false)}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                  <li className="mt-1 border-t border-zinc-100 pt-2">
                    <Link
                      href="/services"
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-primary hover:bg-zinc-50"
                      onClick={() => setSvcOpen(false)}
                    >
                      All services →
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {navItems.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={active ? linkActive : linkBase}>
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="text-sm font-medium text-zinc-600 transition hover:text-zinc-900">
            Contact
          </Link>
          <Button variant="default" size="sm" className="rounded-md font-semibold shadow-md shadow-red-200/60" asChild>
            <Link href="/contact">Schedule a call</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button variant="default" size="sm" className="font-semibold" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-800 shadow-sm"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-zinc-200 bg-white lg:hidden">
          <div className="container grid gap-1 py-4">
            <Link href="/" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50">
              Home
            </Link>
            <Link href="/services" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50">
              Services
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50"
              >
                {item.label}
              </Link>
            ))}
            <Button className="mt-2 w-full rounded-md" asChild>
              <Link href="/contact" onClick={() => setOpen(false)}>
                Schedule a call
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
