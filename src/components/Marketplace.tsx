import React from "react";
import Agric1 from "../assets/agric-1.svg";
import Agric2 from "../assets/agric-2.svg";
import Agric3 from "../assets/agric-3.svg";
import Agric4 from "../assets/agric-4.svg";
import Agric5 from "../assets/agric-5.svg";
import Agric6 from "../assets/agric-6.svg";

const images = [
  {
    id: 1,
    icon: Agric1,
  },
  {
    id: 2,
    icon: Agric2,
  },
  {
    id: 3,
    icon: Agric3,
  },
  {
    id: 4,
    icon: Agric4,
  },
  {
    id: 5,
    icon: Agric5,
  },
  {
    id: 6,
    icon: Agric6,
  },
];

const MarketplaceSection: React.FC = () => {
  return (
    <section className="bg-[#00210D] text-white p-4 md:p-10 2xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-[#36EB25] text-sm font-medium mb-2 font-nunito">
            MARKETPLACE
          </p>
          <h2 className="text-3xl md:text-6xl font-bold leading-tight mb-6 text-white font-nunito">
            Get started today for a better future in agriculture
          </h2>
          <p className="text-[#36EB25] text-base mb-6 font-nunito">
            Download PAGEX app/Visit PAGEX on our Website
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-primary-100 font-medium p-4 rounded-xl shadow">
              Download Now!
            </button>
            <button className="bg-primary-100 text-white font-medium p-4 rounded-xl shadow">
              Visit PAGEX
            </button>
          </div>
        </div>

        {/* Right Image Grid */}
        <div className="flex-1 grid grid-cols-3 gap-3">
          {images.map((image, index) => (
            <div
              key={index}
              //   className={`rounded-xl overflow-hidden ${
              //     index === 0 || index === 4 ? "row-span-2" : ""
              //   }`}
            >
              <img
                src={image.icon}
                alt={`Agri ${index + 1}`}
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
