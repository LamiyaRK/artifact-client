import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, NavLink } from 'react-router';

const Errorpage = () => {
    return (
        <div>
        <Helmet>
          <title>Error</title>
        </Helmet>
         <div className='bg-red-300'>
            <img src='/error.jpg' className='w-full object-contain object-center h-screen'></img>
         </div>   
            <div className='absolute top-10 left-5'>
         <NavLink to='/'>
            <button className="relative magic-button">
  Back to home

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
         </NavLink>      


                 
            </div>
        </div>
    );
};

export default Errorpage;