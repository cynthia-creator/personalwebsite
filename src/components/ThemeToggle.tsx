"use client";

export default function ThemeToggle() {
  const toggle = () => {
    const dark = document.documentElement.classList.toggle("dark");
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  };
  return (
    <button type="button" onClick={toggle} aria-label="Toggle colour theme"
      className="min-h-11 rounded-lg px-3 text-muted hover:text-ink">Theme</button>
  );
}
