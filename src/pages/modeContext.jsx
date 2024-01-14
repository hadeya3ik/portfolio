import { createContext, useState, useCallback, useEffect } from 'react';

const ModeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const ModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Side effects
  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkMode);
    document.body.classList.toggle('light-theme', !isDarkMode);

    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode((prevMode) => !prevMode);
  }, []);

  return (
    <ModeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ModeContext.Provider>
  );
};

export default ModeContext;