import React from 'react';
import Banner from './Banner';
import Trending from './Trending';
import Intro from './Intro';
import Reviews from './Reviews';
import Faq from './Faq';
import Gallery from './Gallery';
import AnimatedSection from './AnimatedSection';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <AnimatedSection>
              <Banner></Banner>
        </AnimatedSection>
        <AnimatedSection>
              <Trending></Trending>
        </AnimatedSection>
        <AnimatedSection>
            <Intro></Intro>
        </AnimatedSection>
        <AnimatedSection>
               <Gallery></Gallery>
        </AnimatedSection>
          
          <AnimatedSection>
                    <div className='flex justify-between items-center gap-10' >
            <div className='w-1/2'>
                 <Faq ></Faq>
            </div>
<div className='w-1/2'>
     <Reviews></Reviews>
</div>

            </div>
        
          </AnimatedSection>
            
           
    
        </div>
    );
};

export default Home;