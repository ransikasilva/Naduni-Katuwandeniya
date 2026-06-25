import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Naduni Katuwandeniya" },
      { name: "description", content: "About Naduni Katuwandeniya — Sri Lankan couture designer, atelier philosophy, and selected press." },
      { property: "og:title", content: "About — Naduni Katuwandeniya" },
      { property: "og:description", content: "Sri Lankan couture designer and the philosophy behind the atelier." },
      { property: "og:image", content: portrait },
      { name: "twitter:image", content: portrait },
    ],
  }),
  component: AboutPage,
});

const press = ["Vogue India", "Harper's Bazaar", "Elle", "L'Officiel", "The Sunday Times", "Cosmopolitan"];

const milestones = [
  { year: "2018", text: "Apprenticeship at a Colombo couture house." },
  { year: "2020", text: "Founded the atelier under her own name." },
  { year: "2022", text: "Debut at Colombo Fashion Week — sold-out front row." },
  { year: "2024", text: "Bridal capsule featured in Vogue India." },
  { year: "2026", text: "International bridal showing in Mumbai." },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-16">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2rem] bg-petal/50" />
            <img
              src={portrait}
              alt="Portrait of Naduni Katuwandeniya"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl shadow-rose/20"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-primary">About</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl">
              The atelier of <span className="italic">Naduni</span>.
            </h1>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              Naduni Katuwandeniya is a Sri Lankan couture designer whose work moves between bridal, ready-to-wear, and made-to-measure couture. Her practice is grounded in slow, hand-finished craft — embroideries worked over weeks, silks chosen by touch, silhouettes drafted to a single body.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Each collection begins with a feeling rather than a trend. The atelier's signature — soft pinks, cherry blossom motifs, and a romantic restraint — has earned a quiet, devoted following across South Asia.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-petal/30">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.32em] text-primary">Milestones</p>
          <ol className="mt-10 space-y-6">
            {milestones.map((m) => (
              <li key={m.year} className="grid grid-cols-[5rem_1fr] items-baseline gap-6 border-b border-border/40 pb-6 last:border-0">
                <span className="font-display text-2xl text-primary">{m.year}</span>
                <span className="text-sm leading-relaxed text-foreground/80">{m.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
        <p className="text-xs uppercase tracking-[0.32em] text-primary">Press</p>
        <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">As featured in</h2>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {press.map((p) => (
            <span key={p} className="font-display text-xl text-muted-foreground">{p}</span>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}