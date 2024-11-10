import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage('isDarkMode', false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className={isDarkMode ? 'dark' : ''}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
