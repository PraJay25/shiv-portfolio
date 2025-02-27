"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeProvider";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import { SiNextdotjs, SiReact, SiTailwindcss, SiDotnet } from "react-icons/si";

// Services List (Based on Your Resume)
const services = [
  {
    icon: <SiReact />,
    title: "Front-End Development",
    description:
      "Building modern, responsive, and high-performance UI using React.js, Next.js, and Tailwind CSS.",
  },
  {
    icon: <SiDotnet />,
    title: "Back-End Development",
    description:
      "Developing scalable and secure server-side applications using .NET Core, Node.js, and REST APIs.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description:
      "Designing and optimizing databases using SQL, PostgreSQL, and MongoDB for efficient data storage.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Full-Stack Development",
    description:
      "Creating end-to-end web applications by seamlessly integrating front-end and back-end technologies.",
  },
  {
    icon: <FaServer />,
    title: "API Development",
    description:
      "Building and optimizing RESTful APIs for seamless communication between services.",
  },
];

const Services = () => {
  const { theme } = useTheme();

  return (
    <section id="services" className="py-20 px-8 lg:px-16">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-gray-800 dark:text-white"
        >
          My Services
        </motion.h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-3">
          Here’s what I specialize in as a full-stack developer.
        </p>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 border dark:border-gray-700 hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <div className="text-4xl text-blue-500 dark:text-blue-400 mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
