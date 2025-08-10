import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../SharePages/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../SharePages/Footer';
import { ToastContainer } from 'react-toastify';
import AnimatedSection from '../Components/AnimatedSection';
import Loading from '../Components/Loading';

const HomeLayout = () => {
  const navigate = useNavigation();
  const navref = useRef(null);
  const [bgLoaded, setBgLoaded] = useState(false);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = "/background.webp";
    img.onload = () => setBgLoaded(true);

    const time = setTimeout(() => {
      setLoad(false);
    }, 2000);
    return () => clearTimeout(time);
  }, []);

  if (load) return <Loading />;
  if (!bgLoaded) return <Loading />;

  return (
    <div
      className="bg-fixed min-h-screen flex flex-col"
     style={{ backgroundImage: `url('/background.webp')` }}
    >
      <Navbar navref={navref} />

      {/* Middle content container fills available space */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        <AnimatedSection className="flex-1 w-full">
          {navigate.state === "loading" ? <Loading /> : <Outlet />}
        </AnimatedSection>
      </div>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default HomeLayout;
