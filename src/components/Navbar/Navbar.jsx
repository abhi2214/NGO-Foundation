import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "./Logo/Slogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-gradient-to-r from-blue-500/80 via-indigo-500/80 to-purple-500/80 backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="suvidha" className="h-12 w-auto drop-shadow-md" />
          
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-semibold text-white">
          {["HOME", "EVENTS", "GALLERY", "CONTACT", "INTERNSHIPS"].map((item, i) => (
            <NavLink
              key={i}
              to={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) =>
                `relative pb-1 transition duration-300 ease-in-out 
                 ${isActive ? "text-yellow-300" : "hover:text-yellow-300"} 
                 after:content-[''] after:absolute after:w-0 after:h-[2px] 
                 after:left-0 after:bottom-0 after:bg-yellow-300 
                 after:transition-all after:duration-500 hover:after:w-full`
              }
            >
              {item}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div
          className="md:hidden text-3xl cursor-pointer text-white transition-transform duration-300 hover:scale-110"
          onClick={toggleNavbar}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 shadow-xl 
        transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center mt-24 space-y-8 font-semibold text-white text-lg">
          <li>
            <NavLink to="/" onClick={toggleNavbar} className="hover:text-yellow-300 transition">HOME</NavLink>
          </li>
          <li>
            <NavLink to="/events" onClick={toggleNavbar} className="hover:text-yellow-300 transition">EVENTS</NavLink>
          </li>
          <li>
            <NavLink to="/gallery" onClick={toggleNavbar} className="hover:text-yellow-300 transition">GALLERY</NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={toggleNavbar} className="hover:text-yellow-300 transition">CONTACT</NavLink>
          </li>
          <li>
            <NavLink to="/internships" onClick={toggleNavbar} className="hover:text-yellow-300 transition">INTERNSHIPS</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
