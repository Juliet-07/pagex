import { useState } from "react";
import BGImg from "../../assets/camera.png";
import Hero from "../../components/Hero";
import { GalleryHeader } from "./Header";
import { GalleryGrid } from "./GalleryGrid";
import { mockGalleryItems } from "./mediaData";
import { GalleryPagination } from "./Pagination";
import SocialMediaLinks from "../../components/SocialMediaLinks";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const filteredItems = mockGalleryItems.filter((item) =>
    activeTab === "photos" ? item.type === "photo" : item.type === "video"
  );
  return (
    <section className="h-full font-nunito">
      <Hero
        backgroundImage={BGImg}
        content={
          <div className="md:w-[90%] text-center text-white space-y-5 md:space-y-8 mx-auto pt-[100px] md:pt-0">
            <h1 className="text-4xl md:text-7xl font-semibold">
              Our
              <span className="text-[#FCA321]"> Memories</span>
            </h1>
            <p className="text-lg md:text-2xl md:w-3/4 mx-auto">
              “Discover moments captured in time - a visual journey through
              creativity and expression”{" "}
            </p>
          </div>
        }
      />
      <div className="gallery__container p-20">
        <GalleryHeader activeTab={activeTab} onTabChange={setActiveTab} />

        <GalleryGrid items={filteredItems} activeTab={activeTab} />
        <GalleryGrid items={filteredItems} activeTab={activeTab} />
        <GalleryGrid items={filteredItems} activeTab={activeTab} />

        <GalleryPagination
          rowsPerPage={rowsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          onRowsPerPageChange={setRowsPerPage}
          totalItems={filteredItems.length}
        />

        <SocialMediaLinks />
      </div>
    </section>
  );
};

export default Gallery;
