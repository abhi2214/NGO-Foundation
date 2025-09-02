import React from "react";

const Team = () => {
  const imagediv = [
    {
      img: "https://suvidhafoundationedutech.org/img/team/Shobha_Motghare.jpeg",
      name: "Shobha Motghare",
      post: "SECRETARY",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/team/Payal_Badhe.jpg",
      name: "Payal Badhe",
      post: "PRESIDENT",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Bharti_Shendre.jpg",
      name: "Bharti Shendre",
      post: "TREASURER",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Nilima_Kalambe.jpg",
      name: "Nilima Kalambe",
      post: "ADVISOR",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-500 mb-2">
         Meet Our Team
      </h2>
        <p className="text-2xl mt-0 font-bold text-center mb-5 text-gray-500">Guys behind our charity activities</p>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {imagediv.map((image, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={image.img}
              alt={image.name}
              className="w-32 h-32 object-cover rounded-full border-4 border-gray-200 mb-4 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-lg font-semibold text-gray-900">{image.name}</h3>
            <p className="text-sm text-gray-500 font-medium mt-1">
              {image.post}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
