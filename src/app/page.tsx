import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import { CaseStudy, Stack, Experience, About, Contact } from "@/components/Sections";
import { Wrap } from "@/components/ui";
import { profile } from "@/data/content";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero /><Work /><CaseStudy /><Stack /><Experience /><About /><Contact />
      </main>
      <footer className="border-t border-line py-8 text-sm text-muted">
        <Wrap>© {new Date().getFullYear()} {profile.name}. Built with Next.js, TypeScript and Tailwind CSS.</Wrap>
      </footer>
    </>
  );
}
