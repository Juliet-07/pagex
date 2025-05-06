import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

type Slide = {
  id: number;
  url: string;
};

type CarouselProps = {
  slides: Slide[];
  activeClassName?: string;
  inactiveClassName?: string;
};

export default function Carousel({
  slides,
  activeClassName = "scale-110 w-full ",
  inactiveClassName = "scale-90 opacity-80",
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:block w-full md:w-[80%] mx-auto absolute -left-[50%] -right-[50%] top-0 md:static overflow-hidden">
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          spaceBetween={20}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full overflow-hidden absolute left-0 top-0"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id} className="p-4 md:w-[400px]">
              <div
                className={clsx(
                  "flex items-center justify-center h-[200px] md:h-[240px]  bg-green-500 text-white text-xl font-bold rounded-2xl overflow-hidden border-4 border-warning-400 transition-transform relative",
                  activeIndex === index ? activeClassName : inactiveClassName
                )}
              >
                <img
                  src={slide.url}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center gap-28 mt-4">
          <button className="custom-prev p-2 bg-primary-500 rounded-full hover:bg-primary-600">
            <ChevronLeft size={24} />
          </button>
          <button className="custom-next p-2 bg-primary-500 rounded-full hover:bg-primary-600">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
      {/* Mobile View */}
      <div className="md:hidden block w-full mx-auto absolute -left-[50%] -right-[50%] top-0 md:static overflow-hidden">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          spaceBetween={20}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="w-full overflow-hidden absolute left-0 top-0"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id} className="p-4 md:w-[400px]">
              <div
                className={clsx(
                  "flex items-center justify-center h-[200px] md:h-[240px]  bg-green-500 text-white text-xl font-bold rounded-2xl overflow-hidden border-4 border-warning-400 transition-transform relative",
                  activeIndex === index ? activeClassName : inactiveClassName
                )}
              >
                <img
                  src={slide.url}
                  alt={`Slide ${slide.id}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-center gap-28 mt-4">
          <button className="custom-prev p-2 bg-primary-500 rounded-full hover:bg-primary-600">
            <ChevronLeft size={24} />
          </button>
          <button className="custom-next p-2 bg-primary-500 rounded-full hover:bg-primary-600">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </>
  );
}
