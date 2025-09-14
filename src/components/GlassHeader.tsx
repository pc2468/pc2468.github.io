import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/lib/data";

export default function GlassHeader() {
  const navRef = useRef<HTMLElement | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("dark-theme") === "true";
    setDarkMode(saved);
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  // Handle nav resizing on scroll
  useEffect(() => {
    const nav = navRef.current;

    const handleScroll = () => {
      if (!nav) return;

      // Case 1: Mobile (<1024px)
      if (window.innerWidth < 1024) {
        nav.classList.toggle("scrolling", window.scrollY > 0);
        nav.style.width = "100%";
        return;
      }

      // Case 2: Mid-range (1024px–1450px)
      if (window.innerWidth >= 1024 && window.innerWidth < 1450) {
        if (window.scrollY > 0) {
          nav.classList.add("scrolling");
          const minWidth = window.innerWidth * 0.7;
          const maxWidth = window.innerWidth * 0.75;
          const scrollProgress = Math.min(window.scrollY / 1000, 1);
          const easeProgress = 1 - Math.pow(1 - scrollProgress, 4);
          const currentWidth =
            maxWidth - (maxWidth - minWidth) * easeProgress;
          nav.style.width = `${currentWidth}px`;
        } else {
          nav.classList.remove("scrolling");
          nav.style.width = "75%";
        }
        return;
      }

      // Case 3: Large screens (≥1450px)
      if (window.scrollY > 0) {
        nav.classList.add("scrolling");
        const minWidth = window.innerWidth * 0.5;
        const maxWidth = window.innerWidth * 0.6;
        const scrollProgress = Math.min(window.scrollY / 1000, 1);
        const easeProgress = 1 - Math.pow(1 - scrollProgress, 4);
        const currentWidth =
          maxWidth - (maxWidth - minWidth) * easeProgress;
        nav.style.width = `${currentWidth}px`;
      } else {
        nav.classList.remove("scrolling");
        nav.style.width = "80%";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer + smooth scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: "-20% 0px -70% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document
            .querySelectorAll("nav a")
            .forEach((link) => link.classList.remove("active"));

          const id = entry.target.getAttribute("id");
          const activeLink = document.querySelector(`nav a[href="#${id}"]`);
          activeLink?.classList.add("active");
        }
      });
    }, observerOptions);

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    // Smooth scroll
    const handleLinkClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.substring(1);
      const targetElement = document.getElementById(targetId || "");
      targetElement?.scrollIntoView({ behavior: "smooth" });
    };

    const anchors = document.querySelectorAll<HTMLAnchorElement>(
      'a[href^="#"]'
    );
    anchors.forEach((anchor) =>
      anchor.addEventListener("click", handleLinkClick)
    );

    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleLinkClick)
      );
      observer.disconnect();
    };
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newState = !darkMode;
    setDarkMode(newState);
    localStorage.setItem("dark-theme", String(newState));
    document.documentElement.classList.toggle("dark", newState);
  };

  return (
    <>
      <div className="flex justify-center w-full">
        <nav
          ref={navRef}
          id="main-nav"
          aria-label="Main navigation"
          className="fixed left-1/2 -translate-x-1/2 z-[100] border border-transparent backdrop-blur-xl 
            bg-white/70 dark:bg-black/30
            transition-[background-color,border-color,border-radius] duration-500 ease-in-out 
            md:top-6 md:bottom-auto bottom-0 w-[80%] rounded-2xl"
        >
          <div className="container mx-auto flex justify-center items-center p-3.5">
            <ul className="flex w-full justify-between md:space-x-6 md:justify-center md:gap-12 gap-6">
              {navLinks.map((item) => (
                <li key={item.label} className="flex-1 md:flex-none relative">
                  <a
                    href={item.href}
                    className="flex flex-col items-center gap-1 
           text-black dark:text-gray-300 
           hover:text-green-500 dark:hover:text-green-400
           transition-colors text-xs md:text-base relative group"
                  >
                    {/* Green dot */}
                    <div className="nav-indicator absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-400 opacity-0 scale-0 transition-all duration-300 hidden md:block" />

                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
