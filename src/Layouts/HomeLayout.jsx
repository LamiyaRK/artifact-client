import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../SharePages/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../SharePages/Footer';
import { ToastContainer } from 'react-toastify';
import AnimatedSection from '../Components/AnimatedSection';
import Loading from '../Components/Loading';

const HomeLayout = () => {
  const navigate=useNavigation();
  const [height,setHeight]=useState(0)
const navref=useRef(null)
useEffect(()=>{
  if(navref.current)
    {const h=navref.current.offsetHeight;
     
      const he=window.innerHeight-h-300
     
       setHeight(he)
     
    }

},[])
console.log(height)
    return (
        
        <div className={`bg-[url("/background.png")] bg-fixed object-cover object-center `} >
           
        <Navbar  navref={navref}/>
    

      <AnimatedSection>
      {navigate.state==="loading"?<Loading/>: <Outlet context={{height}}/>} 
      </AnimatedSection>

     
        <Footer />
      

      <ToastContainer />
        </div>
    );
};

export default HomeLayout;