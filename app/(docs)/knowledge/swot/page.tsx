import { PageHeader } from "@/components/doc-components/PageHeader";

const swotQuadrants = [
  {
    label: "Strengths",
    letter: "S",
    color: "#16a34a",
    bg: "rgba(34,197,94,0.07)",
    border: "rgba(34,197,94,0.2)",
    placeholder:
      `• Secured partnerships with other ACM student chapters and organizations within and outside of the university
      \n• Disseminated information regarding opportunities to the members
      \n• We had enough (?) members to delegate tasks for partnership responsibilities and internal events
      \n• Was able to properly distribute PubRel workload
      \n• Created a member database to know which members are willing to help in promotions for organization partners
      \n• Onboarded team members at the start of each semester
      \n• Algolympics 2026 garnered 16 org partners (vs. 7 org partners last year)
      \n• Creation of internal tools to automate processes like email blast, etc.
      \n• Utilized email labels & templates, as well as arranging PubRel Gmails by prioritizing Starred first`,
  },
  {
    label: "Weaknesses",
    letter: "W",
    color: "#dc2626",
    bg: "rgba(220,38,38,0.06)",
    border: "rgba(220,38,38,0.18)",
    placeholder:
      `Main weakness: accepting partnership proposals that are not feasible due to limited manpower/inactive members. 
      \n• Exhibit A: Our responsibilities for UP Circuit for SQUEEZE were not completed (I personally ghosted them huhu) since we accepted their proposal without considering the amount of pubmats (5) needed to be shared in UP ACM's FB Page.
      \n• Exhibit B: We terminated our contract with UP CAPES for Mixer & JobFair since we weren't able to complete almost ALL of our responsibilities including DP blasts, Resume Submission, Onsite Attendees, etc
      \nFor future purposes, nasa PubRel Gem instructions naman na yung criteria na ginawa ko for choosing proposals to accept or not.`,
  },
  {
    label: "Opportunities",
    letter: "O",
    color: "#2D9CDB",
    bg: "rgba(45,156,219,0.07)",
    border: "rgba(45,156,219,0.2)",
    placeholder:
      `• More partnerships pa siguro with other ACM Local Chapters and maybe International Chapters (may group chat na afaik for some local chapters - ask Leevan na lang if ever pero try to expand pa yung group chat) 
      \n• Continue to partner with ASES Manila - note na medyo sensitive sila sa quantitative responsibilities (ayaw nila yung may bilang ung likes and shares).
      \n• Partner again with UP CAPES - but this time, negotiate for a MUCH MUCH MUCH lower # of responsibilities.
      \n• Accept more org partnerships like the one with UP SHARP x UNIQLO.
      \n• Update the Alumni Database to be used for partnerships and help in future events`,
  },
  {
    label: "Threats",
    letter: "T",
    color: "#d97706",
    bg: "rgba(217,119,6,0.07)",
    border: "rgba(217,119,6,0.2)",
    placeholder:
      `• Academic backlogs and priority management
      \n• Lack of communication and delegation
      \n• Lack of manpower to finish org partnership responsibilities`,
  },
];

export default function SWOTPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Institutional Knowledge" },
          { label: "SWOT Analysis" },
        ]}
        title="SWOT Analysis"
        description="Strengths, Weaknesses, Opportunities, and Threats for the PubRel Committee"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {swotQuadrants.map((q) => (
          <div
            key={q.label}
            className="rounded-xl p-6 min-h-64"
            style={{ background: q.bg, border: `1.5px solid ${q.border}` }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="h-9 w-9 rounded-full flex items-center justify-center font-bold text-lg text-white"
                style={{ background: q.color }}
              >
                {q.letter}
              </div>
              <h2 className="text-lg font-bold" style={{ color: q.color }}>
                {q.label}
              </h2>
            </div>

            {/* Editable content area */}
            <div
              className="rounded-lg p-4 min-h-40"
              style={{ background: "var(--card)", border: `1px solid ${q.border}` }}
            >
              <p
                className="text-sm whitespace-pre-line"
                style={{ color: "var(--muted-foreground)" }}
              >
                {q.placeholder}
              </p>
            </div>

            {/* <p className="text-xs mt-3 italic" style={{ color: q.color, opacity: 0.7 }}>
              ✏️ Replace the placeholder text with your actual {q.label.toLowerCase()} analysis
            </p> */}
          </div>
        ))}
      </div>

      {/* <div
        className="mt-8 rounded-xl p-5 text-sm"
        style={{ background: "var(--secondary)", color: "var(--muted-foreground)" }}
      >
        <strong style={{ color: "var(--foreground)" }}>How to use this page:</strong> Edit{" "}
        <code
          className="px-1 py-0.5 rounded text-xs"
          style={{ background: "var(--border)", fontFamily: "'DM Mono', monospace" }}
        >
          app/(docs)/knowledge/swot/page.tsx
        </code>{" "}
        and replace the <code className="px-1 py-0.5 rounded text-xs" style={{ background: "var(--border)", fontFamily: "'DM Mono', monospace" }}>placeholder</code> values in the{" "}
        <code className="px-1 py-0.5 rounded text-xs" style={{ background: "var(--border)", fontFamily: "'DM Mono', monospace" }}>swotQuadrants</code> array with your actual analysis.
      </div> */}
    </div>
  );
}
