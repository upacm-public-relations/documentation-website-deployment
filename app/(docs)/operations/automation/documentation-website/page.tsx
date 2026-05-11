import { PageHeader } from "@/components/doc-components/PageHeader";
import { Callout } from "@/components/doc-components/Callout";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Operations" },
          { label: "Projects (Automation and Website)" },
          { label: "Documentation Website" },
        ]}
        title="Documentation Website"
        description="The PR Committee internal documentation website — this site"
      />
      <div className="space-y-6">
        <Callout type="info" title="About this project">
          Placeholder — Add an overview of this project, its purpose, and how it fits into PR operations.
        </Callout>
        <div className="rounded-xl p-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="font-semibold mb-4" style={{ color: "var(--foreground)" }}>Setup & Usage</h2>
          <p className="text-sm italic" style={{ color: "var(--muted-foreground)" }}>
            Placeholder — Add setup instructions, usage guide, and technical details here.
          </p>
        </div>
        <div className="rounded-xl p-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="font-semibold mb-4" style={{ color: "var(--foreground)" }}>Links & Resources</h2>
          <p className="text-sm italic" style={{ color: "var(--muted-foreground)" }}>
            Placeholder — Add links to the project repository, documentation, or relevant files.
          </p>
        </div>
      </div>
    </div>
  );
}
