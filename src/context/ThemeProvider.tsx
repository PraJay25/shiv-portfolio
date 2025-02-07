"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  buttonStyles: string;
  linkStyles: string;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);

    // ✅ Apply theme to <body> to match globals.css styles
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(theme === "light" ? "light-mode" : "dark-mode");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // ✅ Global button & link styles based on theme
  const buttonStyles =
    theme === "dark"
      ? "bg-white text-black px-4 py-2 rounded-md transition hover:bg-gray-200"
      : "bg-black text-white px-4 py-2 rounded-md transition hover:bg-gray-800";

  const linkStyles =
    theme === "dark"
      ? "text-black bg-white px-3 py-1 rounded-md transition hover:bg-gray-200"
      : "text-white bg-black px-3 py-1 rounded-md transition hover:bg-gray-800";

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, buttonStyles, linkStyles }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
