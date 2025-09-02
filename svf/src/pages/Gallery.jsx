import React from "react";

const Gallery = () => {
  const images = [
    {
      img: "https://suvidhafoundationedutech.org/img/Gallery/Workshops.jpg",
      title: "FREE WORKSHOP",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Gallery/BooksDistribution.jpg",
      title: "BOOKS DISTRIBUTION",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Gallery/OnlineEvents.jpg",
      title: "ONLINE EVENTS",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Gallery/TreePlantation.jpg",
      title: "TREE PLANTATION",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Gallery/ClothesDistribution.jpg",
      title: "CLOTHES DISTRIBUTION",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Gallery/FreeEducation.jpg",
      title: "FREE EDUCATION",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Gallery/Women'sDay.jpg",
      title: "WOMEN'S DAY",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Gallery/FoodDistribution.jpg",
      title: "FOOD DISTRIBUTION",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Gallery/AnimalFeeding.jpg",
      title: "ANIMAL FEEDING",
    },
    {
      img: "https://suvidhafoundationedutech.org/img/Gallery/WomenEmpowerment.jpg",
      title: "WOMEN EMPOWERMENT",
    },
  ];

  return (
    <section className="px-8 py-14 bg-gray-50">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our <span className="text-indigo-600">Gallery</span>
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
          Moments of Impact: Capturing the Journey of Our NGO
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {images.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <h3 className="text-white text-lg font-semibold uppercase tracking-wide">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
