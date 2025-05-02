import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeatureGrid, { pagexFeatures } from "../components/Features";
import MarketplaceSection from "../components/Marketplace";
import BGImage from "../assets/market-bg.jpg";
import AboutImg from "../assets/about.svg";
import Icon1 from "../assets/FlyingSaucer.svg";
import Icon2 from "../assets/MagicWand.svg";
import Icon3 from "../assets/BoundingBox.svg";
import Icon4 from "../assets/Package.svg";
import Gradient from "../assets/Gradient.png";
import WaitlistImage from "../assets/Waitlist Image.png";
import WhyUsIm from "../assets/whyUsIm.svg";
import HowItWorks from "../assets/how-it-works.svg";
import GoalStepsIm from "../assets/goal-steps.svg";
import ObjStepsIm from "../assets/obj-steps.svg";
import VisionIm from "../assets/visionIm.svg";

export type WhyUs = {
  title: string;
  description: string[];
};

const whyUs: WhyUs[] = [
  {
    title: "Farmers and Producers",
    description: [
      "Market Access: Direct access to a wider pool of buyers, reducing reliance on middlemen and securing better prices.",
      "Inventory Management: Tools to track produce in real-time, helping prevent post-harvest losses",
    ],
  },
  {
    title: "Agro-Waste Producers and Suppliers",
    description: [
      "Demand Linkage: Connect agro-waste suppliers with processors, recyclers, and manufacturers looking for agricultural by-products.",
      "Traceability and Transparency: Blockchain-backed traceability ensures that waste suppliers can prove the origin and quality of materials.",
    ],
  },
  {
    title: "Financial Institutions and Credit Providers",
    description: [
      "Qualified Leads: Access to verified farmers and agri-businesses needing financial support for operational growth.",
      "Risk Reduction: Informed lending decisions based on analytics and traceability data provided by PAGEX.",
    ],
  },
  {
    title: "Educational and Training Providers",
    description: [
      "Engaged Audience: Direct access to farmers, producers, and agri-businesses interested in enhancing their skills and knowledge.",
      "Incentivized Learning: Courses or training modules linkedin with PAGEX rewards, encouraging active participation and skill improvement.",
    ],
  },
  {
    title: "Environmental and Sustainability Organizations",
    description: [
      "Collaboration Opportunities: Partnering with PAGEX to promote and implement sustainable agricultural practices.",
      "Real-Time Data on Sustainability Practices: Monitoring tools and reports on the environment impact and climate-smart practices adopted by users.",
    ],
  },
];

