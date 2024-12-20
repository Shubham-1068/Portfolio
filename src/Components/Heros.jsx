import React from "react";
import { motion } from "framer-motion";
import profilePicture from "../assets/images/profilePic.jpg";
import { Github, Mail } from "lucide-react";

function Heros() {
  // Stagger Animation for Text Lines
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.4 + i * 0.2, duration: 0.8 },
    }),
  };

  return (
    <motion.div
      id="home"
      className="w-screen h-[750px] bg-[#09090b] flex items-center justify-center gap-12 text-[#5e5e73] flex-col audiowide-regular cursor-default"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated Profile Picture */}
      <motion.div
        className="lg:h-[200px] lg:w-[200px] h-[150px] w-[150px] rounded-full flex items-center justify-center overflow-hidden border-4 border-[#38bdf8] shadow-lg"
        whileHover={{ rotate: 360, scale: 1.1 }}
        animate={{ scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity } }}
      >
        <motion.img
          src={profilePicture}
          alt="Profilepic"
          className="h-full w-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, duration: 1 }}
        />
      </motion.div>

      {/* Animated Text Section */}
      <div className="flex flex-col text-center gap-4 text-sm w-[80vw]">
        {[
          "HEY👋, I AM SHUBHAM RAJ",
          "I design and code beautifully simple things, and I love what I do.",
          "I'm a front-end developer specializing in building exceptional digital experiences.",
          "I'm focused on building responsive front-end web applications integrating back-end technologies.",
        ].map((line, index) => (
          <motion.p
            key={index}
            className={`lg:text-lg font-medium ${
              index === 0 ? "text-[#38bdf8] lg:text-2xl font-bold mb-6" : ""
            }`}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={index}
            whileHover={{ scale: 1.05, color: "#38bdf8" }}
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* Animated Contact Links */}
      <motion.div
        className="lg:w-full lg:p-0 p-3 flex justify-center gap-10 items-center border-2 border-slate-500 rounded-3xl lg:border-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="mailto:shubhamraj1068@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail color="white" size={28} />
          </a>
          <p className="hidden lg:block text-white">shubhamraj1068@gmail.com</p>
        </motion.div>

        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="https://github.com/Shubham-1068" target="_blank" rel="noopener noreferrer">
            <Github color="white" size={28} />
          </a>
          <p className="hidden lg:block text-white">shubhamraj1068</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Heros;
