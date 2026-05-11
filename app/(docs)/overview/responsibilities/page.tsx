import { PageHeader } from "@/components/doc-components/PageHeader";
import { Callout } from "@/components/doc-components/Callout";
import { Calendar, UsersRound, Camera, Globe, CalendarDays, Database, Settings } from "lucide-react";

const responsibilities = [
  {
    icon: Calendar,
    title: "On Start of the Semester:",
    accent: "#EF476F",
    items: [
      "Inform other organizations about the new Chairperson",
      "Send UP Org form and Organization database updates",
    ],
  },
  {
    icon: UsersRound,
    title: "On Executive Matters:",
    accent: "#F78C6B",
    items: [
      "Be a part of the EASL group and chat (check email)",
      "Attend the EASL General Assembly (when the sem starts)",
      "CS Network (Orgs in CS)",
    ],
  },
  {
    icon: Camera,
    title: "On Media:",
    accent: "#FFD166",
    items: [
      "Answer FB Page queries",
      "Create captions per publication materials",
    ],
  },
  {
    icon: Globe,
    title: "On Organizations:",
    accent: "#06D6A0",
    items: [
      "Search for and post monthly announcements and opportunities",
      "Be UP ACM’s contact for ACM local Chapters (admin of the channel/chat)",
    ],
  },
  {
    icon: CalendarDays,
    title: "On Events:",
    accent: "#118AB2",
    items: [
      "Send partnership proposals and do follow ups per event",
      {
        text: "Oversee communications for:",
        subItems: [
          "Algolympics",
          "EAP/Scratch Code Camp",
          "Jumpstart/Hodgepodge",
          "ACM Fest",
          "Haxxor",
        ],
      },    
    ],
  },
  {
    icon: Database,
    title: "On Updating and Maintaining Databases",
    accent: "#6C63FF",
    items: [
      "Alumni",
      "UP and outside UP Organizations",
      "ACM Local Chapters",
      "Media Sponsors",
    ],
  },
  {
    icon: Settings,
    title: "On Institutional Knowledge and Internal Tools",
    accent: "#9B5DE5",
    items: [
      {
        text: "Oversee and maintain internal tools:",
        subItems: [
          "GMail Add-On Proposal Reviewer",
          "UP ACM Proposal Reviewer Gem",
          "Partnership Response Automation",
          "UP ACM PubRel Email Blaster",
          "UP ACM PubRel Documentation Website",
        ],
      },  
      "Document committee operations for future PubRel Heads",  
    ],
  },
];

export default function ResponsibilitiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Overview" },
          { label: "Responsibilities" },
        ]}
        title="PubRel Committee Responsibilities"
        description="Core duties and expectations for the Public Relations Committee Head"
      />

      {/* <Callout type="warning" title="Essential Reading" className="mb-8">
        This document outlines the core responsibilities that define the role of the PR Committee Head.
        Familiarize yourself with each area before beginning operations.
      </Callout> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        {responsibilities.map((r) => {
          const Icon = r.icon;
          return (
            <div
              key={r.title}
              className="rounded-xl p-5"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg" style={{ background: `${r.accent}15` }}>
                  <Icon className="h-5 w-5" style={{ color: r.accent }} />
                </div>
                <h3 className="font-semibold" style={{ color: "var(--foreground)" }}>
                  {r.title}
                </h3>
              </div>
              {/* <ul className="space-y-2">
                {r.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ background: r.accent }} />
                    {item}
                  </li>
                ))}
              </ul> */}
              <ul className="space-y-2">
                {r.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    <div className="flex items-start gap-2">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ background: r.accent }}
                      />

                      <span>
                        {typeof item === "string" ? item : item.text}
                      </span>
                    </div>

                    {typeof item !== "string" && item.subItems && (
                      <ul className="mt-2 ml-6 space-y-1">
                        {item.subItems.map((subItem, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-xs"
                          >
                            <span
                              className="mt-1.5 h-1 w-1 rounded-full shrink-0"
                              style={{ background: r.accent }}
                            />

                            <span>{subItem}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* <div
        className="rounded-xl p-6"
        style={{ background: "var(--card)", border: "1px solid var(--border)" }}
      >
        <h2 className="font-semibold text-lg mb-4" style={{ color: "var(--foreground)" }}>
          Additional Notes
        </h2>
        <div className="space-y-3 text-sm" style={{ color: "var(--muted-foreground)" }}>
          <p>
            The PR Head is expected to coordinate closely with the Executive Board and other committee
            heads to ensure alignment with the chapter&apos;s overall goals and event calendar.
          </p>
          <p className="italic">
            Placeholder — Add any additional responsibilities or notes specific to your batch here.
          </p>
        </div>
      </div> */}
    </div>
  );
}
