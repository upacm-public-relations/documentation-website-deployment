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
          { label: "Email Blast System" },
        ]}
        title="Email Blast System"
        description="System for managing and sending mass emails to org partners"
      />
      <div className="space-y-6">
        <Callout type="info" title="About this project">
          This is a Google Apps Script automation attached to a Google Spreadsheet that sends mass partnership proposal emails to a list of organizations. The PubRel Head prepares a spreadsheet of target org emails, customizes the HTML email template for the specific event or blast, and runs the script - it automatically sends personalized emails to each org and logs the send status back into the sheet.
          <br />
          <br />
          It is built to be reused across different events and sems. Each blast only requires updating the email template, subject line, and spreadsheet data - the core script logic stays the same.
          <br />
          <img 
            src="/email-blast.png" 
            alt="System overview" 
            style={{ width: "100%", borderRadius: "16px", marginTop: "12px" }}
          />
        </Callout>
        {/* Setup & Usage */}
        <div className="rounded-xl p-6 space-y-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="font-semibold" style={{ color: "var(--foreground)" }}>Setup & Usage</h2>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Spreadsheet Structure</h3>
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              The script reads from <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>Sheet1</code> and expects the following column headers exactly as written:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>Org Name</code> - used to personalize the email greeting
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>Email Address</code> - recipient email address
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>Proposal Last Last Sent?</code> - set to <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>TRUE</code> by the script after a successful send; rows marked TRUE are skipped on re-runs
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>Proposal Last Last Send Details</code> - auto-filled by the script with the timestamp and send status
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Per-Event Setup</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Update the HTML email template file (e.g. <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>Algo-Partnership.html</code>) with the correct event details, packages, and deadlines - use <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>&lt;?= nickname ?&gt;</code> wherever you want the org name to appear
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                In <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>Code.gs</code>, update the <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>htmlTemplate</code> filename and <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>emailSubject</code> to match the current blast
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Fill in <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>Sheet1</code> with the target org names and email addresses, leaving the last two columns blank
              </li>
            </ol>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Sending the Blast</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Open the Google Spreadsheet and go to <span className="font-medium" style={{ color: "var(--foreground)" }}>Extensions → Apps Script</span>
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Make sure you are logged in as <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>public_relations@upacm.net</code> - the script will not run from any other account
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Run the <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>sendEmail</code> function - the script will send to all rows where <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>Proposal Last Last Sent?</code> is not <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>TRUE</code>
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                A popup will appear once done - check the sheet for send statuses per row
              </li>
            </ol>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Notes for Future PubRel Heads</h3>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Set <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>devMode = true</code> in <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>Code.gs</code> while testing - this redirects all emails to <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>devReceiver</code> instead of the actual org list
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Rows already marked <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>TRUE</code> are automatically skipped - safe to re-run if the blast was interrupted midway
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                For a new event blast, it is recommended to duplicate the spreadsheet and start fresh rather than reusing the same sheet to avoid accidentally skipping rows
              </li>
            </ul>
          </div>
        </div>
        {/* Links & Resources */}
        <div className="rounded-xl p-6 space-y-4" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="font-semibold" style={{ color: "var(--foreground)" }}>Links & Resources</h2>
          <ul className="space-y-3">
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            • <a href="https://script.google.com/u/7/home/projects/1LN7K1rHy4ezA_ZDR85snbvwxVx4OAa6nH2g1LEy9NNHuoOpmd7FbRrQm/edit" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
                Gmail Apps Script Reference
              </a>{" "}- for future devs who need to modify the script
            </li>
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            • <a href="https://docs.google.com/spreadsheets/d/11o-xm0rYKJhYyC_sS9zKPszZQyWwDWr29MZrp3AStxE/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
                GSheet used from last year's Algolympics 2026
              </a>{" "}- for future devs who need reference of the sheets used last term
            </li>
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            • <a href="https://developers.google.com/apps-script/guides/html/templates" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
                Apps Script HTML Templates
              </a>{" "}- for updating or creating new email HTML templates
            </li>
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            • <a href="https://beefree.io/app" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
                BeeFree.io
              </a>{" "}- I personally used this to edit HTML templates for FREE.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
