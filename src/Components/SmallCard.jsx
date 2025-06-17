import React from 'react';
import { motion } from "framer-motion";
const SmallCard = ({ da }) => {
  const { title, description, img } = da;

  return (
    <motion.div
      whileHover={{ x: [0, -5, 5, -3, 3, 0] }} 
      transition={{ duration: 0.4, ease: "easeInOut" }} className='flex flex-col items-center justify-center w-[300px] h-[350px] p-4 border-2 border-secondary rounded-xl bg-base-100 '>
      
     
      <div className="relative w-[90%] h-[400px] md:h-[212px] md:w-[220px] rounded-full group ">
        
      
        <div className="absolute inset-0 bg-[url('/bgpic.jpg')] bg-cover bg-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out z-0" />

        {/* Main image */}
        <img
          src={img}
          className="h-[180px] w-[180px] object-cover object-center rounded-full relative z-10 mx-auto my-4"
          alt="Artifact"
        />
      </div>

      {/* Text */}
      <div className='text-center mt-4'>
        <p className='text-xl font-semibold'>{title}</p>
        <p className='text-sm'>{description}</p>
      </div>
    </motion.div>
  );
};

export default SmallCard;
