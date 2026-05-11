import { PageHeader } from "@/components/doc-components/PageHeader";
import { Callout } from "@/components/doc-components/Callout";
import { ExternalLink } from "lucide-react";

// ADD YOUR LINKS HERE — just fill in the name and href fields
const links = [
  { name: "UP Organization/ACM Database (from Algolympics 2026", href: "https://docs.google.com/spreadsheets/d/11o-xm0rYKJhYyC_sS9zKPszZQyWwDWr29MZrp3AStxE/edit?usp=sharing", category: "Internal" },
  { name: "UP Organization Update Form", href: "https://docs.google.com/forms/d/1iN64TvzmaxMVOH806Hh6MCgtaJz0cxBkt3HHV2VIa2o/edit", category: "Internal" },
  { name: "ACM Local Chapter Update Form", href: "https://docs.google.com/forms/d/1F05rbI-F7kZry3gIz8PAcrVd24_gFYvnN5-hObjIzto/edit?usp=sharing", category: "Internal" },
  { name: "PubRel Email Account and Algolympics Account", href: "https://docs.google.com/spreadsheets/d/1xWWqMws1mnrZTlZjGNV5M33xgtS7Bp0Mfi_3WmuTiP4/edit?usp=sharing", category: "Internal" },
  { name: "Alumni Database (not updated)", href: "https://docs.google.com/spreadsheets/d/1RTcF1N8k0hwzfvs8oM8SsbEiNsACKS49/edit#gid=1357393708 ", category: "Internal" },
  { name: "Media Database", href: "https://drive.google.com/file/d/1mna-aqARrQ5W6NfvHLhJlnkaDQ-H-Mk_/view?usp=sharing ", category: "Internal" },
  { name: "1819 Events Tracker (for basis)", href: "https://docs.google.com/spreadsheets/d/1vWsoz9Fy2nvKtAgZKnmTxyZVxBAJnARYKPG7u4tsB6E/edit#gid=2063321004 ", category: "Internal" },
  { name: "UP ACM PubRel Github Account", href: "https://github.com/upacm-public-relations", category: "Internal" },
];

const categoryColor = (cat: string) => {
  if (cat === "Internal") return { bg: "rgba(45,156,219,0.1)", color: "#1a7ab5" };
  return { bg: "rgba(160,164,171,0.12)", color: "#6b7280" };
};

export default function RelevantLinksPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
          { label: "Relevant Links" },
        ]}
        title="Relevant Links"
        description="Quick reference table of important links and resources for PubRel Committee work"
      />

      {/* <Callout type="info" title="Adding Links" className="mb-6">
        To add or update links, edit the <code style={{ fontFamily: "monospace" }}>links</code> array in{" "}
        <code style={{ fontFamily: "monospace" }}>app/(docs)/resources/links/page.tsx</code>.
        Categories: Internal, External.
      </Callout> */}

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
                Name
              </th>
              <th
                className="text-left px-5 py-3 font-semibold"
                style={{ color: "var(--foreground)", borderBottom: "1px solid var(--border)" }}
              >
                Category
              </th>
              <th
                className="text-left px-5 py-3 font-semibold"
                style={{ color: "var(--foreground)", borderBottom: "1px solid var(--border)" }}
              >
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {links.map((link, i) => {
              const cc = categoryColor(link.category);
              return (
                <tr
                  key={i}
                  className="transition-colors"
                  style={{
                    background: i % 2 === 0 ? "var(--card)" : "var(--secondary)",
                    borderBottom: i < links.length - 1 ? "1px solid var(--border)" : undefined,
                  }}
                >
                  <td className="px-5 py-3.5 font-medium" style={{ color: "var(--foreground)" }}>
                    {link.name}
                  </td>
                  <td className="px-5 py-3.5">
                    <span
                      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                      style={{ background: cc.bg, color: cc.color }}
                    >
                      {link.category}
                    </span>
                  </td>
                  <td className="px-5 py-3.5">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
                      style={{ color: "#2D9CDB" }}
                    >
                      Open link
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
