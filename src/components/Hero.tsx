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
      className="w-screen min-h-[80vh] relative py-[12%] md:py-[8%] bg-cover bg-center bg-no-repeat flex md:items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#1C1C1C]/75 z-[2]"></div>
      <div className="w-full relative z-[3] p-4 md:mt-10">{content}</div>
    </div>
  );
};
export default Hero;
