"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "The Chronicle", href: "#about" },
  { label: "The Armory (Skills)", href: "#skills" },
  { label: "Realm of Creations (Projects)", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Highlight active section
      const sections = ["about", "skills", "projects", "contact"];
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 font-[Cinzel] transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/95 border-b border-[#1a1a1a] backdrop-blur-sm"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Top gold shimmer line */}
        <div
          className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent transition-opacity duration-500 ${
            scrolled ? "opacity-30" : "opacity-0"
          }`}
        />

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo / House name */}
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {/* Sigil diamond */}
            {/* <div className="relative w-7 h-7 flex items-center justify-center">
              <div className="absolute inset-0 border border-[#7a0c0c] rotate-45 group-hover:border-[#d4af37] transition-colors duration-300" />
              <div className="absolute inset-[4px] bg-[#7a0c0c] rotate-45 group-hover:bg-[#d4af37] transition-colors duration-300" />
            </div> */}
            <div className="flex flex-col leading-none">
              <span
                className="text-base font-bold text-[#d4af37] tracking-widest group-hover:text-white transition-colors duration-300"
                style={{ textShadow: "0 0 20px rgba(212,175,55,0.2)" }}
              >
                Sai Aditya
              </span>
              {/* <span className="text-[8px] tracking-[0.3em] text-[#7a0c0c] uppercase">
                House of Code
              </span> */}
            </div>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-4 py-2 text-[12px] tracking-[0.25em] uppercase transition-all duration-300 group ${
                    isActive ? "text-[#d4af37]" : "text-gray-400 hover:text-[#d4af37]"
                  }`}
                >
                  {/* Active underline */}
                  <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent transition-all duration-300 ${
                      isActive ? "w-full opacity-60" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-40"
                    }`}
                  />
                  {link.label}
                </a>
              );
            })}

            {/* CTA */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-5 py-2 border border-[#d4af37] text-[#d4af37] text-[10px] tracking-[0.25em] uppercase hover:bg-[#d4af37] hover:text-black transition-all duration-300"
              style={{ boxShadow: "0 0 15px rgba(212,175,55,0.05)" }}
            >
              View Scroll
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-[#d4af37] transition-all duration-300 origin-center ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[#d4af37] transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[#d4af37] transition-all duration-300 origin-center ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Bottom border line — only when scrolled */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7a0c0c] to-transparent transition-opacity duration-500 ${
            scrolled ? "opacity-40" : "opacity-0"
          }`}
        />
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#050505]/98 border-b border-[#1a1a1a] backdrop-blur-sm font-[Cinzel]"
          >
            {/* Top shimmer */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-20" />

            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 border transition-all duration-300 text-[11px] tracking-[0.25em] uppercase ${
                      isActive
                        ? "border-[#7a0c0c] text-[#d4af37] bg-[#0d0505]"
                        : "border-[#111] text-gray-500 hover:border-[#7a0c0c] hover:text-[#d4af37]"
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rotate-45 flex-shrink-0 transition-colors duration-300 ${
                        isActive ? "bg-[#d4af37]" : "bg-[#3a1a1a]"
                      }`}
                    />
                    {link.label}
                  </motion.a>
                );
              })}

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                className="mt-3 px-4 py-3 border border-[#d4af37] text-[#d4af37] text-[11px] tracking-[0.25em] uppercase text-center hover:bg-[#d4af37] hover:text-black transition-all duration-300"
              >
                View Scroll
              </motion.a>
            </div>

            {/* Bottom blood line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7a0c0c] to-transparent opacity-40" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;