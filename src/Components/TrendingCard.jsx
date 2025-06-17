import React from 'react';
import { IoHeartSharp } from 'react-icons/io5';
import 'animate.css';
import { Link } from 'react-router';

const TrendingCard = ({da}) => {
    const {_id,artifactName,artifactImage,shortDescription,likeCount}=da
   
    return (
        <div className=' relative shadow-xl '>
            <div className='h-[400px] '>
                <img src={artifactImage} className='w-full h-full object-center object-cover rounded-2xl shadow-sm  hover:shadow-2xl hover:shadow-neutral'></img>
            </div>
            <div className='bg-accent border-primary text-center border-2 absolute bottom-[10%] w-[80%] left-[10%] space-y-1 rounded-2xl = p-2 transform transition hover:scale-105 text-neutral '>
                <p className='font-bold text-2xl'>{artifactName}</p>
                <p className='text-sm font-semibold opacity-80'>{shortDescription}</p>
                <div className='flex justify-between items-center border-t-1 border-neutral p-2 mt-2'>
                <p className='flex items-center justify-center font-semibold' ><IoHeartSharp color='red' size={20} />{likeCount}</p>
               <Link to={`/card-details/${_id}`}><button className='fancy-button' >View Details</button></Link> 
                </div>
            </div>
        </div>
    );
};

export default TrendingCard;