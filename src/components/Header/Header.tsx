"use client";

import React, { useState, useEffect } from "react"; // ✅ Explicit import
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeProvider";
import Logo from "@/components/Logo/Logo";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let currentSection = "home";
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const offsetTop =
            section.getBoundingClientRect().top + window.scrollY;
          if (window.scrollY >= offsetTop - 100) {
            currentSection = link.name.toLowerCase();
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white dark:bg-black/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-5">
        {/* ✅ Clickable Logo */}
        <Link href="/" passHref>
          <div className="cursor-pointer">
            <Logo />
          </div>
        </Link>

        {/* ✅ Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={`transition px-4 py-2 rounded-md ${
                activeSection === link.name.toLowerCase()
                  ? theme === "dark"
                    ? "bg-white text-black"
                    : "bg-black text-white"
                  : theme === "dark"
                  ? "text-white"
                  : "text-black"
              } hover:scale-105`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0, transition: { delay: index * 0.1 } }}
              whileHover={{ scale: 1.1 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* ✅ Theme Toggle */}
          <motion.button
            whileTap={{ rotate: 180 }}
            onClick={toggleTheme}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-800"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </motion.button>

          {/* ✅ Mobile Menu Button */}
          <button
            className={`md:hidden ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden absolute top-full left-0 w-full backdrop-blur-md ${
            theme === "dark"
              ? "bg-black/90 text-gray-300" // 🔥 Fix dark mode contrast issue
              : "bg-white text-black"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`block px-6 py-3 border-b border-gray-700 ${
                activeSection === link.name.toLowerCase()
                  ? theme === "dark"
                    ? "bg-white text-black"
                    : "bg-black text-white"
                  : ""
              } hover:text-primary`}
              onClick={() => setIsMenuOpen(false)} // ✅ Fix menu closing on click
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
