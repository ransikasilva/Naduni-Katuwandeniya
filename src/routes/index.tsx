import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Masonry } from "@/components/masonry";
import { collections, allLooks } from "@/lib/collections";
import { SlideIn, FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@/components/scroll-animations";
import {
  GradientBlob,
  TextReveal,
  Spotlight
} from "@/components/advanced-animations";
import {
  ParallaxSection,
  ZoomOnScroll,
  ImageHoverEffect,
  SplitText,
  ScrollProgressBar
} from "@/components/trendy-effects";
import hero from "@/assets/ppp.jpeg";
import portrait from "@/assets/ppp.jpeg";

const press = ["Colombo Fashion Week"];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naduni Katuwandeniya — Fashion Designer" },
      { name: "description", content: "Sri Lankan fashion designer exploring the fusion of heritage craftsmanship with modern design. Traditional techniques reimagined through contemporary fashion." },
      { property: "og:title", content: "Naduni Katuwandeniya — Fashion Designer" },
      { property: "og:description", content: "Exploring the fusion of Sri Lankan heritage craftsmanship with modern design through sustainable fashion practices." },
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
      <ScrollProgressBar />
      <Spotlight />
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <GradientBlob className="top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] -z-20" colors={["#E8DCC4", "#F5EFE6", "#D9C6A5"]} />
        <GradientBlob className="bottom-0 left-0 w-[350px] h-[350px] md:w-[600px] md:h-[600px] -z-20" colors={["#D9C6A5", "#E8DCC4", "#C9B89A"]} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blush via-blush to-petal/40" />
        <div className="mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 md:grid-cols-[1.1fr_1fr] md:gap-16 md:pt-24 lg:pb-28">
          <div className="flex flex-col justify-center">
            <SlideIn direction="left" delay={0.2}>
              <p className="text-xs uppercase tracking-[0.32em] text-primary">Couture · Atelier · Sri Lanka</p>
            </SlideIn>
            <SlideIn direction="left" delay={0.4}>
              <h1 className="mt-4 font-display text-4xl leading-[1.02] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
                <TextReveal delay={0.5}>Naduni</TextReveal>
                <br />
                <span className="italic"><TextReveal delay={0.7}>Katuwandeniya</TextReveal></span>
              </h1>
            </SlideIn>
            <SlideIn direction="left" delay={0.6}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                Exploring the fusion of Sri Lankan heritage craftsmanship with modern design, celebrating traditional techniques through contemporary fashion.
              </p>
            </SlideIn>
            <SlideIn direction="left" delay={0.8}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/collections"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm uppercase tracking-[0.2em] text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50"
                >
                  View Collections
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-primary/30 px-6 py-3 text-sm uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:bg-primary/5 hover:border-primary/60"
                >
                  Inquire
                </Link>
              </div>
            </SlideIn>
          </div>
          <ScaleIn delay={0.3}>
            <ParallaxSection offset={30}>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2rem] bg-petal/50" />
                <ZoomOnScroll
                  src={hero}
                  alt="Couture blush gown with embroidered florals by Naduni Katuwandeniya"
                  scaleRange={[1, 1.1]}
                  className="aspect-[4/5] w-full rounded-[2rem] shadow-xl shadow-rose/20"
                />
              </div>
            </ParallaxSection>
          </ScaleIn>
        </div>
      </section>

      {/* Statement */}
      <section className="border-y border-border/50 bg-card/40">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16 md:py-28">
          <p className="text-xs uppercase tracking-[0.32em] text-primary">Philosophy</p>
          <p className="mt-4 font-display text-xl leading-snug text-foreground sm:mt-6 sm:text-3xl md:text-4xl lg:text-5xl">
            "Exploring the fusion of Sri Lankan heritage craftsmanship with modern design through sustainable fashion practices."
          </p>
        </div>
      </section>

      {/* Featured collection */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-28">
        <SlideIn direction="up">
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-end justify-between gap-4 sm:gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-primary">Gallery</p>
              <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl md:text-5xl">Selected Works</h2>
            </div>
          </div>
        </SlideIn>

        <div className="mt-12">
          <StaggerContainer staggerDelay={0.1}>
            <Masonry>
              {allLooks.map((img, i) => (
                <StaggerItem key={i}>
                  <ImageHoverEffect
                    src={img.src}
                    alt={img.alt}
                    className="w-full shadow-sm shadow-rose/10"
                  />
                </StaggerItem>
              ))}
            </Masonry>
          </StaggerContainer>
        </div>
      </section>

      {/* Collections preview */}
      <section className="bg-petal/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-28">
          <SlideIn direction="up">
            <p className="text-xs uppercase tracking-[0.32em] text-primary">All Collections</p>
            <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl md:text-5xl">A garden, in seasons.</h2>
          </SlideIn>
          <StaggerContainer staggerDelay={0.15}>
            <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {collections.map((c) => (
                <StaggerItem key={c.slug}>
                  <Link
                    to="/collections/$slug"
                    params={{ slug: c.slug }}
                    className="group block"
                  >
                    <div className="overflow-hidden rounded-md relative mb-4">
                      <ImageHoverEffect
                        src={c.cover}
                        alt={c.title}
                        overlayText={c.title}
                        className="aspect-[3/4] w-full"
                      />
                    </div>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground transition-colors group-hover:text-primary">{c.season}</p>
                    <h3 className="mt-2 font-display text-xl sm:text-2xl text-foreground transition-all duration-300 group-hover:text-primary group-hover:translate-x-1">
                      <SplitText>{c.title}</SplitText>
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.tagline}</p>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* About Section */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-28">
        <div className="grid gap-8 sm:gap-12 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-16">
          <ScaleIn delay={0.2}>
            <ParallaxSection offset={20}>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2rem] bg-petal/50" />
                <ZoomOnScroll
                  src={portrait}
                  alt="Portrait of Naduni Katuwandeniya"
                  scaleRange={[1, 1.08]}
                  className="aspect-[4/5] w-full rounded-[2rem] shadow-xl shadow-rose/20"
                />
              </div>
            </ParallaxSection>
          </ScaleIn>
          <div>
            <SlideIn direction="right" delay={0.3}>
              <p className="text-xs uppercase tracking-[0.32em] text-primary">About</p>
            </SlideIn>
            <SlideIn direction="right" delay={0.4}>
              <h2 className="mt-4 font-display text-3xl leading-[1.02] text-foreground sm:text-4xl md:text-5xl">
                The atelier of <span className="italic">Naduni</span>.
              </h2>
            </SlideIn>
            <SlideIn direction="right" delay={0.5}>
              <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                Naduni Katuwandeniya is a passionate fashion designer who explores the fusion of Sri Lankan heritage craftsmanship with modern design. Her work often incorporates traditional techniques such as batik and beeralu (bobbin lace), reimagined through contemporary silhouettes and a refined aesthetic.
              </p>
            </SlideIn>
            <SlideIn direction="right" delay={0.6}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Committed to sustainable and slow fashion practices, she champions handcrafted, locally rooted techniques over mass production. Inspired by the beauty of nature, her designs reflect organic forms, delicate textures, and fluid silhouettes. Her creative journey has been closely connected with Colombo Fashion Week, celebrating Sri Lankan craftsmanship through a contemporary fashion lens.
              </p>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
        <FadeIn delay={0.2}>
          <p className="text-xs uppercase tracking-[0.32em] text-primary">Press</p>
          <h2 className="mt-3 font-display text-3xl text-foreground sm:text-4xl">As featured in</h2>
        </FadeIn>
        <StaggerContainer staggerDelay={0.08}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {press.map((p) => (
              <StaggerItem key={p}>
                <span className="font-display text-xl text-muted-foreground">{p}</span>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      <SiteFooter />
    </div>
  );
}
