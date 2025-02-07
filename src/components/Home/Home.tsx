"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import Image from "next/image";
import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaDatabase,
  FaGithub,
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiDotnet,
  SiTypescript,
} from "react-icons/si";

// Tech Stack with Colors
const techStack = [
  { icon: FaReact, name: "React.js", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#38B2AC" },
  { icon: SiDotnet, name: ".NET Core", color: "#512BD4" },
  { icon: FaNodeJs, name: "Node.js", color: "#68A063" },
  { icon: FaDatabase, name: "SQL", color: "#FFC107" },
  { icon: FaGithub, name: "GitHub", color: "#181717" },
];

const Home = () => {
  const { theme, buttonStyles } = useTheme();
  const [iconColors, setIconColors] = useState(
    Array(techStack.length).fill("original")
  );

  useEffect(() => {
    const timeoutIds = techStack.map((_, index) =>
      setTimeout(() => {
        setIconColors((prevColors) =>
          prevColors.map((color, i) => (i === index ? "gray" : color))
        );
      }, (index + 1) * 800)
    );

    return () => timeoutIds.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-8 lg:px-16 mt-20"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section - Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <Image
            src="/logo.jpg"
            alt="Shiv Prakash Logo"
            width={300}
            height={300}
            className="drop-shadow-lg"
          />
        </motion.div>

        {/* Right Section - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left"
        >
          {/* Title with Typing Effect */}
          <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white">
            Shiv Prakash
            <br />
            <span className="text-blue-500 dark:text-blue-400">
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2000,
                  "Building Scalable Web Apps",
                  2000,
                  "Next.js & .NET Expert",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          {/* Short Introduction */}
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-lg">
            Passionate about crafting high-performance, scalable web
            applications with modern frameworks like React, Next.js, and .NET. I
            specialize in building seamless user experiences with a focus on
            performance and accessibility.
          </p>

          {/* Call-to-Actions */}
          <div className="mt-6 flex space-x-4">
            <Link href="#contact">
              <button className={buttonStyles}>Get in Touch</button>
            </Link>
            <a href="/Resume.pdf" download className={buttonStyles}>
              Download Resume
            </a>
          </div>

          {/* Tech Stack Animation */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Expert in:
            </h3>
            <div className="mt-4 flex space-x-6 text-4xl">
              {techStack.map(({ icon: Icon, color }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3, duration: 0.5 }}
                  style={{
                    color: iconColors[index] === "gray" ? "gray" : color,
                  }}
                  className="transition-all duration-700"
                >
                  <Icon />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
