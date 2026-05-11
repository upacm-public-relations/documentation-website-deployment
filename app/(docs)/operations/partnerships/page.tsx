import { PageHeader } from "@/components/doc-components/PageHeader";
import { Callout } from "@/components/doc-components/Callout";
import Link from "next/link";

const workflowSteps = [
  {
    step: 1,
    title: "Initial Contact",
    desc: "An organization reaches out via email or referral.",
  },
  {
    step: 2,
    title: "Review & Assessment",
    desc: "Evaluate the proposal against UP ACM's partnership criteria, alignment with chapter goals, and mutual benefit.",
  },
  {
    step: 3,
    title: "Internal Deliberation (optional)",
    desc: "Present to the Executive Board or PubRel Team if needed. Get approval from relevant parties before responding (optional).",
  },
  {
    step: 4,
    title: "Draft & Send Response",
    desc: "Either reject, accept, or clarify the partnership proposals. Clarify if you want to negotiate or benefits/responsibilities are unclear",
  },
  {
    step: 5,
    title: "Agreement",
    desc: "Once an organization sends their MOA, read them and accept them (or clarify if needed). You may change their email label.",
  },
  {
    step: 6,
    title: "Ongoing Management",
    desc: "Maintain regular check-ins and update partnership tracker/s if present. Reply them back if the responsibilities on our side is done.",
  },
];
const linkClass = "text-[#2D9CDB] hover:underline transition-colors"

export default function PartnershipsWorkflowPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Operations" },
          { label: "Partnerships Workflow" },
        ]}
        title="Partnerships Workflow"
        description="Step-by-step guide for managing partnership and sponsorship processes"
      />

      {/* <Callout type="info" title="Tip" className="mb-8">
        You may use either UP ACM Proposal Reviewer Gem or GMail Add-On Proposal Reviewer to speed up assessing proposals and drafting responses to them. Please see the Automation Projects section for setup instructions.
      </Callout> */}
      <Callout type="info" title="Tip" className="mb-8">
        You may use either{" "}
        <Link href="/operations/automation/proposal-reviewer" className={linkClass}>
          UP ACM Proposal Reviewer Gem
        </Link>{" "}
        or{" "}
        <Link href="/operations/automation/gemini" className={linkClass}>
          GMail Add-On Proposal Reviewer
        </Link>{" "}
        to speed up assessing proposals and drafting responses to them. Please see the Automation Projects section for setup instructions.
      </Callout>

      <div className="space-y-4 mb-10">
        <h2 className="text-xl font-semibold" style={{ color: "var(--foreground)" }}>
          Partnership Workflow Steps
        </h2>
        {workflowSteps.map((s) => (
          <div
            key={s.step}
            className="flex items-start gap-4 rounded-xl p-5"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ background: "#0B1F3B" }}
            >
              {s.step}
            </div>
            <div>
              <h3 className="font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                {s.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="rounded-xl p-6"
        style={{ background: "var(--card)", border: "1px solid var(--border)" }}
      >
        <h2 className="font-semibold mb-3" style={{ color: "var(--foreground)" }}>
          Partnership Criteria
        </h2>
        <div className="space-y-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
        <p className="italic">
          Please refer to the{" "}
          <Link
            href="/operations/automation/proposal-reviewer"
            className="text-[#2D9CDB] hover:text-[#0B1F3B] hover:underline transition-colors"
          >
            UP ACM Proposal Reviewer Gem
          </Link>{" "}
          Instructions for partnership evaluation criteria. You may also update them.
        </p>
        </div>
      </div>
    </div>
  );
}
