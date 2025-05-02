import { useState } from "react";
import ArticleMeta from "./Details";
import image1 from "/src/assets/harvest.svg";
import image2 from "/src/assets/plant.svg";
import image3 from "/src/assets/farmer.svg";
import image4 from "/src/assets/farm.svg";

const articles = [
  {
    id: 1,
    image: image1,
    title: "Organic Farming Trends: The Future of Eco-Friendly Agriculture",
  },
  {
    id: 2,
    image: image2,
    title: "Organic Farming Trends: The Future of Eco-Friendly Agriculture",
  },
  {
    id: 3,
    image: image3,
    title: "Organic Farming Trends: The Future of Eco-Friendly Agriculture",
  },
  {
    id: 4,
    image: image4,
    title: "Organic Farming Trends: The Future of Eco-Friendly Agriculture",
  },
];

export default function ArticleCard() {
  const [showAll, setShowAll] = useState(false);

  const displayedArticles = showAll ? articles : articles.slice(0, 2);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-3xl font-bold">Latest Post</p>

      <div className="flex flex-col items-center space-y-6">
        {displayedArticles.map((article) => (
          <div
            key={article.id}
            className="bg-white shadow-lg rounded-xl p-4 w-full max-w-3xl"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-[100%] object-cover rounded-lg"
            />
            <div className="mt-4">
              <ArticleMeta />
              <h2 className="mt-2 text-[13px] lg:text-xl font-semibold text-gray-800">
                {article.title}
              </h2>
              <a href="#">
              <button className="mt-3 px-2 py-2 lg:px-6 lg:py-3 bg-green-600 text-white rounded-lg lg:text-base">
                Read More
              </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* See All / See Less Toggle */}
      <button
        className="mt-3 py-2 lg:px-6 lg:py-3 bg-green-600 text-white rounded-lg text-base w-[50%]"
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? "See Less" : "See All"}
      </button>

      {/* Categories */}
      <div className="bg-[#BCBBC133] flex flex-col p-6 space-y-5 rounded-md">
        <span className="font-bold">Categories</span>
        <a href="#" className="text-[#878680]">Agriculture</a>
        <a href="#" className="text-[#878680]">Farm</a>
        <a href="#" className="text-[#878680]">Farming</a>
        <a href="#" className="text-[#878680]">Fresh vegetables</a>
        <a href="#" className="text-[#878680]">Harvest</a>
        <a href="#" className="text-[#878680]">Organic Food</a>
      </div>

      {/* Tags */}
      <div className="bg-[#BCBBC133] flex flex-col p-6 space-y-5 rounded-md">
        <span className="font-bold">Tags</span>

        <div className="flex gap-2">
          <a href="#" className="bg-white py-3 px-4 text-center rounded-md">
            Agriculture
          </a>
          <a href="#" className="bg-white py-3 px-4 text-center rounded-md">
            Farming
          </a>
        </div>

        <div className="flex gap-2">
          <a href="#" className="bg-white py-3 px-4 text-center rounded-md">
            Harvest
          </a>
          <a href="#" className="bg-white py-3 px-4 text-center rounded-md">
            Organic
          </a>
        </div>



        <div className="flex gap-2">
          <a href="#" className="bg-white py-3 px-4 text-center rounded-md">
            Vegetables
          </a>

        </div>

      </div>
    </div>
  );
}
