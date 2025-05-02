import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { cn } from "../utils/index";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AddCart from "../assets/icons/Hicon/Linear/Add Category.svg";
import Stat from "../assets/icons/database-stats.svg";
import ThreeD from "../assets/icons/3d-three-pts-box.svg";
import Gift from "../assets/icons/Hicon/Linear/Gift 1.svg";
import Graph from "../assets/icons/graph-up.svg";
import Cash from "../assets/icons/lot-of-cash.svg";
import Education from "../assets/icons/Hicon/Linear/Education.svg";
import Logistics from "../assets/icons/border-out.svg";
import Wallet from "../assets/icons/wallet.svg";

interface PagexFeature {
  icon: string;
  color: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: PagexFeature[];
}

export const pagexFeatures: PagexFeature[] = [
  {
    icon: AddCart,
    color: "#2563EB1A",
    title: "Customized Dashboard",
    description:
      "Customized dashboards and themes to support user category and preference.",
  },
  {
    icon: Stat,
    color: "#EB25CD1A",
    title: "Reports & Data Analytics",
    description:
      "Data analytics and reporting across all platform and market activities.",
  },
  {
    icon: ThreeD,
    color: "#25C7EB1A",
    title: "Web3 & Blockchain Integration",
    description:
      "Web3/blockchain integration for accountability, traceability and transparency.",
  },
  {
    icon: Gift,
    color: "#8F25EB1A",
    title: "Reward System",
    description:
      "Reward incentivizes user engagement by offering discounts, tokens, or other perks.",
  },
  {
    icon: Graph,
    color: "#EB25571A",
    title: "Real-Time Market Monitoring",
    description:
      "This helps in minimizing risks and seizing new opportunities in a timely manner.",
  },
  {
    icon: Cash,
    color: "#36EB251A",
    title: "Credit & Loan Access",
    description:
      "Financial services like credit and loans can help businesses expand their operations",
  },
  {
    icon: Education,
    color: "#B4BC1C1A",
    title: "Educational Resources",
    description:
      "Offering educational materials on agriculture and business best practices",
  },
  {
    icon: Logistics,
    color: "#12AB171A",
    title: "Seamless Logistics",
    description:
      "This improves customer satisfaction and reliability, which are critical for business reputation and repeat orders",
  },
  {
    icon: Wallet,
    color: "#EB9C251A",
    title: "E-Wallet Solutions",
    description:
      "This improves financial efficiency and can help businesses manage cash flow better.",
  },
];

const FeatureGrid: React.FC<FeatureGridProps> = ({ features }) => {
  const swiperRef = useRef<any>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };
  return (
    <div className="w-full font-nunito">
      {/* Desktop & Tablet Grid */}
      <div className="features__grid hidden md:grid grid-cols-1 md:grid-cols-3 gap-0 p-5 ">
        {features.map((feature: PagexFeature, index) => (
          <div
            key={index}
            className={cn(
              "feature__card bg-white p-14  text-center flex flex-col justify-center items-center",
              "border-b border-r border-primary-400/5", // Borders by default
              index % 3 === 2 ? "border-r-0" : "", // Remove right border for last column items
              index >= features.length - (features.length % 3 || 3)
                ? "border-b-0"
                : "" // Remove bottom border for last row
            )}
          >
            <div
              className="icon__container rounded-lg p-3 w-12 h-12 flex items-center justify-center relative"
              style={{ backgroundColor: feature.color }}
            >
              <img
                width={24}
                height={24}
                src={feature.icon}
                className="w-full h-full object-cover"
                alt={feature.title}
              />
            </div>
            <h4 className="title text-lg font-bold mt-4">{feature.title}</h4>
            <p className="description text-gray-700 mt-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Mobile Swiper */}
      {/* Mobile Swiper */}
      <div className="sm:hidden relative pt-10 pb-12">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={20}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          modules={[Navigation]}
        >
          {Array.from({ length: Math.ceil(features.length / 3) }).map(
            (_, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="grid grid-cols-1 gap-5">
                  {features
                    .slice(slideIndex * 3, slideIndex * 3 + 3)
                    .map((feature, index) => (
                      <div
                        key={index}
                        className="feature__card bg-white py-5   text-center flex flex-col justify-center items-center rounded-lg"
                      >
                        <div
                          className="icon__container rounded-lg p-3 w-12 h-12 flex items-center justify-center relative"
                          style={{ backgroundColor: feature.color }}
                        >
                          <img
                            width={24}
                            height={24}
                            src={feature.icon}
                            className="w-full h-full object-cover"
                            alt={feature.title}
                          />
                        </div>
                        <h4 className="title text-lg font-bold mt-4">
                          {feature.title}
                        </h4>
                        <p className="description text-gray-700 mt-2">
                          {feature.description}
                        </p>
                      </div>
                    ))}
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>

        {/* Custom Navigation */}

        <div className="flex absolute bottom-0 items-center justify-center w-full">
          <div className="flex gap-10">
            <button
              onClick={handlePrev}
              className={cn(
                "p-2 rounded-full transition bg-primary-500 text-white",
                isBeginning
                  ? "opacity-50 cursor-not-allowed "
                  : "opacity-100 hover:bg-gray-300  "
              )}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className={cn(
                "p-2 rounded-full transition bg-primary-500 text-white",
                isEnd
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100 hover:bg-gray-300"
              )}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid;
