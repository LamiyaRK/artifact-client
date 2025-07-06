import React from 'react';
import { SwiperSlide } from 'swiper/react';
import AnimatedSection from './AnimatedSection';

const BanSlide = ({slide}) => {
    const {title,description,bgImage}=slide
    return (
    
            <div  className='relative h-full w-full'>
            
        <div className='h-full'>
         <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-white/20 h-full "></div>
            <img src={bgImage} className='w-full object-center object-cover h-[400px] lg:h-[500px]' ></img>
        </div>
           <div className='absolute inset-0 lg:bottom-[20%] flex items-center justify-center text-center text-white'>
  <div className='space-y-4 w-[90%] md:w-[70%] lg:w-[60%]'>
    <h1 className='text-4xl md:text-5xl '>{title}</h1>
    <p className='font-semibold text-lg max-w-2xl mx-auto'>{description}</p>
  </div>
</div>

        </div>
        
        
    );
};

export default BanSlide;