import React, { use, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AuthContext from '../Context/AuthContext';
import FavTable from './FavTable';
import AnimatedSection from './AnimatedSection';
import AnimatedText from './AnimatedText';
import { Helmet } from 'react-helmet';

const Favourites = () => {
       const data=useLoaderData()
       const {user}=use(AuthContext)
       const [likeditems,setLikeditems]=useState([])
       useEffect(()=>{
        if(user?.email)
        {
            const res=data.filter(da=>da.likedBy?.includes(user.email));
           setLikeditems(res)
        }
       },[user])
    return (
      <div className=' py-10 w-5/6 mx-auto '>
      <Helmet>
        <title>Liked Artifacts</title>
      </Helmet>
        <div className='text-center space-y-2 mb-6'>
        <AnimatedSection>
        <AnimatedText
        text="Liked Artifacts"
        as="h1"
        className='text-4xl font-bold text-neutral '
      />
            </AnimatedSection>
 <AnimatedSection>
    <p className='font-medium text-neutral opacity-80'>View and manage all the artifacts found fascinating.

</p>
 </AnimatedSection>
 </div>
         <div className="overflow-x-auto bg-base-100 text-neutral rounded-2xl">
  <table className="table">
 {likeditems.length>0?<thead>
      <tr >
      <th>Sl no.</th>
       <th>Name & type</th>
        <th>Discovered by</th>
        <th>Present Location</th>
        <th>Action</th>
      </tr>
    </thead>:
    <div className='text-center p-5 space-y-2'>
     <p className='text-2xl font-semibold'>You haven’t liked any artifacts yet.</p>
     <p className=''>Start exploring and tap the heart icon to save your favorites!</p>
    <Link to='/allartifacts'>
       <button className="relative magic-button">
  Explore Artifacts

  {/* Star 1 */}
  <div className="star-1 absolute top-[20%] left-[20%] w-[25px] filter drop-shadow-[0_0_0_rgba(255,253,239,0.55)] z-[-5] transition-all duration-[1000ms] ease-[cubic-bezier(0.05,0.83,0.43,0.96)]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 784.11 815.53"
      fill="#fffdef"
      className="w-full h-auto"
    >
      <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
    </svg>
  </div>

  {/* Star 2 */}
  <div className="star-2 absolute top-[45%] left-[45%] w-[15px] filter drop-shadow-[0_0_0_rgba(255,253,239,0.55)] z-[-5] transition-all duration-[1000ms] ease-[cubic-bezier(0,0.4,0,1.01)]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 784.11 815.53"
      fill="#fffdef"
      className="w-full h-auto"
    >
      <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
    </svg>
  </div>

  {/* Star 3 */}
  <div className="star-3 absolute top-[40%] left-[40%] w-[5px] filter drop-shadow-[0_0_0_rgba(255,253,239,0.55)] z-[-5] transition-all duration-[1000ms] ease-[cubic-bezier(0,0.4,0,1.01)]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 784.11 815.53"
      fill="#fffdef"
      className="w-full h-auto"
    >
      <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
    </svg>
  </div>

  {/* Star 4 */}
  <div className="star-4 absolute top-[20%] left-[40%] w-[8px] filter drop-shadow-[0_0_0_rgba(255,253,239,0.55)] z-[-5] transition-all duration-[800ms] ease-[cubic-bezier(0,0.4,0,1.01)]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 784.11 815.53"
      fill="#fffdef"
      className="w-full h-auto"
    >
      <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
    </svg>
  </div>

  {/* Star 5 */}
  <div className="star-5 absolute top-[25%] left-[45%] w-[15px] filter drop-shadow-[0_0_0_rgba(255,253,239,0.55)] z-[-5] transition-all duration-[600ms] ease-[cubic-bezier(0,0.4,0,1.01)]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 784.11 815.53"
      fill="#fffdef"
      className="w-full h-auto"
    >
      <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
    </svg>
  </div>

  {/* Star 6 */}
  <div className="star-6 absolute top-[5%] left-[50%] w-[5px] filter drop-shadow-[0_0_0_rgba(255,253,239,0.55)] z-[-5] transition-all duration-[800ms] ease-linear">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 784.11 815.53"
      fill="#fffdef"
      className="w-full h-auto"
    >
      <path d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z" />
    </svg>
  </div>
</button>
    </Link>   
    </div>
    }
    
    <tbody>
      {
        likeditems.map((da,index)=><FavTable key={da._id} da={da} index={index} ></FavTable>)
      }
      
       
      
    </tbody>
   
  </table>
</div>
</div>
    );
};

export default Favourites;