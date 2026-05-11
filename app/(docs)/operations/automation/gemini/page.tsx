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
          { label: "Gemini-Integrated GMail Add-on" },
        ]}
        title="Gemini-Integrated GMail Add-on"
        description="Google Mail Add-on powered by Gemini AI for PubRel operations"
      />
      <div className="space-y-6">
        <Callout type="info" title="About this project">
        This is a Gmail Add-on integrated with Google's Gemini AI, built specifically to assist the UP ACM Public Relations Head in reviewing incoming partnership and sponsorship proposals. Instead of manually reading through every email, the add-on automatically analyzes the proposal (including PDF attachments) and gives a recommended decision - ACCEPT, REJECT, or CLARIFY - along with a reasoning and a ready-to-use sample email response.
        <br />
        <br />
        The add-on appears as a sidebar when you open a proposal email in Gmail. It was built to save time, maintain consistency in evaluating proposals, and help future PubRel heads make faster, more informed decisions even without prior context on UP ACM's partnership policies.
        <br />
        <img 
          src="/gemini-integrated-gmail-addon.png" 
          alt="System overview" 
          style={{ width: "100%", borderRadius: "16px", marginTop: "12px" }}
        />
        </Callout>
        <div className="rounded-xl p-6 space-y-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="font-semibold" style={{ color: "var(--foreground)" }}>Setup & Usage</h2>

          {/* Prerequisites */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Prerequisites</h3>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>A Google account with access to the UP ACM PubRel Gmail</li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>Access to the Apps Script project tied to this add-on</li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>A Gemini API key (meron na)</li>
            </ul>
          </div>

          {/* First-time Setup */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>First-time Setup</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Go to <span className="font-medium" style={{ color: "var(--foreground)" }}>Gmail → Settings (gear icon) → Get Add-ons</span>, search for the UP ACM Proposal Reviewer, and click <span className="font-medium" style={{ color: "var(--foreground)" }}>Install</span>
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Open the Apps Script project and go to <span className="font-medium" style={{ color: "var(--foreground)" }}>Project Settings → Script Properties</span>
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Add a property: Key = <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>GEMINI_API_KEY</code>, Value = your Gemini API key
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                In <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>Code.gs</code>, update <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>SPREADSHEET_ID</code> to point to your feedback Google Sheet (or create a new one and paste its ID)
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Deploy the project as a <span className="font-medium" style={{ color: "var(--foreground)" }}>Gmail Add-on</span> (Deploy → New Deployment → Gmail Add-on)
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>Authorize all requested permissions when prompted</li>
            </ol>
          </div>

          {/* Daily Usage */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Daily Usage</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>Open any partnership proposal email in Gmail</li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>The add-on sidebar will automatically analyze the email and any PDF attachments</li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Read the <span className="font-medium" style={{ color: "var(--foreground)" }}>AI Decision</span> - ACCEPT, REJECT, or CLARIFY - along with the reasoning
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Use the <span className="font-medium" style={{ color: "var(--foreground)" }}>Sample Email Response</span> as a starting point for your reply
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>Hit <span className="font-medium" style={{ color: "var(--foreground)" }}>Re-analyze</span> if you want a fresh evaluation</li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>Submit a rating/feedback at the bottom to help improve accuracy over time</li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}><i>Note: You may click the "UP ACM Proposal Reviewer" button that will direct you to the UP ACM Proposal Reviewer Gem - this Gem is much more accurate.</i></li>
            </ol>
          </div>

          {/* Toggling Acceptance */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Toggling Acceptance</h3>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                In <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>Code.gs</code>, find <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>const IS_ACCEPTING = true</code> at the top
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Set to <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>false</code> during sem breaks or when UP ACM is not accepting proposals - the add-on will automatically recommend REJECT for all incoming emails without calling the AI
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-xl p-6 space-y-4" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="font-semibold" style={{ color: "var(--foreground)" }}>Links & Resources</h2>
          <ul className="space-y-3">
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            • <a href="https://script.google.com/d/1cG-X_y2F7t9YcJWMO8WP9XXQYN8lu_h0M_C5RgsbzxmxYU54BUWWW-VG/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
              Gmail Add-on AppScript File
              </a>{" "}- for future head/s if they want to modify the add-on functionalities
            </li>
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            • <a href="https://docs.google.com/spreadsheets/d/1Rm8g2ASEeajIJPgBbyYuC15h4uxSCYNI44GJrARWVgY/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
              Feedback & Accuracy Log Sheet
              </a>{" "}- where all submitted feedback and ratings are stored
            </li>
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            • <a href="https://gemini.google.com/gem/1EnCXGi86pQxXVcEQ8wPyXw3XXvDRzkct?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
              UP ACM Proposal Reviewer Gem
              </a>{" "}- the dedicated Gemini Gem for more detailed proposal analysis with direct file uploads
            </li>
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            • <a href="https://developers.google.com/workspace/add-ons/gmail/quickstart" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
              Gmail Add-on Developer Docs
              </a>{" "}- for future devs who need to modify or redeploy the add-on
            </li>
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            • <a href="https://ai.google.dev/gemini-api/docs" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
              Gemini API Docs
              </a>{" "}- for updating the AI model or modifying the prompt behavior
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
