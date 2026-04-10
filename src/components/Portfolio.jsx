import { useState } from "react";
import { FiCode, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { MdOutlineStackedBarChart } from "react-icons/md";
 import { FaJava } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";


const projects = [
  {
    title: "Smart Tiffin",
    desc: "A full-featured tiffin management system with modern UI, allowing users to browse meals and manage orders efficiently.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB", "Express"],
    img: "./tiffin.png",
    live: "https://smart-tiffin-system.vercel.app/",
    github: "https://github.com/yuvrajsingh-art/Smart-Tiffin-System",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio to showcase my skills and projects built with React and Tailwind CSS.",
    tech: ["React", "Tailwind"],
    img: "./portfolio.png",
    live: null,
    github: "https://github.com/radhikatiwarii/My-Portfolio",
  },
  {
    title: "Tournament System",
    desc: "Java-based application for managing tournaments and scheduling matches with MySQL database.",
    tech: ["Java", "MySQL"],
    img: "./sport.png",
    live: null,
    github: "https://github.com/radhikatiwarii/Sport-Tournament-Management",
  },
];

const techStack = [
  { name: "React", icon: <FaReact className="text-7xl text-blue-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-7xl text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill className="text-7xl text-cyan-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-7xl text-purple-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-7xl text-orange-400" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-7xl text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-7xl text-green-400" /> },
  { name: "Java", icon: <FaJava className="text-7xl text-pink-400" /> },
  { name: "MySQL", icon: <DiMysql className="text-7xl text-indigo-400" /> },
];

function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Projects", icon: <FiCode className="w-5 h-5" /> },
    { label: "Tech Stack", icon: <MdOutlineStackedBarChart className="w-5 h-5" /> },
  ];

  return (
    <section id="Portfolio" className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] overflow-hidden">

      <div className="text-center pb-10">
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          Portfolio Showcase
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through projects and technical expertise. Each section represents a milestone in my continuous learning path.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10 mb-8">
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActiveTab(i)}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300 border-b-2 ${activeTab === i ? "border-[#a855f7] text-white" : "border-transparent text-gray-400 hover:text-white"}`}>
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Tab */}
      {activeTab === 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div key={i} className="group relative w-full">
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                <div className="relative p-5 z-10">
                  <div className="relative overflow-hidden rounded-lg bg-white/5 h-[160px] flex items-center justify-center">
                    {project.img ? (
                      <img src={project.img} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <span className="text-gray-500 text-sm">No Preview</span>
                    )}
                  </div>
                  <div className="mt-4 space-y-3">
                    <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">{project.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300">{t}</span>
                      ))}
                    </div>
                    <div className="pt-4 flex items-center justify-between">
                      {project.live ? (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200">
                          <span className="text-sm font-medium">Live Demo</span>
                          <FiExternalLink className="w-4 h-4" />
                        </a>
                      ) : <span className="text-xs text-gray-500">Not Deployed</span>}
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105">
                        <span className="text-sm font-medium">GitHub</span>
                        <FiArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tech Stack Tab */}
      {activeTab === 1 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {techStack.map((tech) => (
            <div key={tech.name} className="group relative bg-gray-900/50 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 flex flex-col items-center gap-4">
              {tech.icon}
              <span className="text-lg text-gray-300 group-hover:text-white transition-colors font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      )}

    </section>
  );
}

export default Portfolio;
