export default function ResearchPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold">Research</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Whitepapers, threat reports, and advisories. Filter by topic and download PDFs.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {["Whitepaper", "Threat Report", "Advisory"].map((t) => (
          <article key={t} className="rounded-xl border border-border/60 bg-card p-6">
            <p className="text-xs uppercase tracking-wider text-accent">{t}</p>
            <h2 className="mt-2 text-lg font-medium">Modern SOC on a budget</h2>
            <p className="mt-2 text-sm text-muted-foreground">Abstract: Practical approaches to detection, triage, and response for lean teams.</p>
            <a href="#" className="mt-3 inline-block text-sm text-primary underline-offset-4 hover:underline">
              Download PDF
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

