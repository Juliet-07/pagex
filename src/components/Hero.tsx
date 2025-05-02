import { ReactNode } from "react";

interface HeroProps {
  content: ReactNode;
}

interface HeroProps {
  content: ReactNode;
  backgroundImage?: string;
}

const Hero = ({ content, backgroundImage }: HeroProps) => {
  return (
    <div
      className="hero__container min-h-[80vh] w-screen  py-[12%] bg-cover bg-primary-800/60  bg-center flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="hero__content ">{content}</div>
    </div>
  );
};
export default Hero;
