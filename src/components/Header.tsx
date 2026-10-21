import { profile } from "@/data/content";
import { Wrap } from "./ui";
import ThemeToggle from "./ThemeToggle";

const links = [["Work", "#work"], ["Case study", "#case"], ["Stack", "#stack"], ["Experience", "#experience"], ["Contact", "#contact"]];

export default function Header() {
  return (
    <header className="sticky top-[env(safe-area-inset-top,0px)] z-40 border-b border-line bg-bg/90 backdrop-blur">
      <Wrap>
        <div className="flex h-16 items-center justify-between gap-4">
          <a href="#top" className="font-extrabold no-underline">{profile.name}</a>
          <nav aria-label="Main" className="flex items-center overflow-x-auto">
            {links.map(([l, h]) => (
              <a key={h} href={h} className="whitespace-nowrap rounded-lg px-3 py-2.5 text-muted no-underline hover:text-ink">{l}</a>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </Wrap>
    </header>
  );
}
