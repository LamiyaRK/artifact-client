
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BanSlide from './BanSlide';
import AnimatedSection from './AnimatedSection';

const Banner=() => {
    const slides=[
         { id:1,
           title: 'Uncover Ancient Secrets',
           description: 'Discover rare artifacts like the Antikythera Mechanism that rewrote what we know about ancient technology.',
           bgImage: "/slide1.jpg"
         },
         {id:2,
           title: 'Terracotta Army of Xi’an',
           description: 'Discovered guarding the tomb of China’s first emperor, this vast clay army reflects the military might of the Qin dynasty.',
           bgImage: "/slide2.jpg"
         },
         {id:3,
           title: 'Track Your Contributions',
           description: 'Add, like, and save your favorite historical items while exploring the timeline of human progress.',
           bgImage: "/slide3.jpg"
         }
       ]
     
  return (
    <Swiper className='max-h-[500px]'
      // install Swiper modules
      modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
    delay: 2000, 
    disableOnInteraction: false,
    
  }}
   
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
       
    >
    {
       slides.map(slide => (
    <SwiperSlide key={slide.id}>
    
       <BanSlide slide={slide} />
   
     
    </SwiperSlide>
  ))
    }
   
    </Swiper>
  );
};
export default Banner;