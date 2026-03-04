"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          subject: "Portfolio Contact",
          message: formState.message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setSent(true);
      } else {
        console.error(data);
        alert("Failed to send message");
      }
    } 
    catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
    setLoading(false);
    setSent(true);
  };

  const ravens = [
    {
      label: "GitHub",
      href: "https://github.com/Aditya-0510",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sai-aditya-10x/",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:saiaditya6558@gmail.com",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="w-full py-28 bg-black text-[#e5e5e5] font-[Cinzel] relative overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(212,175,55,0.8) 80px,rgba(212,175,55,0.8) 81px),repeating-linear-gradient(90deg,transparent,transparent 80px,rgba(212,175,55,0.8) 80px,rgba(212,175,55,0.8) 81px)`,
        }}
      />

      {/* Side flame accents */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#7a0c0c] to-transparent opacity-60" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#7a0c0c] to-transparent opacity-60" />

      {/* Bottom fire glow */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-[radial-gradient(ellipse_at_bottom,rgba(122,12,12,0.18),transparent_70%)]" />

      {/* Floating embers */}
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${Math.random() * 3 + 1.5}px`,
            height: `${Math.random() * 3 + 1.5}px`,
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 60}%`,
            background: i % 2 === 0 ? "#d4af37" : "#c0392b",
            animation: `floatEmber ${3 + Math.random() * 4}s ${Math.random() * 6}s linear infinite`,
            opacity: 0,
          }}
        />
      ))}

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.4em] text-red-500 uppercase mb-4">
            Send a Raven
          </p>
          <h2 className="text-5xl font-bold text-[#d4af37] tracking-widest">
            Get In Touch
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#d4af37] opacity-50" />
            <svg width="16" height="16" viewBox="0 0 20 20" fill="#d4af37" opacity="0.5">
              <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
            </svg>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#d4af37] opacity-50" />
          </div>
          <p className="text-gray-400 mt-4 text-sm tracking-widest italic">
            Every alliance begins with a message. Speak, and I shall answer.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">

          {/* Left — scroll form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-3 relative border border-[#1f1f1f] bg-[#080808] p-8 group hover:border-[#7a0c0c] transition-all duration-500"
            style={{ boxShadow: "inset 0 0 40px rgba(0,0,0,0.9)" }}
          >
            {/* Corner ornaments */}
            <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-[#3a3a3a] group-hover:border-[#d4af37] transition-colors duration-500" />
            <div className="absolute top-3 right-3 w-4 h-4 border-r border-t border-[#3a3a3a] group-hover:border-[#d4af37] transition-colors duration-500" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-l border-b border-[#3a3a3a] group-hover:border-[#d4af37] transition-colors duration-500" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-[#3a3a3a] group-hover:border-[#d4af37] transition-colors duration-500" />

            {/* Top shimmer */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 gap-6 text-center"
              >
                <p className="text-[#d4af37] text-xl tracking-widest">Raven Dispatched</p>
                <p className="text-gray-600 text-sm tracking-wider italic">
                  Your message rides the wind. An answer shall come.
                </p>
              </motion.div>
            ) : (
              <div className="flex flex-col gap-6">
                <div>
                  <label className="block text-[10px] tracking-[0.35em] text-red-500 uppercase mb-2">
                    Your Name
                  </label>
                  <input
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full bg-black border border-[#2a2a2a] px-4 py-3 text-sm text-gray-300 placeholder-gray-500 tracking-wider focus:outline-none focus:border-[#d4af37] transition-colors duration-300 font-[Cinzel]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.35em] text-red-500  uppercase mb-2">
                    Raven Address
                  </label>
                  <input
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@ravens.post"
                    className="w-full bg-black border border-[#2a2a2a] px-4 py-3 text-sm text-gray-300 placeholder-gray-500tracking-wider focus:outline-none focus:border-[#d4af37] transition-colors duration-300 font-[Cinzel]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.35em] text-red-500  uppercase mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Speak your proposition, ally or foe…"
                    className="w-full bg-black border border-[#2a2a2a] px-4 py-3 text-sm text-gray-300 placeholder-gray-500 tracking-wider focus:outline-none focus:border-[#d4af37] transition-colors duration-300 resize-none font-[Cinzel]"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleSubmit}
                  disabled={loading}
                  className="w-full py-4 border border-[#d4af37] text-[#d4af37] tracking-[0.3em] text-sm uppercase hover:bg-[#d4af37] hover:text-black transition-all duration-300"
                  style={{ boxShadow: "0 0 20px rgba(212,175,55,0.05)" }}
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-[#d4af37] border-t-transparent rounded-full animate-spin"></span>
                      Sending...
                    </>
                  ) : (
                    "Dispatch the Raven"
                  )}
                </motion.button>
              </div>
            )}
          </motion.div>

          {/* Right — sigil + ravens */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            {/* House card */}
            <div
              className="border border-[#1f1f1f] bg-[#080808] p-6 text-center relative"
              style={{ boxShadow: "inset 0 0 30px rgba(0,0,0,0.9)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-20" />
              <p className="text-[9px] tracking-[0.4em] text-red-500 uppercase mb-1">Sai Aditya</p>
              <p className="text-[#d4af37] text-sm tracking-widest">Open for collaboration</p>
              <div className="my-4 h-px bg-[#1a1a1a]" />
              <p className="text-gray-400 text-xs leading-6 italic tracking-wide">
                Seeking quests in full-stack realms, open source campaigns, and freelance conquests.
              </p>
            </div>

            {/* Raven links */}
            <div className="border border-[#1f1f1f] bg-[#080808] p-5 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7a0c0c] to-transparent opacity-30" />
              <p className="text-[9px] tracking-[0.4em] text-red-500 uppercase mb-4">
                Ravens Available
              </p>
              <div className="flex flex-col gap-2">
                {ravens.map((r) => (
                  <a
                    key={r.label}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 border border-[#1a1a1a] text-gray-400 hover:border-[#7a0c0c] hover:text-[#d4af37] transition-all duration-300 group/raven text-sm tracking-widest"
                  >
                    <span className="group-hover/raven:text-[#c0392b] transition-colors duration-300">
                      {r.icon}
                    </span>
                    {r.label}
                    <span className="ml-auto text-[#2a2a2a] group-hover/raven:text-[#7a0c0c] transition-colors duration-300 text-xs">→</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom sigil */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-[#2a2a2a]" />
            <div className="w-2 h-2 bg-[#7a0c0c] rotate-45" />
            <div className="h-px w-32 bg-gradient-to-l from-transparent to-[#2a2a2a]" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatEmber {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.2; }
          100% { transform: translateY(-120px) scale(0.3); opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Contact;