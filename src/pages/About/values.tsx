import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { cn } from "../../utils/index";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AddCart from "../../assets/icons/Hicon/Linear/Add Category.svg";
import Stat from "../../assets/icons/database-stats.svg";
import ThreeD from "../../assets/icons/3d-three-pts-box.svg";
import Gift from "../../assets/icons/Hicon/Linear/Gift 1.svg";
import Graph from "../../assets/icons/graph-up.svg";
import Cash from "../../assets/icons/lot-of-cash.svg";
import Education from "../../assets/icons/Hicon/Linear/Education.svg";
import Logistics from "../../assets/icons/border-out.svg";
import Wallet from "../../assets/icons/wallet.svg";

interface PagexValue {
  icon: string;
  color: string;
  title: string;
  description: string;
}

interface ValueGridProps {
  values: PagexValue[];
}

export const pagexValues: PagexValue[] = [
  {
    icon: AddCart,
    color: "#2563EB1A",
    title: "Integrity",
    description:
      "Upholding honesty and ethical standards in all operations, fostering trust with clients and stakeholders.",
  },
  {
    icon: Stat,
    color: "#EB25CD1A",
    title: "Innovation",
    description:
      "Encouraging new ideas and creative approaches to drive growth and offer impactful solutions.",
  },
  {
    icon: ThreeD,
    color: "#25C7EB1A",
    title: "Excellence",
    description:
      "Striving for the highest quality in all products, services, and interactions, aiming to exceed expectations.",
  },
  {
    icon: Gift,
    color: "#8F25EB1A",
    title: "Team Spirit",
    description:
      "Building a supportive and collaborative work environment where every team member feels valued and motivated.",
  },
  {
    icon: Graph,
    color: "#EB25571A",
    title: "Capacity Building",
    description:
      "Investing in the skills and growth of the team to enhance overall productivity and expertise",
  },
  {
    icon: Cash,
    color: "#36EB251A",
    title: "Gender Equality & Equity",
    description:
      "Ensuring fair treatment, equal opportunities, and a supportive atmosphere for all, regardless of gender.",
  },
  {
    icon: Education,
    color: "#B4BC1C1A",
    title: "Accountability",
    description:
      "Taking responsibility for actions and outcomes, ensuring transparency and trust with partners and clients.",
  },
  {
    icon: Logistics,
    color: "#12AB171A",
    title: "Creativity & Design Thinking",
    description:
      "Leveraging creativity and design-thinking frameworks to solve problems and address user needs effectively.",
  },
  {
    icon: Wallet,
    color: "#EB9C251A",
    title: "Partnership & Collaboration",
    description:
      "Building strong relationships with partners and stakeholders to create shared value and foster long-term success.",
  },
];

const ValuesGrid: React.FC<ValueGridProps> = ({ values }) => {
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
        {values.map((feature: PagexValue, index) => (
          <div
            key={index}
            className={cn(
              "feature__card bg-white p-14  text-center flex flex-col justify-center items-center",
              "border-b border-r border-primary-400/5", // Borders by default
              index % 3 === 2 ? "border-r-0" : "", // Remove right border for last column items
              index >= values.length - (values.length % 3 || 3)
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
          {Array.from({ length: Math.ceil(values.length / 3) }).map(
            (_, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="grid grid-cols-1 gap-5">
                  {values
                    .slice(slideIndex * 3, slideIndex * 3 + 3)
                    .map((values, index) => (
                      <div
                        key={index}
                        className="feature__card bg-white py-5   text-center flex flex-col justify-center items-center rounded-lg"
                      >
                        <div
                          className="icon__container rounded-lg p-3 w-12 h-12 flex items-center justify-center relative"
                          style={{ backgroundColor: values.color }}
                        >
                          <img
                            width={24}
                            height={24}
                            src={values.icon}
                            className="w-full h-full object-cover"
                            alt={values.title}
                          />
                        </div>
                        <h4 className="title text-lg font-bold mt-4">
                          {values.title}
                        </h4>
                        <p className="description text-gray-700 mt-2">
                          {values.description}
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

export default ValuesGrid;
