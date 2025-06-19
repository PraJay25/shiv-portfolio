"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import GlobeCanvas from "../GlobeCanvas/GlobeCanvas";

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
  { icon: SiNextdotjs, name: "Next.js", color: "#023047" },
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
      className="min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 mt-20"
    >
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 xl:gap-20 max-w-7xl">
        {/* ✅ Globe Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center items-center lg:w-1/2 max-w-[400px] sm:max-w-[450px] md:max-w-[500px]"
        >
          <GlobeCanvas />
        </motion.div>

        {/* ✅ Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white">
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

          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
            Passionate about crafting high-performance, scalable web
            applications with modern frameworks like React, Next.js, and .NET. I
            specialize in building seamless user experiences with a focus on
            performance and accessibility.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="#contact">
              <button className={buttonStyles}>Get in Touch</button>
            </Link>
            <a href="/Resume.pdf" download className={buttonStyles}>
              Download Resume
            </a>
          </div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-700 dark:text-gray-300">
              Expert in:
            </h3>
            <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-5 text-3xl sm:text-4xl">
              {techStack.map(({ icon: Icon, color }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.4 }}
                  style={{
                    color: iconColors[index] === "gray" ? "gray" : color,
                  }}
                  className="transition-all duration-700"
                  whileHover={{ scale: 1.2, color }}
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
