import { Info, AlertTriangle, CheckCircle, XCircle, type LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutType = "info" | "warning" | "success" | "error";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const configs: Record<CalloutType, { icon: React.ComponentType<LucideProps>; bg: string; border: string; iconColor: string; titleColor: string }> = {
  info: {
    icon: Info,
    bg: "rgba(45,156,219,0.06)",
    border: "rgba(45,156,219,0.25)",
    iconColor: "#2D9CDB",
    titleColor: "#1a7ab5",
  },
  warning: {
    icon: AlertTriangle,
    bg: "rgba(244,197,66,0.08)",
    border: "rgba(244,197,66,0.35)",
    iconColor: "#d4a017",
    titleColor: "#a07010",
  },
  success: {
    icon: CheckCircle,
    bg: "rgba(34,197,94,0.06)",
    border: "rgba(34,197,94,0.25)",
    iconColor: "#16a34a",
    titleColor: "#15803d",
  },
  error: {
    icon: XCircle,
    bg: "rgba(212,24,61,0.06)",
    border: "rgba(212,24,61,0.25)",
    iconColor: "#d4183d",
    titleColor: "#b91c3c",
  },
};

export function Callout({ type = "info", title, children, className }: CalloutProps) {
  const cfg = configs[type];
  const Icon = cfg.icon;

  return (
    <div
      className={cn("rounded-lg p-4 flex gap-3", className)}
      style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}
    >
      <Icon className="h-4 w-4 mt-0.5 shrink-0" style={{ color: cfg.iconColor }} />
      <div className="flex-1 text-sm">
        {title && (
          <p className="font-semibold mb-1" style={{ color: cfg.titleColor }}>{title}</p>
        )}
        <div style={{ color: "var(--foreground)" }}>{children}</div>
      </div>
    </div>
  );
}
