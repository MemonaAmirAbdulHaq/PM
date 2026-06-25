import React, { useState } from 'react';
import { BiChevronLeft, BiChevronRight, BiGlobe, BiSearch, BiCommand } from 'react-icons/bi';
import { BsGithub, BsArrowUpRight } from 'react-icons/bs';
import nexamart from '../assets/nexamart.png';
import lms from '../assets/lms.png';
import foodie from '../assets/foodie.png';
const ALL_PROJECTS = [
  {
    title: "NexaMart",
    subtitle: "Multi-Vendor E-Commerce Platform",
    featureBadge: "🌐 Live Sync",
    imageUrl: nexamart,
    description: "A production-ready multi-vendor eCommerce platform built with the MERN stack. Features role-based dashboards for buyers, sellers, and administrators, Stripe payment integration, real-time order updates via WebSockets, product management, analytics, order tracking, and secure authentication. Designed to deliver a complete marketplace experience with scalability and performance in mind.",
    tags: ["react", "node.js", "express", "mongodb", "socket.io", "redux-toolkit"],
   githubUrl: "https://github.com/MemonaAmirAbdulHaq/Nexamart",
    liveUrl: "https://nexamart-jade.vercel.app/",
  },
  {
    title: "Ims LMS",
    subtitle: "E-Learning Platform",
    featureBadge: "⚡ Live Sync",
    imageUrl: lms,
    description: "A modern Learning Management System built with Next.js and TypeScript. Includes secure authentication, student and instructor dashboards, course creation and enrollment workflows, video-based learning, progress tracking, and scalable backend architecture for managing educational content and users.",
    tags: ["next.js", "typescript", "redis", "rtk-query", "material-ui", "mongodb"],
         githubUrl: "https://github.com/MemonaAmirAbdulHaq/ELearningLMS",
    liveUrl: "https://e-learning-lms-xi.vercel.app/",
  },
  {
    title: "Foodie Frenzy",
    subtitle: "Responsive Food Web App",
    featureBadge: "🎨 Clean UI",
    imageUrl: foodie,
    description: "Architected as a single page application using React, leveraging a dedicated component-based design for extreme modularity and clean, interactive UI transitions.",
    tags: ["react", "javascript", "tailwindcss", "spa", "frontend"],
    githubUrl: "https://github.com/MemonaAmirAbdulHaq/Foodie-Frenzy",
    liveUrl: "https://foodie-frenzy-drab.vercel.app/",
  }
];

export default function ProjectGridPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  const filteredProjects = ALL_PROJECTS.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <div className="bg-[#030303] text-neutral-200 min-h-screen py-24 px-4 sm:px-8 md:px-16 lg:px-24 selection:bg-[#06b6d4]/30 selection:text-[#06b6d4] rounded-none">
      <div className="max-w-6xl mx-auto rounded-none">
        
        {/* Modern Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-start rounded-none">
          <div className="lg:col-span-7 space-y-3 rounded-none">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-neutral-800 bg-neutral-900/50 rounded-none">
              <BiCommand className="text-[#06b6d4] text-xs" />
              <span className="text-[10px] font-mono tracking-wider uppercase text-neutral-400">Production Builds</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-none uppercase font-mono">
              Featured Engineering
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pt-6 rounded-none">
            <p className="text-sm text-neutral-400 leading-relaxed font-mono">
              An index of MVPs, system frameworks, and responsive frontend client projects. See the codebases on{" "}
              <a href="https://github.com/MemonaAmirAbdulHaq" target="_blank" rel="noreferrer" className="text-[#06b6d4] font-medium hover:underline inline-flex items-center gap-0.5 rounded-none">
                github.com/Memona-Amir <BsArrowUpRight className="text-[10px]" />
              </a>.
            </p>
          </div>
        </div>

        {/* Premium Command Bar Search */}
        <div className="relative mb-12 group rounded-none">
          <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-neutral-500 group-focus-within:text-[#06b6d4] transition-colors rounded-none">
            <BiSearch size={20} />
          </span>
          <input
            type="text"
            placeholder="Filter engineering stack (e.g. Next.js, Redis, Socket.io)..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full bg-neutral-900/20 text-neutral-100 placeholder-neutral-600 pl-12 pr-4 py-4 border border-neutral-800/80 focus:border-[#06b6d4]/40 focus:bg-neutral-900/40 focus:outline-none transition-all duration-300 text-sm tracking-wide shadow-inner rounded-none font-mono"
          />
        </div>

        {/* Minimalist Grid Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 rounded-none">
          {currentProjects.map((project, idx) => (
            <div 
              key={idx}
              className="group relative flex flex-col justify-between bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-neutral-900 rounded-none hover:border-neutral-800/80 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle Radial Glow on Hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.04),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-none" />

              <div>
                {/* 100% Sharp Rectangular Image Container */}
                <div className="w-full h-48 sm:h-56 bg-neutral-950 border-b border-neutral-900 overflow-hidden relative rounded-none">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500 rounded-none"
                    loading="lazy"
                  />
                </div>

                {/* Meta details wrapper with clear text padding layout */}
                <div className="p-6 pb-0 space-y-4 rounded-none">
                  <div className="flex items-center justify-between rounded-none">
                    <span className="text-[10px] font-mono tracking-widest px-2.5 py-1 bg-neutral-900 border border-neutral-800 font-semibold text-[#06b6d4] uppercase rounded-none">
                      {project.featureBadge}
                    </span>
                    
                    <div className="flex items-center gap-3 text-neutral-500 rounded-none">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="hover:text-white transition-colors p-1 rounded-none" title="Repository">
                        <BsGithub size={16} />
                      </a>
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="hover:text-[#06b6d4] transition-colors p-1 rounded-none" title="Live Site">
                        <BiGlobe size={18} />
                      </a>
                    </div>
                  </div>

                  <div className="rounded-none">
                    <h2 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#06b6d4] transition-colors duration-300 uppercase font-mono rounded-none">
                      {project.title}
                    </h2>
                    <p className="text-xs text-neutral-500 font-mono mt-1 rounded-none">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-neutral-400 leading-relaxed font-mono rounded-none">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Minimalist Tech Tags */}
              <div className="mx-6 mb-6 mt-8 pt-5 border-t border-neutral-900/60 flex flex-wrap gap-1.5 rounded-none">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx}
                    className="text-[10px] font-mono bg-neutral-900/40 text-neutral-400 px-2.5 py-1 border border-transparent transition-colors group-hover:border-neutral-800 group-hover:bg-neutral-900 rounded-none"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Minimalist Text-Based Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-between items-center border-t border-neutral-900 pt-6 px-1 text-xs font-mono text-neutral-500 rounded-none">
            <div className="rounded-none">
              Showing <span className="text-neutral-300">{indexOfFirstProject + 1}</span> - <span className="text-neutral-300">{Math.min(indexOfLastProject, filteredProjects.length)}</span> of {filteredProjects.length} Architectural Systems
            </div>
            
            <div className="flex items-center gap-1 rounded-none">
              <button
                onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-none"
              >
                <BiChevronLeft size={16} />
              </button>
              <button
                onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-none"
              >
                <BiChevronRight size={16} />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
