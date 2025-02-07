"use client";

import { motion } from "framer-motion";
import {
  FaFacebook,
  FaXTwitter,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa6";

// Animation Variants
const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const Footer = () => {
  const socialLinks = [
    { href: "#", icon: <FaFacebook size={22} />, color: "hover:text-blue-500" },
    {
      href: "#",
      icon: <FaXTwitter size={22} />,
      color: "hover:text-gray-600 dark:hover:text-gray-300",
    },
    {
      href: "#",
      icon: <FaGithub size={22} />,
      color: "hover:text-gray-800 dark:hover:text-gray-400",
    },
    {
      href: "mailto:your.email@example.com",
      icon: <FaEnvelope size={22} />,
      color: "hover:text-red-500",
    },
    { href: "#", icon: <FaLinkedin size={22} />, color: "hover:text-blue-700" },
  ];

  return (
    <footer className="w-full border-t py-4 bg-gray-100 text-gray-700 dark:bg-black dark:text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left: Copyright */}
        <motion.p
          className="text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          © {new Date().getFullYear()} Shiv. All rights reserved.
        </motion.p>

        {/* Right: Social Media Icons */}
        <motion.div
          className="flex space-x-4 mt-2 md:mt-0"
          initial="hidden"
          animate="visible"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} transition`}
              variants={iconVariants}
              custom={index}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
