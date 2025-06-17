import React from 'react';
import { SwiperSlide } from 'swiper/react';
import AnimatedSection from './AnimatedSection';

const BanSlide = ({slide}) => {
    const {title,description,bgImage}=slide
    return (
    
            <div  className='relative'>
            
        <div>
         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-white/20"></div>
            <img src={bgImage} className='w-full object-center h-full' ></img>
        </div>
           <div className='absolute inset-0 lg:bottom-[40%] flex items-center justify-center text-center text-white'>
  <div className='space-y-4 w-[90%] md:w-[70%] lg:w-[60%]'>
    <h1 className='text-4xl md:text-5xl font-bold'>{title}</h1>
    <p className='font-semibold'>{description}</p>
  </div>
</div>

        </div>
        
        
    );
};

export default BanSlide;