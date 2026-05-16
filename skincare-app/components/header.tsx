'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { ThemeToggle } from './ui/theme-toggle';

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const handleNavClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-500 flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                GlowGuide
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                For South Asian Skin
              </p>
            </div>
          </motion.button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('home')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('quiz')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors font-medium"
            >
              Take Quiz
            </button>
            <button
              onClick={() => handleNavClick('blog')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors font-medium"
            >
              Blog
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors font-medium"
            >
              About
            </button>
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.header>
  );
}
