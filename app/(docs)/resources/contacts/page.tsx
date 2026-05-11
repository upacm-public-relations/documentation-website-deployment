import { PageHeader } from "@/components/doc-components/PageHeader";
import { Callout } from "@/components/doc-components/Callout";
import { Mail } from "lucide-react";

// ✏️ ADD YOUR CONTACTS HERE
const contacts = [
  {
    name: "John Harry Arciga",
    role: "PubRel Committee Head (2526)",
    email: "jaarciga@up.edu.ph / harryarciga.work@gmail.com",
    notes: "You may contact me for clarifications in this documentation.",
  },
];

export default function ContactsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources" },
          { label: "Contacts Directory" },
        ]}
        title="Contacts Directory"
        description="Key contact/s for the PubRel Committee"
      />

      {/* <Callout type="info" title="Adding Contacts" className="mb-6">
        Edit the <code style={{ fontFamily: "monospace" }}>contacts</code> array in{" "}
        <code style={{ fontFamily: "monospace" }}>app/(docs)/resources/contacts/page.tsx</code> to add real contacts.
      </Callout> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contacts.map((c, i) => (
          <div
            key={i}
            className="rounded-xl p-5"
            style={{ background: "var(--card)", border: "1px solid var(--border)" }}
          >
            <div
              className="h-10 w-10 rounded-full flex items-center justify-center mb-4 font-bold text-sm"
              style={{ background: "#0B1F3B", color: "#fff" }}
            >
              {c.name.charAt(0)}
            </div>
            <h3 className="font-semibold" style={{ color: "var(--foreground)" }}>{c.name}</h3>
            <p className="text-sm mt-0.5 mb-3" style={{ color: "#2D9CDB" }}>{c.role}</p>
            <a
              href={`mailto:${c.email}`}
              className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{ color: "var(--muted-foreground)" }}
            >
              <Mail className="h-3.5 w-3.5" />
              {c.email}
            </a>
            {c.notes && (
              <p className="text-xs mt-3 italic" style={{ color: "var(--muted-foreground)" }}>
                {c.notes}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
