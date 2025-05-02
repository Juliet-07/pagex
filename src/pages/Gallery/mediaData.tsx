import Frame1 from '../../assets/Frame11.png'
import Frame2 from '../../assets/Frame12.png'
import Frame3 from '../../assets/Frame13.png'
import Frame4 from '../../assets/Frame14.png'

export type GalleryItem={
  id: string;
  type: 'photo' | 'video';
  url: string;
  thumbnail?: string;
  title?: string;
  date?: string;
};

export type GalleryProps = { 
  item: GalleryItem[];
};

export const mockGalleryItems: GalleryItem[] =[
  {
    id: '4', 
    type: 'photo', 
    url: Frame4, 
  },

  {
    id: '3', 
    type: 'photo', 
    url: Frame3, 
  },

  {
    id: '2', 
    type: 'photo',
    url: Frame2, 
  },
  {
    id: '1', 
    type: 'photo', 
    url: Frame1, 
  },
  {
    id: 'v1', 
    type: 'video', 
    url: '', 
    thumbnail: Frame1,
    title: 'Farm to Future: Agriculture Technology Conference 2025',
    date: 'January 12, 2025',
  },

  {
    id: 'v2', 
    type: 'video', 
    url: '', 
    thumbnail: Frame2,
    title: 'Farm to Future: Agriculture Technology Conference 2025',
    date: 'January 12, 2025',
  },
  {
    id: 'v3', 
    type: 'video', 
    url: '', 
    thumbnail: Frame3,
    title: 'Farm to Future: Agriculture Technology Conference 2025',
    date: 'January 12, 2025',
  },

  {
    id: 'v4', 
    type: 'video', 
    url: '', 
    thumbnail: Frame4,
    title: 'Farm to Future: Agriculture Technology Conference 2025',
    date: 'January 12, 2025',
  },

]