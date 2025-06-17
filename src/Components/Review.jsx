import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'; 
import React from 'react';

const Review = ({ t }) => {
  const { quote, name, img, title, rating } = t;

  return (
    <div className="bg-base-100 border border-t-2 border-secondary text-base-100 rounded-2xl h-70 shadow-xl flex flex-col items-center text-center relative" >
    <img src='/b.jpeg' className='w-full h-full object-center object-cover rounded-2xl'></img>
     <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 z-10 rounded-2xl"></div>
    <div className='top-2 absolute flex flex-col justify-between items-center z-1 '>
      <Rating style={{ maxWidth: 200 }} value={rating} readOnly />
      
      <div className="text-xl w-2/3 mt-4">“{quote}”</div>
      
      <div className="flex items-center gap-3 mt-4">
        <img src={img} className="w-12 h-12 rounded-full" alt={name} />
        <div>
          <div className="font-bold">{name}</div>
          <div className="text-sm">{title}</div>
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default Review;
