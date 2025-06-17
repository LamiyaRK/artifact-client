import React from 'react';
import Navbar from '../SharePages/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../SharePages/Footer';
import { ToastContainer } from 'react-toastify';
import AnimatedSection from '../Components/AnimatedSection';
import Loading from '../Components/Loading';

const HomeLayout = () => {
  const navigate=useNavigation();
    return (
        
        <div className='bg-[url("/background.png")]  object-cover object-center  '>
            <AnimatedSection>
        <Navbar />
      </AnimatedSection>

      <AnimatedSection>
      {navigate.state==="loading"?<Loading/>: <Outlet />} 
      </AnimatedSection>

      <AnimatedSection>
        <Footer />
      </AnimatedSection>

      <ToastContainer />
        </div>
    );
};

export default HomeLayout;