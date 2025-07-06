"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa";
import { useTheme } from "@/context/ThemeProvider";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { buttonStyles } = useTheme();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_zuehzuj", // ✅ Your Service ID
        "template_95zcc1e", // ✅ Your Template ID
        formRef.current!,
        "yN3cWeUWBBIGrLlOl" // ✅ Your Public Key
      )
      .then(
        () => {
          setLoading(false);
          setSubmitted(true);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          alert("❌ Failed to send message. Try again later.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handlephoneCopy = () => {
    navigator.clipboard.writeText("+91 7488001657");
    alert("📞 Phone number copied to clipboard!");
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-6 md:px-16 pb-32 bg-gradient-to-b from-white to-blue-50 dark:from-gray-950 dark:to-gray-900 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-gray-800 dark:text-white"
        >
          Contact Me
        </motion.h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mt-4 mb-16">
          Let's work together or just have a chat 👋
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-700 dark:text-gray-300"
          >
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-500 text-xl" />
              <a
                href="mailto:shiv.info97@gmail.com"
                className="hover:underline hover:text-blue-600"
              >
                shiv.info97@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-blue-500 text-xl" />
              <span
                onClick={handlephoneCopy}
                className="cursor-pointer hover:underline hover:text-blue-600"
              >
                +91 7488001657
              </span>
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin className="text-blue-500 text-xl" />
              <a
                href="https://www.linkedin.com/in/shiv-info/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-600"
              >
                linkedin.com/in/shiv-info
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaGithub className="text-blue-500 text-xl" />
              <a
                href="https://github.com/zoroshiv"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-blue-600"
              >
                github.com/zoroshiv
              </a>
            </div>
            {/* ✅ Resume Button */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="/Resume.pdf" download className={buttonStyles}>
                Download Resume
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full h-14 px-4 py-3 mb-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full h-14 px-4 py-3 mb-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows={5}
              className="w-full px-4 py-3 mb-6 resize-y rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400 focus:outline-none"
            ></textarea>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.05 }}
              whileTap={{ scale: loading ? 1 : 0.97 }}
              className={`w-44 mx-auto mt-2 py-3 px-6 rounded-full ${buttonStyles} flex items-center justify-center gap-2 disabled:opacity-50`}
            >
              {loading ? (
                <FaSpinner className="w-4 h-4 animate-spin" />
              ) : (
                <FaPaperPlane className="w-4 h-4" />
              )}
              {loading ? "Sending..." : "Send Message"}
            </motion.button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-500 text-sm mt-4 text-center"
              >
                ✅ Thanks! Your message has been sent successfully.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
