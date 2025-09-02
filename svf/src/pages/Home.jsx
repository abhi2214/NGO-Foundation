import React from "react";
import Internship from "./Internship";
import Team from "../components/Team/Team";
import FlatCards from "../components/FlatCards/FlatCards";
import WhatWeDo from "../components/WhatWeDo";

const Home = () => {
  return (
    <>
   <section className="bg-gray-50 py-12 px-6 md:px-16">
  {/* Header Section */}
  <div className="text-center mb-12">
    <h3 className="text-3xl font-bold text-indigo-600 tracking-wide uppercase">
      Learn About Us
    </h3>
    <h1 className="text-1xl md:text-4xl font-bold text-gray-900 mt-2">
      Suvidha Foundation (Suvidha Mahila Mandal)
    </h1>
  </div>

  {/* Image + Content Side by Side */}
  <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto items-center">
    {/* Left Image */}
    <div className="flex justify-center">
      <img
        src="https://suvidhafoundationedutech.org/img/about.jpg"
        alt="About Suvidha Foundation"
        className="rounded-2xl shadow-xl w-full object-cover"
      />
    </div>

    {/* Right Content */}
    <div className="grid gap-6">
      {/* About */}
      <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-indigo-500 hover:shadow-lg transition transform hover:-translate-y-1">
        <h3 className="text-xl font-semibold text-indigo-600 mb-3 flex items-center gap-2">
          📖 About
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm">
          Suvidha Mahila Mandal, established on September 8, 1995, is a
          non-profit organization working to impart education among the
          financially challenged sections to help them realize parity in
          education and strength of little minds in building a promising
          future. The organization has provisions of student internships,
          mentorship, and volunteering programs to equip students for the
          future.
        </p>
      </div>

      {/* Mission */}
      <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-green-500 hover:shadow-lg transition transform hover:-translate-y-1">
        <h3 className="text-xl font-semibold text-green-600 mb-3 flex items-center gap-2">
          🎯 Mission
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm">
          <strong>Imparting Education:</strong> Bridging the educational gap
          by providing quality education to underprivileged children.
          <br />
          <strong>Empowering Communities:</strong> Social awareness campaigns,
          healthcare initiatives, and vocational training programs.
          <br />
          <strong>Sustainable Future:</strong> Promoting environmental
          sustainability through tree plantation drives and greener practices.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-white shadow-md rounded-xl p-6 border-l-4 border-purple-500 hover:shadow-lg transition transform hover:-translate-y-1">
        <h3 className="text-xl font-semibold text-purple-600 mb-3 flex items-center gap-2">
          🌍 Vision
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm">
          Suvidha Foundation envisions equal opportunities, quality education,
          and a sustainable future.
        </p>
        <ul className="list-disc list-inside mt-3 text-gray-600 text-sm space-y-1">
          <li>Scholarships, internships, and mentorship programs</li>
          <li>Campaigns on hygiene, healthcare, and sustainability</li>
          <li>Affordable, quality healthcare access</li>
          <li>Tree plantation drives for sustainability</li>
          <li>Women empowerment & skill development</li>
        </ul>
      </div>
    </div>
  </div>
</section>
 
    <div>
      <Internship />
      <WhatWeDo/>
      <FlatCards/>
      <Team/>
    </div>
    </>
  );
};

export default Home;
