"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export function ParallaxSection({ children, offset = 50, className = "" }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

interface ZoomOnScrollProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  scaleRange?: [number, number];
}

export function ZoomOnScroll({ scaleRange = [1, 1.2], className = "", ...props }: ZoomOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [scaleRange[0], scaleRange[1], scaleRange[0]]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img {...props} style={{ scale }} className="w-full h-full object-cover" />
    </div>
  );
}

interface HoverRevealProps {
  children: ReactNode;
  overlay?: ReactNode;
  className?: string;
}

export function HoverReveal({ children, overlay, className = "" }: HoverRevealProps) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      {children}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        {overlay}
      </motion.div>
    </div>
  );
}

interface ImageHoverEffectProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  overlayText?: string;
}

export function ImageHoverEffect({ overlayText, className = "", ...props }: ImageHoverEffectProps) {
  return (
    <div className="group relative overflow-hidden rounded-md cursor-pointer">
      <motion.img
        {...props}
        className={`w-full h-full object-cover transition-all duration-700 ${className}`}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      />
      {overlayText && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center p-6"
        >
          <p className="text-white font-display text-xl">{overlayText}</p>
        </motion.div>
      )}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
    </div>
  );
}

interface SplitTextProps {
  children: string;
  className?: string;
  staggerDelay?: number;
}

export function SplitText({ children, className = "", staggerDelay = 0.03 }: SplitTextProps) {
  const letters = children.split("");

  return (
    <span className={className}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: i * staggerDelay,
            ease: [0.25, 0.4, 0.25, 1],
          }}
          className="inline-block"
          style={{ display: letter === " " ? "inline" : "inline-block" }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
}

interface LayeredParallaxProps {
  backgroundImage?: string;
  midgroundImage?: string;
  foregroundContent: ReactNode;
  className?: string;
}

export function LayeredParallax({
  backgroundImage,
  midgroundImage,
  foregroundContent,
  className = ""
}: LayeredParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const midgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 -z-20"
        >
          <img src={backgroundImage} alt="" className="w-full h-[120%] object-cover" />
        </motion.div>
      )}
      {midgroundImage && (
        <motion.div
          style={{ y: midgroundY }}
          className="absolute inset-0 -z-10"
        >
          <img src={midgroundImage} alt="" className="w-full h-[110%] object-cover opacity-70" />
        </motion.div>
      )}
      <div className="relative z-10">
        {foregroundContent}
      </div>
    </div>
  );
}

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
