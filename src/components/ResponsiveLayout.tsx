"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function ResponsiveLayout({ children }: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = useState(false);

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
        className={`fixed left-0 top-0 z-40 h-screen w-[280px] overflow-y-auto border-r border-border bg-surface/90 p-4 shadow-soft backdrop-blur-xl transition-transform duration-300 ease-premium ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <Sidebar closeSidebar={() => setShowSidebar(false)} />
      </aside>

      <div className="flex flex-1 flex-col sm:ml-[280px]">
        <Navbar onMenuClick={() => setShowSidebar(true)} />
        <main className="relative z-10 mt-10 flex-1 scroll-smooth px-section-x">
          {children}
        </main>
      </div>
    </div>
  );
}
