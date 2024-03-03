'use client';
import { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';

export const ThemeContext = createContext({
  theme: 'dark',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  };

  const themeObject = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme]
  );
  return (
    <ThemeContext.Provider value={themeObject}>
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  return theme;
};
