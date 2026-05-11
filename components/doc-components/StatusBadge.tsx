import { cn } from "@/lib/utils";

type Status = "active" | "completed" | "needs-improvement" | "backlog" | "in-progress";

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const statusConfig: Record<Status, { label: string; bg: string; color: string }> = {
  active: { label: "Active", bg: "rgba(34,197,94,0.12)", color: "#15803d" },
  completed: { label: "Completed", bg: "rgba(45,156,219,0.12)", color: "#1a7ab5" },
  "needs-improvement": { label: "Needs Improvement", bg: "rgba(244,197,66,0.15)", color: "#a07010" },
  backlog: { label: "Backlog", bg: "rgba(160,164,171,0.15)", color: "#6b7280" },
  "in-progress": { label: "In Progress", bg: "rgba(168,85,247,0.12)", color: "#7c3aed" },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const cfg = statusConfig[status];
  return (
    <span
      className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", className)}
      style={{ background: cfg.bg, color: cfg.color }}
    >
      {cfg.label}
    </span>
  );
}
