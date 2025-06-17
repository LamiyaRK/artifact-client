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
           <div className='absolute top-[25%]  left-[20%] mx-auto text-center '>
           <div className=' flex flex-col justify-center items-center text-center text-white'>
            <h1 className=' text-5xl font-bold  mx-auto mb-4'>{title}</h1>
            <p className=' font-semibold w-[60%] mx-auto'>{description}</p>
           </div>
            
           </div>
        </div>
        
        
    );
};

export default BanSlide;