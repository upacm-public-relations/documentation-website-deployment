import { PageHeader } from "@/components/doc-components/PageHeader";
import { StatusBadge } from "@/components/doc-components/StatusBadge";
import { Callout } from "@/components/doc-components/Callout";

// TODO: Replace with actual backlog items
const backlogs = [
  // {
  //   title: "Placeholder backlog item 1",
  //   status: "backlog" as const,
  //   priority: "High",
  //   notes: "Add description and context here",
  // },
  {
    title: "Accomplish benefits of Algolympics 2026 Org Partners",
    status: "in-progress" as const,
    priority: "Medium",
    notes: "As of May 11, 2026, there are still 10 orgs with their benefits not yet completed. You may carry these tasks on your term OR ghost them (not recommended - since out of respect na rin na partner natin sila).",
  },
  // {
  //   title: "Placeholder backlog item 3",
  //   status: "needs-improvement" as const,
  //   priority: "Low",
  //   notes: "Add description and context here",
  // },
];

export default function BacklogsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Institutional Knowledge" },
          { label: "Backlogs (PubRel 2026)" },
        ]}
        title="Backlogs (PubRel 2026-2027)"
        description="Unfinished items and pending tasks from the 2025-2026 PubRel Committee"
      />

      <Callout type="warning" title="For Incoming PubRel Head/s" className="mb-8">
        These are items that were not completed during AY 2025–2026 and may need to be formally closed.
      </Callout>

      <div className="space-y-4">
        {backlogs.map((item, i) => (
          <div
            key={i}
            className="rounded-xl p-5 flex items-start gap-4"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-medium" style={{ color: "var(--foreground)" }}>
                  {item.title}
                </h3>
                <StatusBadge status={item.status} />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{
                    background: item.priority === "High" ? "rgba(220,38,38,0.1)" : item.priority === "Medium" ? "rgba(217,119,6,0.1)" : "rgba(100,100,100,0.1)",
                    color: item.priority === "High" ? "#dc2626" : item.priority === "Medium" ? "#d97706" : "#6b7280",
                  }}
                >
                  {item.priority} Priority
                </span>
              </div>
              <p className="text-sm italic" style={{ color: "var(--muted-foreground)" }}>
                {item.notes}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* <div
        className="mt-6 rounded-xl p-5 text-sm"
        style={{ background: "var(--secondary)", color: "var(--muted-foreground)" }}
      >
        ✏️ Edit the <code className="px-1 rounded text-xs" style={{ fontFamily: "monospace", background: "var(--border)" }}>backlogs</code> array in{" "}
        <code className="px-1 rounded text-xs" style={{ fontFamily: "monospace", background: "var(--border)" }}>app/(docs)/knowledge/backlogs/page.tsx</code> to add real backlog items.
      </div> */}
    </div>
  );
}
