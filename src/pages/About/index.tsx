import { Link } from "react-router-dom";
import ValuesGrid, { pagexValues } from "./values";
import Hero from "./Hero";
import BGImage from "../../assets/aboutHero.svg";
import Gradient from "../../assets/Gradient.png";
import WaitlistImage from "../../assets/Waitlist Image.png";
import MarketplaceSection from "../../components/Marketplace";
import Float1 from "../../assets/float-image1.svg";
import Float2 from "../../assets/float-image2.svg";
import Float3 from "../../assets/float-image3.svg";
import Float4 from "../../assets/float-image4.svg";
import FounderIm from "../../assets/founder.svg";
import GoalsIm from "../../assets/goals-image.svg";
import ProblemIm from "../../assets/problem.svg";
import SolutionsIm from "../../assets/solution-farmer.svg";
import ObjIm from "../../assets/objImage.svg";
import SDG1 from "../../assets/sdgs/sdg_1.svg";
import SDG2 from "../../assets/sdgs/sdg_2.svg";
import SDG3 from "../../assets/sdgs/sdg_3.svg";
import SDG4 from "../../assets/sdgs/sdg_4.svg";
import SDG5 from "../../assets/sdgs/sdg_5.svg";
import SDG6 from "../../assets/sdgs/sdg_6.svg";
import SDG7 from "../../assets/sdgs/sdg_7.svg";
import SDG8 from "../../assets/sdgs/sdg_8.svg";
import SDG9 from "../../assets/sdgs/sdg_9.svg";
import SDG10 from "../../assets/sdgs/sdg_10.svg";
import SDG11 from "../../assets/sdgs/sdg_11.svg";
import SDG12 from "../../assets/sdgs/sdg_12.svg";
import Dot from "../../assets/icons/bullet.svg";

export type Goals = {
  title: string;
  description: string;
};

export type Objectives = {
  title: string;
  description: string;
};

export type Impacts = {
  title: string;
  points: string[];
};

export type SDG = {
  id: number;
  icon: string;
};

const goals: Goals[] = [
  {
    title: "Create Efficient Market Linkages and Drive Innovation",
    description:
      "Utilize blockchain, data analytics, and logistics networks to optimize market access, transparency, and accountability. Drive continuous development of sustainable solutions to foster agricultural growth, innovation, and expanded opportunities across the value chain.",
  },
  {
    title: "Enhance Agricultural Sustainability and Climate Resilience",
    description:
      "Develop eco-friendly, technology-driven solutions to promote sustainable, climate-smart practices that reduce waste, enhance productivity, and support long-term environmental resilience.",
  },
  {
    title: "Reduce Post-Harvest Loss and Agro-Waste",
    description:
      " Implement advanced tools and data-driven systems to minimize post-harvest losses, particularly in perishable goods, fostering food security and improving economic outcomes.",
  },
  {
    title: "Empower Women, Youths, and Rural Communities",
    description:
      "Provide targeted training and resources to women, young people, and smallholder farmers, increasing their access to markets, financing, and sustainable farming practices for economic empowerment and continuous agricultural development.",
  },
];

const objectives: Objectives[] = [
  {
    title: "Mitigating the problem of Food and Agro-wastes",
    description:
      "Develop innovative solutions to reduce post-harvest losses and improve food security, Improve access to cold chain solutions and farm-to-market linkages to reduce spoilage and inefficiencies.",
  },
  {
    title:
      "Promote sustainable Agricultural practices, improving revenue for Agri-Food Chain players",
    description:
      "Support climate adaptation, resilience, and regenerative agriculture in Africa, facilitating better market access and value addition for agricultural produce and agro-wastes.",
  },
  {
    title:
      "Foster Strategic Partnerships for Financial Access and Support for Women and Youth in Agriculture ",
    description:
      "Provide financial inclusion for farmers and agree-businesses through partnerships with credit facilities. Train and empower women and young people in sustainable agribusiness through initiatives.",
  },
  {
    title:
      "Leverage Digital Solutions for Agriculture, driving Research, Data, and AI Integration for development",
    description:
      "Build tech-driven platforms and solutions that utilize traceability systems, data analytics, and AI to optimize agricultural systems and improve Agri-Food chain resilience",
  },
];

