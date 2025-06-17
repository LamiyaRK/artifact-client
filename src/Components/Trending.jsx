import React, { useEffect, useState } from 'react';
import TrendingCard from './TrendingCard';
import AnimatedSection from './AnimatedSection';
import { NavLink } from 'react-router';
import AnimatedText from './AnimatedText';

const Trending = () => {
 const [data1,setData1]=useState([])
  
    useEffect(()=>{
  fetch('http://localhost:3000/artifacts6')
  .then(res=>res.json())
  .then(data=>setData1(data))
    },[])

    return (
        <div className=' py-10 w-5/6 mx-auto mt-[80px] mb-[40px]'>
        <div className='text-center space-y-2 mb-6'>
        <AnimatedSection>
        <AnimatedText
        text="Featured Artifacts"
        as="h1"
        className='text-4xl font-bold text-neutral '
      />
            </AnimatedSection>
 <AnimatedSection>
    <p className='font-medium text-neutral opacity-80'>Explore the top  most liked artifacts, each with a brief story and a "View Details" button to learn more.</p>
 </AnimatedSection>
            
        </div>
        <div className='relative'>
        
        <div className='  w-full'>
         <AnimatedSection>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            
        {    
            
            data1.map(da=><AnimatedSection><TrendingCard key={da._id} da={da}></TrendingCard></AnimatedSection>)
        }
        </div>
     <NavLink to='/allartifacts'>
        <div className='flex justify-center mt-10'>
        <a href="#_" class="relative inline-flex items-center justify-center p-24 px-20 py-5 overflow-hidden font-medium  transition duration-300 ease-out border-2 text-accent rounded-full bg-neutral shadow-md group">

     <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-secondary group-hover:translate-x-0 ease">
         <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
     </span>
     <span class="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease ">See All </span>
     <span class="relative invisible"></span>
 </a>
 </div>
     </NavLink>  
        
 </AnimatedSection>
        </div>
        </div>
        </div>
    );
};

export default Trending;