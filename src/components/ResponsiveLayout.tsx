"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";

export default function ResponsiveLayout({ children }: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {showSidebar ? (
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 z-30 bg-black/45 backdrop-blur-sm sm:hidden"
          onClick={() => setShowSidebar(false)}
        />
      ) : null}

      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen overflow-visible border-r border-border bg-surface/90 shadow-soft backdrop-blur-xl transition-[width,transform] duration-300 ease-premium",
          showSidebar ? "translate-x-0" : "-translate-x-full",
          sidebarCollapsed ? "sm:w-[88px]" : "sm:w-[280px]",
          "w-[280px] sm:translate-x-0",
        )}
      >
        <div className="h-full overflow-y-auto p-4">
          <Sidebar closeSidebar={() => setShowSidebar(false)} collapsed={sidebarCollapsed} />
        </div>

        <button
          type="button"
          aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!sidebarCollapsed}
          onClick={() => setSidebarCollapsed((collapsed) => !collapsed)}
          className="absolute -right-4 top-24 hidden h-8 w-8 items-center justify-center rounded-token-full border border-border bg-background text-accent shadow-soft transition-token hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:flex"
        >
          {sidebarCollapsed ? <ChevronRight aria-hidden size={17} /> : <ChevronLeft aria-hidden size={17} />}
        </button>
      </aside>

      <div
        className={cn(
          "flex flex-1 flex-col transition-[margin] duration-300 ease-premium",
          sidebarCollapsed ? "sm:ml-[88px]" : "sm:ml-[280px]",
        )}
      >
        <Navbar onMenuClick={() => setShowSidebar(true)} />
        <main className="relative z-10 mt-10 flex-1 scroll-smooth px-section-x">
          {children}
        </main>
      </div>
    </div>
  );
}
