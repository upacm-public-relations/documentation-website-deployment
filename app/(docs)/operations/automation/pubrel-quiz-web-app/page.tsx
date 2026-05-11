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
          { label: "PubRel Quiz Web App (for Committee Immersion)" },
        ]}
        title="Documentation Website"
        description="A web app designed similar to Bumble or dating apps created for committee immersion of ACM applicants within PubRel committee"
      />
      <div className="space-y-6">
        <Callout type="info" title="About this project">
          This is a web app built for the PubRel committee immersion activity during ACM applicant intake. Designed similar to a dating app (think Bumble-style swiping), it lets applicants go through a fun, interactive quiz to get to know the PubRel committee and its culture.
          <br />
          <br />
          The app was built using Lovable and requires no installation or backend setup - it runs entirely in the browser. Future PubRel heads may update the content (questions, committee members, etc.) directly through the Lovable project if needed.
          <br />
          <img 
            src="/pubrel-quiz.png"
            alt="System overview" 
            style={{ width: "100%", borderRadius: "16px", marginTop: "12px" }}
          />
        </Callout>
        {/* Setup & Usage */}
        <div className="rounded-xl p-6 space-y-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="font-semibold" style={{ color: "var(--foreground)" }}>Setup & Usage</h2>

          <div className="space-y-2">
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              No setup is required. The app is already deployed and accessible via the link in Links & Resources below - just share the link with applicants during the immersion activity.
            </p>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              If content updates are needed (e.g. new committee members, updated questions), access the project through Lovable using the project link below. Modifications can be made directly in the Lovable editor - no code knowledge required.
            </p>
          </div>
        </div>
        {/* Links & Resources */}
        <div className="rounded-xl p-6 space-y-4" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="font-semibold" style={{ color: "var(--foreground)" }}>Links & Resources</h2>
          <ul className="space-y-3">
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            • <a href="https://upacm-pubrel-quiz.lovable.app/" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
                PubRel Quiz Web App
              </a>{" "}- the live web app link to share with applicants
            </li>
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            • <a href="https://lovable.dev/projects/ef3f8b9f-ee06-4ef6-bf58-cec366ee61d6" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
                Lovable Project Link
              </a>{" "}- for editing or updating the app content
            </li>
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            • <a href="https://docs.google.com/document/d/1AHwG0hdkyIemZpLNUky8H6NtgY5kLP6LY1VBsD0_jVQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
                GDocs for Committee Immersion (2025-2026)
              </a>{" "}- for complete context of the committee immersion
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
