import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { EffectFade, Pagination } from 'swiper/modules';
import Review from './Review';
import AnimatedSection from './AnimatedSection';
import AnimatedText from './AnimatedText';

const testimonials = [
  {
    rating:5,
    quote: "This platform brings history to life! The curated artifacts are truly eye-opening.",
    name: "Amelia Gibson",
    title: "CEO, Bizzbreak Inc.",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {rating:4.5,
    quote: "I love how I can explore different cultures and eras in one place.",
    name: "Carlos Mendez",
    title: "Homeowner, Austin TX",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {rating:5,
    quote: "Adding my own discoveries made me feel part of something bigger. Amazing community!",
    name: "Priya Sharma",
    title: "Interior Designer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {rating:4,
    quote: "The user interface is clean and easy to navigate. Great work!",
    name: "David Lee",
    title: "Freelancer",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  }
];

export default function Reviews() {
  return (
    <div className=' py-10 w-5/6 mx-auto my-[10px]'>
        <div className='text-center space-y-2 mb-6'>
        <AnimatedSection>
        <AnimatedText
        text="Artifact Gallery"
        as="h1"
        className='text-4xl font-bold text-neutral '
      />
            </AnimatedSection>
 <AnimatedSection>
    <p className='font-medium text-neutral opacity-80'>Browse rare artifacts and add your own discoveries.</p>
 </AnimatedSection>
 </div>
    <div className="w-full mx-auto py-2 px-4">
      <Swiper
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
        
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <Review t={t} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
}
