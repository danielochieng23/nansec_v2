import Link from "next/link";

export default function TrainingPage() {
  return (
    <div className="container py-16">
      <h1 className="text-3xl font-semibold">Training & Academy</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        UG/PG programs, intensive bootcamps, corporate training, and certifications designed for Africa’s security talent.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {["Undergrad/Postgrad Programs", "Bootcamps", "Corporate Training", "Certifications"].map((t) => (
          <div key={t} className="rounded-xl border border-border/60 bg-card p-6">
            <h2 className="text-xl font-medium">{t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">Industry-aligned curriculum, prerequisites, and hands-on labs.</p>
            <Link href="/training" className="mt-4 inline-block text-sm text-primary underline-offset-4 hover:underline">
              Enroll now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

