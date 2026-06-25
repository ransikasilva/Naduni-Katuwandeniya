import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-petal/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl text-foreground">Naduni Katuwandeniya</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            A couture practice exploring softness, romance, and the language of bloom.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/collections" className="text-foreground/80 hover:text-primary">Collections</Link></li>
            <li><Link to="/runway" className="text-foreground/80 hover:text-primary">Runway</Link></li>
            <li><Link to="/about" className="text-foreground/80 hover:text-primary">About</Link></li>
            <li><Link to="/contact" className="text-foreground/80 hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Elsewhere</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="https://instagram.com" className="text-foreground/80 hover:text-primary">Instagram</a></li>
            <li><a href="mailto:studio@naduni.atelier" className="text-foreground/80 hover:text-primary">studio@naduni.atelier</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <p className="mx-auto max-w-7xl px-6 py-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          © {new Date().getFullYear()} Naduni Katuwandeniya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}