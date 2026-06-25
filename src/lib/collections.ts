import hero from "@/assets/hero.jpg";
import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";
import look3 from "@/assets/look-3.jpg";
import look4 from "@/assets/look-4.jpg";
import look5 from "@/assets/look-5.jpg";
import look6 from "@/assets/look-6.jpg";

export type Collection = {
  slug: string;
  title: string;
  season: string;
  tagline: string;
  concept: string;
  cover: string;
  looks: { src: string; alt: string }[];
};

export const collections: Collection[] = [
  {
    slug: "in-bloom",
    title: "In Bloom",
    season: "Spring / Summer 2026",
    tagline: "A reverie of first petals.",
    concept:
      "In Bloom is a meditation on awakening — the quiet moment a bud unfurls toward the morning sun. Hand-embroidered cherry blossom motifs drift across blush chiffon and silk organza, layered to catch the light like falling petals.",
    cover: hero,
    looks: [
      { src: hero, alt: "Blush couture gown with floral embroidery" },
      { src: look1, alt: "Pale pink chiffon dress in window light" },
      { src: look2, alt: "Close-up of floral lace and pearl beadwork" },
      { src: look4, alt: "Bridal gown beneath cherry blossoms" },
      { src: look6, alt: "Cherry blossom and silk still life" },
    ],
  },
  {
    slug: "petal-and-pearl",
    title: "Petal & Pearl",
    season: "Bridal 2025",
    tagline: "Heirloom romance, rewritten.",
    concept:
      "An ode to the modern bride. Pearl-strewn bodices, hand-set lace, and skirts that move like breath. Petal & Pearl reimagines the bridal silhouette with a softness that lingers long after the vow.",
    cover: look4,
    looks: [
      { src: look4, alt: "Pale blush bridal gown in garden setting" },
      { src: look2, alt: "Floral lace and pearl beadwork detail" },
      { src: look1, alt: "Couture chiffon dress with embroidery" },
      { src: look5, alt: "Atelier mannequin in soft pink silk" },
    ],
  },
  {
    slug: "rose-couture",
    title: "Rose Couture",
    season: "Autumn / Winter 2025",
    tagline: "The deeper hush of the garden.",
    concept:
      "Rose Couture turns toward the late garden — fuller blooms, richer color, slower silhouettes. Draped silk satin, sculptural ruffles, and the unmistakable weight of couture.",
    cover: look3,
    looks: [
      { src: look3, alt: "Deep rose draped saree-gown with ruffles" },
      { src: look5, alt: "Atelier studio with pink couture dress" },
      { src: look6, alt: "Cherry blossoms on marble surface" },
      { src: hero, alt: "Couture gown with floral embroidery" },
    ],
  },
];

export const allLooks = [
  { src: hero, alt: "Couture blush gown" },
  { src: look3, alt: "Deep rose draped gown" },
  { src: look1, alt: "Chiffon dress in window light" },
  { src: look4, alt: "Bridal gown under blossoms" },
  { src: look2, alt: "Floral lace and pearl detail" },
  { src: look5, alt: "Atelier mannequin" },
  { src: look6, alt: "Cherry blossom still life" },
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}