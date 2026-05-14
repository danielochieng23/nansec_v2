import type { ReactNode } from "react";
import Image from "next/image";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  variant?: "light" | "dark";
  image?: {
    src: string;
    alt: string;
  };
  /** LCP: set true only for above-the-fold marketing heroes */
  imagePriority?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  variant = "light",
  image,
  imagePriority = false,
}: PageHeroProps) {
  const isDark = variant === "dark";
  const withImage = Boolean(image);

  const h1Class = withImage
    ? isDark
      ? "text-white"
      : "text-zinc-900"
    : isDark
      ? "text-white"
      : "text-zinc-900";

  const pClass = withImage
    ? isDark
      ? "text-zinc-300"
      : "text-muted-foreground"
    : isDark
      ? "text-zinc-400"
      : "text-muted-foreground";

  return (
    <section
      className={
        withImage
          ? "relative overflow-hidden border-b border-zinc-200"
          : isDark
            ? "relative overflow-hidden border-b border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950"
            : "relative overflow-hidden border-b border-zinc-200 bg-gradient-to-br from-white via-zinc-50 to-zinc-100"
      }
    >
      {withImage && image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={imagePriority}
          />
          <div
            className={
              isDark
                ? "absolute inset-0 bg-gradient-to-b from-zinc-950/92 via-zinc-950/88 to-zinc-950/90"
                : "absolute inset-0 bg-gradient-to-br from-white/93 via-zinc-50/96 to-zinc-100/93"
            }
          />
        </div>
      )}

      {!withImage && !isDark && (
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, rgba(220,38,38,0.08) 0%, transparent 42%), radial-gradient(circle at 90% 10%, rgba(220,38,38,0.06) 0%, transparent 38%)",
          }}
        />
      )}
      {!withImage && isDark && (
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, rgba(248,113,113,0.35) 0%, transparent 45%), radial-gradient(circle at 85% 10%, rgba(248,113,113,0.2) 0%, transparent 35%)",
          }}
        />
      )}

      <div className="relative z-10 container py-14 md:py-20">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
        ) : null}
        <h1 className={`max-w-4xl text-3xl font-semibold tracking-tight md:text-5xl ${h1Class}`}>{title}</h1>
        {description ? (
          <p className={`mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${pClass}`}>{description}</p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
