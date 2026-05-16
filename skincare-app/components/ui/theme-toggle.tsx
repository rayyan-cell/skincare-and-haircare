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

  return (
    <button
      onClick={() => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        console.log('Switching theme from', theme, 'to', newTheme);
        setTheme(newTheme);
      }}
      className="relative w-14 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 dark:from-indigo-600 dark:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
      aria-label="Toggle theme"
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-gray-900 transition-transform duration-300 flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {theme === 'dark' ? (
          <Moon className="w-4 h-4 text-purple-400" />
        ) : (
          <Sun className="w-4 h-4 text-orange-400" />
        )}
      </div>
    </button>
  );
}
