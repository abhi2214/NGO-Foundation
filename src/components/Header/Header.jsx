import React, { useState, useEffect } from "react";
import { FaPlus, FaLinkedin, FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showIcons, setShowIcons] = useState(false);

  const images = [
    {
      src: "https://suvidhafoundationedutech.org/img/Suvidha-4.jpg",
      message: "Freedom is best celebrated by empowering others."
    },
    {
      src: "https://suvidhafoundationedutech.org/img/SuvidhaFoundation_EnvironmentDay.jpg",
      message: "A green tomorrow starts with the small steps we take today."
    },
    {
      src: "https://suvidhafoundationedutech.org/img/SocialWork.jpg",
      message: "The smallest act of kindness is worth more than the grandest intention."
    },
    {
      src: "https://suvidhafoundationedutech.org/img/Suvidha_Internships.jpg",
      message: "Learning today, leading tomorrow."
    },
    {
      src: "https://suvidhafoundationedutech.org/img/Suvidha-3.jpg",
      message: "Health is the foundation of happiness and progress."
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image */}
      <img
        src={images[currentIndex].src}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>

      {/* Plus Button + Social Icons */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center space-y-4">
        {/* Plus Button */}
        <button
          onClick={() => setShowIcons(!showIcons)}
          className="p-4 rounded-full bg-yellow-400 text-gray-900 shadow-lg hover:bg-yellow-500 transition-all duration-300"
        >
          <FaPlus size={24} />
        </button>

        {/* Social Icons */}
        {showIcons && (
          <div className="flex flex-col items-center space-y-4 mt-4">
            <a href="https://www.linkedin.com/company/suvidha-foundation/" target="_blank" rel="noreferrer">
              <FaLinkedin size={28} className="text-white hover:text-yellow-400 transition-colors" />
            </a>
            <a href="https://youtu.be/SoW3lH5JqO0?si=LxfG8lfi0uEGFbsh" target="_blank" rel="noreferrer">
              <FaYoutube size={28} className="text-white hover:text-yellow-400 transition-colors" />
            </a>
            <a href="https://instagram.com/suvidha_mahila_mandal?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
              <FaInstagram size={28} className="text-white hover:text-yellow-400 transition-colors" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook size={28} className="text-white hover:text-yellow-400 transition-colors" />
            </a>
          </div>
        )}
      </div>

      {/* Text */}
      <h3
        key={currentIndex}
        className="absolute bottom-50 left-1/2 -translate-x-1/2 
        text-gray-100 text-5xl font-extrabold text-center text-shadow-neutral-500
        transition-opacity duration-1000 ease-in-out z-20"
      >
        {images[currentIndex].message}
      </h3>

      {/* Button */}
      <button
        className="absolute bottom-16 left-1/2 -translate-x-1/2 
        px-10 py-4 bg-yellow-400 text-gray-900 font-extrabold text-lg tracking-wider
        rounded-full shadow-2xl hover:bg-yellow-500 hover:scale-105 transition-all duration-300 z-20"
      >
        DONATE NOW
      </button>
    </div>
  );
};

export default Header;
