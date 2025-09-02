import { FaAppleAlt, FaTree, FaHeartbeat, FaBook, FaHandsHelping, FaBullhorn } from "react-icons/fa";

const WhatWeDo = () => {
  return (
    <div className="bg-gray-50 py-16" id="services">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading Section */}
        <div className="text-center mb-12">
          <p className="text-green-600 font-medium text-lg">What We Do?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Causes for a Sustainable Future
          </h2>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <FaAppleAlt className="text-3xl text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Healthy Food</h3>
            <p className="text-gray-600 text-justify">
              By focusing on healthy food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <FaBullhorn className="text-3xl text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Social Awareness</h3>
            <p className="text-gray-600 text-justify">
              We provide resources, conduct awareness campaigns, and facilitate access to hygiene facilities, aiming to create a healthier environment and prevent the spread of diseases.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <FaTree className="text-3xl text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Tree Plantation</h3>
            <p className="text-gray-600 text-justify">
              Through community engagement and active participation, we successfully planted thousands of trees, fostering a greener and healthier ecosystem for future generations.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <FaHeartbeat className="text-3xl text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Health Care</h3>
            <p className="text-gray-600 text-justify">
              We believe that access to healthcare is a fundamental right, and we work tirelessly to ensure that healthcare services are accessible, affordable, and of high quality for those in need.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <FaBook className="text-3xl text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Primary Education</h3>
            <p className="text-gray-600 text-justify">
              By collaborating with local communities and educators, we aim to empower children with the knowledge and skills they need for a brighter future.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <FaHandsHelping className="text-3xl text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Social Care</h3>
            <p className="text-gray-600 text-justify">
              Our programs encompass a range of support services, including counseling, vocational training, and advocacy, with the goal of empowering individuals.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
