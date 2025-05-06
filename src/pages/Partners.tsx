import Hero from "../components/Hero";
import Sectors from "../assets/sectors.png";
import Food from "../assets/Food.svg";
import Steps from "../assets/Steps.svg";
import HeroBG from "../assets/Partners.svg";
import BGAbout from "../assets/About-BG.svg";
import Partner from "../assets/Partner.svg";

const Partners = () => {
  return (
    <section className="font-nunito">
      <Hero
        backgroundImage={HeroBG}
        content={
          <div className="md:w-[90%] text-center text-white space-y-5 md:space-y-8 mx-auto pt-[100px] md:pt-0">
            <h1 className="text-4xl md:text-7xl font-semibold">
              Our <span className="text-[#FCA321]"> Partners</span>
            </h1>
            <p className="text-lg md:text-2xl md:w-3/4 mx-auto">
              “Solutions are not just products but a movement towards achieving
              a robust and low-waste economy in Africa”{" "}
            </p>
          </div>
        }
      />

      <div className="flex flex-col gap-[2rem] lg:gap-[5rem] my-[3rem] lg:my-[5rem] items-center">
        <div className="flex flex-col lg:flex-row gap-[3rem] lg:gap-[6rem] items-center p-5">
          <div
            className="flex flex-col gap-[4rem] bg-cover bg-center"
            style={{ backgroundImage: `url(${BGAbout})` }}
          >
            <img src={Steps} width={600} height={400} alt="Sector Industries" />
            <img src={Food} width={600} height={400} alt="Sector Industries" />
          </div>

          <div className="flex flex-col gap-3">
            <small className="subtitle text-3xl font-medium text-primary-600 capitalize">
              About Our Partners
            </small>
            <p className=" text-gray-900 w-full md:w-[350px] mx-auto">
              It is a transformational platform designed to revolutionize the
              Agri-Food supply chain by bridging gaps between key players and
              supporting sectors.
            </p>
            <p className=" text-gray-900 w-full md:w-[350px] mx-auto">
              Our solution addresses critical challenges such as Agro-Waste
              management, post-harvest loss, supply chain disruptions, and
              inefficiencies in resource allocation.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[2rem] lg:gap-[6rem] items-center p-5">
          <img src={Sectors} width={600} height={400} alt="Sector Industries" />
          <div className="flex flex-col gap-3">
            <small className=" text-3xl font-bold text-primary-600">
              Sectors | Industries
            </small>
            <p className=" text-gray-900 w-full md:w-[350px] mx-auto">
              It is a transformational platform designed to revolutionize the
              Agri-Food supply chain by bridging gaps between key players and
              supporting sectors.
            </p>
            <p className=" text-gray-900 w-full md:w-[350px] mx-auto">
              Our solution addresses critical challenges such as Agro-Waste
              management, post-harvest loss, supply chain disruptions, and
              inefficiencies in resource allocation.
            </p>
          </div>
        </div>

        <div className="bg-green-950 rounded-xl flex flex-col lg:flex-row items-center lg:gap-[7rem]">
          <div className="flex flex-col gap-2 p-4 lg:p-[7rem] lg:w-[40%]">
            <p className="text-[#36EB25]">Pazelgreen Technologies</p>
            <p className="lg:text-4xl text-white text-[3rem] font-bold">
              Become a Partner Today!
            </p>
            <p className="text-[#36EB25]">
              “Solutions are not just products, but a movement towards achieving
              a robust and low waste economy in Africa”
            </p>
            <button className="py-2 px-3 bg-primary-600 text-white rounded-xl font-bold">
              Send us an email
            </button>
          </div>

          <div className="pb-5">
            <img src={Partner} width={600} height={355} alt="Partner" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
