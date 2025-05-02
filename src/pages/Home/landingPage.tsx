import { Link } from "react-router-dom";
import FeatureGrid, { pagexFeatures } from "../../components/Features";
import Hero from "../../components/Hero";
import MarketplaceSection from "../../components/Marketplace";
import EmblaCarousel from "./Hero-Carousel";
import Testimonials from "./testimonials";
import BGImage from "../../assets/green-planet.png";
import Frame36 from "../../assets/Frame 36.png";
import Frame37 from "../../assets/Frame 37.png";
import Frame38 from "../../assets/Frame 38.png";
import HowItWorks from "../../assets/how-it-works.png";
import AboutImg from "../../assets/about.svg";
import Gradient from "../../assets/Gradient.png";
import WaitlistImage from "../../assets/Waitlist Image.png";
import FAQ from "./faq";
import Icon1 from "../../assets/FlyingSaucer.svg";
import Icon2 from "../../assets/MagicWand.svg";
import Icon3 from "../../assets/BoundingBox.svg";
import Icon4 from "../../assets/Package.svg";
import PricingSection from "./subscription-plans";

const gallery = [
  {
    id: 1,
    url: Frame36,
  },
  {
    id: 2,
    url: Frame37,
  },
  {
    id: 3,
    url: Frame38,
  },
  {
    id: 4,
    url: Frame36,
  },
  {
    id: 5,
    url: Frame37,
  },
  {
    id: 6,
    url: Frame38,
  },
];

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

export type HowItWorks = {
  title: string;
  description: string;
};

const howItWorks: HowItWorks[] = [
  {
    title: "Sign Up",
    description:
      "Create an account and personalize your profile based on your farm or business needs.",
  },
  {
    title: "Access Resources and Insights",
    description:
      "Access marketplace, get insights, market data, and educational materials to improve your practices.",
  },
  {
    title: "Manage Your operations",
    description:
      "Use the customized dashboard to monitor your farm operations, manage logistics, and track supply chain activities.",
  },
  {
    title: "Grow Your Business",
    description:
      "Leverage financial services such as loans or credit to expand your operations, and enjoy seamless logistics support for delivering your products.",
  },
];

const Home = () => {
  return (
    <section className="h-full font-nunito">
      <Hero
        backgroundImage={BGImage}
        content={
          <div className="text-center text-white space-2-3 md:space-y-8  w-[90%]  mx-auto">
            <h1 className="hero__title text-[32px] md:text-7xl font-semibold">
              Redefining Agriculture in
              <span className="text-[#FCA321]"> Africa</span>
            </h1>
            <p className="hero__description md:text-2xl md:mt-4 md:w-3/4 mx-auto mb-4">
              “Solutions are not just products but a movement towards achieving
              a robust and low-waste economy in Africa”{" "}
            </p>

            <button className="w-[122px] md:w-[218px] h-[44px] md:h-[56px] bg-white text-primary-600 capitalize rounded-xl hover:text-primary-800 transition duration-300 ease-in-out font-bold">
              Get Started
            </button>
            <div className="hidden md:flex max-w-screen overflow-hidden  relative  md:w-[70vw] mx-auto ">
              <EmblaCarousel slides={gallery} />
            </div>
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
      {/* Explore Benefits */}
      <div className="features__container p-5">
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
      {/* How It Works */}
      <div className="how_it_works bg-[#A3772E]/10 p-5 sm:p-10 sm:px-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6 md:space-y-10 ">
          <div className="subtitle w-[112.4px] h-[30.2px] text-xs text-center font-medium text-primary-600 capitalize bg-white/80 rounded-lg p-2 px-3 mb-2">
            How it works
          </div>
          <h3 className="title text-2xl md:text-5xl font-bold flex sm:block mb-3 gap-1.5">
            <p> It&#39;s just 4 </p> <p>simple steps</p>
          </h3>
          <div className="image relative p-5 px-6 rounded-xl bg-primary-500/10 w-full sm:w-[336px]">
            <img
              src={HowItWorks}
              width={336}
              height={355}
              alt="frame 36"
              className="rounded-xl"
            />
            <p className="text-gray-900 mt-4 mb-5">
              Connect your stores and let us manage your business from start to
              finish
            </p>
          </div>
        </div>
        <div className="steps flex flex-col gap-3">
          {howItWorks.map((step, index) => {
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
                <div className="step__content">
                  <h4 className="text-2xl font-bold">
                    Step {index + 1}: {step.title}
                  </h4>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            );
          })}
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
      {/* Testimonials */}
      <div className="testimonials__container p-5">
        <header className="text-center space-y-4">
          <small className="subtitle text-lg font-medium text-primary-600 capitalize">
            TESTIMONIALS
          </small>
          <h3 className="title text-2xl md:text-5xl font-bold">
            Hear what our customers have to say about us
          </h3>
          <p className="text-lg text-gray-900 w-full md:w-[400px] mx-auto">
            Don’t take our word for it. See what the community has to say about
            it{" "}
          </p>
        </header>
        <Testimonials />
      </div>
      {/* FAQ */}
      <div>
        <FAQ />
      </div>
      {/* Subscription Plans */}
      <div className="w-full p-4 md:p-10 2xl:p-20 font-nunito">
        <header className="text-center space-y-4">
          <small className="subtitle text-lg font-medium text-primary-600 capitalize">
            Plans
          </small>
          <h3 className="title text-2xl md:text-5xl font-bold">
            Subscription Packets
          </h3>
          <p className="text-lg text-gray-900 w-full md:w-[350px] mx-auto">
            No hidden fees, just simple and affordable plans tailored to your
            needs
          </p>
        </header>
        <PricingSection />
      </div>
      {/* Marketplace */}
      <div>
        <MarketplaceSection />
      </div>
    </section>
  );
};

export default Home;
