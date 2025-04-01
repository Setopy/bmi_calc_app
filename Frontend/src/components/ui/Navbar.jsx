import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import icons from lucide-react

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="flex justify-between items-center py-4 px-8">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#0E4E30]"></div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex items-center space-x-6 text-[#131313] p-4 md:p-0 transition-all duration-300 ease-in-out ${
            menuOpen ? 'block' : 'hidden'
          } md:block`}
        >
          <a href="#" className="block md:inline-block py-2">Home</a>
          <a href="#" className="block md:inline-block py-2">About us</a>
          <a href="#" className="block md:inline-block py-2">Blog</a>
          <a href="#" className="block md:inline-block py-2">Contact us</a>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-[#0E4E30] px-2 py-2">Login</a>
          <button
            className="bg-[#0E4E30] text-white px-4 py-2 rounded-md hover:bg-[#0C3B22] transition duration-300"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
