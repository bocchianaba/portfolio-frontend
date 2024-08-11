'use client'
import * as Checkbox from '@radix-ui/react-checkbox';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <Checkbox.Root
      checked={isDark}
      onCheckedChange={(checked) => {
        setTheme(checked ? 'dark' : 'light');
      }}
      className="w-6 h-6 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded"
    >
      <Checkbox.Indicator>
        {isDark ? <MoonIcon /> : <SunIcon />}
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
};
