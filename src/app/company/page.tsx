export default function CompanyPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold">Company</h1>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section className="rounded-xl border border-border/60 bg-card p-6">
          <h2 className="text-xl font-medium">About</h2>
          <p className="mt-2 text-sm text-muted-foreground">Mission-driven, Africa-first cybersecurity company focused on impact.</p>
        </section>
        <section className="rounded-xl border border-border/60 bg-card p-6">
          <h2 className="text-xl font-medium">Leadership</h2>
          <p className="mt-2 text-sm text-muted-foreground">Experienced practitioners across red, blue, and governance.</p>
        </section>
        <section className="rounded-xl border border-border/60 bg-card p-6">
          <h2 className="text-xl font-medium">Careers</h2>
          <p className="mt-2 text-sm text-muted-foreground">Grow your career with meaningful work across the continent.</p>
        </section>
        <section className="rounded-xl border border-border/60 bg-card p-6">
          <h2 className="text-xl font-medium">Partners</h2>
          <p className="mt-2 text-sm text-muted-foreground">Alliances with leading vendors and universities.</p>
        </section>
      </div>
    </div>
  );
}

