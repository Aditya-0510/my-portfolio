"use client";

import { motion } from "framer-motion";

const navLinks = [
  { label: "The Chronicle", href: "#about" },
  { label: "The Armory", href: "#skills" },
  { label: "Realm of Creations", href: "#projects" },
  { label: "The Grand Maester", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] text-[#e5e5e5] font-[Cinzel] relative overflow-hidden border-t border-[#1a1a1a]">

      {/* Top fire line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-30" />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(212,175,55,0.8) 60px,rgba(212,175,55,0.8) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(212,175,55,0.8) 60px,rgba(212,175,55,0.8) 61px)`,
        }}
      />

      {/* Ember glow bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-[radial-gradient(ellipse_at_bottom,rgba(122,12,12,0.12),transparent_70%)]" />

      {/* Floating embers */}
      {[...Array(8)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${Math.random() * 2 + 1.5}px`,
            height: `${Math.random() * 2 + 1.5}px`,
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 80}%`,
            background: i % 2 === 0 ? "#d4af37" : "#c0392b",
            animation: `floatEmber ${3 + Math.random() * 4}s ${Math.random() * 5}s linear infinite`,
            opacity: 0,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Main footer body */}
        <div className="py-16 grid md:grid-cols-3 gap-12 border-b border-[#111]">

          {/* Brand / sigil */}
          <div className="flex flex-col gap-5">
            <div>
              <h3
                className="text-3xl font-bold text-[#d4af37] tracking-widest"
                style={{ textShadow: "0 0 30px rgba(212,175,55,0.2)" }}
              >
                Sai Aditya
              </h3>
            </div>
            <p className="text-gray-400 text-xs leading-6 italic tracking-wide">
              &ldquo;We Do Not Debug, We Conquer&rdquo;
            </p>
            <div className="flex items-center gap-3 mt-1">
              <div className="h-px w-12 bg-gradient-to-r from-[#7a0c0c] to-transparent" />
              <div className="w-1.5 h-1.5 bg-[#d4af37] rotate-45 opacity-60" />
            </div>
            <p className="text-gray-500 text-xs leading-6 tracking-wider">
              Full-stack developer. Algorithm tactician. Builder of digital kingdoms.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <p className="text-[13px] tracking-[0.45em] text-red-500 uppercase mb-2">
              The Map
            </p>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-3 text-gray-400 hover:text-[#d4af37] transition-colors duration-300 text-xs tracking-widest group"
              >
                <div className="w-1 h-1 bg-[#3a1a1a] rotate-45 group-hover:bg-[#7a0c0c] transition-colors duration-300" />
                {link.label}
              </a>
            ))}
          </div>

          {/* Oath / CTA */}
          <div className="flex flex-col gap-5">
            <p className="text-[13px] tracking-[0.45em] text-red-500 uppercase mb-2">
              The Oath
            </p>
            <div
              className="border border-[#1a1a1a] bg-[#080808] p-5 relative group hover:border-[#7a0c0c] transition-colors duration-500"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <p className="text-gray-400 text-xs leading-7 italic tracking-wide">
                Night gathers, and now my watch begins. I shall write clean code and ship on time. I am the watcher on the walls. I am the shield that guards the realm of users.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-xs tracking-[0.3em] text-[#d4af37] border border-[#d4af37] px-5 py-3 hover:bg-[#d4af37] hover:text-black transition-all duration-300 w-fit"
            >
              Forge an Alliance
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-grey-400 text-[10px] tracking-[0.3em] uppercase">
            © {new Date().getFullYear()} Sai Aditya · All Realms Reserved
          </p>

          {/* Sigil center piece */}
          <motion.div
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-10 bg-[#1a1a1a]" />
            <svg width="14" height="14" viewBox="0 0 20 20" fill="#d4af37" opacity="0.4">
              <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
            </svg>
            <div className="h-px w-10 bg-[#1a1a1a]" />
          </motion.div>

          <p className="text-grey-400 text-[10px] tracking-[0.3em] uppercase">
            Built with fire & Next.js
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatEmber {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.15; }
          100% { transform: translateY(-100px) scale(0.3); opacity: 0; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;