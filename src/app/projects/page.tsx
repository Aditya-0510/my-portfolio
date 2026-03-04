"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import LegalVizierImage from "@/public/Legal_Vizier_final.jpg";
import ProxyPakkiImage from "@/public/Proxy_Pakki.jpg";
import SynapseImage from "@/public/synapse.png";
import ChatImage from "@/public/chatapp.png";
import HealthImage from "@/public/healthhacked.png";
import LearnHubImage from "@/public/LearnHubImage.png";

const PLACEHOLDER = "https://placehold.co/600x400/0a0a0a/333333?text=Coming+Soon";

type Project = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData | string;
  tags: string[];
  link: string;
  category: "Full Stack" | "Mobile" | "AI/ML" | "DevOps" | "Others";
  featured?: boolean;
};

const allProjects: Project[] = [
    {
    id: 1,
    title: "LearnHub",
    description:
      "A full-stack course management system with Docker containerization and automated CI/CD using Jenkins.",
    image: LearnHubImage,
    tags: ["React.js", "Devops", "Prisma"],
    link: "https://github.com/Aditya-0510/LearnHub",
    category: "Full Stack",
    featured: true,
  },
  {
    id: 2,
    title: "Devops API Gateway",
    description:
      "Production-style microservices system with API Gateway, monitoring, caching, and CI/CD.",
    image: PLACEHOLDER,
    tags: ["Devops", "Microservices", "CI/CD"],
    link: "https://github.com/Aditya-0510/devops-api-gateway",
    category: "DevOps",
    featured: true,
  },
  {
    id: 3,
    title: "Chat App",
    description:
      "A real-time chat application with room-based messaging, enabling users to join, create, and interact in multiple chat rooms.",
    image: ChatImage,
    tags: ["React.js", "Tailwind CSS", "WebSockets"],
    link: "https://github.com/Aditya-0510/Chat-App",
    category: "Full Stack",
  },
  {
    id: 4,
    title: "Synapse",
    description:
      "A full-stack content management platform that lets users organize and curate digital content (Twitter, YouTube, Notion) into shareable collections.",
    image: SynapseImage,
    tags: ["React", "Express.js", "MongoDB"],
    link: "https://github.com/Aditya-0510/Synapse",
    category: "Full Stack",
    // featured: true,
  },
  {
    id: 5,
    title: "Helmet Compliance Detection using YOLOv8",
    description:
      "Built a real-time helmet detection system using YOLOv8 with transfer learning and webcam-based inference.",
    image: PLACEHOLDER,
    tags: ["Computer Vision", "YOLOv8", "Deep Learning"],
    link: "https://github.com/Aditya-0510/helmet_detection",
    category: "AI/ML",
  },
  {
    id: 6,
    title: "Attendance Management App",
    description:
      "A modern React-Native application for managing student attendance for University, featuring geo-fencing to verify physical presence.",
    image: ProxyPakkiImage,
    tags: ["React-Native", "Node.js", "MongoDB"],
    link: "https://github.com/Aditya-0510/geo-attendance",
    category: "Mobile",
  },
  
  
  {
    id: 7,
    title: "Health Hacked",
    description:
      "AI-powered health assistance platform that provides personalized medical guidance, symptom analysis, and continuous care management.",
    image: HealthImage,
    tags: ["React.js", "TypeScript", "Node.js"],
    link: "https://github.com/Aditya-0510/health-hacked",
    category: "AI/ML",
  },
   {
    id: 8,
    title: "Emotion detection using deep learning",
    description:
      "Built a deep learning model to classify facial emotions into seven categories using the FER-2013 dataset.",
    image: PLACEHOLDER,
    tags: ["Computer Vision", "CNN", "Deep Learning"],
    link: "https://github.com/Aditya-0510/emotion_detection",
    category: "AI/ML",
  },
  {
    id: 9,
    title: "Legal Vizier",
    description:
      "A web application showcasing legal rights for users in a visual manner.",
    image: LegalVizierImage,
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/Aditya-0510/legal-vizier",
    category: "Others",
  },
  
  {
    id: 10,
    title: "Gmail to Google Sheets Automation",
    description:
      "Python automation system that integrates the Gmail API and Google Sheets API to log unread emails into a spreadsheet using secure OAuth 2.0 authentication.",
    image: PLACEHOLDER,
    tags: ["Python", "Gmail API", "Google Sheets API"],
    link: "https://github.com/Aditya-0510/gmail-to-sheets",
    category: "AI/ML",
  },
];

const CATEGORIES = ["All", "Full Stack", "DevOps", "Mobile", "AI/ML", "Others"] as const;

