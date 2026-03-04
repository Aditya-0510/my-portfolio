"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        {
          name: "HTML5",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
              <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
              <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
              <path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path>
              <path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
            </svg>
          ),
        },
        {
          name: "CSS3",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
              <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
              <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
              <path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path>
              <path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
            </svg>
          ),
        },
        {
          name: "JavaScript",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 48 48">
              <path fill="#ffd600" d="M6,42V6h36v36H6z" />
              <path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z" />
            </svg>
          ),
        },
        {
          name: "TypeScript",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
              <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect>
              <polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon>
              <path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
            </svg>
          ),
        },
        {
          name: "React",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="7" fill="#39c1d7"></circle>
              <path fill="#39c1d7" d="M88.5,50c0-5.376-6.474-10.029-16.518-12.798c2.582-10.096,1.787-18.035-2.827-20.729c-1.82-1.063-4.028-1.257-6.562-0.579C58.775,16.916,54.4,19.904,50,24.293c-4.4-4.389-8.775-7.376-12.593-8.399c-2.534-0.679-4.742-0.484-6.562,0.579c-4.614,2.694-5.409,10.632-2.827,20.729C17.974,39.971,11.5,44.624,11.5,50s6.474,10.029,16.518,12.799c-2.582,10.096-1.787,18.035,2.827,20.729c1.112,0.649,2.368,0.976,3.756,0.975c0.883,0,1.82-0.132,2.806-0.396c3.818-1.023,8.193-4.01,12.593-8.399c4.4,4.389,8.775,7.376,12.593,8.399c0.986,0.264,1.923,0.396,2.806,0.396c1.388,0,2.644-0.325,3.756-0.975c4.614-2.694,5.408-10.633,2.827-20.729C82.026,60.029,88.5,55.376,88.5,50z"></path>
            </svg>
          ),
        },
        {
          name: "Tailwind",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#06B6D4">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
          ),
        },
        {
          name: "Next.js",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 48 48">
              <path fill="#212121" d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227V16.5z"></path>
            </svg>
          ),
        },
      ],
    },
    {
      category: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#68A063">
              <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.249 1.328-.6.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.192-.137-.242L11.72.603c-.081-.047-.189-.047-.271 0L2.653 6.68c-.085.05-.138.143-.138.242v10.154c0 .097.053.19.137.237l2.409 1.392c1.307.654 2.108-.116 2.108-.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.946-.922-1.604V6.921c0-.658.353-1.274.922-1.603L11.076.242c.561-.315 1.306-.315 1.848 0l8.794 5.076c.57.329.924.945.924 1.603v10.15c0 .659-.354 1.275-.924 1.604l-8.794 5.078c-.28.163-.599.247-.926.247z" />
            </svg>
          ),
        },
        {
          name: "Express",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.864 1.713-6.719.494-8.394-2.454a5.286 5.286 0 01-.691-4.163zm2.582-2.876c6.248 0 9.177-.01 9.177 0-.784-3.64-4.676-5.592-8.215-3.957-1.568.724-2.010 2.411-.962 3.957z" />
            </svg>
          ),
        },
        {
          name: "MongoDB",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#47A248">
              <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
            </svg>
          ),
        },
        {
          name: "RESTful APIs",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#FF6B35">
              <path d="M13.5 2c.178 0 .355.013.53.04l1.815.27c.38.056.659.381.659.77v2.04c0 .414-.336.75-.75.75s-.75-.336-.75-.75V4.32l-1.504-.224V19.68l1.504-.224V18.12c0-.414.336-.75.75-.75s.75.336.75.75v2.04c0 .389-.279.714-.659.77l-1.815.27c-.175.027-.352.04-.53.04s-.355-.013-.53-.04l-1.815-.27c-.38-.056-.659-.381-.659-.77V18.12c0-.414.336-.75.75-.75s.75.336.75.75v1.336l1.504.224V4.32L10.996 4.544V5.88c0 .414-.336.75-.75.75s-.75-.336-.75-.75V3.84c0-.389.279-.714.659-.77l1.815-.27c.175-.027.352-.04.53-.04z" />
            </svg>
          ),
        },
      ],
    },
    {
      category: "Tools",
      skills: [
        {
          name: "Git",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#F05032">
              <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
            </svg>
          ),
        },
        {
          name: "GitHub",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#ffffff">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          ),
        },
        {
          name: "VS Code",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#007ACC">
              <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
            </svg>
          ),
        },
        {
          name: "Figma",
          icon: (
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#F24E1E">
              <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.02-3.019-3.02h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148a4.49 4.49 0 0 1 0-8.981h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.02s1.354 3.019 3.019 3.019h3.117v-6.039H8.148z" />
              <path d="M12.735 24c-2.489 0-4.503-2.014-4.503-4.49s2.014-4.49 4.503-4.49 4.503 2.014 4.503 4.49S15.224 24 12.735 24zm0-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02 3.019-1.355 3.019-3.02-1.354-3.019-3.019-3.019z" />
            </svg>
          ),
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="skills"
      className="w-full py-28 bg-gradient-to-b from-black via-[#080808] to-black text-[#e5e5e5] relative overflow-hidden font-[Cinzel]"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(212,175,55,0.8) 80px,rgba(212,175,55,0.8) 81px),repeating-linear-gradient(90deg,transparent,transparent 80px,rgba(212,175,55,0.8) 80px,rgba(212,175,55,0.8) 81px)`,
        }}
      />

      {/* Side accents */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#7a0c0c] to-transparent opacity-60" />
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#7a0c0c] to-transparent opacity-60" />

      {/* Radial ember glow from bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-[radial-gradient(ellipse_at_bottom,rgba(122,12,12,0.15),transparent_70%)]" />

      {/* Floating embers */}
      {[...Array(14)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${Math.random() * 3 + 1.5}px`,
            height: `${Math.random() * 3 + 1.5}px`,
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 50}%`,
            background: i % 2 === 0 ? "#d4af37" : "#c0392b",
            animation: `floatEmber ${3 + Math.random() * 4}s ${Math.random() * 6}s linear infinite`,
            opacity: 0,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.4em] text-red-500 uppercase mb-4">
            Battle Forged
          </p>
          <h2 className="text-5xl font-bold text-[#d4af37] tracking-widest">
            The Armory
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-[#d4af37] opacity-50" />
            <svg width="16" height="16" viewBox="0 0 20 20" fill="#d4af37" opacity="0.5">
              <path d="M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z" />
            </svg>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-[#d4af37] opacity-50" />
          </div>
          <p className="text-gray-400 mt-4 text-sm tracking-widest italic">
            Weapons forged in the fires of knowledge
          </p>
        </div>

        {/* Category cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={cardVariants}
              className="group relative border border-[#1f1f1f] bg-[#080808] overflow-hidden hover:border-[#7a0c0c] transition-all duration-500"
              style={{ boxShadow: "inset 0 0 40px rgba(0,0,0,0.9)" }}
            >
              {/* Top shimmer line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-20" />

              {/* House banner header */}
              <div className="relative px-7 pt-7 pb-5 border-b border-[#1a1a1a]">
                {/* Corner ornaments */}
                <div className="absolute top-3 left-3 w-3 h-3 border-l border-t border-[#3a3a3a] group-hover:border-[#d4af37] transition-colors duration-500" />
                <div className="absolute top-3 right-3 w-3 h-3 border-r border-t border-[#3a3a3a] group-hover:border-[#d4af37] transition-colors duration-500" />

                <div className="flex items-start justify-between">
                  <div>
                    
                    <h3 className="text-xl font-bold text-[#d4af37] tracking-widest">
                      {category.category}
                    </h3>
                    
                  </div>
                  
                </div>
              </div>

              {/* Skill grid */}
              <div className="p-6 grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className="flex flex-col items-center gap-2 p-4 border border-[#1a1a1a] bg-black hover:border-[#7a0c0c] hover:bg-[#0d0505] transition-all duration-300 group/skill cursor-default"
                  >
                    <div className="group-hover/skill:drop-shadow-[0_0_10px_rgba(212,175,55,0.5)] transition-all duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-[11px] tracking-widest text-gray-300 group-hover/skill:text-[#d4af37] transition-colors duration-300 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom corner ornaments */}
              <div className="absolute bottom-3 left-3 w-3 h-3 border-l border-b border-[#3a3a3a] group-hover:border-[#d4af37] transition-colors duration-500" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-r border-b border-[#3a3a3a] group-hover:border-[#d4af37] transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer sigil */}
        <div className="mt-14 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="h-px w-32 bg-gradient-to-r from-transparent to-[#2a2a2a]" />
            <div className="w-2 h-2 bg-[#7a0c0c] rotate-45" />
            <div className="h-px w-32 bg-gradient-to-l from-transparent to-[#2a2a2a]" />
          </div>
          <p className="text-grey-400 text-xs italic tracking-widest">
            The forge never rests. New weapons are always being crafted.
          </p>
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

export default Skills;