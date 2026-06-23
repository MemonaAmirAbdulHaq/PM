import React from 'react';
import { Mail } from 'lucide-react';

import { BsArrowUp, BsGithub, BsLinkedin } from 'react-icons/bs';
//import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
    {/* Outer container spans full width to paint the background edge-to-edge */}
    <footer className="w-full border-t border-neutral-200 dark:border-neutral-900 bg-white dark:bg-[#030303] py-12 px-6 sm:px-12 md:px-16 transition-colors duration-300">
      
      {/* Inner container safely aligns and centers content columns */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-neutral-100 dark:border-neutral-900/60 pb-8">
          
          {/* Left Column: Brand & Brief */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white tracking-wide">
              Memona Amir
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 max-w-xs">
              Building scalable full-stack applications and clean software architectures.
            </p>
          </div>

          {/* Right Column: Social Ecosystem Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com" // Update with your actual GitHub link
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <BsGithub size={18} />
            </a>
            <a 
              href="https://linkedin.com" // Update with your actual LinkedIn link
              target="_blank" 
              rel="noreferrer"
              className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30 text-neutral-600 dark:text-neutral-400 hover:text-[#06b6d4] dark:hover:text-[#06b6d4] hover:border-[#06b6d4]/40 dark:hover:border-[#06b6d4]/30 transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <BsLinkedin size={18} />
            </a>
            <a 
              href="mailto:amirmemona6@gmail.com"
              className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30 text-neutral-600 dark:text-neutral-400 hover:text-[#06b6d4] dark:hover:text-[#06b6d4] hover:border-[#06b6d4]/40 dark:hover:border-[#06b6d4]/30 transition-all duration-200"
              aria-label="Email Contact"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Column: Legal Copyright & Back to Top Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 text-xs font-medium text-neutral-400 dark:text-neutral-500">
          <p>
            &copy; {currentYear} Memona Amir. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-all duration-200 group"
          >
            Back to top
            <BsArrowUp size={14} className="transform group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>

      </div>
    </footer>
    </>
  );
};

export default Footer;