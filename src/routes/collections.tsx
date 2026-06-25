import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { collections } from "@/lib/collections";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Naduni Katuwandeniya" },
      { name: "description", content: "Couture and bridal collections by Naduni Katuwandeniya, including In Bloom, Petal & Pearl, and Rose Couture." },
      { property: "og:title", content: "Collections — Naduni Katuwandeniya" },
      { property: "og:description", content: "Couture and bridal collections by Naduni Katuwandeniya." },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.32em] text-primary">Collections</p>
        <h1 className="mt-4 font-display text-5xl text-foreground sm:text-6xl">A garden, in seasons.</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Each collection unfolds from a single feeling — a first petal, an heirloom vow, a garden at dusk. Explore the seasons of the atelier.
        </p>

        <div className="mt-16 space-y-20">
          {collections.map((c, i) => (
            <Link
              key={c.slug}
              to="/collections/$slug"
              params={{ slug: c.slug }}
              className="group grid gap-8 md:grid-cols-2 md:items-center md:gap-14"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="overflow-hidden rounded-md">
                  <img
                    src={c.cover}
                    alt={c.title}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-primary">{c.season}</p>
                <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl group-hover:text-primary">{c.title}</h2>
                <p className="mt-3 font-display italic text-xl text-muted-foreground">{c.tagline}</p>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">{c.concept}</p>
                <p className="mt-6 text-sm uppercase tracking-[0.22em] text-primary">View collection →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}