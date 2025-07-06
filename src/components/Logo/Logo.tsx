"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const names = [
  "Shiv",
  "शिव",
  "施夫",
  "Chiv",
  "Chive",
  "Schiw",
  "شيف",
  "Xiv",
  "Шив",
  "শিব",
  "シヴ",
  "시브",
  "Sciv",
  "Şiv",
  "שיו",
  "شیو",
  "シヴ",
  "시브",
  "Шив",
  "שיו",
  "சிவ",
  "ศิวะ",
];

const Logo = () => {
  const [index, setIndex] = useState(0);
  const { theme } = useTheme(); // Get current theme (light/dark mode)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % names.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Define gradient colors based on theme mode
  const gradientClass =
    theme === "dark"
      ? "from-yellow-400 via-yellow-300 to-yellow-200" // Gold gradient for dark mode
      : "from-gray-800 via-gray-600 to-gray-400"; // Elegant gray for light mode

  return (
    <motion.div
      className="relative text-4xl font-extrabold tracking-wide"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className={`bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent`}
      >
        {names[index]}
      </motion.span>
    </motion.div>
  );
};

export default Logo;
