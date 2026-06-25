import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { collections } from "@/lib/collections";
import { useState } from "react";
import type { Collection } from "@/lib/collections";

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
  const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.32em] text-primary">Collections</p>
        <h1 className="mt-4 font-display text-5xl text-foreground sm:text-6xl">Crafted Heritage</h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Explore collections celebrating Sri Lankan heritage craftsmanship — batik, beeralu, and traditional techniques reimagined through contemporary design and sustainable fashion practices.
        </p>

        <div className="mt-16 space-y-20">
          {collections.map((c, i) => (
            <button
              key={c.slug}
              onClick={() => setSelectedCollection(c)}
              className="group grid gap-8 md:grid-cols-2 md:items-center md:gap-14 cursor-pointer w-full text-left"
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
                {c.season && <p className="text-xs uppercase tracking-[0.32em] text-primary">{c.season}</p>}
                <h2 className="mt-3 font-display text-4xl text-foreground sm:text-5xl group-hover:text-primary transition-colors">{c.title}</h2>
                {c.tagline && <p className="mt-3 font-display italic text-xl text-muted-foreground">{c.tagline}</p>}
                {c.concept && <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">{c.concept}</p>}
                <p className="mt-6 text-sm uppercase tracking-[0.22em] text-primary">View collection →</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Popup Modal */}
      {selectedCollection && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedCollection(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-background rounded-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCollection(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Modal Content */}
            <div className="grid gap-10 md:grid-cols-[1.1fr_1fr] md:gap-16">
              <div>
                {selectedCollection.season && <p className="text-xs uppercase tracking-[0.32em] text-primary">{selectedCollection.season}</p>}
                <h1 className="mt-4 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
                  {selectedCollection.title}
                </h1>
                {selectedCollection.tagline && <p className="mt-5 font-display text-2xl italic text-muted-foreground">{selectedCollection.tagline}</p>}
                {selectedCollection.concept && <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">{selectedCollection.concept}</p>}
              </div>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 -rotate-2 rounded-[2rem] bg-petal/50" />
                <img
                  src={selectedCollection.cover}
                  alt={selectedCollection.title}
                  className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-xl shadow-rose/20"
                />
              </div>
            </div>

            {/* Gallery */}
            <div className="mt-16">
              <p className="text-xs uppercase tracking-[0.32em] text-primary">The Looks</p>
              <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {selectedCollection.looks.map((l, i) => (
                  <img
                    key={i}
                    src={l.src}
                    alt={l.alt}
                    loading="lazy"
                    className="w-full rounded-md object-cover shadow-sm shadow-rose/10"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <SiteFooter />
    </div>
  );
}
