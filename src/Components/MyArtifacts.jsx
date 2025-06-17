import React, { use, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';
import MyTable from './MyTable';
import { toast } from 'react-toastify';
import AnimatedSection from './AnimatedSection';
import AnimatedText from './AnimatedText';
import { Link } from 'react-router';
import { Helmet } from 'react-helmet';

const MyArtifacts = () => {
    const {user}=use(AuthContext)
    const [data,setData]=useState([])
    
    useEffect(()=>{
        fetch(`https://artifacts-server-rose.vercel.app/artifacts?email=${user?.email}`,
          {
            headers:{
              authorization:`Bearer ${user.accessToken}`
             }
          }
        )
        .then(res=>res.json())
        .then(da=>setData(da))
    },[user])
     const refresh=async(id)=>{
    fetch(`https://artifacts-server-rose.vercel.app/artifacts/${id}`,{
        method:'delete',
        headers:{
          authorization:`Bearer ${user.accessToken}`
        }
    }).then(res=>res.json())
    .then(da=>{
const newData=data.filter(da=>da._id!=id);
    setData(newData)

    })
    .catch(err=>{
        toast(err,{
             theme:"colored",
            type:'error',
        })
    })
    
    
   }
    return (
       <div className=' py-10 w-5/6 mx-auto '>
       <Helmet>
        <title>My Artifacts</title>
      </Helmet>
        <div className='text-center space-y-2 mb-6'>
        <AnimatedSection>
        <AnimatedText
        text="My Artifacts"
        as="h1"
        className='text-4xl font-bold text-neutral '
      />
            </AnimatedSection>
 <AnimatedSection>
    <p className='font-medium text-neutral opacity-80'>View, manage, and edit the artifacts you’ve added.

</p>
 </AnimatedSection>
 </div>
        <div className="overflow-x-auto rounded-2xl bg-base-100 text-neutral">
  <table className="table">
 {
  data.length>0?
  <thead>
      <tr >
      <th>Sl no.</th>
       <th>Name & type</th>
        <th>Discovered by</th>
        <th>Present Location</th>
        <th>Actions</th>
          
      </tr>
    </thead>:
     <div className='text-center p-5 space-y-2'>
     <p className='text-2xl font-semibold'>You haven’t added any artifacts yet.</p>
     <p className=''>Start your journey by adding your first artifact to the archive!</p>
    <Link to='/addartifacts'>
       <button className="relative magic-button">
 Click to add artifacts 

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
        data.map((da,index)=><MyTable key={da._id} da={da} index={index} refresh={refresh}></MyTable>)
      }
      
       
      
    </tbody>
   
  </table>
</div>
</div>
    );
};

export default MyArtifacts;