import { useState } from 'react'
import Hero from '../../components/Hero'
import BGImg from '../../assets/camera.png'
import Tractor from '../../assets/tractor.png'
import { GalleryHeader } from './Header'
import { GalleryGrid } from './GalleryGrid'
import { mockGalleryItems } from './mediaData'

const VideoDetails = () => {

  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('videos');
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
      <div className='gallery__container p-20 '>
        <GalleryHeader
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <img
          src={Tractor}
          className='py-10'
        />
        <div className="space-y-4 text-[#121212CC] text-[22px]">
        <p>
          Description
        </p>
        <p>
          Food to farm  at the Agrotechnology fair, Lagos , Nigeria. Food to farm  at the Agrotechnology fair, Lagos , Nigeria.Food to farm  at the Agrotechnology fair, Lagos , Nigeria.  Food to farm  at the Agrotechnology fair, Lagos , Nigeria.
        </p>

        </div>

        <h1 className='text-[40px] mt-10'>Related Vidoes</h1>
        
        <GalleryGrid
        items={filteredItems}
        activeTab={activeTab}
        />

      </div>




    </section>
  )
}

export default VideoDetails