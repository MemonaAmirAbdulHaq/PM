import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

import { motion } from "framer-motion";


import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import { BiLogoPostgresql, BiLogoTailwindCss } from "react-icons/bi";
import {
  SiTypescript,
  SiExpress,
  SiVercel,
  SiSupabase,
  SiMysql,
  SiFastapi,
  SiNextdotjs,
} from "react-icons/si";
import { FaDocker } from "react-icons/fa";

const Hero = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState("All");



  // Full interactive categorized list of skills
  const skillCategories = {
    Frontend: [
      {
        name: "JavaScript",
        icon: (
          <DiJavascript1 className="text-yellow-500 dark:text-yellow-400" />
        ),
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600 dark:text-blue-500" />,
      },
      {
        name: "React",
        icon: <DiReact className="text-blue-500 dark:text-blue-400" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-black dark:text-neutral-200" />,
      },
      {
        name: "Tailwind CSS",
        icon: (
          <BiLogoTailwindCss className="text-cyan-500 dark:text-cyan-400" />
        ),
      },
    ],
    Backend: [
      {
        name: "Node.js",
        icon: <DiNodejsSmall className="text-green-600 dark:text-green-500" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-neutral-700 dark:text-neutral-400" />,
      },
      { name: "FastAPI", icon: <SiFastapi className="text-[#06b6d4]" /> },
    ],
    Database: [
      {
        name: "MongoDB",
        icon: <DiMongodb className="text-green-600 dark:text-green-500" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-blue-700 dark:text-blue-500" />,
      },
      {
        name: "PostgreSQL",
        icon: <BiLogoPostgresql className="text-blue-600 dark:text-blue-500" />,
      },
      {
        name: "Supabase",
        icon: <SiSupabase className="text-emerald-500 dark:text-emerald-400" />,
      },
    ],
    Tools: [
      {
        name: "GitHub",
        icon: (
          <DiGithubBadge className="text-neutral-800 dark:text-neutral-300" />
        ),
      },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      {
        name: "Vercel",
        icon: <SiVercel className="text-neutral-900 dark:text-neutral-200" />,
      },
    ],
  };

  const categories = ["All", ...Object.keys(skillCategories)];

  const filteredSkills =
    activeCategory === "All"
      ? Object.values(skillCategories).flat()
      : skillCategories[activeCategory];

  return (
    /* Global Page Wrapper - Fluid dark/light transition */
    <div className="w-full min-h-screen bg-neutral-100 dark:bg-[#030303] text-neutral-900 dark:text-[#f5f5f5] font-sans antialiased selection:bg-[#06b6d4] selection:text-black transition-colors duration-300">
      {/* 1. FIXED HEADER */}
      {/* <Header /> */}

      {/* 2. HERO SECTION */}
  <div className="min-h-[90vh] flex items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 max-w-7xl mx-auto py-12 rounded-none">
  <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-none">
    
    {/* Left Content Column */}
    <div className="lg:col-span-8 flex flex-col justify-center items-start text-left rounded-none">
      
      {/* Accent Badge - Sharp Rectangular Terminal Tag */}
      <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#06b6d4]/20 bg-[#06b6d4]/5 mb-6 rounded-none">
        <span className="flex h-1.5 w-1.5 bg-[#06b6d4] animate-pulse rounded-none" />
        <p className="text-[#06b6d4] font-mono text-xs tracking-widest uppercase font-semibold">
          Full Stack AI Engineer
        </p>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight mb-6 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-600 dark:from-white dark:via-[#e5e5e5] dark:to-[#06b6d4]/40 bg-clip-text text-transparent leading-none uppercase font-mono">
        Memona Amir
      </h1>

      {/* Bio Paragraph */}
      <p className="text-lg md:text-xl text-neutral-600 dark:text-[#a3a3a3] max-w-2xl leading-relaxed mb-10 font-mono text-sm">
        Software Engineer specializing in the MERN stack and Next.js.
        An index of building{" "}
        <span className="text-neutral-900 dark:text-white font-medium underline decoration-[#06b6d4]/40 decoration-2 underline-offset-4">
          secure architectures
        </span>
        , reducing API latency through smart caching, and writing{" "}
        <span className="text-[#06b6d4] font-medium">
          clean, modular code
        </span>{" "}
        designed to scale.
      </p>

      {/* CTA Button Row - 100% Sharp Geometric Blocks */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto rounded-none">
        {/* Get In Touch - Solid Action Block */}
        <a
          href="#contact"
          className="group inline-flex items-center justify-center px-8 py-4 bg-neutral-900 hover:bg-neutral-800 dark:bg-[#06b6d4] dark:hover:bg-[#06b6d4]/90 text-white dark:text-neutral-950 transition-all duration-300 font-bold tracking-wide text-xs uppercase font-mono transform hover:-translate-y-0.5 rounded-none"
        >
          Get in touch
          <svg 
            className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        {/* Resume - Outline Action Block */}
        <a
          href="https://drive.google.com/file/d/1O1udaHY5hPBT7Q-qcqzy3yTu7TJAnHqd/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center justify-center px-8 py-4 border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 bg-transparent text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all duration-300 font-bold tracking-wide text-xs uppercase font-mono transform hover:-translate-y-0.5 rounded-none"
        >
          View Resume
          <svg 
            className="w-3.5 h-3.5 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 opacity-75" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>

    {/* Right Decorative Graphic Column */}
    <div className="hidden lg:col-span-4 lg:flex relative items-center justify-center rounded-none">
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#06b6d4]/10 to-transparent blur-3xl opacity-60 dark:opacity-20 pointer-events-none rounded-none" />
      
      {/* Sharp Terminal Card Box */}
      <div className="relative border border-neutral-200 dark:border-neutral-900 p-6 bg-white/70 dark:bg-[#090909]/40 backdrop-blur-md w-full max-w-sm aspect-square flex flex-col justify-between overflow-hidden group hover:border-[#06b6d4]/30 transition-all duration-500 rounded-none shadow-sm">
        
        {/* Terminal Header / Window Controls */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-900 rounded-none">
          <div className="flex gap-1.5 rounded-none">
            <span className="w-2.5 h-2.5 bg-neutral-200 dark:bg-neutral-800 rounded-none" />
            <span className="w-2.5 h-2.5 bg-neutral-200 dark:bg-neutral-800 rounded-none" />
            <span className="w-2.5 h-2.5 bg-neutral-200 dark:bg-neutral-800 rounded-none" />
          </div>
          <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-600 tracking-wider uppercase">
            ai.config
          </span>
        </div>

        {/* Terminal Body / Code Simulation */}
        <div className="flex-1 font-mono text-xs text-neutral-500 dark:text-neutral-400 space-y-3 pt-4 rounded-none">
          <p className="text-neutral-400 dark:text-neutral-600">
            // Initialize AI Agent...
          </p>
          <div className="space-y-1.5 rounded-none">
            <p className="flex items-center gap-2 rounded-none">
              <span className="text-[#06b6d4]">&gt;</span> 
              <span>const engineer = <span className="text-[#06b6d4] dark:text-cyan-400">"Memona Amir"</span>;</span>
            </p>
            <p className="flex items-center gap-2 rounded-none">
              <span className="text-[#06b6d4]">&gt;</span> 
              <span>status: <span className="text-emerald-500 dark:text-emerald-400 font-medium">"Ready to Scale"</span></span>
            </p>
          </div>
        </div>

        {/* Footer Brand Graphic */}
        <div className="pt-4 flex items-center justify-between border-t border-neutral-100 dark:border-neutral-900 text-[10px] font-mono text-neutral-400 dark:text-neutral-600 rounded-none">
          <span>Latency: 12ms</span>
          <span className="text-[#06b6d4] font-bold group-hover:animate-pulse">● Live</span>
        </div>

        {/* Subtle Large Background Watermark */}
        <div className="font-mono text-[8rem] font-bold text-neutral-100/70 dark:text-neutral-800/10 absolute -bottom-8 -right-4 select-none pointer-events-none group-hover:text-[#06b6d4]/5 transition-colors duration-500 rounded-none">
          AI
        </div>

      </div>
    </div>

  </div>
</div>


      {/* 3. SUMMARY SECTION */}
      <div className="border-t border-neutral-200 dark:border-neutral-900 bg-neutral-50/50 dark:bg-[#030303] py-24 px-8 sm:px-16 md:px-24 lg:px-32 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold uppercase tracking-wide text-neutral-800 dark:text-neutral-200 sticky top-24">
              About Me
            </h2>
          </div>
          <div className="lg:col-span-2 max-w-3xl space-y-6 text-base md:text-lg text-neutral-600 dark:text-[#a3a3a3] leading-relaxed">
            <p>
              I’m{" "}
              <span className="text-neutral-900 dark:text-white font-medium">
                Memona
              </span>{" "}
              — a third-year Computer Science student who fell in love with
              full-stack development somewhere between my first broken API and
              my first working one.
            </p>
            <p>
              Since then, I’ve built a{" "}
              <span className="text-[#06b6d4] font-medium">
                multi-vendor e-commerce platform
              </span>{" "}
              with real-time chat, a{" "}
              <span className="text-[#06b6d4] font-medium">full-stack LMS</span>{" "}
              with smart caching, and a few smaller experiments along the way —
              all with the MERN stack and Next.js.
            </p>
            <p>
              Last summer, a competitive fellowship at{" "}
              <span className="text-neutral-900 dark:text-white border-b border-neutral-300 dark:border-[#262626] pb-0.5">
                DevWeekends
              </span>{" "}
              sharpened my engineering instincts and gave me a peer community to
              mentor and grow with.
            </p>
            <p className="text-neutral-900 dark:text-white italic font-light pt-2">
              "Curiosity got me into code. Building real things is what's keeping me here."
            </p>
          </div>
        </div>
      </div>

      {/* 4. SUB-COMPONENT: SKILLS & TECHNOLOGIES */}
      <div
        id="skills"
        className="border-t border-neutral-200 dark:border-neutral-900 bg-neutral-100 dark:bg-[#030303] py-24 px-8 sm:px-16 md:px-24 lg:px-32 transition-colors duration-300"
      >
        <div className="max-w-7xl mx-auto">
          {/* Title Elements */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-neutral-900 dark:text-white mb-4 tracking-tight">
              Skills &{" "}
              <span className="bg-gradient-to-r from-[#06b6d4] to-blue-500 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-md mx-auto text-sm md:text-base">
              Technologies I use to build reliable, interactive software.
            </p>
          </div>

          {/* Interactive Filters Layout */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  activeCategory === category
                    ? "bg-[#06b6d4] border-[#06b6d4] text-black shadow-md shadow-[#06b6d4]/10"
                    : "bg-white dark:bg-neutral-900/40 text-neutral-600 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Infinite Carousel Matrix */}
          <div className="relative overflow-hidden py-4">
            {/* Soft Edge Overlays matching page light/dark backgrounds */}
            <div className="absolute left-0 top-0 h-full w-16 md:w-32 bg-gradient-to-r from-neutral-100 dark:from-[#030303] to-transparent z-10 pointers-events-none" />
            <div className="absolute right-0 top-0 h-full w-16 md:w-32 bg-gradient-to-l from-neutral-100 dark:from-[#030303] to-transparent z-10 pointers-events-none" />

            <div className="space-y-6">
              {[0, 1].map((row) => (
                <div key={row} className="overflow-hidden">
                  <motion.div
                    className="flex gap-6 w-max"
                    animate={{ x: row === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }}
                    transition={{
                      duration: 26,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {/* Double rendering elements to make sliding endless seamlessly */}
                    {[...filteredSkills, ...filteredSkills].map(
                      (skill, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center justify-center min-w-[115px] h-[115px]
                        bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-900 rounded-xl
                        hover:border-[#06b6d4] dark:hover:border-[#06b6d4] hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]
                        transition-all duration-300 group cursor-default"
                        >
                          <div className="text-4xl mb-2 group-hover:scale-110 transition duration-200">
                            {skill.icon}
                          </div>
                          <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition duration-200">
                            {skill.name}
                          </p>
                        </div>
                      ),
                    )}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. EXPERIENCE SECTION */}
      {/* Outer block covers edge-to-edge seamlessly to eliminate empty black margin boxes */}
      <div
  id="experience"
  className="w-full border-t border-neutral-200 dark:border-neutral-900 bg-neutral-50/50 dark:bg-[#030303] py-24 px-6 sm:px-12 md:px-16 transition-colors duration-300 rounded-none"
>
  {/* Inner constraint layer handles responsive content alignment */}
  <div className="max-w-4xl mx-auto rounded-none">
    {/* Section Title */}
    <div className="mb-16 rounded-none">
      <h2 className="text-3xl md:text-5xl font-black text-neutral-900 dark:text-white tracking-tight uppercase font-mono">
        Experience
      </h2>
    </div>

    {/* Experience Cards Stack */}
    <div className="space-y-6 rounded-none">
      
      {/* Card 1: Fly Rank (Current) */}
      <div className="bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-900 p-6 md:p-8 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-800 rounded-none relative">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 rounded-none">
          <div className="flex items-start gap-4 rounded-none">
            {/* Logo Box */}
            <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center flex-shrink-0 font-bold text-[#06b6d4] text-sm tracking-wider rounded-none font-mono">
              FR
            </div>
            <div className="rounded-none">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white uppercase font-mono">
                Backend AI Intern
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 font-mono text-sm">
                Fly Rank
              </p>
            </div>
          </div>

          <div className="flex sm:flex-col items-start sm:items-end gap-2 sm:gap-1 flex-shrink-0 rounded-none">
            <span className="text-xs font-bold font-mono text-neutral-500 dark:text-neutral-400 uppercase">
              June '26 - Present
            </span>
            <span className="px-3 py-0.5 text-[10px] font-bold font-mono bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 border border-emerald-500/20 uppercase rounded-none">
              Remote
            </span>
          </div>
        </div>

        <ul className="space-y-3 text-neutral-600 dark:text-[#a3a3a3] text-xs font-mono list-none pl-0 rounded-none">
          <li className="flex items-start gap-3 rounded-none">
            <span className="text-[#06b6d4] mt-1 flex-shrink-0 text-[10px]">&gt;</span>
            <span>Architecting server-side AI integrations, optimizing pipelines, and implementing secure LLM middleware frameworks.</span>
          </li>
          <li className="flex items-start gap-3 rounded-none">
            <span className="text-[#06b6d4] mt-1 flex-shrink-0 text-[10px]">&gt;</span>
            <span>Designing highly scalable RESTful endpoints, applying structured error handling, and integrating vector configurations for contextual workflows.</span>
          </li>
        </ul>
      </div>

      {/* Card 2: Ruwwaad */}
      <div className="bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-900 p-6 md:p-8 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-800 rounded-none">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 rounded-none">
          <div className="flex items-start gap-4 rounded-none">
            {/* Logo Box */}
            <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center flex-shrink-0 font-bold text-[#06b6d4] text-sm tracking-wider rounded-none font-mono">
              RW
            </div>
            <div className="rounded-none">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white uppercase font-mono">
                Backend Engineer
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 font-mono text-sm">
                Ruwwaad
              </p>
            </div>
          </div>

          <div className="flex sm:flex-col items-start sm:items-end gap-2 sm:gap-1 flex-shrink-0 rounded-none">
            <span className="text-xs font-bold font-mono text-neutral-500 dark:text-neutral-400 uppercase">
              Sep '25 - Dec '25
            </span>
            <span className="px-3 py-0.5 text-[10px] font-bold font-mono bg-cyan-500/10 text-[#06b6d4] border border-[#06b6d4]/20 uppercase rounded-none">
              Remote
            </span>
          </div>
        </div>

        <ul className="space-y-3 text-neutral-600 dark:text-[#a3a3a3] text-xs font-mono list-none pl-0 rounded-none">
          <li className="flex items-start gap-3 rounded-none">
            <span className="text-[#06b6d4] mt-1 flex-shrink-0 text-[10px]">&gt;</span>
            <span>Designed robust server architectures using Node.js and Express, implementing centralized JWT authorization protocols and relational schemas.</span>
          </li>
          <li className="flex items-start gap-3 rounded-none">
            <span className="text-[#06b6d4] mt-1 flex-shrink-0 text-[10px]">&gt;</span>
            <span>Engineered caching middleware instances using Redis, cutting API request latencies and securing micro-service connection points.</span>
          </li>
        </ul>
      </div>

      {/* Card 3: Dev Weekends Fellowship */}
      <div className="bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-900 p-6 md:p-8 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-800 rounded-none">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 rounded-none">
          <div className="flex items-start gap-4 rounded-none">
            {/* Logo Box */}
            <div className="w-12 h-12 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center flex-shrink-0 font-bold text-[#06b6d4] text-sm tracking-wider rounded-none font-mono">
              DW
            </div>
            <div className="rounded-none">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white uppercase font-mono">
                Software Engineer / Fellow
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 font-mono text-sm">
                Dev Weekends
              </p>
            </div>
          </div>

          <div className="flex sm:flex-col items-start sm:items-end gap-2 sm:gap-1 flex-shrink-0 rounded-none">
            <span className="text-xs font-bold font-mono text-neutral-500 dark:text-neutral-400 uppercase">
              May '25 - Aug '25
            </span>
            <span className="px-3 py-0.5 text-[10px] font-bold font-mono bg-cyan-500/10 text-[#06b6d4] border border-[#06b6d4]/20 uppercase rounded-none">
              Remote
            </span>
          </div>
        </div>

        <ul className="space-y-3 text-neutral-600 dark:text-[#a3a3a3] text-xs font-mono list-none pl-0 rounded-none">
          <li className="flex items-start gap-3 rounded-none">
            <span className="text-[#06b6d4] mt-1 flex-shrink-0 text-[10px]">&gt;</span>
            <span>Selected for a competitive fellowship focused on Full Stack Engineering and DSA, involving 30+ algorithm sessions and 12+ engineering deep dives.</span>
          </li>
          <li className="flex items-start gap-3 rounded-none">
            <span className="text-[#06b6d4] mt-1 flex-shrink-0 text-[10px]">&gt;</span>
            <span>Built and deployed full-stack applications using the MERN stack, including a Learning Management System, Real Estate Listing Platform, and a Multi-Vendor E-commerce Application (Capstone).</span>
          </li>
          <li className="flex items-start gap-3 rounded-none">
            <span className="text-[#06b6d4] mt-1 flex-shrink-0 text-[10px]">&gt;</span>
            <span>Served as a mentor within the peer-learning group Feisty Fetch Clan, helping members debug code, explain complex topics, and manage group session schedules.</span>
          </li>
        </ul>
      </div>

    </div>

    {/* Bottom Link: View Full Experience */}
    <div className="mt-12 rounded-none">
      <a
        href="#work"
        className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase text-[#06b6d4] hover:text-cyan-400 transition-colors group rounded-none"
      >
        View full experience
        <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-200">
          →
        </span>
      </a>
    </div>
  </div>
</div>
    </div>
  );
};

export default Hero;
