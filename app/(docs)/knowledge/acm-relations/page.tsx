import { PageHeader } from "@/components/doc-components/PageHeader";
import { Callout } from "@/components/doc-components/Callout";

export default function ACMRelationsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Institutional Knowledge" },
          { label: "UP ACM to ACM Relations" },
        ]}
        title="UP ACM to ACM Relations"
        description="Overview of UP ACM's relationship with ACM International and affiliated organizations"
      />

      <div className="space-y-6">
        <div
          className="rounded-xl p-6"
          style={{ background: "var(--card)", border: "1px solid var(--border)" }}
        >
          <h2 className="font-semibold mb-3" style={{ color: "var(--foreground)" }}>
            Relationship Overview
          </h2>
          <p className="text-sm mb-3" style={{ color: "var(--muted-foreground)" }}>
          Membership status of the organization to its international counterpart is being checked by the head. He ensured that the contact details of the Chairperson and the organization are informed about the events of the ACM.
          </p>
        </div>
      </div>
    </div>
  );
}
