'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // Assuming you have a className utility
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'w-14 h-7 rounded-full flex items-center p-1 transition-all duration-300 ease-in-out',
        isDark
          ? 'bg-black shadow-lg ring-2 ring-offset-2 ring-gray-600'
          : 'bg-white shadow-lg ring-2 ring-offset-2 ring-gray-300'
      )}
    >
      <motion.div
        initial={{ x: isDark ? 18 : -18, opacity: 0 }}
        animate={{ x: isDark ? -18 : 18, opacity: 1 }}
        exit={{ x: isDark ? 18 : -18, opacity: 0 }}
        transition={{ duration: 0.4, type: 'spring', stiffness: 300 }}
        className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center shadow-inner"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-white" />
        ) : (
          <Moon className="w-4 h-4 text-white" />
        )}
      </motion.div>
    </motion.button>
  );
}