const impacts: Impacts[] = [
  {
    title: "Social Economic",
    points: [
      "Reduced Income for Farmers",
      "Increased Food Prices",
      "Worsening Food Security",
      "Job Losses and Economic Instability",
    ],
  },
  {
    title: "Climate Impact",
    points: [
      "Greenhouse Gas Emission",
      "Deforestation Pressure",
      "Increased Vulnerability to Climate Change",
    ],
  },
  {
    title: "Environmental Impact",
    points: [
      "Increased Landfill Use",
      "Soil Degradation",
      "Water Contamination",
    ],
  },
  {
    title: "Health Impact",
    points: [
      "Malnutrition",
      "Foodborne Illnesses",
      "Health Risk from Waste Accumulation",
    ],
  },
];

const sdgs: SDG[] = [
  {
    id: 1,
    icon: SDG1,
  },
  {
    id: 2,
    icon: SDG2,
  },
  {
    id: 3,
    icon: SDG3,
  },
  {
    id: 4,
    icon: SDG4,
  },
  {
    id: 5,
    icon: SDG5,
  },
  {
    id: 6,
    icon: SDG6,
  },
  {
    id: 7,
    icon: SDG7,
  },
  {
    id: 8,
    icon: SDG8,
  },
  {
    id: 9,
    icon: SDG9,
  },
  {
    id: 10,
    icon: SDG10,
  },
  {
    id: 11,
    icon: SDG11,
  },
  {
    id: 12,
    icon: SDG12,
  },
];

