import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const FlatCards = () => {
  const cards = [
    "https://suvidhafoundationedutech.org/img/Feedback/5.jpg",
    "https://suvidhafoundationedutech.org/img/Feedback/89.jpg",
    "https://suvidhafoundationedutech.org/img/Feedback/106.jpg",
    "https://suvidhafoundationedutech.org/img/Feedback/104.jpg",
    "https://suvidhafoundationedutech.org/img/Feedback/3.jpg",
    "https://suvidhafoundationedutech.org/img/Feedback/28.jpg",
    "https://suvidhafoundationedutech.org/img/Feedback/15.jpg",
    "https://suvidhafoundationedutech.org/img/Feedback/92.jpg",
    "https://suvidhafoundationedutech.org/img/Feedback/84.jpg",
    "https://suvidhafoundationedutech.org/img/Feedback/94.jpg",
  ];

  return (
    <div className="bg-gray-50 py-5 px-20 ">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-500 mb-1">
        Testimonials
      </h2>
      <p className="text-center text-gray-600 mb-8">What people are talking about our charity activities</p>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                src={card}
                alt={`Feedback ${index + 1}`}
                className="w-55 h-75 object-cover rounded-xl transform hover:scale-105 transition-transform duration-500 ease-in-out cursor-pointer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FlatCards;