export default function Projects() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <main className="min-h-screen bg-black text-[#e5e5e5] font-[Cinzel] relative overflow-x-hidden">

      {/* ── Background grid ── */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(212,175,55,0.8) 80px,rgba(212,175,55,0.8) 81px),repeating-linear-gradient(90deg,transparent,transparent 80px,rgba(212,175,55,0.8) 80px,rgba(212,175,55,0.8) 81px)`,
        }}
      />

      {/* Side accents */}
      <div className="fixed left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#7a0c0c] to-transparent opacity-50 pointer-events-none" />
      <div className="fixed right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#7a0c0c] to-transparent opacity-50 pointer-events-none" />

      {/* Ember particles */}
      {[...Array(16)].map((_, i) => (
        <span
          key={i}
          className="fixed rounded-full pointer-events-none"
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

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

        {/* ── Back link ── */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-gray-400 hover:text-[#d4af37] transition-colors duration-300 group"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
            Return to the Keep
          </Link>
        </motion.div>

        {/* ── Page header ── */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] text-red-500 uppercase mb-4">
            The Complete Chronicle
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-[#d4af37] tracking-widest"
            style={{ textShadow: "0 0 40px rgba(212,175,55,0.15)" }}
          >
            All Kingdoms
          </h1>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#d4af37] opacity-50" />
            <svg width="16" height="16" viewBox="0 0 20 20" fill="#d4af37" opacity="0.5">
              <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
            </svg>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#d4af37] opacity-50" />
          </div>
          <p className="text-gray-400 mt-4 text-sm tracking-widest italic">
            {allProjects.length} realms forged · {allProjects.filter(p => p.featured).length} featured conquests
          </p>
        </motion.div>

        {/* ── Filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-[10px] tracking-[0.3em] uppercase border transition-all duration-300 ${
                active === cat
                  ? "border-[#d4af37] text-[#d4af37] bg-[#0d0a00]"
                  : "border-[#1a1a1a] text-gray-400 hover:border-[#7a0c0c] hover:text-gray-200 bg-[#080808]"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className={`ml-2 ${active === cat ? "text-red-500" : "text-grey-600"}`}>
                  {allProjects.filter(p => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </motion.div>

        {/* ── Project grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, index) => (
              <motion.a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="group relative border bg-[#080808] overflow-hidden transition-all duration-400 flex flex-col"
                style={{
                  borderColor: project.featured ? "#2a1a00" : "#1a1a1a",
                  boxShadow: project.featured
                    ? "inset 0 0 40px rgba(0,0,0,0.9), 0 0 0 1px rgba(212,175,55,0.04)"
                    : "inset 0 0 30px rgba(0,0,0,0.8)",
                }}
              >
                {/* Hover top line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-20" />

                {/* Featured ribbon */}
                {project.featured && (
                  <div className="absolute top-0 right-0 z-30">
                    <div className="border-l border-b border-[#d4af37]/30 px-3 py-1 bg-[#0d0a00] text-[8px] tracking-[0.3em] text-[#d4af37] uppercase">
                      Featured
                    </div>
                  </div>
                )}

                {/* Image */}
                <div className="h-48 relative overflow-hidden flex-shrink-0">
                  {typeof project.image === "string" ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/30 to-transparent" />

                  

                  {/* Category pill */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/80 border border-[#2a1a1a] text-[#7a0c0c] text-[8px] tracking-widest uppercase">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div>
                    
                    <h3 className="text-lg text-[#d4af37] leading-snug group-hover:text-white transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-xs leading-5 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#2a1a1a] text-grey-400 text-[9px] px-2 py-0.5 tracking-wider group-hover:border-[#3a2a1a] transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA row */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#111] mt-auto">
                    <span className="text-[10px] tracking-widest text-red-500 group-hover:text-[#c0392b] transition-colors duration-300 flex items-center gap-1.5">
                      Enter the Kingdom
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                    {/* GitHub icon */}
                    <svg className="w-4 h-4 text-grey-400 group-hover:text-[#666] transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                </div>

                {/* Bottom hover border */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7a0c0c] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-24 text-gray-400">
            <div className="text-4xl mb-4 opacity-30">⚔</div>
            <p className="text-sm tracking-widest italic">No kingdoms in this realm yet.</p>
          </div>
        )}

        {/* ── Footer sigil ── */}
        <div className="mt-20 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-[#2a2a2a]" />
            <div className="w-2 h-2 bg-[#7a0c0c] rotate-45" />
            <div className="h-px w-32 bg-gradient-to-l from-transparent to-[#2a2a2a]" />
          </div>
          <p className="text-grey-400 text-[10px] italic tracking-widest">
            The forge never rests. New kingdoms are always being conquered.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes floatEmber {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.15; }
          100% { transform: translateY(-120px) scale(0.3); opacity: 0; }
        }
      `}</style>
    </main>
  );
}
