import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white flex justify-between items-center px-8 py-4 z-50">
      <h1 className="font-bold text-xl">Sulthana</h1>

      <div className="flex gap-6 text-sm">
        <a href="#home" className="hover:text-purple-400">Home</a>
        <a href="#about" className="hover:text-purple-400">About</a>
        <a href="#skills" className="hover:text-purple-400">Skills</a>
        <a href="#projects" className="hover:text-purple-400">Projects</a>
        <a href="#contact" className="hover:text-purple-400">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;