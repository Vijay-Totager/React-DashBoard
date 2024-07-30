import React, { createContext, useState, useContext } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme, lightTheme } from './theme';


const ThemeContext = createContext({
  toggleTheme: () => {},
  theme: lightTheme,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProviderComponent = ({ children }:any) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
