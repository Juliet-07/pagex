import React, { useState } from "react";
import Green from "/src/assets/Article.svg";
import SocialMediaLinks from "./SocialMediaLinks";
import ArticleMeta from "./Details";

const Article = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const toggleContent = () => setIsExpanded((prev) => !prev);

  return (
    <div className="font-nunito flex flex-col gap-8">
      <img src={Green} width={700} height={400} alt="Sector Industries" />

      <ArticleMeta />

      <h1 className="text-[25px] lg:text-3xl font-bold">
        The Future of Farming, Smart Irrigation Solutions
      </h1>

      {/* Toggleable Content */}
      <div className="text-[#15141199] flex flex-col gap-5">
        <span>
          In recent years, smart irrigation has emerged as a transformative
          solution in agriculture, addressing the critical need for efficient
          water use while ensuring crop health and sustainability. As global
          water scarcity becomes an increasing concern, the demand for smarter
          water management technologies is growing. Smart irrigation systems
          leverage advanced technologies such as sensors, weather forecasting,
          and automated controls to optimize water usage, improve crop yields,
          and minimize environmental impact.
        </span>

        <span>
          What is Smart Irrigation? <br />
          Smart irrigation refers to the use of advanced technologies to
          automatically adjust watering schedules and amounts based on real-time
          data, weather forecasts, and soil moisture levels. Unlike traditional
          irrigation systems that operate on fixed schedules, smart systems
          utilize sensors and data analytics to deliver water only when and
          where it is needed.
        </span>

        {isExpanded && (
          <span>
            Smart irrigation is not just a technological trend—it is a necessary
            evolution in the way we manage water resources in agriculture. By
            making irrigation systems more efficient and data-driven, smart
            irrigation helps conserve water, reduce costs, improve crop health,
            and protect the environment. As the technology continues to advance
            and become more accessible, smart irrigation has the potential to
            revolutionize agriculture, particularly in regions facing water
            scarcity and environmental challenges.
          </span>
        )}

        <div className="flex justify-center lg:justify-end">
          <button
            onClick={toggleContent}
            className="border border-primary-400 text-primary-400 rounded-md px-5 py-2"
          >
            {isExpanded ? "See Less" : "See More"}
          </button>
        </div>
      </div>

      {/* Linked Articles */}
      <div className="flex flex-col md:flex-row gap-5 lg:gap-4 text-xl text-[#121212CC] font-semibold">
        <div className="bg-[#BCBBC133] p-5 lg:p-12 rounded-md lg:rounded-2xl text-[18px]">
          <a href="#">Agronomy and relation to Other Sciences</a>
        </div>
        <div className="bg-[#BCBBC133] p-5 lg:p-12 rounded-md lg:rounded-2xl text-[18px]">
          <a href="#">Bringing Food Production Back To Cities</a>
        </div>
      </div>

      <div className="h-px bg-gray-200 w-full" />

      {/* Tags */}
      <div className="flex items-center gap-5 flex-wrap">
        <p className="font-bold">Tags</p>
        <a
          href="#"
          className="border border-primary-400 text-primary-400 rounded-md px-2 lg:px-5 py-2"
        >
          Harvest
        </a>
        <a
          href="#"
          className="border border-primary-400 text-primary-400 rounded-md px-2 lg:px-5 py-2"
        >
          Vegetables
        </a>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-10">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-2xl">Leave a Comment</p>
          <div className="flex items-start gap-2 text-sm text-[#878680]">
            <button type="button" />
            <p>
              Save my name, email, and website in this browser for the next time
              I comment.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-[#0000000D] rounded-md placeholder:text-sm placeholder-[#878680] placeholder:font-semibold"
            placeholder="Full Name"
          />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-[#0000000D] rounded-md placeholder:text-sm placeholder-[#878680] placeholder:font-semibold"
            placeholder="Email Address"
          />
        </div>

        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 bg-[#0000000D] rounded-md focus:ring-2 focus:ring-[#379E23] placeholder:text-sm placeholder-[#878680] placeholder:font-semibold"
          placeholder="Write Comment"
        />

        <button
          type="submit"
          className="bg-[#379E23] text-white px-[2rem] py-2 rounded-md self-start"
        >
          Post Comment
        </button>
      </form>

<div className="hidden lg:block">
<SocialMediaLinks />
</div>
     
    </div>
  );
};

export default Article;
