import { PageHeader } from "@/components/doc-components/PageHeader";
import { Callout } from "@/components/doc-components/Callout";

// ✏️ ADD YOUR CHAPTER DATA HERE
const chapters = [
  {
    localChapter: "Association for Computing Machinery- FEU Institute of Technology Student Chapter",
    status: "Active",
    pointOfContact: "Csypres Ornos",
  },
  {
    localChapter: "Association for Computing Machinery - Mapua Student Chapter",
    status: "Active",
    pointOfContact: "Caine Panzo",
  },
  {
    localChapter: "T.I.P. Association for Computing Machinery Student Chapter",
    status: "Active",
    pointOfContact: "Germiah Palma",
  },
  {
    localChapter: "De La Salle University Association for Computing Machinery Student Chapter",
    status: "Active",
    pointOfContact: "Kailu Baradas",
  },
];

const statusColor = (status: string) => {
  if (status === "Active") return { bg: "rgba(34,197,94,0.1)", color: "#15803d" };
  if (status === "Inactive") return { bg: "rgba(160,164,171,0.15)", color: "#6b7280" };
  return { bg: "rgba(217,119,6,0.1)", color: "#d97706" };
};

export default function PartnersPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Institutional Knowledge" },
          { label: "ACM Local Chapter Partners" },
        ]}
        title="ACM Local Chapter Partners"
        description="Directory of ACM local chapters that UP ACM maintains relationships with"
      />

      <div className="space-y-6">
        <div
          className="rounded-xl p-5 text-sm"
          style={{ background: "var(--card)", border: "1px solid var(--border)", color: "var(--foreground)" }}
        >
          <p>
            This page tracks UP ACM&apos;s relationships with other ACM local chapters across the Philippines. These partnerships facilitate joint events, knowledge exchange, and collaborative
            initiatives between chapters.
          </p>
          {/* <p className="mt-2 italic" style={{ color: "var(--muted-foreground)" }}>
            Placeholder — Add more context about how chapter partnerships work and the history of these relationships.
          </p> */}
        </div>

        <Callout type="info" title="Note:">
          Some of these contacts are not up to date. You may send the ACM Local Chapter Database Update Form (please see GDrive for the template used last year).
        </Callout>

        {/* Table */}
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
        >
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "var(--secondary)" }}>
                <th
                  className="text-left px-5 py-3 font-semibold"
                  style={{ color: "var(--foreground)", borderBottom: "1px solid var(--border)" }}
                >
                  Local Chapter
                </th>
                <th
                  className="text-left px-5 py-3 font-semibold"
                  style={{ color: "var(--foreground)", borderBottom: "1px solid var(--border)" }}
                >
                  Status
                </th>
                <th
                  className="text-left px-5 py-3 font-semibold"
                  style={{ color: "var(--foreground)", borderBottom: "1px solid var(--border)" }}
                >
                  Chapter&apos;s Point of Contact
                </th>
              </tr>
            </thead>
            <tbody>
              {chapters.map((ch, i) => {
                const sc = statusColor(ch.status);
                return (
                  <tr
                    key={i}
                    className="transition-colors hover:opacity-90"
                    style={{
                      background: i % 2 === 0 ? "var(--card)" : "var(--secondary)",
                      borderBottom: i < chapters.length - 1 ? "1px solid var(--border)" : undefined,
                    }}
                  >
                    <td className="px-5 py-3.5 font-medium" style={{ color: "var(--foreground)" }}>
                      {ch.localChapter}
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                        style={{ background: sc.bg, color: sc.color }}
                      >
                        {ch.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5" style={{ color: "var(--muted-foreground)" }}>
                      {ch.pointOfContact}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
