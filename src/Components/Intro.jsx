import React from 'react';
import SmallCard from './SmallCard';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BanSlide from './BanSlide';
import AnimatedText from './AnimatedText';
import AnimatedSection from './AnimatedSection';

const Intro = () => {
    const data = [
  {
    id: 1,
    title: "Curated Artifacts",
    description: "Explore handpicked historical items from trusted sources.",
    img: "/arti.jpg"
  },
  
  {
    id: 3,
    title: "User Contributions",
    description: "Upload and share your own discoveries with others.",
    img: "/user.jpg"
  },
  {
    id: 4,
    title: "Like & Save",
    description: "Bookmark artifacts you find interesting.",
    img: "/like.jpg"
  },
  {
    id: 5,
    title: "Advanced Search",
    description: "Find items by period, type, or location with filters.",
    img: "/search.jpg"
  },
  {
    id: 6,
    title: "Educational Insights",
    description: "Learn historical facts with each artifact.",
    img: "/insight.jpg"
  },
  {
    id: 7,
    title: "Daily Discovery",
    description: "Get a fresh historical fact or item every day.",
    img: "/Daily.jpg"
  },
  {
    id: 8,
    title: "Mobile Optimized",
    description: "Browse comfortably on phones and tablets.",
    img: "/respo.jpg"
  },
  
  {
    id: 10,
    title: "Favorites Collection",
    description: "Create your own artifact gallery with liked items.",
    img: "/like.jpg"
  }
];

    return (
      <div className=' py-10 w-5/6 mx-auto '>
        <div className='text-center space-y-2 mb-6'>
        <AnimatedSection>
        <AnimatedText
        text="Key Features"
        as="h1"
        className='text-4xl font-bold text-neutral '
      />
            </AnimatedSection>
 <AnimatedSection>
    <p className='font-medium text-neutral opacity-80'>Everything you need to explore, share, and enjoy historical artifacts.</p>
 </AnimatedSection>
 </div>
    <Swiper
  modules={[Navigation]}
  navigation={{
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  }}
  loop={true}
  spaceBetween={50}
  slidesPerView={3}
  className=" swiper-container"
>
    {
       data.map(da=> <SwiperSlide  >
            <SmallCard da={da} key={da.id}></SmallCard>
        </SwiperSlide>)
    }
   
    </Swiper>
    <div className="flex justify-center gap-4 mt-4">
  <button className="custom-prev text-neutral">
   <FaArrowAltCircleLeft size={30}/>
  </button>
  <button className="custom-next text-neutral">
   <FaArrowAltCircleRight size={30} />
  </button>
</div>
</div>

    );
};

export default Intro;