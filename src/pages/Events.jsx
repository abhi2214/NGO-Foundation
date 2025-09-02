import React from "react";

const eventsData = [
  {
    img: "https://suvidhafoundationedutech.org/img/Tree-Plantation.jpg",
    title: "Tree Plantation",
    desc: "Join us in nurturing the Earth's embrace, one tree at a time. Together, let's create a greener tomorrow and breathe life into our planet."
  },
  {
    img: "https://suvidhafoundationedutech.org/img/Events/Fundraising.jpg",
    title: "Fundraising Events",
    desc: "Unlock the power of generosity at our Fundraising Event. Your support will ignite positive change and uplift lives in our community."
  },
  {
    img: "https://suvidhafoundationedutech.org/img/Events/Cloths-Distribution.jpg",
    title: "Cloths Distribution",
    desc: "Providing warmth and dignity through clothing. Join us in our mission to bring smiles and comfort to those in need through our cloth distribution event."
  },
  {
    img: "https://suvidhafoundationedutech.org/img/Events/Women's-Day.jpg",
    title: "Women's Day",
    desc: "Celebrating the strength, resilience, and achievements of women worldwide on this special Women's Day. Together, let's honor their contributions."
  },
  {
    img: "https://suvidhafoundationedutech.org/img/Events/Animal-Feeding.jpg",
    title: "Animal Feeding",
    desc: "Join us in providing sustenance and compassion to our furry companions. Together, let's make a positive impact on their lives through our Animal Feeding event."
  },
  {
    img: "https://suvidhafoundationedutech.org/img/Events/Food-Donation.jpg",
    title: "Food Donation Initiatives by Our NGO",
    desc: "Your generous contributions can fill empty plates and bring smiles to those in need. Together, we can create a world where everyone has access to nutritious meals."
  }
];

const Events = () => {
  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-5 mt-10">Events</h2>
      <p className="text-6xl text-bold text-gray-600 text-center mb-10">
        Our Charity Events: Celebrating Our Impact Together
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
        {eventsData.map((event, index) => (
          <div
            key={index}
            className="group [perspective:1000px] w-full h-80"
          >
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Side */}
              <div className="absolute w-full h-full rounded-xl shadow-lg overflow-hidden bg-white flex flex-col items-center justify-center [backface-visibility:hidden]">
                <img
                  src={event.img}
                  alt={event.title}
                  className="w-full h-2/3 object-cover"
                />
                <h3 className="text-lg font-semibold p-2">{event.title}</h3>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full rounded-xl shadow-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4 flex items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="text-sm">{event.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
