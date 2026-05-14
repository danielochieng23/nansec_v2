"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { siteImages } from "@/data/site-images";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
    reset();
  }

  return (
    <div className="bg-zinc-50">
      <PageHero
        eyebrow="Contact"
        title="Start a conversation with Nangsec"
        description="Describe the problem space—upcoming launch, regulatory exam, incident rehearsal, or hiring goals—and we will route you to the right practice lead."
        image={{
          src: siteImages.contactOffice,
          alt: "Professional office environment for client consultations",
        }}
      />

      <section className="border-b border-zinc-200 py-14 md:py-20">
        <div className="container grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-zinc-700" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-red-100"
                  {...register("name")}
                />
                {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-zinc-700" htmlFor="email">
                  Work email
                </label>
                <input
                  id="email"
                  type="email"
                  className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-red-100"
                  {...register("email")}
                />
                {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
              </div>
              <div>
                <label className="text-sm font-medium text-zinc-700" htmlFor="message">
                  What should we know?
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-red-100"
                  {...register("message")}
                />
                {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white shadow-md shadow-red-200/80 transition hover:bg-red-600 disabled:opacity-50 sm:w-auto sm:px-8"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
              {isSubmitSuccessful && <p className="text-sm text-emerald-700">Message received—we will reply within one business day.</p>}
            </form>
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Contact channels</p>
              <ul className="mt-6 space-y-5 text-sm text-zinc-700">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a href="tel:+2348000000000" className="hover:text-zinc-900">
                    +234 800 000 0000
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <a href="mailto:info@nangsec.africa" className="hover:text-zinc-900">
                    info@nangsec.africa
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>Lagos · Nairobi · Accra</span>
                </li>
              </ul>
            </div>
            <div className="h-72 overflow-hidden rounded-2xl border border-zinc-200 shadow-sm">
              <iframe
                title="Office map"
                className="h-full w-full"
                src="https://www.openstreetmap.org/export/embed.html?bbox=3.2%2C6.3%2C3.5%2C6.7&layer=mapnik"
              />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
