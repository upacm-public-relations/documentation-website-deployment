"use client";

import { Moon, Sun, ExternalLink, Menu } from "lucide-react";
import { useTheme } from "next-themes";

interface TopNavProps {
  onMenuClick: () => void;
}

export function TopNav({ onMenuClick }: TopNavProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div
    className="sticky top-0 z-50 w-full border-b bg-white dark:bg-[#0c1929]"
    style={{ borderColor: "var(--border)" }}
    >
      <div className="flex h-16 items-center px-4 gap-4">
        {/* Mobile Menu */}
        <button
          className="md:hidden p-2 rounded-md hover:opacity-80 transition-opacity"
          onClick={onMenuClick}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" style={{ color: "var(--foreground)" }} />
        </button>

        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {/* // add image
            <div
              className="h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: "#0B1F3B", color: "#ffffff" }}
            >
              UP
            </div>
            <div
              className="h-9 w-9 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: "#2D9CDB", color: "#ffffff" }}
            >
              ACM
            </div> */}
              <img
                src="/logo.svg"
                alt="UP ACM Logo"
                className="h-10 w-10 object-contain"
              />
          </div>
          <div className="hidden md:block border-l pl-3 h-8 flex flex-col justify-center" style={{ borderColor: "var(--border)" }}>
            <div className="text-sm font-semibold leading-tight" style={{ color: "var(--muted-foreground)" }}>
              UP ACM Public Relations
            </div>
            <div className="text-xs leading-tight" style={{ color: "var(--muted-foreground)" }}>
              Internal Documentation
            </div>
          </div>
        </div>

        <div className="flex-1" />

        {/* Right Actions */}
        <div className="flex items-center gap-1">
          {/* <a
            href="https://drive.google.com/drive"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-colors hover:opacity-80"
            style={{ color: "var(--muted-foreground)" }}
          >
            Drive
            <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href="public_relations@upacm.net"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm transition-colors hover:opacity-80"
            style={{ color: "var(--muted-foreground)" }}
          >
            Email
            <ExternalLink className="h-3 w-3" />
          </a> */}

          <div
            className="mx-1 h-5 w-px hidden md:block"
            style={{ background: "var(--border)" }}
          />

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-md hover:opacity-70 transition-opacity relative"
            aria-label="Toggle theme"
          >
            <Sun
              className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
              style={{ color: "var(--foreground)" }}
            />
            <Moon
              className="absolute top-2 left-2 h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
              style={{ color: "var(--muted-foreground)" }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
