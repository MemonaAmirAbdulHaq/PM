import React from 'react';

export default function Blog() {
  return (
    <div className="bg-[#030303] text-neutral-200 min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-8 rounded-none">
      <div className="max-w-xl w-full border border-neutral-900 bg-[#090909]/20 p-8 sm:p-12 text-center rounded-none relative overflow-hidden">
        
        {/* Subtle top geometric accent line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#06b6d4]" />

        {/* Content Section */}
        <div className="space-y-6">
          {/* Section Subtitle Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-neutral-800 text-[10px] font-mono font-bold uppercase tracking-widest text-[#06b6d4] rounded-none">
            <span className="w-1.5 h-1.5 bg-[#06b6d4] animate-pulse" />
            Terminal Update
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white uppercase font-mono">
            Insights Coming Soon
          </h1>

          {/* Subtext */}
          <p className="text-xs sm:text-sm text-neutral-500 max-w-sm mx-auto leading-relaxed font-mono">
            Technical breakdowns, deep dives into full-stack architecture, and open-source documentation are currently being compiled.
          </p>

          {/* Decorative Terminal Line */}
          <div className="pt-4 border-t border-neutral-900/60 text-[11px] font-mono text-neutral-600">
            staged_changes / awaiting_deployment.sh
          </div>
        </div>

      </div>
    </div>
  );
}