import hero from "@/assets/hero.jpg";
import portrait from "@/assets/portrait.jpg";
import img1 from "@/assets/WhatsApp Image 2026-06-25 at 11.11.18.jpeg";
import img2 from "@/assets/WhatsApp Image 2026-06-25 at 11.11.31.jpeg";
import img3 from "@/assets/WhatsApp Image 2026-06-25 at 11.11.43.jpeg";
import img4 from "@/assets/WhatsApp Image 2026-06-25 at 11.12.23.jpeg";
import img5 from "@/assets/WhatsApp Image 2026-06-25 at 11.12.34.jpeg";
import img6 from "@/assets/WhatsApp Image 2026-06-25 at 11.12.45.jpeg";
import img7 from "@/assets/WhatsApp Image 2026-06-25 at 11.12.54.jpeg";
import img8 from "@/assets/WhatsApp Image 2026-06-25 at 11.13.06.jpeg";
import ds1 from "@/assets/DSC05211.jpg";
import ds2 from "@/assets/DSC05221.jpg";
import ds3 from "@/assets/DSC05240.jpg";
import ds4 from "@/assets/DSC05258.jpg";
import ds5 from "@/assets/DSC05263.jpg";
import ds6 from "@/assets/DSC05275.jpg";
import ds7 from "@/assets/DSC05283.jpg";
import cfw1 from "@/assets/Copy of 1.jpg";
import cfw2 from "@/assets/Copy of 2.jpg";
import cfw3 from "@/assets/Copy of 3.jpg";
import cfw5 from "@/assets/Copy of 5.jpg";
import cfw10 from "@/assets/Copy of 10.jpg";

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
    slug: "cfw-2021",
    title: "CFW 2021",
    season: "Colombo Fashion Week 2021",
    tagline: "",
    concept: "",
    cover: img1,
    looks: [
      { src: img1, alt: "CFW 2021 Collection" },
      { src: img2, alt: "CFW 2021 Collection" },
      { src: img3, alt: "CFW 2021 Collection" },
      { src: img4, alt: "CFW 2021 Collection" },
      { src: img5, alt: "CFW 2021 Collection" },
      { src: img6, alt: "CFW 2021 Collection" },
      { src: img7, alt: "CFW 2021 Collection" },
      { src: img8, alt: "CFW 2021 Collection" },
    ],
  },
  {
    slug: "sustainable-collection",
    title: "Sustainable Collection",
    season: "",
    tagline: "",
    concept: "",
    cover: ds1,
    looks: [
      { src: ds1, alt: "Sustainable Collection" },
      { src: ds2, alt: "Sustainable Collection" },
      { src: ds3, alt: "Sustainable Collection" },
      { src: ds4, alt: "Sustainable Collection" },
      { src: ds5, alt: "Sustainable Collection" },
      { src: ds6, alt: "Sustainable Collection" },
      { src: ds7, alt: "Sustainable Collection" },
    ],
  },
  {
    slug: "cfw-2026",
    title: "CFW 2026",
    season: "Colombo Fashion Week 2026",
    tagline: "",
    concept: "",
    cover: cfw1,
    looks: [
      { src: cfw1, alt: "CFW 2026 Collection" },
      { src: cfw2, alt: "CFW 2026 Collection" },
      { src: cfw3, alt: "CFW 2026 Collection" },
      { src: cfw5, alt: "CFW 2026 Collection" },
      { src: cfw10, alt: "CFW 2026 Collection" },
    ],
  },
];

export const allLooks = [
  { src: cfw1, alt: "Collection" },
  { src: img1, alt: "Collection" },
  { src: ds1, alt: "Collection" },
  { src: cfw2, alt: "Collection" },
  { src: img3, alt: "Collection" },
  { src: ds3, alt: "Collection" },
  { src: cfw3, alt: "Collection" },
  { src: img5, alt: "Collection" },
  { src: ds5, alt: "Collection" },
  { src: cfw5, alt: "Collection" },
  { src: img7, alt: "Collection" },
  { src: ds6, alt: "Collection" },
  { src: cfw10, alt: "Collection" },
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}
