import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Masonry } from "@/components/masonry";
import { collections, getCollection, type Collection } from "@/lib/collections";

export const Route = createFileRoute("/collections/$slug")({
  loader: ({ params }): { collection: Collection } => {
    const collection = getCollection(params.slug);
    if (!collection) throw notFound();
    return { collection };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.collection;
    if (!c) {
      return {
        meta: [{ title: "Collection — Naduni Katuwandeniya" }],
      };
    }
    return {
      meta: [
        { title: `${c.title} — Naduni Katuwandeniya` },
        { name: "description", content: `${c.tagline} ${c.concept}` },
        { property: "og:title", content: `${c.title} — Naduni Katuwandeniya` },
        { property: "og:description", content: c.tagline },
        { property: "og:image", content: c.cover },
        { name: "twitter:image", content: c.cover },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <p className="text-xs uppercase tracking-[0.32em] text-primary">Not Found</p>
        <h1 className="mt-4 font-display text-5xl">Collection not found</h1>
        <Link to="/collections" className="mt-8 inline-block text-sm uppercase tracking-[0.22em] text-primary">
          ← Back to collections
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="min-h-screen bg-background p-12 text-foreground">
      <p>Something went wrong: {error.message}</p>
      <button onClick={reset} className="mt-4 underline">Try again</button>
    </div>
  ),
  component: CollectionDetail,
});

function CollectionDetail() {
  const { collection } = Route.useLoaderData();
  const others = collections.filter((c) => c.slug !== collection.slug);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 pt-12 md:pt-20">
        <Link to="/collections" className="text-xs uppercase tracking-[0.22em] text-muted-foreground hover:text-primary">
          ← All collections
        </Link>
        <div className="mt-8 grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-primary">{collection.season}</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              {collection.title}
            </h1>
            <p className="mt-5 font-display text-2xl italic text-muted-foreground">{collection.tagline}</p>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">{collection.concept}</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 -rotate-2 rounded-[2rem] bg-petal/50" />
            <img
              src={collection.cover}
              alt={collection.title}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl shadow-rose/20"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.32em] text-primary">The Looks</p>
        <div className="mt-10">
          <Masonry>
            {collection.looks.map((l: { src: string; alt: string }, i: number) => (
              <img
                key={i}
                src={l.src}
                alt={l.alt}
                loading="lazy"
                className="w-full rounded-md object-cover shadow-sm shadow-rose/10"
              />
            ))}
          </Masonry>
        </div>
      </section>

      <section className="border-t border-border/60 bg-petal/30">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.32em] text-primary">Continue</p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {others.map((c) => (
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
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-4 font-display text-2xl text-foreground group-hover:text-primary">{c.title}</h3>
                <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">{c.season}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}