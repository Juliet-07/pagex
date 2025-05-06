import Hero from "../../components/Hero";
import HeroBG from "../../assets/Partners.svg";
import ContactMe from "./contactMe";
import Farm from "../../assets/farm-image.svg";
import Call from "../../assets/call-image.svg";
import Form from "./form";
import SocialMediaLinks from "../../components/SocialMediaLinks";

const Contact = () => {
  return (
    <section className="font-nunito">
      <Hero
        backgroundImage={HeroBG}
        content={
          <div className="md:w-[90%] text-center text-white space-y-5 md:space-y-8 mx-auto pt-[100px] md:pt-0">
            <h1 className="text-4xl md:text-7xl font-semibold">
              Contact <span className="text-[#FCA321]"> us</span>
            </h1>
            <p className="text-lg md:text-2xl md:w-3/4 mx-auto">
              “Solutions are not just products but a movement towards achieving
              a robust and low-waste economy in Africa”{" "}
            </p>
          </div>
        }
      />

      <div className="flex flex-col gap-[3rem] my-3 p-4 lg:p-[5rem]">
        <div className="text-center">
          <span className="text-5xl font-bold"> Get in touch... </span>

          <span className="text-2xl md:text-xl sm:text-lg ">
            we are just one click away
          </span>
        </div>
        <ContactMe />

        <div className="flex flex-col lg:flex-row gap-3">
          <div className="w-full lg:flex flex-col gap-2 hidden ">
            <div className="flex flex-col gap-2">
              <img
                src={Farm}
                width={400}
                height={400}
                alt="Sector Industries"
              />
              <img
                src={Call}
                width={400}
                height={400}
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
                src={Farm}
                width={400}
                height={400}
                alt="Sector Industries"
              />
              <img
                src={Call}
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

export default Contact;
