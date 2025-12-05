"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
    <div className="container py-16">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Tell us about your goals and challenges. We’ll get back within 1 business day.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid max-w-xl gap-4">
        <div>
          <label className="text-sm">Name</label>
          <input className="mt-1 w-full rounded-md border border-input bg-background p-2" {...register("name")} />
          {errors.name && <p className="mt-1 text-xs text-accent">{errors.name.message}</p>}
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input className="mt-1 w-full rounded-md border border-input bg-background p-2" {...register("email")} />
          {errors.email && <p className="mt-1 text-xs text-accent">{errors.email.message}</p>}
        </div>
        <div>
          <label className="text-sm">Message</label>
          <textarea className="mt-1 w-full rounded-md border border-input bg-background p-2" rows={5} {...register("message")} />
          {errors.message && <p className="mt-1 text-xs text-accent">{errors.message.message}</p>}
        </div>
        <button disabled={isSubmitting} className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
          {isSubmitting ? "Sending..." : "Send"}
        </button>
        {isSubmitSuccessful && <p className="text-sm text-secondary">Thanks! We’ll be in touch.</p>}
      </form>
      <div className="mt-10 h-64 w-full overflow-hidden rounded-xl border border-border/60">
        <iframe
          title="Map"
          className="h-full w-full"
          src="https://www.openstreetmap.org/export/embed.html?bbox=3.2%2C6.3%2C3.5%2C6.7&layer=mapnik"
        />
      </div>
    </div>
  );
}

