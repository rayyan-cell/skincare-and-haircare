'use client';

import { motion } from 'framer-motion';
import { Sparkles, User, LogOut } from 'lucide-react';
import { ThemeToggle } from './ui/theme-toggle';
import { useSession, signIn, signOut } from "next-auth/react";

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const { data: session } = useSession();
  
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
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-primary-light to-secondary flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
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
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary-light transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('quiz')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary-light transition-colors font-medium"
            >
              Take Quiz
            </button>
            <button
              onClick={() => handleNavClick('blog')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary-light transition-colors font-medium"
            >
              Blog
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary-light transition-colors font-medium"
            >
              About
            </button>
          </nav>

          {/* Theme Toggle & Auth */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            {session ? (
              <div className="flex items-center space-x-3">
                <div className="flex flex-col items-end hidden sm:flex">
                  <span className="text-xs font-semibold text-gray-900 dark:text-white">
                    {session.user?.name}
                  </span>
                  <button 
                    onClick={() => signOut()}
                    className="text-[10px] text-primary dark:text-secondary hover:underline flex items-center"
                  >
                    <LogOut className="w-2 h-2 mr-1" />
                    Sign Out
                  </button>
                </div>
                {session.user?.image ? (
                  <img 
                    src={session.user.image} 
                    alt="User" 
                    className="w-8 h-8 rounded-full border-2 border-primary/20"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                    <User className="w-4 h-4 text-primary" />
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => signIn('google')}
                className="px-4 py-2 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary-light transition-all shadow-md flex items-center space-x-2"
              >
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Sign In</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  );
}
