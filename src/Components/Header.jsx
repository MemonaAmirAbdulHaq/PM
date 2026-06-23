
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
   
    { label: 'Projects', path: '/projects' },
   
    { label: 'Blog', path: '/blog' },
    { label: 'Connect', path: '/connect' },
  ];

  return (
    <div className="w-full sticky top-0 z-50 bg-neutral-100/80 dark:bg-[#030303]/80 border-b border-neutral-200 dark:border-neutral-900 transition-all duration-300 backdrop-blur-md rounded-none">
      <nav className="max-w-6xl mx-auto h-16 px-6 flex items-center justify-between rounded-none">
        
        {/* Brand Identity / Sharp Rectangular Box Logo */}
        <Link 
          to="/" 
          className="text-sm font-black tracking-widest text-neutral-900 dark:text-white uppercase font-mono border-l-2 border-[#06b6d4] pl-3 hover:text-[#06b6d4] transition-colors rounded-none"
        >
          Memona Amir
        </Link>

        {/* Angular Right Actions Group */}
        <div className="flex items-center gap-6 h-full rounded-none">
          
          {/* Main Navigation Row */}
          <div className="hidden md:flex items-center h-full rounded-none">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`h-16 flex items-center px-4 text-xs font-bold font-mono uppercase tracking-wider relative transition-colors duration-200 border-b-2 rounded-none ${
                    isActive
                      ? 'text-[#06b6d4] bg-neutral-200/30 dark:bg-neutral-900/40 border-[#06b6d4]'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/20 dark:hover:bg-neutral-900/20 border-transparent'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Sharp Vertical Separator Line */}
          <div className="w-[1px] h-4 bg-neutral-300 dark:bg-neutral-800 hidden md:block rounded-none" />

          {/* Rectangular Theme Toggle Box Button */}
          <button 
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-amber-500 dark:text-[#06b6d4] hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-700 transition-all rounded-none"
            title="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={15} strokeWidth={2.5} /> : <Moon size={15} strokeWidth={2.5} />}
          </button>

        </div>
      </nav>
    </div>
  );
};

export default Header;