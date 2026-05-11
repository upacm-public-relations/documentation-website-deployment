"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronRight, Home, Info, Settings, BookOpen, Folder,
  FileText, Users, Zap, BarChart3, Link as LinkIcon, Mail, MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  items?: NavItem[];
}

// Updated nav structure with all changes applied
const navItems: NavItem[] = [
  {
    title: "Home",
    icon: Home,
    href: "/",
  },
  {
    title: "Overview",
    icon: Info,
    items: [
      { title: "Constitution", icon: FileText, href: "/overview/constitution" },
      { title: "Responsibilities", icon: FileText, href: "/overview/responsibilities" },
    ],
  },
  {
    title: "Operations",
    icon: Settings,
    items: [
      { title: "Partnerships Workflow", icon: Users, href: "/operations/partnerships" },
      {
        title: "Projects (Automation and Website)",
        icon: Zap,
        items: [
          { title: "Gemini-Integrated GMail Add-On", href: "/operations/automation/gemini" },
          { title: "Proposal Reviewer Gem", href: "/operations/automation/proposal-reviewer" },
          { title: "Partnership Reject Automation", href: "/operations/automation/partnership-response" },
          { title: "Send To All Automation", href: "/operations/automation/send-to-all" },
          { title: "Email Blast System", href: "/operations/automation/email-blast" },
          { title: "PubRel Quiz Web App (for Committee Immersion)", href: "/operations/automation/pubrel-quiz-web-app" },
          { title: "Documentation Website", href: "/operations/automation/documentation-website" },
        ],
      },
    ],
  },
  {
    title: "Institutional Knowledge",
    icon: BookOpen,
    items: [
      { title: "Retrospectives (2526)", icon: MessageSquare, href: "/knowledge/retrospectives" },
      { title: "SWOT Analysis", icon: BarChart3, href: "/knowledge/swot" },
      { title: "Backlogs (PubRel 2026)", icon: FileText, href: "/knowledge/backlogs" },
      { title: "ACM Local Chapter Partners", icon: Users, href: "/knowledge/partners" },
      { title: "UP ACM to ACM Relations", icon: LinkIcon, href: "/knowledge/acm-relations" },
    ],
  },
  {
    title: "Resources",
    icon: Folder,
    items: [
      { title: "Relevant Links", icon: LinkIcon, href: "/resources/links" },
      { title: "Contacts Directory", icon: Users, href: "/resources/contacts" },
    ],
  },
];

interface DocSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DocSidebar({ isOpen, onClose }: DocSidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 border-r transition-transform duration-300 md:sticky md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ background: "var(--sidebar)", borderColor: "var(--sidebar-border)" }}
      >
        <div className="h-full overflow-y-auto py-4 px-2">
          <nav className="space-y-0.5">
            {navItems.map((item) => (
              <NavItemComponent
                key={item.title}
                item={item}
                onNavigate={onClose}
                depth={0}
              />
            ))}
          </nav>

          <div className="mt-6 mx-2 pt-4" style={{ borderTop: "1px solid var(--sidebar-border)" }}>
            <p className="text-xs px-2 mb-2" style={{ color: "var(--sidebar-foreground)", opacity: 0.4 }}>
              UP ACM Public Relations
            </p>
            <p className="text-xs px-2" style={{ color: "var(--sidebar-foreground)", opacity: 0.3 }}>
              AY 2025–2026
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

function NavItemComponent({
  item,
  onNavigate,
  depth = 0,
}: {
  item: NavItem;
  onNavigate: () => void;
  depth?: number;
}) {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(true);
  const hasChildren = item.items && item.items.length > 0;
  const Icon = item.icon;
  const isActive = item.href === pathname;

  const isAncestorActive = (nav: NavItem): boolean => {
    if (nav.href === pathname) return true;
    if (nav.items) return nav.items.some(isAncestorActive);
    return false;
  };
  const ancestorActive = hasChildren && isAncestorActive(item);

  return (
    <div>
      {item.href && !hasChildren ? (
        <Link
          href={item.href}
          onClick={onNavigate}
          className={cn(
            "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors w-full",
            depth === 0 && "font-medium",
            depth > 0 && "pl-7",
            depth > 1 && "pl-12",
            isActive
              ? "font-medium"
              : "hover:opacity-80"
          )}
          style={{
            color: isActive ? "#ffffff" : "var(--sidebar-foreground)",
            background: isActive ? "var(--sidebar-accent)" : "transparent",
            opacity: isActive ? 1 : depth > 0 ? 0.75 : 1,
          }}
        >
          {Icon && <Icon className="h-4 w-4 shrink-0" />}
          <span className="flex-1">{item.title}</span>
        </Link>
      ) : (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm transition-colors w-full text-left",
            depth === 0 && "font-semibold",
            depth > 0 && "pl-7 font-medium",
            (isActive || ancestorActive) ? "" : "hover:opacity-80"
          )}
          style={{
            color: "var(--sidebar-foreground)",
            background: ancestorActive ? "var(--sidebar-accent)" : "transparent",
          }}
        >
          <ChevronRight
            className={cn("h-3.5 w-3.5 shrink-0 transition-transform", isExpanded && "rotate-90")}
            style={{ color: "var(--sidebar-foreground)", opacity: 0.6 }}
          />
          {Icon && <Icon className="h-4 w-4 shrink-0" />}
          <span className="flex-1">{item.title}</span>
        </button>
      )}

      {hasChildren && isExpanded && (
        <div className="mt-0.5 space-y-0.5">
          {item.items!.map((child) => (
            <NavItemComponent
              key={child.title}
              item={child}
              onNavigate={onNavigate}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}
