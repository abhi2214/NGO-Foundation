import React from "react";

const Internship = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden mt-20 mb-20">
      {/* Background Image */}
      <img
        src="https://suvidhafoundationedutech.org/img/volunteer.jpg"
        alt="Internship"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6 py-12">
        <h2 className="text-yellow-400 text-3xl md:text-5xl font-extrabold mb-6">
          Apply For Internship and Mentorship Programs
        </h2>
        <h4 className="text-white text-lg md:text-2xl font-medium mb-8">
          Seize the opportunity to gain invaluable experience and jumpstart your
          career with an internship that propels you towards success.
        </h4>

        <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-10">
          The Suvidha Foundation Internship Program is a unique opportunity for
          students and recent graduates to gain experience and contribute to the
          work of Suvidha Foundation. Along with undertaking tasks related to
          their specific skills, we encourage interns to develop a reputable
          professional portfolio.
        </p>

        <a
          href="https://forms.gle/pD89BmSfZhioPFK99"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-yellow-400 text-gray-900 font-bold rounded-full shadow-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
        >
          Apply Here
        </a>
      </div>
    </div>
  );
};

export default Internship;
