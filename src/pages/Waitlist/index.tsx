import Hero from "../../components/Hero";
import HeroBG from "../../assets/WaitList.png";
import Register from "../../assets/Register.svg";
import Form from "./form";
import SocialMediaLinks from "../../components/SocialMediaLinks";

const Waitlist = () => {
  return (
    <section className="font-nunito">
      <Hero
        backgroundImage={HeroBG}
        content={
          <div className="text-center text-white space-2-3 md:space-y-8  w-[90%]  mx-auto">
            <h1 className="hero__title text-[32px] md:text-7xl ">
              Join Our<span className="text-[#FCA321]"> Wait list</span>
            </h1>
            <p className="hero__description md:text-2xl md:mt-4 md:w-3/4 mx-auto mb-4">
              “Discover moments captured in time – a visual journey through
              creativity and expression.”
            </p>
          </div>
        }
      />

      <div className="flex flex-col gap-6 my-3 p-4">
        <div className="text-center">
          <span className="text-2xl md:text-5xl font-bold"> Early birds... </span>

          <span className="text-lg md:text-xl">
            be among the first to get notified
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-3 px-10 md:mb-10">
          <div className="w-full lg:flex flex-col gap-2 hidden ">
            <div className="flex flex-col gap-2">
              <img
                src={Register}
                // width={400}
                // height={400}
                alt="Sector Industries"
              />
            </div>
            <div className="hidden lg:block">
              <SocialMediaLinks />
            </div>
          </div>

          <div className="w-full">
            <Form />
          </div>

          <div className="w-full flex flex-col gap-2 lg:hidden">
            <div className="flex flex-col gap-2">
              <img
                src={Register}
                width={400}
                height={400}
                alt="Sector Industries"
              />
            </div>
            <div className="hidden lg:block">
              <SocialMediaLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
