import { useState } from 'react'
import Hero from '../../components/Hero'
import BGImg from '../../assets/camera.png'
import { GalleryHeader } from './Header';
import { GalleryPagination } from './Pagination';
import { mockGalleryItems } from './mediaData';
import SocialMediaLinks from '../../components/SocialMediaLinks';

const months = [
  'January' , 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const  YearGrid = () => {
  return (
    <div className="space-y-2 w-full">
      <h2 className="text-2xl font-semibold py-4">Year 2025</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center items-center">
        {months.map((month) => (
          <button
          key={month}
          className='border border-[#379E23] text-[#379E23] font-semibold px-4 py-4 rounded-xl'
          >
            {month}
          </button>
        ))}
      </div>
    </div>
  )
}

const Archive = () => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(3);
  const filteredItems = mockGalleryItems.filter( item =>
      activeTab === 'photos' ? item.type === 'photo' : item.type === 'video'
    );
  return (
    <section className='h-full font-nunito'>
      <Hero
        backgroundImage={BGImg}
        content={
          <div className='text-center text-white space-2-3 md:space-y-8 w-[90]% mx-auto'>
            <h1 className='hero__title text-[32px] md:text-7xl font-semibold'>
              Our
              <span className="text-[#FCA321]"> Memories</span>
            </h1>
            <p className='hero__description md:text-2xl md:mt-4 md:w-3/4 mx-auto mb-4'>
              “Discover moments captured in time - a visual journey through creativity and expression”{" "}
            </p>

          </div>
        }
      />

      <div className='gallery__container p-20'>
        <GalleryHeader
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 mb-10 mt-14'>
        <YearGrid />
        <YearGrid />
        <YearGrid />
        <YearGrid />
        </div>

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

  )
}

export default Archive