import React from "react";
import { useNavigate } from "react-router-dom";
import Gallery from "../assets/marketplace_gallery.svg";

const MarketplaceSection: React.FC = () => {
  const navigate = useNavigate();
  const visitPagex = () => {
    navigate("/waitlist");
  };
  return (
    <section className="bg-[#00210D] ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="flex-1 text-white p-4 md:p-10 2xl:p-20">
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
            <button
              onClick={visitPagex}
              className="bg-primary-100 text-white font-medium p-4 rounded-xl shadow cursor-pointer"
            >
              Visit PAGEX
            </button>
          </div>
        </div>

        {/* Right Image Grid */}
        <div className="md:w-[50%]">
          <img src={Gallery} className="w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
