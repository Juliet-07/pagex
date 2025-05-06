import HeroBG from "../assets/BlogBG.svg";
import Hero from "../components/Hero";
import ArticleCard from "../components/ArticleList";
import Article from "../components/Article";

const Blog = () => {
  return (
    <section className="font-nunito">
      <Hero
        backgroundImage={HeroBG}
        content={
          <div className="md:w-[90%] text-center text-white space-y-5 md:space-y-8 mx-auto pt-[100px] md:pt-0">
            <h1 className="text-4xl md:text-7xl font-semibold">
              Pazelgreen <span className="text-[#FCA321]"> Blog</span>
            </h1>
            <p className="text-lg md:text-2xl md:w-3/4 mx-auto">
              “Growing the future, one harvest at a time - insights, tips, and
              stories from the heart of agriculture”{" "}
            </p>
          </div>
        }
      />

      <div className="flex flex-col lg:flex-row items-center gap-[7rem] p-[2rem] lg:p-[5rem]">
        {/* One */}
        <div className="w-full lg:w-[70%]">
          <Article />
        </div>
        {/* Two */}
        <div>
          <ArticleCard />
        </div>
      </div>
    </section>
  );
};

export default Blog;