const About = () => {
  // const location = useLocation();
  // useEffect(() => {
  //   const hash = location.hash;
  //   if (hash) {
  //     const element = document.querySelector(hash);
  //     if (element) {
  //       setTimeout(() => {
  //         element.scrollIntoView({ behavior: "smooth" });
  //       }, 100);
  //     }
  //   }
  // }, [location]);
  return (
    <section className="h-full font-nunito">
      <Hero
        backgroundImage={BGImage}
        content={
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold">
              About <span className="text-[#FCA321]">Us</span>
            </h1>
            <p className="mt-4 max-w-lg mx-auto text-lg">
              “Solutions are not just products but movement towards achieving a
              robust and low-waste economy in Africa”
            </p>
          </div>
        }
        floatingImages={[Float1, Float2, Float3, Float4]}
      />
      {/* Founder's Message */}
      <div className="w-full p-4 md:p-10 2xl:p-20 flex items-center justify-center mt-[100px] mb-10">
        <div className="w-full flex flex-col-reverse md:flex-row items-stretch justify-between gap-4">
          <div>
            <img src={FounderIm} />
          </div>
          <div className="md:w-[50%] space-y-4 md:space-y-8">
            <p className="text-black font-bold text-2xl md:text-6xl">
              Founder's Message
            </p>
            <p className="font-medium text-[#121212]/80 leading-8">
              At Pazelgreen, we are committed to designing innovative and
              sustainable solutions that tackle the critical challenges faced by
              players in Nigeria's agri-food supply chain. Our focus is on
              addressing issues that hinder agricultural development, with a
              particular emphasis on mitigating food and agro-waste problems.
              <br />
              <br />
              By providing solutions that enhance business sustainability and
              profitability for stakeholders, we aim to drive growth across the
              sector. In doing so, we contribute to the overall socio-economic
              development of the country, while fostering long-term resilience
              and progress within the agricultural landscape. 
              <br />
              <br /> For us: “Solutions are not just products but a movement
              towards achieving a robust and low-waste economy in Africa”
            </p>
            <p className="font-bold text-black text-lg md:text-2xl">
              Founder & CEO
              <br /> Oluwadamilola Olowoseunre Roseline
            </p>
          </div>
        </div>
      </div>
      {/* Mission & Vision */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 p-4 md:p-0">
        <div className="md:w-[50%] h-[264px] md:h-[500px] bg-gradient-to-b from-[#70410B] to-[#D67C15] flex flex-col md:flex-row md:items-center justify-center md:justify-around text-white p-5 md:p-0 space-y-3">
          <p className="font-bold text-2xl md:text-5xl">
            Our <br className="hidden md:block" />
            Vision
          </p>
          <div className="md:w-[310px]  text-lg md:text-xl">
            To become one of the leading solutions in Africa for agricultural
            growth and development by 2037 through innovation, diversification
            and partnerships.
          </div>
        </div>
        <div className="md:w-[50%] h-[264px] md:h-[500px] bg-gradient-to-b from-[#239D18]/100 to-[#0C3708] flex flex-col md:flex-row md:items-center justify-center md:justify-around text-white p-5 md:p-0 space-y-3">
          <p className="font-bold text-2xl md:text-5xl">
            Our <br className="hidden md:block" />
            Mission
          </p>
          <div className="md:w-[336px] text-lg md:text-xl">
            Providing innovative and sustainable integrated solutions to
            mitigate the problem of food and other agro-wastes thereby enhancing
            productivity, climate adaptation, and resilience across the
            agricultural value chain.
          </div>
        </div>
      </div>
      {/* Goals */}
      <div
        id="goals"
        className="w-full flex flex-col md:flex-row items-stretch justify-between gap-10 p-4 md:p-10 2xl:p-20 my-10"
      >
        <div>
          <p className="block md:hidden font-bold text-2xl text-center my-3 ">
            Goals
          </p>
          <img src={GoalsIm} />
        </div>
        <div className="md:w-[60%] steps flex flex-col gap-3">
          <p className="hidden md:block font-bold text-5xl ">Goals</p>
          {goals.map((goal, index) => {
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
                  <h4 className="text-2xl font-bold">{goal.title}</h4>
                  <p className="text-gray-700">{goal.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Objectives */}
      <div
        id="objectives"
        className="w-full gap-10 p-4 md:p-10 2xl:p-20 bg-[#A3772E]/10"
      >
        <p className="my-4 text-center md:text-left font-bold text-2xl md:text-5xl">
          Objectives
        </p>
        <div className="w-full flex flex-col-reverse md:flex-row items-stretch justify-between gap-10">
          <div className="md:w-[60%] steps flex flex-col gap-3">
            {objectives.map((obj, index) => {
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
                    <h4 className="text-2xl font-bold">{obj.title}</h4>
                    <p className="text-gray-700">{obj.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <img src={ObjIm} />
          </div>
        </div>
      </div>
      {/* Company Values */}
      <div className="features__container p-5 md:py-10 2xl:py-20" id="values">
        <header className="text-center space-y-4">
          <h3 className="title text-2xl md:text-5xl font-bold">
            Our Company Values
          </h3>
        </header>
        <ValuesGrid values={pagexValues} />
      </div>
      {/* Volunteer */}
      <div className="w-full bg-gradient-to-b from-[#239D18]/100 to-[#0C3708] h-[213px] md:h-[128px] flex flex-col md:flex-row items-center justify-center md:justify-around gap-4">
        <p className="text-white font-bold text-2xl md:text-5xl">
          Would you like to Volunteer
        </p>
        <button className="text-primary-100 font-semibold bg-white rounded-xl p-4">
          Fill in the form
        </button>
      </div>
      {/* Why We Exist */}
      <div className="w-full flex flex-col items-center justify-center p-4 md:p-10 2xl:p-20">
        <header className="text-center space-y-4">
          <h3 className="title text-2xl md:text-5xl font-bold my-4">
            Why We Exist
          </h3>
        </header>
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div>
            <p className="hidden md:block font-bold text-2xl md:text-5xl text-center md:text-left my-3 ">
              The Problem
            </p>
            <img src={ProblemIm} />
          </div>
          <div className="md:w-[55%]">
            <p className="py-3 md:py-5 text-lg md:text-2xl text-[#308F1E] font-bold">
              Post Harvest Loss & Agro-Waste Management
            </p>
            <p className=" text-base md:text-lg text-[#151411]/60">
              The agricultural sector faces significant challenges related to
              agro-waste management and post-harvest losses, primarily driven by
              several key factors. Poor market linkages and limited access to
              credit prevent farmers and producers from optimizing the value of
              their products. Additionally, the absence of adequate cold chain
              infrastructure and logistics systems exacerbates the spoilage of
              perishable goods, leading to substantial losses across the value
              chain.
              <br />
              <br />A lack of awareness surrounding waste management practices
              and climate adaptation strategies further hinders efforts toward
              resilience and sustainability in agriculture. These shortcomings
              contribute to the inefficiency and environmental degradation
              prevalent in the industry.
            </p>
            <div>
              <p className="py-3 md:py-5 text-lg md:text-2xl text-[#308F1E] font-bold">
                Other Contributing factors Include:
              </p>
              {/* 1 */}
              <div className="flex items-center gap-2.5 md:gap-4">
                <img src={Dot} className="w-5" />
                <p className=" text-base md:text-lg text-[#151411]/60">
                  Limited access to market information and data fragmentation,
                  which prevents informed decision-making across the supply
                  chain.
                </p>
              </div>
              {/* 2 */}
              <div className="flex items-center gap-2.5 md:gap-4">
                <img src={Dot} className="w-5" />
                <p className=" text-base md:text-lg text-[#151411]/60">
                  A scarcity of research and development centers dedicated to
                  advancing innovations in agro-waste management and resource
                  optimization.
                </p>
              </div>
              {/* 3 */}
              <div className="flex items-center gap-2.5 md:gap-4">
                <img src={Dot} className="w-5" />
                <p className=" text-base md:text-lg text-[#151411]/60">
                  Inadequate funding and investment opportunities for farmers
                  and agribusinesses to adopt sustainable practices.
                </p>
              </div>
              {/* 4 */}
              <div className="flex items-center gap-2.5 md:gap-4">
                <img src={Dot} className="w-5" />
                <p className=" text-base md:text-lg text-[#151411]/60">
                  A lack of implementation frameworks that support minimal
                  resource wastage and promote a circular economy approach,
                  ensuring resources are maximized and waste is minimized
                  throughout the agricultural process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Negative Impact */}
      <div className="w-full bg-[#A3772E]/5 p-4 md:p-10 2xl:p-20 my-10 flex flex-col md:items-center md:justify-center gap-5 md:gap-10">
        <header className="md:text-center space-y-4">
          <h3 className="title text-2xl md:text-5xl font-bold">
            Negative Impact
          </h3>
        </header>
        <div className="md:w-[60%] grid md:grid-cols-2 gap-10">
          {impacts.map((impact, index) => (
            <div key={index} className="space-y-4">
              <h2 className="text-lg md:text-2xl text-[#379E23] font-semibold">
                {impact.title}
              </h2>
              <ul className="">
                {impact.points.map((point, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <img src={Dot} className="w-2" />
                    <span className="text-base md:text-lg text-[#151411]/60">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* SDGs Targeted */}
      <div
        id="SDG"
        className="w-full flex flex-col items-center justify-center gap-6 md:gap-10"
      >
        <header className="text-center space-y-4">
          <h3 className="title text-2xl md:text-5xl font-bold">
            SDGs Targeted
          </h3>
        </header>
        <div className="w-full bg-[#379E23]/20 flex items-center justify-center px-4 py-10">
          <div className="grid gap-4 md:gap-10 2xl:gap-20 grid-cols-6">
            {sdgs.map((sdg) => (
              <div key={sdg.id}>
                <img src={sdg.icon} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* The Solution */}
      <div
        id="solutions"
        className="w-full p-4 md:p-10 flex flex-col md:flex-row items-center justify-between"
      >
        <div>
          <p className=" font-bold text-2xl md:text-5xl text-center md:text-left my-3 ">
            The Solution
          </p>
          <img src={SolutionsIm} />
        </div>
        <div className="md:w-[55%]">
          <p className="py-3 md:py-5 text-lg md:text-2xl text-[#308F1E] md:text-black font-medium md:font-bold">
            Introducing PAGEX
          </p>
          <p className=" text-base md:text-lg text-[#151411]/60">
            PAGEX is more than just a digital marketplace; it is a
            transformational platform designed to revolutionize the agri-food
            supply chain by bridging gaps between key players and supporting
            sectors. Our solution addresses critical challenges such as
            agro-waste management, post-harvest loss, supply chain disruptions,
            and inefficiencies in resource allocation.
            <br />
            <br />
            By connecting farmers, especially the smallholder farmers,
            processors, logistics providers, financial institutions, and waste
            management operators, PAGEX fosters seamless integration, ensuring
            every aspect of the supply chain operates with greater efficiency,
            profitability, and traceability. Through this innovation, businesses
            can adapt to climate challenges and build resilience in a rapidly
            changing environment.
            <br />
            <br />
            This is just the beginning. PAGEX is the first in a series of
            pioneering solutions from Pazelgreen Technologies, aimed at
            reshaping the agricultural landscape. Stay tuned as we continue to
            innovate and introduce more groundbreaking solutions designed to
            reduce waste, enhance market access, and build sustainable futures
            across the agricultural value chain.
          </p>
        </div>
      </div>
      {/* Join The Waitlist */}
      <div className="waitlist p-5 sm:p-10 sm:px-16">
        <div
          className="wrapper rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-12 p-5  sm:p-14 text-white"
          style={{
            backgroundImage: `url(${Gradient})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text space-y-5 md:space-y-10">
            <h3 className="text-3xl md:text-5xl font-bold ">
              Join the Waitlist!
            </h3>
            <p className="text-white/80 text-sm sm:text-2xl font-medium leading-6 md:leading-10">
              Be the first to experience the future of agritech with Pazelgreen.
              Sign up now to secure early access to our innovative tools and
              resources designed to help you grow your business, increase
              efficiency, and stay ahead of competition.{" "}
            </p>
            <p className="text-white/80 text-sm sm:text-2xl font-medium pb-4 md:pb-0">
              Don&#39;t miss out—limited spots available!
            </p>

            <Link
              to="/waitlist"
              className="bg-white text-primary-100 rounded-xl hover:bg-white hover:text-green-800 font-semibold transition duration-300 ease-in-out p-4"
            >
              Join the Waitlist!
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
      {/* Why Now */}
      <div id="whyNow" className="w-full bg-[#A3772E]/10 p-4 md:p-10 2xl:p-20">
        <div className="mb-3 md:mb-6">
          <h3 className="title text-2xl md:text-6xl font-bold">Why Now?</h3>
        </div>
        <div className="space-y-6 text-[#151411]/60 text-base md:text-lg">
          <div className="flex items-center gap-2.5 md:gap-4">
            <img src={Dot} className="w-5" />
            <div className="leading-8">
              In Nigeria and across Africa, agriculture faces urgent challenges
              like post-harvest losses, agro-waste mismanagement, and rising
              demand for nutritious food amid a rapidly growing population.
              These issues deepen malnutrition and limit the potential of
              smallholder farmers, who form the backbone of the continent’s
              agricultural sector.
              <br /> Many existing solutions are fragmented and fail to tackle
              the core issues affecting the agri-food supply chain leaving gaps
              in efficiency, traceability, and profitability.
            </div>
          </div>

          <div className="flex items-center gap-2.5 md:gap-4">
            <img src={Dot} className="w-5" />
            <div className="leading-8">
              PAGEX offers a comprehensive platform tailored to Africa’s unique
              needs, connecting agri food chain players to reduce food waste,
              improve traceability, agro waste management & recycling While
              increasing disposable income. By fostering climate resilience and
              promoting sustainable agricultural practices, PAGEX goes beyond
              productivity, it addresses the pressing need for long-term
              sustainability for the agri-food supply chain in Nigeria and
              across Africa.
            </div>
          </div>

          <div className="flex items-center gap-2.5 md:gap-4">
            <img src={Dot} className="w-5" />
            <div className="leading-8">
              With the global spotlight on climate action and food security,
              Africa needs innovative solutions like PAGEX now more than ever.
              Beyond improving productivity and efficiency, we strive towards
              enabling sustainable solutions that support climate adaptation and
              resilience by encouraging a smooth transition to a circular
              economy.
            </div>
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

export default About;
