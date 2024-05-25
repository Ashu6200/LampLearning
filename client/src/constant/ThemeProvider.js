"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProvider as MaterialTailwindThemeProvider } from "@material-tailwind/react";
const ThemeProvider = ({ children, ...props }) => {
  return (
    <NextThemesProvider {...props}>
      <MaterialTailwindThemeProvider>{children}</MaterialTailwindThemeProvider>
    </NextThemesProvider>
  );
};

export default ThemeProvider;
