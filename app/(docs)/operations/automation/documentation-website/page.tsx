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
          { label: "Documentation Website" },
        ]}
        title="Documentation Website"
        description="The PubRel Committee internal documentation website - this site"
      />
      <div className="space-y-6">
        {/* About */}
        <Callout type="info" title="About this project">
          This is the UP ACM PubRel Committee's internal documentation website - the site you're reading right now. It serves as the central knowledge base for all PubRel tools, workflows, and automation projects, making it easier to onboard new members and preserve institutional knowledge across officer terms.
          <br /><br />
          Pages are written in React (TSX) and stored in a GitHub repository. Any changes pushed to the main branch are automatically deployed live via Vercel.
          <br/>
          <img 
            src="/documentation-website.png"
            alt="System overview" 
            style={{ width: "100%", borderRadius: "16px", marginTop: "12px" }}
          />
        </Callout>

        {/* Setup & Usage */}
        <div className="rounded-xl p-6 space-y-6" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="font-semibold" style={{ color: "var(--foreground)" }}>Setup & Usage</h2>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Cloning the repository</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Make sure you have <span className="font-medium" style={{ color: "var(--foreground)" }}>Git</span> and <span className="font-medium" style={{ color: "var(--foreground)" }}>Node.js</span> installed on your machine
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Clone the repository from GitHub (see Links & Resources below) using{" "}
                <code className="text-xs px-1 py-0.5 rounded" style={{ background: "var(--muted)", color: "var(--foreground)" }}>git clone https://github.com/upacm-public-relations/documentation-website-deployment.git</code>
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Inside the project folder, run{" "}
                <code className="text-xs px-1 py-0.5 rounded" style={{ background: "var(--muted)", color: "var(--foreground)" }}>npm install</code>{" "}
                to install dependencies, then{" "}
                <code className="text-xs px-1 py-0.5 rounded" style={{ background: "var(--muted)", color: "var(--foreground)" }}>npm run dev</code>{" "}
                to preview the site locally at <span className="font-medium" style={{ color: "var(--foreground)" }}>localhost:3000</span>
              </li>
            </ol>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Editing a page</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Each page on this site corresponds to a <span className="font-medium" style={{ color: "var(--foreground)" }}>.tsx file</span> inside the <code className="text-xs px-1 py-0.5 rounded" style={{ background: "var(--muted)", color: "var(--foreground)" }}>app/</code> directory - navigate to the file for the page you want to update
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Edit the content directly in the file.
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Check your changes in the local preview before pushing
              </li>
            </ol>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Publishing changes</h3>
            <ol className="list-decimal list-inside space-y-1">
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Stage and commit your changes:{" "}
                <code className="text-xs px-1 py-0.5 rounded" style={{ background: "var(--muted)", color: "var(--foreground)" }}>git add .</code>{" "}
                then{" "}
                <code className="text-xs px-1 py-0.5 rounded" style={{ background: "var(--muted)", color: "var(--foreground)" }}>git commit -m "your message"</code>
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Push to the main branch:{" "}
                <code className="text-xs px-1 py-0.5 rounded" style={{ background: "var(--muted)", color: "var(--foreground)" }}>git push origin main</code>
                <i> (Optional: You may create a staging branch and upload changes there before uploading to production.)</i>
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Vercel will automatically detect the push and deploy the updated site - changes are usually live within a minute or two
              </li>
            </ol>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>Notes for Future PubRel Heads</h3>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Make sure to transfer GitHub repository access and Vercel project ownership during officer turnover
              </li>
              <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
                Keep this page and the README up to date whenever the site structure or deployment setup changes
              </li>
            </ul>
          </div>
        </div>

      {/* Links & Resources */}
      <div className="rounded-xl p-6 space-y-4" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 className="font-semibold" style={{ color: "var(--foreground)" }}>Links & Resources</h2>
          <ul className="space-y-3">
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              •{" "}
              <a href="https://github.com/upacm-public-relations/documentation-website-deployment" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
                GitHub Repository
              </a>{" "}
              - source code and version history for this site
            </li>
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              •{" "}
              <a href="https://vercel.com/up-acm-pub-rel-s-projects/documentation-website-deployment" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
                Vercel Dashboard
              </a>{" "}
              - deployment status, preview links, and project settings (Sign In using PubRel Email)
            </li>
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              •{" "}
              <a href="https://upacm-pubrelcom-documentation-website.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
                UP ACM PubRel Website Documentation
              </a>{" "}
              - the UP ACM PubRel Website Documentation itself
            </li>
            <li className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              •{" "}
              <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="font-medium underline" style={{ color: "var(--foreground)" }}>
                Next.js Documentation
              </a>{" "}
              - framework reference for routing, components, and project structure
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
