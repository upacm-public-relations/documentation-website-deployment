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
          { label: "Send To All Automation" },
        ]}
        title="Send To All Automation"
        description="Automated system for forwarding opportunities sent from PubRel email to all ACMems "
      />
      <div className="space-y-6">
        <Callout type="info" title="About this project">
          This is a Google Apps Script automation that forwards opportunity emails to all ACMems with a single label. When the PubRel Head receives an email worth sharing - such as internship opportunities, tech events, or relevant programs - they simply label the thread in Gmail (ex: 25/26/All Sems/To Send To All) and the script automatically forwards it to every ACMem on the list, with a standard forwarding message on top of the original email.
          <br />
          <br />
          It runs on a time-based trigger, scans for threads labeled <strong>25/26/All Sems/To Send To All</strong>, forwards the email (including any attachments) to all ACMems, and moves the thread to <strong>25/26/All Sems/Sent To All</strong> to keep the inbox organized.
          <br />
          <img 
            src="/send-to-all.png"
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
                Open <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>Code.gs</code> and update the <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>FORWARD_TO_EMAILS</code> array with the current list of ACMem email addresses
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Open <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>ForwardHeader.html</code> and update the email signature with your own name, position, and contact details
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Make sure the following Gmail labels exist in the PubRel inbox - create them if they don't:{" "}
                <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>25/26/All Sems/To Send To All</code> and{" "}
                <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>25/26/All Sems/Sent To All</code>
                <i> (You may change the name of the labels like 26/27/All Sems/To Send To All - but make sure to change the constant variables on Code.gs as well as the actual labels on GMail).</i>
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                (If not yet done) Set up a time-based trigger: go to <span className="font-medium" style={{ color: "var(--foreground)" }}>Triggers → Add Trigger</span>, select <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>autoForwardToAll</code>, and set it to run on your preferred interval (e.g. every 5 or 10 minutes)
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
                Open the email thread you want to forward to all ACMems in Gmail
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Apply the label <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>25/26/All Sems/To Send To All</code> to the thread
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                The script will automatically forward the email (with attachments, if any) to all ACMems on the next trigger run and move the thread to <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>25/26/All Sems/Sent To All</code>
              </li>
            </ol>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Notes for Future PubRel Heads</h3>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                During turnover, update <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>FORWARD_TO_EMAILS</code> in <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>Code.gs</code> with the mem's email addresses, and update the signature in <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>ForwardHeader.html</code> with the new head's details
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                If the label names change, update <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>TO_SEND_LABEL_NAME</code> and <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>DONE_SENDING_LABEL_NAME</code> in <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>Code.gs</code> accordingly
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>SAFETY_DELAY_MINUTES_FORWARD</code> can be set to a higher value (e.g. <code className="px-1 rounded text-xs" style={{ background: "var(--muted)", color: "var(--foreground)" }}>5</code>) if you want a buffer window to un-label a thread before it gets forwarded
              </li>
            </ul>
          </div>
        </div>
        {/* Links & Resources */}
        <div className="rounded-xl p-6 space-y-4" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="font-semibold" style={{ color: "var(--foreground)" }}>Links & Resources</h2>
          <ul className="space-y-3">
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            • <a href="https://script.google.com/d/1G4i1cz5vFulfaWKK5AJ6MPHcAmHlGavd68F_7m7GRnKwVVlbf54AxwHL/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
                Gmail Apps Script Reference
              </a>{" "}- for future devs who need to modify the script
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
