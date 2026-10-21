import type { ReactNode } from "react";

export const Wrap = ({ children }: { children: ReactNode }) => (
  <div className="mx-auto max-w-[1180px] px-4 sm:px-8">{children}</div>
);

export const Section = ({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) => (
  <section id={id} className={`py-14 md:py-24 ${className}`}><Wrap>{children}</Wrap></section>
);

export const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="mb-2 text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-[1.08] tracking-tight">{children}</h2>
);

const base = "inline-flex min-h-11 items-center justify-center rounded-[10px] border-[1.5px] px-5 py-2 font-semibold no-underline";
export const Button = ({ href, children, primary }: { href: string; children: ReactNode; primary?: boolean }) => (
  <a href={href} className={`${base} ${primary ? "border-accent bg-accent text-accent-ink" : "border-ink text-ink"}`}>{children}</a>
);

export const Chips = ({ items, main }: { items: string[]; main?: boolean }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((i) => (
      <li key={i} className={`rounded-md border px-2 py-0.5 text-sm ${main ? "border-ink bg-ink text-bg" : "border-line"}`}>{i}</li>
    ))}
  </ul>
);
