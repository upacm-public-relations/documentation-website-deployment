import Link from "next/link";
import { Info, Settings, BookOpen, Folder, ArrowRight, Clock, Sparkles } from "lucide-react";

const quickAccessCards = [
  {
    title: "Overview",
    description: "Committee structure, responsibilities, and workflows",
    icon: Info,
    href: "/overview/constitution",
    accent: "#2D9CDB",
  },
  {
    title: "Operations",
    description: "Partnerships, automation projects, and website systems",
    icon: Settings,
    href: "/operations/partnerships",
    accent: "#2D9CDB",
  },
  {
    title: "Institutional Knowledge",
    description: "Retrospectives, SWOT analysis, and historical records",
    icon: BookOpen,
    href: "/knowledge/retrospectives",
    accent: "#F4C542",
  },
  {
    title: "Resources",
    description: "Links, contacts, and key references",
    icon: Folder,
    href: "/resources/links",
    accent: "#2D9CDB",
  },
];

const recentUpdates = [
  { title: "UP ACM PubRel Documentation Website", date: "May 2026", badge: "Ongoing" },
  { title: "Partnership Response Automation", date: "May 2026", badge: "Active" },
  { title: "UP ACM PubRel Email Blaster", date: "April 2026", badge: "Active" },
  { title: "GMail Add-On Proposal Reviewer", date: "April 2026", badge: "Active" },
];

const onboardingSteps = [
  {
    step: 1,
    title: "Review the Constitution & Responsibilities",
    desc: "Understand your role and committee structure",
  },
  {
    step: 2,
    title: "Explore Operations & Projects",
    desc: "Learn about partnerships, automation, and website systems",
  },
  {
    step: 3,
    title: "Access Institutional Knowledge",
    desc: "Review past retrospectives and SWOT analysis",
  },
  {
    step: 4,
    title: "Familiarize with Resources",
    desc: "Bookmark important links and contacts",
  },
];

export function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
      {/* Header */}
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <div
            className="h-16 w-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
            style={{ background: "#0B1F3B" }}
          >
            <img
                src="/logo.svg"
                alt="UP ACM Logo"
                className="h-10 w-10 object-contain"
              />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
              UP ACM Public Relations Committee
            </h1>
            <p className="text-lg mt-1" style={{ color: "var(--muted-foreground)" }}>
              Documentation & Knowledge Base · AY 2025–2026
            </p>
          </div>
        </div>

        {/* Welcome callout */}
        <div
          className="rounded-xl p-5 flex gap-4"
          style={{ background: "rgba(244,197,66,0.07)", border: "1px solid rgba(244,197,66,0.25)" }}
        >
          <Sparkles className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#d4a017" }} />
          <div>
            <p className="font-semibold" style={{ color: "var(--foreground)" }}>
              Welcome to the UP ACM PubRel Documentation System
            </p>
            <p className="text-sm mt-1" style={{ color: "var(--muted-foreground)" }}>
              This is the official internal turnover knowledge base for future Public Relations Heads.
              Navigate through the sections below to access workflows, institutional knowledge, and operational resources.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div>
        <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickAccessCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group rounded-xl p-5 transition-all hover:shadow-md"
                style={{ background: "var(--card)", border: "1px solid var(--border)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="p-2.5 rounded-lg"
                    style={{ background: `${card.accent}18` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: card.accent }} />
                  </div>
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    style={{ color: "var(--muted-foreground)" }}
                  />
                </div>
                <h3 className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                  {card.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                  {card.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom two-col */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Onboarding */}
        <div
          className="lg:col-span-2 rounded-xl p-6"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <h2 className="font-semibold text-lg mb-1" style={{ color: "var(--foreground)" }}>
            Start Here - Onboarding Guide
          </h2>
          <p className="text-sm mb-5" style={{ color: "var(--muted-foreground)" }}>
            Essential steps for incoming Public Relations Heads
          </p>
          <div className="space-y-3">
            {onboardingSteps.map((s) => (
              <div
                key={s.step}
                className="flex items-start gap-4 p-3.5 rounded-lg transition-colors"
                style={{ background: "var(--secondary)" }}
              >
                <div
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: "#0B1F3B" }}
                >
                  {s.step}
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                    {s.title}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Updates */}
        <div
          className="rounded-xl p-6"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <div className="flex items-center gap-2 mb-5">
            <Clock className="h-4 w-4" style={{ color: "var(--muted-foreground)" }} />
            <h2 className="font-semibold" style={{ color: "var(--foreground)" }}>Recent Updates</h2>
          </div>
          <div className="space-y-4">
            {recentUpdates.map((u, i) => (
              <div key={i} className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                    {u.title}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--muted-foreground)" }}>
                    {u.date}
                  </p>
                </div>
                <span
                  className="text-xs px-2 py-0.5 rounded-full shrink-0 font-medium"
                  style={
                    u.badge === "Active"
                      ? { background: "rgba(34,197,94,0.12)", color: "#15803d" }
                      : { background: "rgba(45,156,219,0.12)", color: "#1a7ab5" }
                  }
                >
                  {u.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
