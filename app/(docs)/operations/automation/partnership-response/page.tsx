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
          { label: "Partnership Reject Automation" },
        ]}
        title="Partnership Reject Automation"
        description="Automated system for sending partnership reject responses using GMail labels"
      />
      <div className="space-y-6">
        <Callout type="info" title="About this project">
          This is a Google Apps Script automation that sends rejection responses to partnership and sponsorship proposals automatically. Instead of manually drafting and sending rejection emails one by one, the PubRel Head simply labels the email thread in Gmail (ex: 25/26/All Sems/To Reject) - the script handles the rest.
          <br />
          <br />
          It runs on a time-based trigger, scans for threads labeled <strong>25/26/All Sems/To Reject</strong>, replies with the standard rejection email, and moves the thread to <strong>25/26/All Sems/Rejected</strong>. This keeps the inbox organized and ensures consistent, professional rejection responses every time.
          <br />
          <img 
            src="/partnership-reject.png"
            alt="System overview" 
            style={{ width: "100%", borderRadius: "16px", marginTop: "12px" }}
          />
        </Callout>
        {/* Setup & Usage */}
        <div className="rounded-xl p-6 space-y-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="font-semibold" style={{ color: "var(--foreground)" }}>Setup & Usage</h2>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>First-time Setup</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Open the Apps Script project and go to <span className="font-medium" style={{ color: "var(--foreground)" }}>Code.gs</span> - no changes needed here as the script is already functional
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Open <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>Reject.html</code> and update the email signature at the bottom with your own name, position, and contact details
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Make sure the following Gmail labels exist in the PubRel inbox - create them if they don't:{" "}
                <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>25/26/All Sems/To Reject</code> and{" "}
                <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>25/26/All Sems/Rejected</code>
                <i> (You may change the name of the labels like 26/27/All Sems/To Reject - but make sure to change the constant variables on Code.gs as well as the actual labels on GMail).</i>
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                (If not yet done) Set up a time-based trigger: go to <span className="font-medium" style={{ color: "var(--foreground)" }}>Triggers → Add Trigger</span>, select <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>autoRejectLabeled</code>, and set it to run on your preferred interval (e.g. every 5 or 10 minutes)
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Authorize all requested permissions when prompted
              </li>
            </ol>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Daily Usage</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Open the proposal email thread you want to reject in Gmail
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Apply the label <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>25/26/All Sems/To Reject</code> to the thread
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                The script will automatically send the rejection reply on the next trigger run and move the thread to <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>25/26/All Sems/Rejected</code>
              </li>
            </ol>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Notes for Future PubRel Heads</h3>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                The only file you need to update during turnover is <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>Reject.html</code> - update the signature with the new head's name and contact details
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                The label names are hardcoded in <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>Code.gs</code> - if you rename the labels in Gmail, make sure to update <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>REJECT_LABEL_NAME</code> and <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>DONE_LABEL_NAME</code> accordingly
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>SAFETY_DELAY_MINUTES</code> can be set to a higher value (e.g. <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>5</code>) if you want a buffer window to un-label an email before the rejection gets sent
              </li>
            </ul>
          </div>
        </div>
        {/* Links & Resources */}
        <div className="rounded-xl p-6 space-y-4" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="font-semibold" style={{ color: "var(--foreground)" }}>Links & Resources</h2>
          <ul className="space-y-3">
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            • <a href="https://script.google.com/d/1fMO97gNeMJ6LhXqor9Phqc8IQgibNfByZx-jk0EZ0IfUc0VrgHFHi6Us/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
                Gmail Apps Script Reference
              </a>{" "}- for future head/s who need to modify the script
            </li>
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            • <a href="https://developers.google.com/apps-script/guides/triggers/installable" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
                Apps Script Installable Triggers
              </a>{" "}- for setting up or modifying the time-based trigger
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
