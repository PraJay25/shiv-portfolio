"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";
import { FaMobileAlt, FaDatabase, FaServer } from "react-icons/fa";
import { SiReact, SiTailwindcss, SiDotnet } from "react-icons/si";

// Services Data
const services = [
  {
    icon: <SiReact />,
    title: "Front-End Development",
    description:
      "Building responsive and performant UIs using React, Next.js, and Tailwind CSS.",
  },
  {
    icon: <SiDotnet />,
    title: "Back-End Development",
    description:
      "Creating scalable and secure APIs with .NET Core and Node.js.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description:
      "Efficient data modeling and querying with SQL, PostgreSQL, and MongoDB.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Full-Stack Engineering",
    description:
      "Delivering complete web solutions from UI to database and deployment.",
  },
  {
    icon: <FaServer />,
    title: "API Architecture",
    description:
      "Designing robust RESTful APIs to ensure seamless integration and communication.",
  },
];

// Motion Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Services = () => {
  const { theme } = useTheme();

  return (
    <section id="services" className="py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-800 dark:text-white"
        >
          My Services
        </motion.h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
          Here's what I specialize in as a full-stack developer.
        </p>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              variants={item}
              aria-label={service.title}
              className="p-6 rounded-2xl shadow-md bg-white dark:bg-gray-800 border dark:border-gray-700 hover:shadow-xl transition-transform hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500 dark:text-blue-400 text-3xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <a
            href="/Resume.pdf"
            download
            className={`inline-block px-6 py-2 rounded-md text-sm font-medium transition 
              ${
                theme === "dark"
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
