import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { CiLocationOn } from "react-icons/ci";
import Quotes from "../../assets/quotes.png";

const testimonials = [
  {
    content:
      "From my understanding of PAGEX, I think this would be a very good product considering the focus areas and sustainability plans. I personally believe “ no business man in his right mind will pass off such a robust offer that enables starting or expanding his business operations with ease while raking in profit. If it solves my problem and makes my business operations easier, I would definitely pay to have access! ",
    author: {
      name: "Samuel",
      location: "Nasarawa",
      imageUrl: "https://placehold.jp/150x150.png",
    },
  },
  {
    content:
      "From my understanding of PAGEX, I think this would be a very good product considering the focus areas and sustainability plans. I personally believe “ no business man in his right mind will pass off such a robust offer that enables starting or expanding his business operations with ease while raking in profit. If it solves my problem and makes my business operations easier, I would definitely pay to have access!",
    author: {
      name: "Taofeek",
      location: "Lagos",
      imageUrl: "https://placehold.jp/150x150.png",
    },
  },
  {
    content:
      "From my understanding of PAGEX, I think this would be a very good product considering the focus areas and sustainability plans. I personally believe “ no business man in his right mind will pass off such a robust offer that enables starting or expanding his business operations with ease while raking in profit. If it solves my problem and makes my business operations easier, I would definitely pay to have access!",
    author: {
      name: "Peter",
      location: "Productivity Expert",
      imageUrl: "https://placehold.jp/150x150.png",
    },
  },
];

export function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleNextSlide() {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  }

  function handlePreviousSlide() {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }

  return (
    <div className="p-4 w-full font-nunito">
      <section className="mt-8 flex w-full gap-2 *:shrink-0 overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <AnimatePresence key={testimonial.author.name} mode="popLayout">
            {index >= currentSlide && (
              <motion.div
                animate={{ opacity: 1, x: 0, scale: 1 }}
                className="flex space-y-8 w-full sm:w-[40%] flex-col justify-between rounded-lg bg-white p-8 border border-gray-200 shadow-sm dark:bg-neutral-0"
                exit={{ opacity: 0, x: 0, scale: 0.8, rotate: 3 }}
                initial={{ opacity: 0, x: 0, scale: 0.8 }}
                layout={true}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <img src={Quotes} alt="double_quotes" width={30} height={30} />
                <p className="font-medium text-neutral-600 leading-6  dark:text-neutral-400 md:text-lg">
                  {testimonial.content}
                </p>
                <div className="text-neutral-400 text-sm dark:text-neutral-500 flex items-center">
                  <img
                    width={45}
                    height={45}
                    src={testimonial.author.imageUrl}
                    alt={testimonial.author.name}
                    className="w-[45px] h-[45px] rounded-full bg-neutral-500/10 mr-3"
                  />{" "}
                  {testimonial.author.name},{" "}
                  <span className="text-primary-400 mx-2 text-lg">
                    <CiLocationOn />
                  </span>{" "}
                  {testimonial.author.location}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </section>
      <div className="flex justify-start gap-2 mt-10">
        <button
          // variant="outline"
          className="group inline-flex size-7 items-center justify-center rounded-full p-1.5 text-primary-600 dark:border-primary-0 border border-gray-100"
          disabled={currentSlide === 0}
          onClick={handlePreviousSlide}
          type="button"
        >
          <ArrowLeftIcon className="transform-gpu stroke-primary-500 transition-colors group-disabled:stroke-neutral-500/40"/>
        </button>
        <button
          // variant="outline"
          className="group inline-flex size-7 items-center justify-center rounded-full  p-1.5 text-primary-600 dark:border-primary-0 border border-gray-100"
          disabled={currentSlide === testimonials.length - 1}
          onClick={handleNextSlide}
          type="button"
        >
          <ArrowRightIcon className="transform-gpu stroke-primary-500 transition-colors group-disabled:stroke-neutral-500/40" />
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
