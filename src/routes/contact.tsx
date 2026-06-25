import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Naduni Katuwandeniya" },
      { name: "description", content: "Contact the atelier of Naduni Katuwandeniya for bridal, couture, and press enquiries." },
      { property: "og:title", content: "Contact — Naduni Katuwandeniya" },
      { property: "og:description", content: "Bridal, couture, and press enquiries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "Bridal enquiry", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = `From: ${form.name} <${form.email}>\n\n${form.message}`;
    window.location.href = `mailto:studio@naduni.atelier?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.1fr] md:gap-20 md:py-28">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-primary">Contact</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl">
            Visit the <span className="italic">atelier</span>.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
            For bridal appointments, couture commissions, and press enquiries — write to the studio. Consultations are by appointment.
          </p>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Studio</dt>
              <dd className="mt-2 font-display text-xl text-foreground">Colombo 07, Sri Lanka</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Email</dt>
              <dd className="mt-2">
                <a href="mailto:studio@naduni.atelier" className="font-display text-xl text-primary hover:underline">studio@naduni.atelier</a>
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Instagram</dt>
              <dd className="mt-2">
                <a href="https://instagram.com" className="font-display text-xl text-primary hover:underline">@naduni.katuwandeniya</a>
              </dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm shadow-rose/10 md:p-10">
          <div className="space-y-5">
            <Field label="Name">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border-b border-border bg-transparent py-2 text-foreground outline-none focus:border-primary"
              />
            </Field>
            <Field label="Email">
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border-b border-border bg-transparent py-2 text-foreground outline-none focus:border-primary"
              />
            </Field>
            <Field label="Subject">
              <select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full border-b border-border bg-transparent py-2 text-foreground outline-none focus:border-primary"
              >
                <option>Bridal enquiry</option>
                <option>Couture commission</option>
                <option>Press</option>
                <option>Collaboration</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Message">
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none border-b border-border bg-transparent py-2 text-foreground outline-none focus:border-primary"
              />
            </Field>
          </div>
          <button
            type="submit"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm uppercase tracking-[0.22em] text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Send enquiry
          </button>
        </form>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}