import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Masonry } from "@/components/masonry";
import { collections, allLooks } from "@/lib/collections";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naduni Katuwandeniya — Couture Fashion Designer" },
      { name: "description", content: "Romantic, hand-embroidered couture by Sri Lankan fashion designer Naduni Katuwandeniya. Explore collections, runway, and atelier work." },
      { property: "og:title", content: "Naduni Katuwandeniya — Couture Fashion Designer" },
      { property: "og:description", content: "Romantic, hand-embroidered couture. Collections, runway, and atelier." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = collections[0];
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blush via-blush to-petal/40" />
        <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-16 md:grid-cols-[1.1fr_1fr] md:gap-16 md:pt-24 lg:pb-28">
          <div className="flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.32em] text-primary">Couture · Atelier · Sri Lanka</p>
            <h1 className="mt-6 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              Naduni
              <br />
              <span className="italic">Katuwandeniya</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              A couture practice rooted in romance — soft silhouettes, hand-embroidered blooms, and the quiet poetry of cherry blossom mornings.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/collections"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View Collections
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-primary/30 px-6 py-3 text-sm uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary/5"
              >
                Inquire
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2rem] bg-petal/50" />
            <img
              src={hero}
              alt="Couture blush gown with embroidered florals by Naduni Katuwandeniya"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl shadow-rose/20"
            />
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="border-y border-border/50 bg-card/40">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <p className="text-xs uppercase tracking-[0.32em] text-primary">Philosophy</p>
          <p className="mt-6 font-display text-3xl leading-snug text-foreground sm:text-4xl lg:text-5xl">
            “I design for the moment a petal lets go of the branch — soft, certain, and entirely its own.”
          </p>
        </div>
      </section>

      {/* Featured collection */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-primary">Featured Collection</p>
            <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">{featured.title}</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.22em] text-muted-foreground">{featured.season}</p>
          </div>
          <Link
            to="/collections/$slug"
            params={{ slug: featured.slug }}
            className="text-sm uppercase tracking-[0.22em] text-primary hover:underline"
          >
            Explore →
          </Link>
        </div>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">{featured.concept}</p>

        <div className="mt-12">
          <Masonry>
            {allLooks.map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full rounded-md object-cover shadow-sm shadow-rose/10 transition-transform duration-700 hover:scale-[1.01]"
              />
            ))}
          </Masonry>
        </div>
      </section>

      {/* Collections preview */}
      <section className="bg-petal/30">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs uppercase tracking-[0.32em] text-primary">All Collections</p>
          <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl">A garden, in seasons.</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {collections.map((c) => (
              <Link
                key={c.slug}
                to="/collections/$slug"
                params={{ slug: c.slug }}
                className="group block"
              >
                <div className="overflow-hidden rounded-md">
                  <img
                    src={c.cover}
                    alt={c.title}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">{c.season}</p>
                <h3 className="mt-2 font-display text-2xl text-foreground group-hover:text-primary">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
