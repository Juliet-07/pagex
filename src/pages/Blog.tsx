
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
          <div className="text-center text-white space-2-3 md:space-y-8  w-[90%]  mx-auto">
            <h1 className="hero__title text-[32px] md:text-7xl ">
              Pazelgreen <span className="text-[#FCA321]"> Blog</span>
            </h1>
            <p className="hero__description md:text-2xl md:mt-4 md:w-3/4 mx-auto mb-4">
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
