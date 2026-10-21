import { inspector, projects } from "@/data/content";
import { Button, Chips, H2, Section } from "./ui";
import Inspector from "./Inspector";

export default function Work() {
  return (
    <Section id="work">
      <H2>Featured work</H2>
      <p className="max-w-[62ch] text-muted">Hover or focus a part of the live preview to see the code that powers it.</p>
      <Inspector />
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Button href={inspector.live} primary>Open live site</Button>
        <Button href={inspector.repo}>View repo</Button>
      </div>
      <div className="mt-8 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
        {projects.map((p) => (
          <article key={p.title} className="flex flex-col gap-3 rounded-xl border border-line bg-surface p-6">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-muted">{p.text}</p>
            <Chips items={p.tags} />
            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {p.links.map((l) => (
                <a key={l.label} href={l.href} className="inline-flex min-h-11 items-center rounded-[10px] border-[1.5px] border-ink px-4 text-[15px] font-semibold no-underline">{l.label}</a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
