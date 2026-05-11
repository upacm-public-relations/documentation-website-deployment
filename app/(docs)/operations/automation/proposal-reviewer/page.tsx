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
          { label: "Proposal Reviewer Gem" },
        ]}
        title="Proposal Reviewer Gem"
        description="Automated reviewer for evaluating partnership and sponsorship proposals using Gemini's Gem"
      />
      <div className="space-y-6">
        <Callout type="info" title="About this project">
          This is a custom Gemini Gem built specifically for the UP ACM Public Relations Head to evaluate incoming partnership and sponsorship proposals. By uploading a proposal (as a PDF, image, or pasted text), the Gem analyzes the content and recommends a decision - ACCEPT, REJECT, or CLARIFY - based on UP ACM PubRel's evaluation guidelines.
          <br />
          <br />
          It serves as a standalone alternative to the Gmail Add-on, useful when reviewing proposals outside of Gmail or when a more detailed, file-based analysis is needed.
          <br />
          <img 
            src="/proposal-reviewer-gem.png"
            alt="System overview" 
            style={{ width: "100%", borderRadius: "16px", marginTop: "12px" }}
          />
        </Callout>
        {/* Setup & Usage */}
        <div className="rounded-xl p-6 space-y-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="font-semibold" style={{ color: "var(--foreground)" }}>Setup & Usage</h2>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Accessing the Gem</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Open the <span className="font-medium" style={{ color: "var(--foreground)" }}>UP ACM Proposal Reviewer Gem</span> via the link in Links & Resources below
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Log in with your Google account - no additional setup required
              </li>
            </ol>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Reviewing a Proposal</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Upload the proposal as a <span className="font-medium" style={{ color: "var(--foreground)" }}>PDF or image</span>, or paste the proposal text directly into the chat
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                The Gem will respond with a decision - <span className="font-medium" style={{ color: "var(--foreground)" }}>ACCEPT, REJECT, or CLARIFY</span> - along with a reasoning and suggested action items
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Use the output as a guide when drafting your email response to the sender
              </li>
            </ol>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Notes for Future PubRel Heads</h3>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                The Gem's instructions encode UP ACM PubRel's evaluation rules - if policies change, the Gem instructions should be updated accordingly
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Only the Gem owner (the one who created it) can edit the instructions - make sure to transfer ownership during turnover.
              </li>
            </ul>
          </div>
        </div>
        {/* Links & Resources */}
        <div className="rounded-xl p-6 space-y-4" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="font-semibold" style={{ color: "var(--foreground)" }}>Links & Resources</h2>
          <ul className="space-y-3">
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            • <a href="https://gemini.google.com/gem/1EnCXGi86pQxXVcEQ8wPyXw3XXvDRzkct?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
                UP ACM Proposal Reviewer Gem
              </a>{" "}- the Gemini Gem for direct proposal analysis with file uploads
            </li>
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            • <a href="https://support.google.com/gemini/answer/14945861" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
                Gemini Gems Help Page
              </a>{" "}- for guidance on editing, sharing, or recreating Gems
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
