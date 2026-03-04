"use client";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full min-h-screen bg-[#050505] text-[#e5e5e5] flex items-center justify-center relative overflow-hidden font-[Cinzel]">

      {/* Animated fire embers background */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="ember absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 60}%`,
              background: i % 3 === 0 ? '#d4af37' : i % 3 === 1 ? '#c0392b' : '#e67e22',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Map/parchment texture overlay */}
      <div
        className="absolute inset-0 z-10 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#000_100%)] z-10 opacity-80" />

      {/* Bottom fire glow */}
      <div className="absolute bottom-0 left-0 right-0 h-48 z-10"
        style={{
          background: 'linear-gradient(to top, rgba(122,12,12,0.4) 0%, transparent 100%)'
        }}
      />

      {/* Decorative sigil lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent z-20 opacity-60" />
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#7a0c0c] to-transparent z-20 opacity-60" />

      <div className="relative z-30 text-center px-6 max-w-4xl mx-auto">

        {/* House sigil top line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-[#d4af37]" />
          <svg width="20" height="20" viewBox="0 0 20 20" fill="#d4af37">
            <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z"/>
          </svg>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-[#d4af37]" />
        </motion.div>

        {/* Crown title */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.35em" }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-xs text-[#a08030] tracking-[0.35em] uppercase mb-3"
        >
          Lord of the Seven Stacks
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative text-6xl md:text-8xl font-bold text-[#d4af37] tracking-widest"
          style={{ textShadow: '0 0 40px rgba(212,175,55,0.3), 0 0 80px rgba(122,12,12,0.2)' }}
        >
          Sai Aditya
          {/* Fire Glow */}
          <span className="absolute left-0 right-0 -bottom-3 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent blur-sm opacity-70" />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-[#a0a0a0] tracking-[0.2em] italic"
        >
          The Developer of Code &amp; Conqueror of Algorithms
        </motion.p>

        {/* House words */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-2 text-xs tracking-[0.3em] text-[#ef4444] uppercase"
        >
          &ldquo;We Do Not Debug, We Conquer&rdquo;
        </motion.p>

        {/* Separator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex items-center justify-center gap-3 my-10"
        >
          <div className="h-px w-16 bg-[#3a3a3a]" />
          <div className="w-1.5 h-1.5 bg-[#7a0c0c] rotate-45" />
          <div className="h-px w-16 bg-[#3a3a3a]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/resume.pdf"
            target="_blank"
            className="px-8 py-3 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition duration-300 tracking-widest text-sm"
            style={{ boxShadow: '0 0 20px rgba(212,175,55,0.1)' }}
          >
            View Scroll
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="px-8 py-3 border border-[#3a3a3a] text-white hover:border-[#7a0c0c] hover:text-[#c0392b] transition duration-300 tracking-widest text-sm"
          >
            See the Realm
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="mt-20 flex flex-col items-center gap-2 text-[#555] text-xs tracking-widest"
        >
          <span>SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#7a0c0c] to-transparent"
          />
        </motion.div>
      </div>

      <style jsx>{`
        .ember {
          animation: floatEmber linear infinite;
          opacity: 0;
        }
        @keyframes floatEmber {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-120px) scale(0.3) translateX(20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Hero;