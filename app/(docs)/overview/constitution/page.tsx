import { PageHeader } from "@/components/doc-components/PageHeader";
import { Callout } from "@/components/doc-components/Callout";

export default function ConstitutionPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Overview" },
          { label: "Constitution" },
        ]}
        title="Public Relations on Constitution"
        description="The Head of Public Relations shall have the following functions and duties:"
      />

      {/* <Callout type="info" title="Document Reference">
        The full constitution document is stored in the UP ACM Drive. This page serves as a quick reference
        and summary of key constitutional provisions relevant to the PR Committee Head role.
      </Callout> */}

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>
          1. As the Professional Representative to Partners. 
          </h2>
          <div
            className="rounded-xl p-6 text-sm space-y-3"
            style={{ background: "var(--secondary)", color: "var(--foreground)" }}
          >
            <p>
            The Head of  Public Relations shall represent the Chapter to partners, with the purpose of finding partnerships that will propagate the Chapter’s vision and goals, and ultimately, provide more opportunities for the members through exposure to various events outside the organization. By definition, the “partnerships” undergone by the Public Relations Head include, but not limited to, recognized organizations in the University and profit or nonprofit organizations outside the University that does not involve monetary compensation from either party in the agreement. The Public Relations Head, with the approval of the Executive Council, shall ensure partnerships with acceptable terms, and must negotiate to the proposing party should their terms be deemed unacceptable. 
            </p>
            {/* <p style={{ color: "var(--muted-foreground)" }}>
              <em>Placeholder — Add the actual constitutional text here from the official document.</em>
            </p> */}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>
          2. As Head of Public Relations Committee 
          </h2>
          <div
            className="rounded-xl p-6 text-sm space-y-3"
            style={{ background: "var(--secondary)", color: "var(--foreground)" }}
          >
            <p>
            The Head of Public Relations shall assume the leadership of the Public Relations Committee, and shall ensure the delivery of the Committee’s tasks, goals, and purpose.
            </p>
            {/* <p style={{ color: "var(--muted-foreground)" }}>
              <em>Placeholder — Add the actual constitutional text here from the official document.</em>
            </p> */}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>
            3. Statement Endorsement as an Organization
          </h2>
          <div
            className="rounded-xl p-6 text-sm space-y-3"
            style={{ background: "var(--secondary)", color: "var(--foreground)" }}
          >
            <p>
            The Head of Public Relations shall lead the organization in getting the approval of its Executive Council and/or its members in signing and endorsing public statements, be it written by UP ACM itself or by another organization through a joint statement. 
            </p>
            {/* <p style={{ color: "var(--muted-foreground)" }}>
              <em>Placeholder — Add the actual constitutional text here from the official document.</em>
            </p> */}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4" style={{ color: "var(--foreground)" }}>
            4. Responsibility to the Chairperson
          </h2>
          <div
            className="rounded-xl p-6 text-sm space-y-3"
            style={{ background: "var(--secondary)", color: "var(--foreground)" }}
          >
            <p>
            The Head of Public Relations shall be responsible to the Chairperson and shall be required to report to the Chairperson on a regular basis regarding the accomplishments and plans with regards to the Chapter in order to ensure proper coordination between the Chapter and their committee. 
            </p>
            {/* <p style={{ color: "var(--muted-foreground)" }}>
              <em>Placeholder — Add the actual constitutional text here from the official document.</em>
            </p> */}
          </div>
        </section>

        {/* <Callout type="warning" title="Official Document">
          Always refer to the official constitution in the UP ACM Drive for the most up-to-date version.
          This page is a summary reference only.
        </Callout> */}
      </div>
    </div>
  );
}
