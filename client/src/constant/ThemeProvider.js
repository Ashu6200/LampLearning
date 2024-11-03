"use client";

import { ThemeProvider as MaterialTailwindThemeProvider } from "@material-tailwind/react";

const ThemeProvider = ({ children }) => {
  return (
    <MaterialTailwindThemeProvider>{children}</MaterialTailwindThemeProvider>
  );
};

export default ThemeProvider;
