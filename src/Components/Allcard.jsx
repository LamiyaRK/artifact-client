import React from 'react';
import { FcLike } from "react-icons/fc";
import { Link } from 'react-router';
const Allcard = ({da}) => {
    const {artifactImage,artifactType,
artifactName,likeCount,_id}=da
    return (
      <div className='bg-base-100 p-5 text-neutral text-center rounded-2xl border-secondary border-2 shadow-2xl space-y-2'>
<img  src={artifactImage} className='h-[300px] w-full object-cover object-center rounded-2xl'/> 
      <a href="#">
      <p>{artifactType}</p>
        <h5 className="text-xl font-semibold tracking-tight text-neutral">
         {
artifactName}
        </h5>
      </a>
    
      <p className='flex justify-center items-center gap-2 font-medium'><FcLike   size={24}/>{likeCount}</p>
    <Link to={`/card-details/${_id}`}><button className='fancy-button mx-auto'>View Details</button></Link>  
    
</div>  

    );
};

export default Allcard;