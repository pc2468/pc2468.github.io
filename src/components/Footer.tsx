import { personalInfo } from "@/lib/data";
import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("dark-theme") === "true";
    setDarkMode(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleDarkMode = () => {
    const newState = !darkMode;
    setDarkMode(newState);
    localStorage.setItem("dark-theme", String(newState));
    document.documentElement.classList.toggle("dark", newState);
  };

  return (
    <footer className="border-t border-purple-500/10 py-6 bg-gradient-to-b from-background to-muted/20 backdrop-blur-sm">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 flex items-center justify-between">
        {/* Copyright */}
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>

        {/* Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 transition-colors"
          aria-label="Toggle Theme"
        >
          {darkMode ? (
            <Sun className="w-4 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-4 h-5 text-gray-800 dark:text-gray-200" />
          )}
        </button>
      </div>
    </footer>
  );
}
