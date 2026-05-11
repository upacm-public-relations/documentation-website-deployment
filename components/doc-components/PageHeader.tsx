import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  title: string;
  description?: string;
  badge?: React.ReactNode;
}

export function PageHeader({ breadcrumbs, title, description, badge }: PageHeaderProps) {
  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-sm mb-4" style={{ color: "var(--muted-foreground)" }}>
        {breadcrumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
            {crumb.href ? (
              <Link
                href={crumb.href}
                className="hover:opacity-80 transition-opacity"
                style={{ color: "var(--muted-foreground)" }}
              >
                {crumb.label}
              </Link>
            ) : (
              <span style={{ color: "var(--foreground)" }}>{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2" style={{ color: "var(--foreground)" }}>
            {title}
          </h1>
          {description && (
            <p className="text-base" style={{ color: "var(--muted-foreground)" }}>
              {description}
            </p>
          )}
        </div>
        {badge && <div className="shrink-0 mt-1">{badge}</div>}
      </div>
    </div>
  );
}
