export default function ResourcesPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold">Resources</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">Case studies, blogs, tutorials, and tools.</p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {["Case Study", "Blog", "Tutorial"].map((t) => (
          <article key={t} className="rounded-xl border border-border/60 bg-card p-6">
            <p className="text-xs uppercase tracking-wider text-accent">{t}</p>
            <h2 className="mt-2 text-lg font-medium">Reducing ransomware dwell time</h2>
            <p className="mt-2 text-sm text-muted-foreground">Playbooks and automation patterns that work in African contexts.</p>
          </article>
        ))}
      </div>
    </div>
  );
}

