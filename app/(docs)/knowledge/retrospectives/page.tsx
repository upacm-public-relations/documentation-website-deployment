import { PageHeader } from "@/components/doc-components/PageHeader";
import { Callout } from "@/components/doc-components/Callout";
import { StatusBadge } from "@/components/doc-components/StatusBadge";
import { ThumbsUp, AlertTriangle, Lightbulb } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function RetrospectivesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Institutional Knowledge" },
          { label: "Retrospectives (2526)" },
        ]}
        title="Retrospectives (2526)"
        description="End-of-year reflections and lessons learned from AY 2025–2026"
        // badge={<StatusBadge status="completed" />}
      />

      <div className="space-y-6">
        <Callout type="info" title="For Incoming PubRel Head/s">
          Reading these retrospectives is one of the most valuable things you can do when onboarding.
          They contain honest assessments of what worked, what didn&apos;t, and specific recommendations
          for the next term.
        </Callout>

        <div
          className="rounded-xl p-6"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <h2
            className="font-semibold text-lg mb-4 flex items-center gap-2"
            style={{ color: "var(--foreground)" }}
          >
            <ThumbsUp size={18} className="text-[#06D6A0]"/>
            What Went Well
          </h2>
          <div
            className="rounded-lg p-4 border-2 border-dashed text-sm italic"
            style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
          >
            <ul className="list-disc pl-5 space-y-1">
              <li>More organization partners than last year</li>
              <li>
                Algolympics 2026 had <strong>16 org partners</strong> 
                <div className="mt-1 ml-5 space-y-1 text-sm text-[var(--muted-foreground)]">
                  <div className="flex items-start gap-2">
                    <ArrowRight size={14} className="mt-1" />
                    <span>vs. Algo 2025 with <strong>7 org partners</strong></span>
                  </div>
                </div>
              </li>
              <li>Creation of internal tools 
                <div className="mt-1 ml-5 space-y-1 text-sm text-[var(--muted-foreground)]">
                  <div className="flex items-start gap-2">
                    <ArrowRight size={14} className="mt-1" />
                    <span>see the tools under Projects (Automation/Website)</span>
                  </div>
                </div>
              </li>
              <li>Utilized email labels & templates, as well as arranging PubRel Gmails by prioritizing Starred first</li>
              <li>Updated the Organization Database</li>
              <li>Answering emails even if we reject some proposals</li>
              <li>Less to none ghosting of org partnership responsibilities</li>
            </ul>
          </div>
        </div>

        <div
          className="rounded-xl p-6"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <h2
            className="font-semibold text-lg mb-4 flex items-center gap-2"
            style={{ color: "var(--foreground)" }}
          >
            <AlertTriangle size={18} className="text-[#F4C542]" />
            Areas for Improvement
          </h2>
          <div
            className="rounded-lg p-4 border-2 border-dashed text-sm italic"
            style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
          >
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Stricter rejection/acceptance of proposals</strong>
                <div className="mt-1 ml-5 space-y-1 text-sm text-[var(--muted-foreground)]">
                  <div className="flex items-start gap-2">
                    <ArrowRight size={14} className="mt-1" />
                    <span>Our responsibilities for UP Circuit for SQUEEZE were not completed (I personally ghosted them huhu) since we accepted their proposal without considering the amount of pubmats (5) needed to be shared in UP ACM's FB Page</span>
                  </div>
                </div>
              </li>
              <li><strong>Avoid as much as possible terminating partnerships</strong> 
                <div className="mt-1 ml-5 space-y-1 text-sm text-[var(--muted-foreground)]">
                  <div className="flex items-start gap-2">
                    <ArrowRight size={14} className="mt-1" />
                    <span>We terminated our contract with UP CAPES for Mixer & JobFair since we weren't able to complete almost ALL of our responsibilities including DP blasts, Resume Submission, Onsite Attendees, etc</span>
                  </div>
                </div>
              </li>
              <li><strong>Accept more partnerships that are either company-organized OR student-organized in partnership with a known company</strong>
                <div className="mt-1 ml-5 space-y-1 text-sm text-[var(--muted-foreground)]">
                  <div className="flex items-start gap-2">
                    <ArrowRight size={14} className="mt-1" />
                    <span>Best example: UP SHARP x UNIQLO partnership - we need more of this. To be fair, partnerships like these are not that common.</span>
                  </div>
                </div>
              </li>
              <li><strong>Update the Alumni Database</strong>
                <div className="mt-1 ml-5 space-y-1 text-sm text-[var(--muted-foreground)]">
                  <div className="flex items-start gap-2">
                    <ArrowRight size={14} className="mt-1" />
                    <span>This term's database is either not updated or non-existent.</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="rounded-xl p-6"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <h2
            className="font-semibold text-lg mb-4 flex items-center gap-2"
            style={{ color: "var(--foreground)" }}
          >
            <Lightbulb size={18} className="text-[#9B5DE5]"/>
            Recommendations for Next Term
          </h2>
          <div
            className="rounded-lg p-4 border-2 border-dashed text-sm italic"
            style={{ borderColor: "var(--border)", color: "var(--muted-foreground)" }}
          >
            <ul className="list-disc pl-5 space-y-1">
            <li>
                <strong>Partner again with UP CAPES</strong>
                <div className="mt-1 ml-5 space-y-1 text-sm text-[var(--muted-foreground)]">
                  <div className="flex items-start gap-2">
                    <ArrowRight size={14} className="mt-1" />
                    <span>Negotiate to lessen their responsibilities (DP blasts, resume submission, etc.)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ArrowRight size={14} className="mt-1" />
                    <span>Completing their responsibilities has money incentives</span>
                  </div>
                </div>
              </li>
              <li><strong>Attend EASL meetings</strong> 
                <div className="mt-1 ml-5 space-y-1 text-sm text-[var(--muted-foreground)]">
                  <div className="flex items-start gap-2">
                    <ArrowRight size={14} className="mt-1" />
                    <span>I personally attended only once hahaha but if time doesn't permit, don't push yourself too much</span>
                  </div>
                </div>
              </li>
              <li><strong>Have 20 or more org partners to Algolympics 2027</strong> 
                <div className="mt-1 ml-5 space-y-1 text-sm text-[var(--muted-foreground)]">
                  <div className="flex items-start gap-2">
                    <ArrowRight size={14} className="mt-1" />
                    <span>One strategy I used was before Algolympics Final Round, I would accept tech-related org partnerships in exchange that our benefits from them is they get to be our partner as well for Algo 2026.</span>
                  </div>
                </div>
              </li>
              <li><strong>Use the Email Blaster for mass sending of emails</strong>
                <div className="mt-1 ml-5 space-y-1 text-sm text-[var(--muted-foreground)]">
                  <div className="flex items-start gap-2">
                    <ArrowRight size={14} className="mt-1" />
                    <span>I used that this term to mass send to 100+ organizations our partnership proposals</span>
                  </div>
                </div>
              </li>
              <li><strong>Add more internal tools or update existing ones</strong>
                <div className="mt-1 ml-5 space-y-1 text-sm text-[var(--muted-foreground)]">
                  <div className="flex items-start gap-2">
                    <ArrowRight size={14} className="mt-1" />
                    <span>Send to ACMems Automation using GMail Labels similar to the Partnership Reject Automation GMail Label</span>
                  </div>
                </div>
                <div className="mt-1 ml-5 space-y-1 text-sm text-[var(--muted-foreground)]">
                  <div className="flex items-start gap-2">
                    <ArrowRight size={14} className="mt-1" />
                    <span>Add Gemini prompt box on GMail Add-on, etc.</span>
                  </div>
                </div>
              </li>
              <li><strong>Less org partnerships on 1st sem (unless siguro may Easy As Py) then buhos na lahat ng effort for Algolympics 2026</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
