import { caseStudy, stack, experience, profile } from "@/data/content";
import { Button, Chips, H2, Section } from "./ui";

export function CaseStudy() {
  return (
    <Section id="case">
      <H2>{caseStudy.title}</H2>
      <p className="max-w-[62ch] text-muted">Every case study follows the same structure, so reviewers can find what they need quickly.</p>
      <ol className="mt-8 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(170px,1fr))]">
        {caseStudy.steps.map(([t, d], i) => (
          <li key={t} className="list-none border-t-2 border-accent pt-3">
            <span className="block font-extrabold text-accent">{i + 1}</span>
            <h3 className="text-lg font-semibold">{t}</h3><span className="text-muted">{d}</span>
          </li>
        ))}
      </ol>
      <div className="mt-8"><Button href="#">Read the full case study</Button></div>
    </Section>
  );
}

export function Stack() {
  return (
    <Section id="stack">
      <H2>Tech stack</H2>
      <div className="mt-8 grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(230px,1fr))]">
        {stack.map((s) => (
          <div key={s.group}><h3 className="mb-2 text-lg font-semibold">{s.group}</h3><Chips items={s.items} main={s.main} /></div>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <H2>Experience</H2>
      <ul className="mt-8 border-l-2 border-line">
        {experience.map((e) => (
          <li key={e.role} className="relative list-none pb-8 pl-6">
            <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-accent" />
            <h3 className="text-lg font-semibold">{e.role}</h3>
            <span className="text-muted">{e.when}</span>
            <p className="mt-1 max-w-[62ch]">{e.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-6 md:grid-cols-2 md:gap-12">
        <H2>About</H2>
        <div>{profile.about.map((p, i) => <p key={i} className={`mb-4 max-w-[62ch] ${i ? "text-muted" : ""}`}>{p}</p>)}</div>
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact">
      <H2>Let’s talk</H2>
      <p className="text-muted">I usually reply within one working day.</p>
      <a href={`mailto:${profile.email}`} className="break-all text-[clamp(1.4rem,4vw,2.6rem)] font-extrabold">{profile.email}</a>
    </Section>
  );
}
