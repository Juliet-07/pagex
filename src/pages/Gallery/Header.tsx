
type GalleryHeaderProps = {
  activeTab: 'photos' | 'videos';
  onTabChange: (tab: 'photos' | 'videos') => void;
};

export const GalleryHeader = ({ activeTab, onTabChange }: GalleryHeaderProps) => (
  <header className="space-y-4">
    <h3 className="title text-2xl md:text-5xl font-bold flex sm:block mb-3 gap-1.5">Gallery</h3>
    <div className="flex w-full sm:w-[336px] space-x-2 mb-6 bg-[#17913B33] w-[500px] py-1 px-1 rounded-lg">
    <button 
    className=
    {`w-[50%] rounded-lg ${activeTab === 'photos' ? 'bg-[#379E23] text-white' : ' '}`}
      onClick={() => onTabChange('photos')}
      >
        Photos
      </button>
      <button 
      className=
      {`w-[50%] rounded-lg ${activeTab === 'videos' ? 'bg-[#379E23] text-white' : ' '}`}
      onClick={() => onTabChange('videos')}
      >
        Videos
      </button>

    </div>
  </header>
);