'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

type ThemeProviderProps = {
  children: React.ReactNode;
};

type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const initialState: ThemeProviderState = {
  theme: 'dark',
  setTheme: () => null,
  toggleTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setThemeState(savedTheme);
    } else {
      // Default to dark mode if no preference saved
      setThemeState('dark');
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const root = window.document.documentElement;
    const body = window.document.body;
    
    // Manage class on html element for Tailwind 'darkMode: class'
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    // Also manage class on body for global styles if needed
    body.classList.remove('light', 'dark');
    body.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme, isMounted]);

  const setTheme = (theme: Theme) => {
      setThemeState(theme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Prevent flash of incorrect theme
  if (!isMounted) {
      return <>{children}</>;
  }

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};
