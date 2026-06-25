import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SlideIn, FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@/components/scroll-animations";
import {
  TiltImage,
  GradientBlob,
  TextReveal,
  Spotlight
} from "@/components/advanced-animations";
import portrait from "@/assets/ppp.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Naduni Katuwandeniya" },
      { name: "description", content: "About Naduni Katuwandeniya — Sri Lankan fashion designer exploring heritage craftsmanship through sustainable, contemporary design." },
      { property: "og:title", content: "About — Naduni Katuwandeniya" },
      { property: "og:description", content: "Exploring the fusion of Sri Lankan heritage craftsmanship with modern design through sustainable fashion practices." },
      { property: "og:image", content: portrait },
      { name: "twitter:image", content: portrait },
    ],
  }),
  component: AboutPage,
});

const press = ["Colombo Fashion Week"];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Spotlight />
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28 relative">
        <GradientBlob className="top-0 left-0 w-[400px] h-[400px]" colors={["#ffb6c1", "#ffc0cb", "#ff69b4"]} />
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-16">
          <ScaleIn delay={0.2}>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2rem] bg-petal/50" />
              <TiltImage
                src={portrait}
                alt="Portrait of Naduni Katuwandeniya"
                tiltMaxAngle={12}
                scale={1.04}
                className="aspect-[4/5] w-full rounded-[2rem] shadow-xl shadow-rose/20"
              />
            </div>
          </ScaleIn>
          <div>
            <SlideIn direction="right" delay={0.3}>
              <p className="text-xs uppercase tracking-[0.32em] text-primary">About</p>
            </SlideIn>
            <SlideIn direction="right" delay={0.4}>
              <h1 className="mt-4 font-display text-5xl leading-[1.02] text-foreground sm:text-6xl">
                <TextReveal delay={0.5}>The atelier of</TextReveal> <span className="italic"><TextReveal delay={0.7}>Naduni</TextReveal></span>.
              </h1>
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
            <SlideIn direction="right" delay={0.7}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Beyond fashion, Naduni works as a UI/UX Engineer, designing digital products and dashboards with the same precision and craft she brings to her textile work.
              </p>
            </SlideIn>
          </div>
        </div>
      </section>

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