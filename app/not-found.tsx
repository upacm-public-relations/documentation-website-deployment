import Link from "next/link";
import { DocLayout } from "@/components/DocLayout";

export default function NotFound() {
  return (
    <DocLayout>
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <div className="text-6xl font-bold mb-4" style={{ color: "var(--muted-foreground)", opacity: 0.3 }}>404</div>
        <h1 className="text-2xl font-bold mb-3" style={{ color: "var(--foreground)" }}>Page Not Found</h1>
        <p className="mb-8" style={{ color: "var(--muted-foreground)" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ background: "#0B1F3B" }}
        >
          Go Home
        </Link>
      </div>
    </DocLayout>
  );
}
