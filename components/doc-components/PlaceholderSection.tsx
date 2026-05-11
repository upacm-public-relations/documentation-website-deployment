interface PlaceholderSectionProps {
  label?: string;
}
export function PlaceholderSection({ label = "Content" }: PlaceholderSectionProps) {
  return (
    <div
      className="rounded-xl p-6 border-2 border-dashed"
      style={{ borderColor: "var(--border)" }}
    >
      <p className="text-sm italic text-center" style={{ color: "var(--muted-foreground)" }}>
        📝 {label} — Add your content here
      </p>
    </div>
  );
}