const MarketPlace = () => {
  const places = [
    { id: 1, icon: Icon1, label: "Digital Market Linkage" },
    { id: 2, icon: Icon2, label: "Inventory Management" },
    { id: 3, icon: Icon3, label: "Credit & Financing Access" },
    { id: 4, icon: Icon4, label: "Supply Chain Traceability" },
    { id: 5, icon: Icon3, label: "Data Analytics & Reporting" },
    { id: 6, icon: Icon4, label: "Educational Resources" },
    { id: 7, icon: Icon3, label: "E-Wallet Solutions" },
    { id: 8, icon: Icon4, label: "Climate-Smart Practices" },
  ];
  return (
    <section className="h-full font-nunito">
      {/* Hero */}
      <Hero
        backgroundImage={BGImage}
        content={
          <div className="text-center text-white space-2-3 md:space-y-8  w-[90%]  mx-auto">
            <h1 className="hero__title text-[32px] md:text-7xl font-semibold">
              Transforming the
              <span className="text-[#FCA321]"> Agri-Food</span>{" "}
              <br className="hidden md:block" />
              Supply Chain
            </h1>
            <p className="hero__description md:text-2xl md:mt-4 md:w-3/4 mx-auto mb-4">
              PAGEX: Adigital marketplace to optimise the agri-supply chain.
            </p>
            <Link to="/waitlist">
              <button className="w-[138px] h-10 bg-[#379E23] text-white capitalize rounded-xl hover:text-primary-800 transition duration-300 ease-in-out font-bold">
                Join Our Waitlist
              </button>
            </Link>
          </div>
        }
      />
      {/* About Pagex */}
      <div className="w-full p-4 md:p-10 2xl:p-20 flex flex-col md:flex-row justify-between font-nunito gap-10">
        <div className="md:w-[40%]">
          <p className="text-3xl md:text-6xl font-bold text-primary-100">
            About PAGEX
          </p>
          <p className="text-sm md:text-base text-[#878680] py-3">
            it is a transformational platform designed to revolutionize the
            Agri-Food supply chain by bridging gaps between key players and
            supporting sectors. Our solution addresses critical challenges such
            as Agro-Waste management, post-harvest loss, supply chain
            disruptions, and inefficiencies in resource allocation.
          </p>
          <div className="flex items-center justify-between">
            <div className="space-y-4">
              <p className="font-grace text-[#4BAF47] text-lg md:text-2xl">
                Modern agriculture types
              </p>
              <p className="text-[#878680]">
                We're here for you you from start
                <br className="hidden md:block" /> to finish
              </p>
              <Link to="/waitlist">
                <button className="w-[152px] h-[52px] bg-primary-100 text-white rounded-xl hover:bg-primary-200 transition duration-300 ease-in-out">
                  Join our waitlist
                </button>
              </Link>
            </div>
            <img src={AboutImg} />
          </div>
        </div>
        <div className="md:w-[50%] space-y-4">
          <p className="text-[#1F1E17] text-xl md:text-5xl font-bold">
            PAGEX; More than just a digital marketplace
          </p>
          <div className="grid grid-cols-2 gap-5">
            {places.map((place) => (
              <div
                key={place.id}
                className="bg-white border border-[#E5F4F2] rounded-2xl flex items-center gap-4 p-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E5F4F2] flex items-center justify-center">
                  <img src={place.icon} />
                </div>
                <p className="text-sm md:text-lg">{place.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Product Vision & Mission */}
      <div
        id="vision"
        className="w-full flex flex-col md:flex-row items-stretch justify-between p-4 md:p-10 2xl:p-20"
      >
        <div className="space-y-4">
          <div className="w-full md:w-[507px] p-10 bg-gradient-to-b from-[#379E23] to-[#13380C] rounded-2xl space-y-5">
            <div className="w-[170px] bg-[#FFFFFF] rounded-md text-center p-2 text-[#289850] font-bold text-xl">
              Product Vision
            </div>
            <p className="text-white text-lg py-4">
              To be Africa's leading solution for sustainable agricultural
              development by 2037, leveraging technology, innovation, and
              strategic partnerships to transform agriculture into a more
              profitable, inclusive, and environmentally sustainable sector.
            </p>
          </div>
          <div className="w-full md:w-[507px] p-10 bg-gradient-to-b from-[#379E23] to-[#13380C] rounded-2xl space-y-5">
            <div className="w-[170px] bg-[#FFFFFF] rounded-md text-center p-2 text-[#289850] font-bold text-xl">
              Our Mission
            </div>
            <p className="text-white text-lg py-4">
              To empower stakeholders in the agricultural value chain by
              providing seamless access to markets, resources, and insights,
              fostering economic growth, reducing waste, and enhancing
              sustainability.
            </p>
          </div>
          <div className="w-full md:w-[507px] p-10 bg-gradient-to-b from-[#379E23] to-[#13380C] rounded-2xl space-y-5">
            <div className="w-[150px] bg-[#FFFFFF] rounded-md text-center p-2 text-[#289850] font-bold text-xl">
              Our Goals
            </div>
            <ul className="text-white text-lg py-4 space-y-2.5 list-disc">
              <li>
                Provide a seamless, intuitive platform for diverse user
                segments.
              </li>
              <li>
                Enable rapid scaling to meet increasing demand and geographic
                expansion.
              </li>
              <li>
                Ensure high user satisfaction with reliable, secure, and
                efficient services.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src={VisionIm} />
        </div>
      </div>
      {/* PAGEX Objectives */}
      <div
        id="goals"
        className="w-full flex flex-col md:flex-row items-center justify-between p-4 md:p-10 2xl:p-20"
      >
        <div>
          <h3 className="title text-2xl md:text-5xl font-bold text-center">
            PAGEX Objectives
          </h3>
          <img src={GoalStepsIm} />
        </div>
        <div>
          <img src={ObjStepsIm} />
        </div>
      </div>
      {/* Join The Waitlist */}
      <div className="waitlist p-5 py-10 sm:p-10 sm:px-16">
        <div
          className="wrapper rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-12 p-5  sm:p-14 text-white"
          style={{
            backgroundImage: `url(${Gradient})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text space-y-8">
            <h3 className="text-3xl md:text-5xl font-bold ">
              Join the Waitlist!
            </h3>
            <p className="text-white/80 text-sm sm:text-2xl font-medium ">
              Be the first to experience the future of agritech with Pazelgreen.
              Sign up now to secure early access to our innovative tools and
              resources designed to help you grow your business, increase
              efficiency, and stay ahead of the competition.{" "}
            </p>
            <p className="text-white/80 text-sm sm:text-2xl font-medium">
              Don&#39;t miss out—limited spots available!
            </p>

            <Link
              to="/waitlist"
              className="bg-white text-primary-100 capitalize rounded-xl hover:bg-white hover:text-green-800 font-medium transition duration-300 ease-in-out p-4"
            >
              Join the waitlist!
            </Link>
          </div>
          <div className="image relative min-h-[350px] sm:min-h-[417px] overflow-hidden rounded-2xl">
            <img
              src={WaitlistImage}
              className="w-full h-full object-cover"
              alt="farmer"
            />
          </div>
        </div>
      </div>
      {/* Concerns Addressed */}
      <div className="w-full bg-[#DEF7D9]/70 p-4 md:p-10 2xl:p-20 my-10 space-y-10 md:space-y-20">
        <div className="text-center md:text-left my-4 text-2xl md:text-5xl font-bold">
          Concerns addressed <br className="block md:hidden" /> by PAGEX
        </div>
        <div className=" steps flex flex-col gap-3">
          <div className="step flex space-x-4 items-center bg-white p-8 px-10 relative border border-black">
            <div className="absolute top-7 -left-3.5 bg-primary-500 text-xl font-bold p-4 w-8 h-8 rounded-sm text-white flex items-center justify-center uppercase">
              I
            </div>
            <div className="step__content space-y-1 md:space-y-3">
              <p className="font-bold text-2xl md:text-3xl text-[#1E1E1E]">
                Problem Statement
              </p>
              <ul className="list-decimal pl-5 space-y-2 text-[#333333]/57 text-sm md:text-base">
                <li>
                  30-40% of agricultural produce in Nigeria is wasted due to
                  poor market access and 50% due to poor cold chain logistics.
                </li>
                <li>
                  Inefficient supply chains reduce profitability for producers
                  and increase costs for buyers.
                </li>
                <li>
                  Poor agro-waste management contributes to environmental
                  degradation and health hazards.
                </li>
                <li>
                  {" "}
                  Buyers and processors face challenges sourcing consistent,
                  high-quality supplies.
                </li>
                <li>
                  Third-party service providers, including logistics and credit
                  facilities, lack an integrated platform to engage with
                  agricultural stakeholders..
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center md:text-left my-4 text-2xl md:text-5xl font-bold">
          Impact Expected <br /> Overtime
        </div>
        <div className=" steps flex flex-col gap-3">
          <div className="step flex space-x-4 items-center bg-white p-8 px-10 relative border border-black">
            <div className="absolute top-7 -left-3.5 bg-primary-500 text-xl font-bold p-4 w-8 h-8 rounded-sm text-white flex items-center justify-center uppercase">
              I
            </div>
            <div className="step__content space-y-1 md:space-y-3">
              <p className="font-bold text-2xl md:text-3xl text-[#1E1E1E]">
                Product Influence
              </p>
              <ul className="list-decimal pl-5 space-y-2 text-[#333333]/57">
                <li>Better Pricing and Improved Profitability</li>
                <li>Reduced Spoilage and Waste Disposal Costs </li>
                <li>
                  Improved financial security, cash flow, and production
                  investment opportunities for agricultural businesses.
                </li>
                <li>
                  Lower Carbon Footprint and Increased Resilience & adaptation
                  to Climate Change
                </li>
                <li>Efficient Operations and Transparent Supply Chain</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* How It Works */}
      <div
        id="how-it-works"
        className="flex flex-col items-center justify-center gap-4 md:gap-10 my-4 md:my-10 p-4 md:p-10 2xl:p-20"
      >
        <header className="text-center md:space-y-4">
          <h3 className="title text-2xl md:text-5xl font-bold">How It Works</h3>
          <p className="text-lg text-gray-900 w-full mx-auto">
            We provide a seamless and efficient process for our customers
          </p>
        </header>
        <div>
          <img src={HowItWorks} />
        </div>
      </div>
      {/* Volunteer */}
      <div
        id="volunteer-with-us"
        className="w-full bg-gradient-to-b from-[#239D18]/100 to-[#0C3708] h-[213px] md:h-[128px] flex flex-col md:flex-row items-center justify-center md:justify-around gap-4"
      >
        <p className="text-white font-bold text-2xl md:text-5xl">
          Would you like to Volunteer
        </p>
        <button className="text-primary-100 font-semibold bg-white rounded-xl p-4">
          Fill in the form
        </button>
      </div>
      {/* Explore Benefits */}
      <div id="features" className="features__container p-5">
        <header className="text-center space-y-4">
          <small className="subtitle text-lg font-medium text-primary-600 capitalize">
            Features
          </small>
          <h3 className="title text-2xl md:text-5xl font-bold">
            Explore PAGEX Benefits
          </h3>
          <p className="text-lg text-gray-900 w-full md:w-[350px] mx-auto">
            Pagex has everything you need to help your farm business a success.
          </p>
        </header>

        <FeatureGrid features={pagexFeatures} />
      </div>
      {/* Why Choose Us */}
      <div className="w-full gap-10 p-4 md:p-10 2xl:p-20 bg-[#DEF7D9]/70">
        <div className="text-center my-6 text-2xl md:text-5xl font-bold">
          Why Choose Us
        </div>
        <div className="w-full flex flex-col md:flex-row items-stretch justify-between gap-10">
          <div>
            <img src={WhyUsIm} />
          </div>
          <div className="md:w-[50%] steps flex flex-col gap-3">
            {whyUs.map((why, index) => {
              const romanNumerals = [
                "i",
                "ii",
                "iii",
                "iv",
                "v",
                "vi",
                "vii",
                "viii",
                "ix",
                "x",
              ];
              return (
                <div
                  className="step flex space-x-4 items-center bg-white p-8 px-10 rounded-lg relative border border-black-300/10"
                  key={index}
                >
                  <div className="absolute top-7 -left-3.5 bg-primary-500 text-xl font-bold p-4 w-8 h-8 rounded-sm text-white flex items-center justify-center uppercase">
                    {romanNumerals[index] || index + 1}
                  </div>
                  <div className="step__content space-y-1 md:space-y-3">
                    <h4 className="text-2xl font-bold">{why.title}</h4>
                    <ul className="text-gray-700 list-disc pl-5 space-y-1">
                      {why.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Marketplace */}
      <div>
        <MarketplaceSection />
      </div>
    </section>
  );
};

export default MarketPlace;
