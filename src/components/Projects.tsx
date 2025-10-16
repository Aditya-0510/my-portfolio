"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import LegalVizierImage from "@/public/Legal_Vizier_final.jpg";
import ProxyPakkiImage from "@/public/Proxy_Pakki.jpg";
import SynapseImage from "@/public/synapse.png";
import ChatImage from "@/public/chatapp.png";
import HealthImage from "@/public/healthhacked.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Attendance Management App",
      description:
        "A modern React-Native application for managing student attendance for University.",
      image: ProxyPakkiImage,
      tags: ["React-Native", "Node.js", "MongoDB"],
      link: "https://github.com/Aditya-0510/geo-attendance",
    },
    {
      id: 2,
      title: "Synapse",
      description:
        " Synapse is a full-stack content management platform that lets users organize and curate digital content (Twitter, YouTube, Notion) into shareable collections.",
      image: SynapseImage,
      tags: ["React", "Express.js", "MongoDB"],
      link: "https://github.com/Aditya-0510/Synapse",
    },
    {
      id: 3,
      title: "Chat App",
      description:
        " Built a real-time chat application with room-based messaging, enabling users to join, create, and interact in multiple chat rooms.",
      image: ChatImage,
      tags: ["React.js", "Tailwind CSS", "WebSockets"],
      link: "https://github.com/Aditya-0510/Chat-App",
    },
    {
      id: 4,
      title: "Health Hacked",
      description:
        " AI-powered health assistance platform that provides personalized medical guidance, symptom analysis, and continuous care management. ",
      image: HealthImage,
      tags: ["React.js", "TypeScript", "Node.js"],
      link: "https://github.com/Aditya-0510/health-hacked",
    },
    {
      id: 5,
      title: "Legal Vizier",
      description:
        "A web application showcasing legal rights for users in a visual manner.",
      image: LegalVizierImage,
      tags: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Aditya-0510/legal-vizier",
    },
  ];

  return (
    <section id="projects" className="w-full py-20 bg-gray-900 text-gray-300">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-56 overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4 gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
