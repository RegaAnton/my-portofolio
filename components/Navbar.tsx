"use client";

import { Moon, Sun, Terminal } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono font-bold text-lg sm:text-xl text-red-600 dark:text-red-500">
          <Terminal size={24} className="shrink-0" />
          <span className="hidden sm:inline-block">DevSec_</span>
        </div>

        {/* Menu navigasi sekarang mencakup Certificates */}
        <div className="flex items-center gap-3 sm:gap-6">
          <a
            href="#skills"
            className="text-xs sm:text-sm font-medium hover:text-red-600 dark:hover:text-red-500 transition"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-xs sm:text-sm font-medium hover:text-red-600 dark:hover:text-red-500 transition"
          >
            Projects
          </a>
          <a
            href="#certificates"
            className="text-xs sm:text-sm font-medium hover:text-red-600 dark:hover:text-red-500 transition"
          >
            Certificates
          </a>
          <a
            href="#contact"
            className="text-xs sm:text-sm font-medium hover:text-red-600 dark:hover:text-red-500 transition"
          >
            Contact
          </a>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-1.5 sm:p-2 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun size={16} className="sm:w-[18px] sm:h-[18px]" />
              ) : (
                <Moon size={16} className="sm:w-[18px] sm:h-[18px]" />
              )}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
