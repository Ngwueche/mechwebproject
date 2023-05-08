import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer';

export default function OurExperience() {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3 });

  if (inView && !isVisible) {
  setIsVisible(true);
  }
  return (
    <section>
      <div className='flex-col text-center shadow-sm p-6 md:p-12 bg-black text-white'>
        <div
      className={` transition-all duration-1000 ${
        isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
      }`}
      ref={ref}
    >
        <h2 className='mt-12 text-3xl md:text-4xl font-bold'>Our Experience</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 justify-items-between mt-12'>
          <div className='flex-col mb-10'>
            <p className='text-3xl text-primary font-bold'>20+</p>
            <p className='text-xl '>Years of Operation</p>
          </div>
          <div className='flex-col mb-10'>
            <p className='text-3xl text-primary font-bold'> 1.2M+ </p>
            <p className='text-xl '> Projects Has Been Delivered </p>
          </div>
          <div className='flex-col mb-10'>
            <p className='text-3xl text-primary font-bold'>2.4M+</p>
            <p className='text-xl'> Components and Parts Supplied </p>
          </div>
          <div className='flex-col mb-10'>
            <p className='text-3xl text-primary font-bold'>1,200+</p>
            <p className='text-xl'>Emergencies and Downtime Rescued</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
