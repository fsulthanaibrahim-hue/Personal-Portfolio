import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#050508] text-white overflow-hidden border-t border-white/10">

      {/* Glow background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-600/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row justify-between gap-12">

        {/* LEFT */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">
            Fathimath <span className="text-purple-400">Sulthana</span>
          </h2>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Full-Stack Developer focused on building modern, scalable and
            beautiful web experiences using React & Django.
          </p>

          {/* Email */}
          <a
            href="mailto:fsulthanaibrahim@gmail.com"
            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition"
          >
            <FaEnvelope />
            <span className="text-sm">fsulthanaibrahim@gmail.com</span>
          </a>
        </div>

        {/* CENTER LINKS */}
        <div className="flex flex-col gap-3 text-gray-400">
          <h3 className="text-white font-semibold mb-2">Quick Links</h3>

          <a href="#home" className="hover:text-purple-400 transition">Home</a>
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#skills" className="hover:text-purple-400 transition">Skills</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
        </div>

        {/* RIGHT SOCIAL */}
        <div className="space-y-4">
          <h3 className="text-white font-semibold">Connect</h3>

          <div className="flex gap-4">
            <a
              href="https://github.com/fsulthanaibrahim-hue"
              target="_blank"
              className="p-3 bg-white/5 hover:bg-purple-500/20 rounded-xl transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="p-3 bg-white/5 hover:bg-purple-500/20 rounded-xl transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>

          {/* Phone */}
          <p className="text-gray-400 text-sm">
            📞 +91 7025887016
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sulthana. Built with React + Django ⚡
      </div>
    </footer>
  );
};

export default Footer;