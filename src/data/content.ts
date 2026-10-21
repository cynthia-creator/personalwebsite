// Edit this file: it is the single source of truth for the whole site.
export const profile = {
  name: "Cynthia Kamuzembe",
  headline: "I build fast, accessible React interfaces and the Node APIs behind them.",
  intro: "Front-end engineer with 4 years of experience shipping TypeScript products, from design system to database.",
  availability: "Open to new roles",
  location: "Based in Cape Town",
  email: "ceemaruta@gmail.com",
  github: "https://github.com/cynthia-creator",
  linkedin: "https://www.linkedin.com/in/cynthiakamuzembe/",
  cv: "/cv.pdf", // put your PDF in /public/cv.pdf
  about: [
    "I care about interfaces that load quickly, work with a keyboard, and are easy for the next developer to change. I like owning a feature from the first sketch to production monitoring.",
    "Outside work: trail running and over-engineered coffee.",
  ],
};

export const facts = [
  { value: "4 yrs", label: "React + TypeScript" },
  { value: "35+", label: "Lighthouse on this site" },
  { value: "Remote / hybrid", label: profile.location },
];

export type SourceFile = { name: string; code: string };
export type Hotspot = { file: number; lines: [number, number]; label: string };

export const inspector = {
  title: "Orders dashboard",
  live: "#",
  repo: "#",
  files: [
    {
      name: "useOrders.ts",
      code: `import { useQuery } from "@tanstack/react-query";
import type { Order, OrderFilter } from "./types";

export function useOrders(filter: OrderFilter) {
  return useQuery<Order[], Error>({
    queryKey: ["orders", filter],
    queryFn: () => api.get<Order[]>("/orders", filter),
    staleTime: 30_000,
    placeholderData: (prev) => prev,
  });
}`,
    },
    {
      name: "OrderTable.tsx",
      code: `type State =
  | { kind: "loading" }
  | { kind: "error"; message: string }
  | { kind: "ready"; orders: Order[] };

export function OrderTable({ state }: { state: State }) {
  switch (state.kind) {
    case "loading":
      return <Skeleton rows={8} />;
    case "error":
      return <ErrorPanel message={state.message} />;
    case "ready":
      return <Table rows={state.orders} />;
  }
}`,
    },
    {
      name: "orders.route.ts",
      code: `router.get("/orders", requireRole("manager"), async (req, res) => {
  const filter = orderFilterSchema.parse(req.query);
  const orders = await db.order.findMany({ where: filter, take: 50 });
  res.json(orders);
});`,
    },
  ] as SourceFile[],
  hotspots: [
    { file: 0, lines: [4, 9], label: "Orders" },
    { file: 1, lines: [8, 12], label: "Table" },
    { file: 2, lines: [1, 5], label: "API" },
  ] as Hotspot[],
  rows: [
    { who: "#1042 Thandi M.", status: "Shipped" },
    { who: "#1041 Pieter V.", status: "Pending" },
    { who: "#1040 Aisha K.", status: "Shipped" },
  ],
};

export const projects = [
  { title: "Booking platform", text: "Scheduling app used by 40 staff. Cut double-bookings to zero with optimistic updates and server-side conflict checks.", tags: ["React", "TypeScript", "Node.js", "PostgreSQL"], links: [{ label: "Live", href: "#" }, { label: "Code", href: "#" }] },
  { title: "Performance overhaul", text: "Reduced bundle size by 40% and LCP from 4.1 s to 1.8 s through route splitting and image strategy.", tags: ["Vite", "React", "Web Vitals"], links: [{ label: "Read case study", href: "#" }] },
  { title: "Typed component library", text: "Accessible components with Storybook docs and 90% test coverage, adopted across three internal apps.", tags: ["TypeScript", "Storybook", "Vitest"], links: [{ label: "Storybook", href: "#" }, { label: "Code", href: "#" }] },
];

export const caseStudy = {
  title: "Case study: Cutting load time in half",
  steps: [
    ["Context", "Product, team, my role."],
    ["Problem", "LCP of 4.1 s on mid-range phones."],
    ["Approach", "Decisions made and options rejected."],
    ["Code", "One snippet that shows the key decision."],
    ["Results", "LCP 1.8 s, bundle down 40%."],
  ],
};

export const stack = [
  { group: "Used daily", main: true, items: ["TypeScript", "React", "Node.js", "Next.js", "Tailwind CSS"] },
  { group: "Comfortable with", items: ["Express", "PostgreSQL", "React Query", "GraphQL", "Docker"] },
  { group: "Testing", items: ["Vitest", "Testing Library", "Playwright"] },
  { group: "Tooling", items: ["Git", "GitHub Actions", "Vite", "Storybook", "Vercel"] },
];

export const experience = [
  { role: "Front-end Engineer, Freelancing", when: "2024 to present", text: "Led the move to a typed API client and cut regression bugs by 30%." },
  { role: "Software Developer, Freelancing", when: "2022 to 2024", text: "Built customer dashboards in React and the Node services behind them. Mentored two junior developers." },
];
