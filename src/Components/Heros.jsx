import React from "react";
import { Github, Mail, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import profilePic from "../assets/images/profilePic.jpg"; // Ensure the profilePic is properly imported
import profilePicBack from "../assets/images/profilePicBack.jpg"; // Add your second image

const Hero = () => {
  const gradientTextClass =
    "bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300";

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center relative overflow-hidden px-4 audiowide-regular">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </motion.div>

      {/* Content Container */}
      <motion.div
        className="relative z-10 max-w-4xl w-full space-y-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {/* Profile Section */}
        <motion.div
          className="text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Profile Image with Spinning Effect */}
          <motion.div
            className="relative group bottom-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <div className="absolute -inset-0.5 rounded-full opacity-75 group-hover:opacity-100 transition duration-500 blur"></div>

            <div className="relative h-40 w-40 lg:h-56 lg:w-56 mx-auto rounded-full overflow-hidden border-4 border-white/10 transform transition-transform duration-700 group-hover:rotate-[360deg]">
              <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0">
                <img
                  src={profilePic}
                  alt="Front"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <img
                  src={profilePicBack}
                  alt="Back"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Main Text */}
          <motion.div
            className="space-y-7 cursor-default"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <motion.h1
      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#38bdf1] leading-tight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <span className="">HEY👋, I AM SHUBHAM</span>
    </motion.h1>
          </motion.div>

          {/* Description with Animations */}
          <motion.div
            className="space-y-5 text-gray-400 cursor-default w-[95%] mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <motion.p
              className="text-xs sm:text-sm md:text-base lg:text-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              I design elegant, simple solutions and love what I do
            </motion.p>

            <motion.p
              className="text-xs sm:text-sm md:text-base lg:text-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              I create clean designs and code, driven by passion
            </motion.p>

            <motion.p
              className="text-xs sm:text-sm md:text-base lg:text-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              I build responsive front-end apps with back-end integration
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a
            href="mailto:shubhamraj1068@gmail.com"
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <Mail className="w-5 h-5 text-blue-400" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 group-hover:text-white transition-colors">
              shubhamraj1068@gmail.com
            </span>
          </a>

          <a
            href="https://github.com/Shubham-1068"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <Github className="w-5 h-5 text-blue-400" />
            <span className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 group-hover:text-white transition-colors">
              Shubham-1068
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-0 -translate-x-1/2 w-full flex justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
      </motion.div>
    </div>
  );
};

export default Hero;
