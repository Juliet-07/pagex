import { GalleryItem } from "./mediaData";

import Play from '../../assets/video-play.png'
import Calendar from '../../assets/Calender.png'
import { useNavigate } from "react-router-dom";

type GalleryGridProps = {
  items: GalleryItem[];
  activeTab: 'photos' | 'videos';
};

export const GalleryGrid = ({ items, activeTab} : GalleryGridProps) => {
  const filteredItems = items.filter(item =>
    activeTab === 'photos' ? item.type === 'photo' : item.type === 'video'
  );

  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6">
      {filteredItems.map((item) => (
        <div 
        // onClick={() => navigate(`/gallery/${item.id}`)}
        key={item.id} 
        className="rounded-lg overflow-hidden shadow-lg">
          {item.type === 'photo' ? (
            <img 
            src={item.url}
            alt={`Gallery ${item.id}`}
            className="w-full h-40 object-cover"
            />
          ) : (
            <div 
            onClick={() => navigate(`/gallery/${item.id}`)}
            className="relative rounded-xl overflow-hidden shadow-lg h-70 cursor-pointer transition-transform">
              <img 
              src={item.thumbnail || ''}
              alt={`Video ${item.id}`}
              className="w-full h-35 object-cover rounded-xl"
              />
              <div className="absolute inset-0 flex items-center justify-center h-35">
                <img 
                src={Play}
                className="w-[39px] h-[27px]"
                />
              </div>
              <p className="px-2 py-2 font-semibold">
                {item.title || 'Farm to Future: Agriculture Technology Conference 2025'}
              </p>

              <div className="flex px-2 py-2 space-x-6">
                <img src={Calendar} className="w-[24px] h-[24px]"/>
                <p className="text-[#151411] opacity-60 text-md">{item.date || 'January 12, 2025'}</p>
              </div>
            </div>

          )}
        </div>
      ))}

    </div>
  );
}