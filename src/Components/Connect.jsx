import React, { useState } from 'react';
import { BiMailSend, BiCopy, BiCheck, BiLinkExternal, BiLogoGithub } from 'react-icons/bi';
import { BsLinkedin } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

export default function Connect() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const emailAddress = "amirmemona6@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <div className="bg-[#030303] text-neutral-200 min-h-screen py-24 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-20 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Let's Build Something Real
          </h1>
          <p className="text-neutral-400 max-w-2xl text-sm sm:text-base leading-relaxed">
            Whether you want to discuss full-stack architecture, open-source collaborations, community mentorship opportunities, or engineering roles—drop a message or connect across platforms.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Interactive Bento Grid Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Copy Action Card */}
            <div className="bg-[#090909]/40 border border-neutral-900 rounded-2xl p-6 space-y-4 hover:border-neutral-800/60 transition-all duration-300">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#06b6d4]" />
                Direct Communication
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-neutral-400">Main Inbox</h3>
                <div className="flex items-center justify-between p-3.5 bg-neutral-950 border border-neutral-900 rounded-xl group/email">
                  <span className="text-xs sm:text-sm font-mono text-white select-all">
                    {emailAddress}
                  </span>
                  <button 
                    onClick={handleCopy}
                    className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-[#06b6d4] hover:border-neutral-700/60 transition-all active:scale-95"
                    title="Copy Email Address"
                  >
                    {copied ? <BiCheck size={16} className="text-emerald-400" /> : <BiCopy size={16} />}
                  </button>
                </div>
              </div>
            </div>

            {/* Platform Shortcuts Bento Card */}
            <div className="bg-[#090909]/40 border border-neutral-900 rounded-2xl p-6 space-y-4 hover:border-neutral-800/60 transition-all duration-300">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-[#06b6d4]" />
                Digital Footprints
              </div>
              
              <div className="grid grid-cols-1 gap-2.5">
                {/* LinkedIn */}
                <a 
                  href="#" 
                  className="flex items-center justify-between p-3.5 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-neutral-800 hover:bg-neutral-950 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <BsLinkedin className="text-neutral-500 group-hover:text-[#06b6d4] transition-colors" size={20} />
                    <span className="text-xs font-semibold text-neutral-300 group-hover:text-white">LinkedIn</span>
                  </div>
                  <BiLinkExternal size={14} className="text-neutral-600 group-hover:text-neutral-400" />
                </a>

                {/* GitHub */}
                <a 
                  href="#" 
                  className="flex items-center justify-between p-3.5 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-neutral-800 hover:bg-neutral-950 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <BiLogoGithub className="text-neutral-500 group-hover:text-[#06b6d4] transition-colors" size={20} />
                    <span className="text-xs font-semibold text-neutral-300 group-hover:text-white">GitHub</span>
                  </div>
                  <BiLinkExternal size={14} className="text-neutral-600 group-hover:text-neutral-400" />
                </a>

                {/* LeetCode */}
                <a 
                  href="#" 
                  className="flex items-center justify-between p-3.5 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-neutral-800 hover:bg-neutral-950 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <SiLeetcode className="text-neutral-500 group-hover:text-[#06b6d4] transition-colors" size={18} />
                    <span className="text-xs font-semibold text-neutral-300 group-hover:text-white">LeetCode</span>
                  </div>
                  <BiLinkExternal size={14} className="text-neutral-600 group-hover:text-neutral-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Column 2: Sleek Contact Form Container (7 Cols) */}
          <div className="lg:col-span-7 bg-[#090909]/20 border border-neutral-900 rounded-2xl p-6 sm:p-8 hover:border-neutral-800/40 transition-all duration-300">
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold mb-6 flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-[#06b6d4]" />
              Transmission Terminal
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name Row */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-neutral-400 font-semibold">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g., John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-[#050505] border border-neutral-900 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-700 focus:outline-none focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]/20 transition-all"
                />
              </div>

              {/* Email Row */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-neutral-400 font-semibold">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="name@company.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-[#050505] border border-neutral-900 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-700 focus:outline-none focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]/20 transition-all"
                />
              </div>

              {/* Message Row */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-neutral-400 font-semibold">Message Body</label>
                <textarea 
                  rows={4}
                  required
                  placeholder="Tell me about your timeline, project requirements, or ideas..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-[#050505] border border-neutral-900 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-700 focus:outline-none focus:border-[#06b6d4] focus:ring-1 focus:ring-[#06b6d4]/20 resize-none transition-all"
                />
              </div>

              {/* Action Button Trigger */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 text-xs uppercase tracking-wider font-mono font-bold text-white rounded-xl transition-all disabled:opacity-50 group"
              >
                <span>{isSubmitting ? "Processing..." : "Send Message"}</span>
                <BiMailSend size={16} className="text-neutral-400 group-hover:text-[#06b6d4] transition-colors" />
              </button>

              {/* Dynamic Success Notice Feedback */}
              {submitted && (
                <div className="p-3.5 bg-emerald-950/20 border border-emerald-900/50 rounded-xl text-xs font-mono text-emerald-400 animate-fade-in">
                  ✓ Transmission compiled successfully! I will reach back out shortly.
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </div>
  );
}