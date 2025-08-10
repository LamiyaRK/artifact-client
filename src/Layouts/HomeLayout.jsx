import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../SharePages/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../SharePages/Footer';
import { ToastContainer } from 'react-toastify';
import AnimatedSection from '../Components/AnimatedSection';
import Loading from '../Components/Loading';

const HomeLayout = () => {
  const navigate = useNavigation();
  const [height, setHeight] = useState(0);
  const navref = useRef(null);
  const [bgLoaded, setBgLoaded] = useState(false);
  const [load,setLoad]=useState(true)
  useEffect(() => {
    if (navref.current) {
      const h = navref.current.offsetHeight;
      const he = window.innerHeight - h - 300;
      setHeight(he);
    }

    const img = new Image();
    img.src = "/background.webp";
    img.onload = () => setBgLoaded(true);

    const time=setTimeout(()=>{
      setLoad(false)
    },2000)
    return()=>clearTimeout(time)
  }, []);
 if(load) return <Loading/>
  if (!bgLoaded) {
    // Show loader until background fully loads
    return <Loading />;
  }

  return (
    <div
      className="object-cover object-center  bg-fixed min-h-screen transition-all duration-500"
      style={{ backgroundImage: `url('/background.webp')` }}
    >
      <Navbar navref={navref} />

      <AnimatedSection>
        {navigate.state === "loading" ? <Loading /> : <Outlet context={{ height }} />}
      </AnimatedSection>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default HomeLayout;
