'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-8 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
    );
  }

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    console.log('Manually switching theme to:', newTheme);
    setTheme(newTheme);
    
    // Fallback: manually toggle class if next-themes fails
    if (typeof document !== 'undefined') {
      const html = document.documentElement;
      if (newTheme === 'dark') {
        html.classList.add('dark');
      } else {
        html.classList.remove('dark');
      }
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full bg-gradient-to-r from-primary to-primary-light dark:from-secondary dark:to-secondary-light transition-all duration-300 shadow-lg hover:shadow-xl"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-gray-900 transition-transform duration-300 flex items-center justify-center ${
          resolvedTheme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="w-4 h-4 text-secondary" />
        ) : (
          <Sun className="w-4 h-4 text-primary" />
        )}
      </div>
    </button>
  );
}
