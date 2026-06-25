import type { ReactNode } from "react";

export function Masonry({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}