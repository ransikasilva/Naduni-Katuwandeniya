import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import runway1 from "@/assets/runway-1.jpg";
import runway2 from "@/assets/runway-2.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/runway")({
  head: () => ({
    meta: [
      { title: "Runway — Naduni Katuwandeniya" },
      { name: "description", content: "Runway shows and presentations by Naduni Katuwandeniya, from Colombo Fashion Week to private salons." },
      { property: "og:title", content: "Runway — Naduni Katuwandeniya" },
      { property: "og:description", content: "Runway shows and presentations." },
      { property: "og:image", content: runway1 },
      { name: "twitter:image", content: runway1 },
    ],
  }),
  component: RunwayPage,
});

const shows = [
  {
    image: runway1,
    title: "In Bloom",
    venue: "Colombo Fashion Week",
    date: "March 2026",
    note: "Opening show of the SS26 calendar — twenty-two looks under a canopy of paper blossoms.",
  },
  {
    image: runway2,
    title: "Rose Couture",
    venue: "Galle Face Atelier Salon",
    date: "October 2025",
    note: "An intimate salon presentation — couture clients invited for first looks of the AW collection.",
  },
  {
    image: hero,
    title: "Petal & Pearl",
    venue: "Bridal Week, Mumbai",
    date: "August 2025",
    note: "The brand's first international bridal showing — a runway scattered with cherry blossom petals.",
  },
];

function RunwayPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.32em] text-primary">Runway</p>
        <h1 className="mt-4 font-display text-5xl text-foreground sm:text-6xl">Shows & presentations.</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          From the runway to the salon — moments where each collection meets the world.
        </p>

        <div className="mt-16 space-y-24">
          {shows.map((s, i) => (
            <article key={i} className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-14">
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <img
                  src={s.image}
                  alt={`${s.title} runway`}
                  loading="lazy"
                  className="aspect-[16/10] w-full rounded-md object-cover shadow-md shadow-rose/15"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-primary">{s.date}</p>
                <h2 className="mt-3 font-display text-4xl text-foreground">{s.title}</h2>
                <p className="mt-2 text-sm uppercase tracking-[0.22em] text-muted-foreground">{s.venue}</p>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{s.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}