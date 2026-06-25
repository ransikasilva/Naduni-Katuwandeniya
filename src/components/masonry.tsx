import type { ReactNode } from "react";

export function Masonry({ children }: { children: ReactNode }) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
      {children}
    </div>
  );
}