import React from 'react';
import Timeline from './Timeline';
import AnimatedText from './AnimatedText';

const Aboutus = () => {
   const timelineData = [
  {
    index: 1,
    year: "2022",
    title: "Where It All Began",
    description:
      "While researching ancient civilizations, we realized there was no interactive platform for exploring historical artifacts online. That’s when the spark for Artifact Vault was lit.",
    image: "/about1.jpg",
  },
  {
    index: 2,
    year: "2023",
    title: "Building the Foundation",
    description:
      "We began collecting open-access data, visuals, and records from museums and historians. With React and Firebase, we built a prototype focused on simplicity, storytelling, and education.",
    image: "/about2.jpg",
  },
  {
    index: 3,
    year: "2024",
    title: "Expanding the Archive",
    description:
      "We introduced curated regional collections—from Egyptian relics to South Asian pottery. A visual timeline, filters, and search features made exploration more intuitive.",
    image: "/about3.jpg",
  },
  {
    index: 4,
    year: "2025",
    title: "Going Live",
    description:
      "Artifact Vault officially launched with a refined design, mobile support, and an expanding library of ancient wonders. And this is just the beginning.",
    image: "/about4.jpg",
  },
];


    return (
        <div className='w-5/6 max-w-[1600px] mx-auto relative inset-0 py-10'>
        <AnimatedText
        text="About Us"
        as="h1"
        className='text-4xl  text-neutral text-center '
      />
         <div className='flex lg:flex-row flex-col-reverse justify-between mb-[120px] inset-0 lg:h-[1000px] text-neutral'>
         <div className='lg:w-[40%] text-lg space-y-6'>
         <div className='space-y-6'>
            <h2 className='text-xl mb-2 text-secondary font-semibold'> — About Relicrader</h2>
            <h1 className='text-4xl  text-neutral mb-10'>Unearthing History, One Artifact at a Time</h1>
           
           
          <p className='text-3xl'> Welcome to Artifact Vault, where ancient whispers meet modern discoveryOur collection includes artifacts from ancient times, each holding a unique piece of history waiting to be explored.</p> 
          
           
<p className='opactiy-80'>We are a passionate team of history lovers and digital explorers, dedicated to preserving and showcasing humanity’s rich cultural heritage through the power of technology.
From forgotten tools of ancient civilizations to legendary relics that shaped empires—each artifact we feature carries a story worth telling.</p>
<p>Our mission: make history accessible, visual, and engaging for everyone.</p>
        </div>
        </div>
        <div className='w-[300px] sm:w-[600px]  relative inset-0  h-[600px] sm:h-[1000px] mx-auto'>
        <div className='flex justify-end'>
            <img src='/aboutpat.jpg' className='h-[250px] w-[200px] sm:h-[400px] sm:w-[300px] object-center object-cover   '></img>
        </div>
         <div className='absolute top-25 lg:top-50 shadow-2xl'>
          <img src='/aboutban.jpg' className='h-[400px] sm:h-[700px] w-[250px] sm:w-[500px] object-center object-cover shadow-2xl shadow-black z-10'></img>
          </div>
        </div>
          </div>
       <p className='font-semibold text-xl text-center mb-4 text-secondary '>Timeline</p>
       <h1 className='text-4xl  text-neutral mb-10 text-center'>Our History</h1>
           
        <div >
           {
            timelineData.map(data=><Timeline data={data}></Timeline>)
           }
        </div>
        </div>
    );
};

export default Aboutus;