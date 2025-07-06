"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { useTheme } from "@/context/ThemeProvider";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaAws,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
  SiOpenai,
  SiMysql,
} from "react-icons/si";

const techSkills = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
  },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: ".NET", icon: <SiDotnet className="text-purple-700" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Material UI" }, // No icon
  {
    name: "GitHub",
    icon: <FaGithub className="text-gray-800 dark:text-white" />,
  },
  { name: "Azure" }, // No icon
  { name: "AWS", icon: <FaAws className="text-orange-500" /> },
  { name: "OpenAI", icon: <SiOpenai className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  { name: "SQL", icon: <FaDatabase className="text-indigo-600" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
];

const About = () => {
  const { buttonStyles } = useTheme();

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <TypeAnimation
            sequence={[
              "About Me",
              2000,
              "Who is Shiv Prakash?",
              2000,
              "Let’s Connect.",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6 inline-block"
          />

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m{" "}
            <span className="text-blue-600 dark:text-blue-400 font-semibold">
              Shiv Prakash
            </span>
            , a passionate and versatile Software Development Engineer with over
            3 years of experience designing and building scalable, user-centric
            web applications. I specialize in crafting seamless front-end
            experiences with <strong>React</strong> and <strong>Next.js</strong>
            , and building robust backend solutions using{" "}
            <strong>Node.js</strong> and <strong>ASP.NET</strong>.
            <br />
            <br />
            I’m deeply committed to transforming complex requirements into
            performant and accessible applications. My work involves cloud
            platforms like <strong>Azure</strong> & <strong>AWS</strong>, modern
            DevOps pipelines, and continuous learning in{" "}
            <strong>Generative AI</strong>.
          </p>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-3">
            {techSkills.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 bg-blue-100 dark:bg-blue-800 text-blue-900 dark:text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:scale-105 hover:shadow-xl hover:bg-blue-200 dark:hover:bg-blue-700 transition-all duration-300"
              >
                {tech.icon && <span>{tech.icon}</span>}
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Contact + Resume Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/contact">
              <button className={buttonStyles}>Get in Touch</button>
            </Link>
            <a href="/Resume.pdf" download className={buttonStyles}>
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-[280px] sm:w-[320px] aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-blue-400 dark:border-blue-600 hover:scale-105 hover:shadow-2xl transition-all duration-500">
            <Image
              src="/shiv.jpg"
              alt="Shiv Prakash"
              fill
              loading="lazy"
              className="rounded-2xl object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
