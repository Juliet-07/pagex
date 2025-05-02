import { ReactNode } from "react";

interface HeroProps {
  content: ReactNode;
  backgroundImage?: string;
  floatingImages?: string[]; // 🆕 new prop
}

const Hero = ({ content, backgroundImage, floatingImages }: HeroProps) => {
  return (
    <div
      className="relative hero__container min-h-[80vh] w-screen py-[12%] bg-cover bg-primary-800/60 bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero__content z-10">{content}</div>

      {/* Floating Scrollable Images */}
      {floatingImages && floatingImages.length > 0 && (
        <div className="absolute -bottom-20 left-0 w-full overflow-x-auto z-20">
          <div className="flex gap-6 w-max md:justify-center md:w-full">
            {floatingImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Floating Image ${idx}`}
                className="w-32 md:w-44 object-cover rounded-2xl shadow-md shrink-0 transition-transform duration-300 hover:scale-110"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
