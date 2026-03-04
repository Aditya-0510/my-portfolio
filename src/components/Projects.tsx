"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import LegalVizierImage from "@/public/Legal_Vizier_final.jpg";
import ProxyPakkiImage from "@/public/Proxy_Pakki.jpg";
import LearnHubImage from "@/public/LearnHubImage.png";
import SynapseImage from "@/public/synapse.png";
import ChatImage from "@/public/chatapp.png";
import HealthImage from "@/public/healthhacked.png";

const ProjectsPage = () => {
  const PLACEHOLDER = "https://placehold.co/600x400/0a0a0a/333333?text=Coming+Soon";
  const projects = [
    {
    id: 1,
    title: "LearnHub",
    description:
      "A full-stack course management system with Docker containerization and automated CI/CD using Jenkins.",
    image: LearnHubImage,
    tags: ["React.js", "Devops", "Prisma"],
    link: "https://github.com/Aditya-0510/LearnHub",
  },
    {
    id: 2,
    title: "Devops API Gateway",
    description:
      "Production-style microservices system with API Gateway, monitoring, caching, and CI/CD.",
    image: PLACEHOLDER,
    tags: ["Devops", "Microservices", "CI/CD"],
    link: "https://github.com/Aditya-0510/devops-api-gateway",
  },
    {
      id: 3,
      title: "Chat App",
      description:
        "A real-time chat application with room-based messaging, enabling users to join, create, and interact in multiple chat rooms.",
      image: ChatImage,
      tags: ["React.js", "Tailwind CSS", "WebSockets"],
      link: "https://github.com/Aditya-0510/Chat-App",
    },
   {
    id: 4,
    title: "Synapse",
    description:
      "A full-stack content management platform that lets users organize and curate digital content (Twitter, YouTube, Notion) into shareable collections.",
    image: SynapseImage,
    tags: ["React", "Express.js", "MongoDB"],
    link: "https://github.com/Aditya-0510/Synapse",
  },
    // {
    //   id: 5,
    //   title: "Legal Vizier",
    //   description:
    //     "A web application showcasing legal rights for users in a visual manner.",
    //   image: LegalVizierImage,
    //   tags: ["HTML", "CSS", "JavaScript"],
    //   link: "https://github.com/Aditya-0510/legal-vizier",
    // },
  ];

  return (
    <section
      id="projects"
      className="w-full py-28 bg-gradient-to-b from-[#0a0a0a] to-black text-[#e5e5e5] font-[Cinzel] relative overflow-hidden"
    >
      {/* Background grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(212,175,55,0.8) 80px,rgba(212,175,55,0.8) 81px),repeating-linear-gradient(90deg,transparent,transparent 80px,rgba(212,175,55,0.8) 80px,rgba(212,175,55,0.8) 81px)`,
        }}
      />
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#7a0c0c] to-transparent opacity-60" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#7a0c0c] to-transparent opacity-60" />
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${Math.random() * 3 + 2}px`,
            height: `${Math.random() * 3 + 2}px`,
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 40}%`,
            background: i % 2 === 0 ? "#d4af37" : "#c0392b",
            animation: `floatEmber ${3 + Math.random() * 4}s ${Math.random() * 5}s linear infinite`,
            opacity: 0,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.4em] text-red-500 uppercase mb-4">Chronicles of War</p>
          <h2 className="text-5xl font-bold text-[#d4af37] tracking-widest">The Realm of Creations</h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#d4af37] opacity-50" />
            <svg width="16" height="16" viewBox="0 0 20 20" fill="#d4af37" opacity="0.5">
              <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
            </svg>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#d4af37] opacity-50" />
          </div>
          <p className="text-gray-300 mt-4 text-sm tracking-widest italic">
            Every project, a battle. Every deployment, a conquest.
          </p>
        </div>

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <a href={projects[0].link} target="_blank" rel="noopener noreferrer" className="group block">
            <div
              className="relative border border-[#2a2a2a] bg-[#0a0a0a] overflow-hidden hover:border-[#7a0c0c] transition-all duration-500"
              style={{ boxShadow: "inset 0 0 60px rgba(0,0,0,0.9)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-20" />
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-80 relative overflow-hidden">
                  <Image src={projects[0].image} alt={projects[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a] opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-40" />
                  <div className="absolute top-4 left-4 border border-[#d4af37] px-3 py-1 text-[10px] text-[#d4af37] tracking-[0.3em] uppercase bg-black/70">Featured</div>
                </div>
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                  <h3 className="text-3xl text-[#d4af37] mb-4 tracking-wide group-hover:text-white transition-colors duration-300">{projects[0].title}</h3>
                  <p className="text-gray-400 mb-6 leading-7 text-sm">{projects[0].description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {projects[0].tags.map((tag) => (
                      <span key={tag} className="border border-[#3a1a1a] bg-[#0f0505] text-[#a08080] text-[10px] px-3 py-1 tracking-widest">{tag}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-3 text-red-500 group-hover:text-[#c0392b] transition-colors duration-300 text-sm tracking-widest">
                    Enter the Kingdom
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Grid of remaining projects — only show 3 */}
        <div className="grid md:grid-cols-3 gap-5">
          {projects.slice(1, 4).map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group block border border-[#1a1a1a] bg-[#080808] overflow-hidden hover:border-[#7a0c0c] transition-all duration-400 relative"
              style={{ boxShadow: "inset 0 0 30px rgba(0,0,0,0.8)" }}
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-20" />
              <div className="h-40 relative overflow-hidden">
                <Image src={project.image} alt={project.title} fill unoptimized className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/40 to-transparent" />
                
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-base text-[#d4af37] leading-tight group-hover:text-white transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-400 text-xs leading-5 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border border-[#2a1a1a] text-[#888] text-[9px] px-2 py-0.5 tracking-wider">{tag}</span>
                  ))}
                </div>
                <span className="mt-3 text-[10px] tracking-widest text-red-500 group-hover:text-[#c0392b] transition-colors duration-300 flex items-center gap-1">
                  Enter the Kingdom <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* ── View All CTA ── */}
        <div className="mt-16 flex flex-col items-center gap-6">

          <div className="flex items-center gap-4 w-full max-w-md">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#3a3a3a]" />
            <div className="w-1.5 h-1.5 bg-[#7a0c0c] rotate-45" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#3a3a3a]" />
          </div>

          <Link href="/projects" className="group relative inline-block">
            {/* Outer glow on hover */}
            <span className="absolute -inset-[1px] bg-gradient-to-r from-[#7a0c0c] via-[#d4af37] to-[#7a0c0c] opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm" />
            <span className="relative flex items-center gap-4 px-12 py-4 border border-[#d4af37] bg-[#0a0800] text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300 text-xs tracking-[0.35em] uppercase font-bold">
              ⚔ &nbsp;Explore the Full Kingdom&nbsp; ⚔
            </span>
          </Link>

          <p className="text-grey-400 text-[10px] italic tracking-widest">
            The forge never rests. New kingdoms are being conquered.
          </p>
        </div>

      </div>

      <style jsx>{`
        @keyframes floatEmber {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.2; }
          100% { transform: translateY(-100px) scale(0.3); opacity: 0; }
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ProjectsPage;