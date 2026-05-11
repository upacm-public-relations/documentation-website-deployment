"use client";

import { useState } from "react";
import { TopNav } from "./TopNav";
import { DocSidebar } from "./DocSidebar";

interface DocLayoutProps {
  children: React.ReactNode;
}

export function DocLayout({ children }: DocLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <TopNav onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex">
        <DocSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="flex-1 min-w-0">
          {children}
        </main>
      </div>
    </div>
  );
}
