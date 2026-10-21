import { profile, facts } from "@/data/content";
import { Button, Wrap } from "./ui";

export default function Hero() {
  return (
    <section className="pt-12 pb-14 md:pt-28 md:pb-24">
      <Wrap>
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm">
          <i className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-500" />{profile.availability}
        </span>
        <h1 className="max-w-[15ch] text-[clamp(2.5rem,7.5vw,5.75rem)] font-extrabold leading-[1.05] tracking-tight">{profile.headline}</h1>
        <p className="mt-6 max-w-[44ch] text-[clamp(1.1rem,2vw,1.4rem)]">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#work" primary>View work</Button>
          <Button href={profile.cv}>Download CV</Button>
          <Button href={profile.github}>GitHub</Button>
          <Button href={profile.linkedin}>LinkedIn</Button>
        </div>
        <dl className="mt-12 flex flex-wrap gap-8 border-t border-line pt-6">
          {facts.map((f) => (
            <div key={f.label} className="min-w-32"><dt className="text-2xl font-bold">{f.value}</dt><dd className="text-muted">{f.label}</dd></div>
          ))}
        </dl>
      </Wrap>
    </section>
  );
}
