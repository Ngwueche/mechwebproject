import React, { useState } from 'react'
import heroImage from "../img/site_images/service-hero2.jpg";
import durable from "../img/icons/durable-icon.png"
import integrity from "../img/icons/integrity.png"
import partnership from "../img/icons/partnership.png"
import quality from "../img/icons/quality.png"
import part1 from "../img/partners/agridiv_logo_with_ring.png"
import part2 from "../img/partners/aquarapha_logo.png"
import part3 from "../img/partners/cbn_logo.png"
import part4 from "../img/partners/cocacola.png"
import part5 from "../img/partners/mazaltov_logo1.png"
import part6 from "../img/partners/nbl_logo.png"
import part7 from "../img/partners/sabmiller.png"
import part8 from "../img/partners/zenith_bank1.png"
import Cards from '../Cards';
import Footer from '../Footer';
import ValueProposition from '../ValueProposition';
import OurExperience from '../OurExperience';
import Services from '../Services';
import { useInView } from 'react-intersection-observer';


export default function HomePage() {
    const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3 });

  if (inView && !isVisible) {
    setIsVisible(true);
  }
  return (
    <div>
      <div className=' mx-auto  grow bg-gray-900'>
        <div className='relative h-[60vh] md:h-[100vh] flex flex-col justify-center shadow-lg overflow-hidden'>
          <div className='absolute inset-0'>
            <img
              className='relative w-full h-full object-cover bg-no-repeat '
              src={heroImage}
              alt='Hero'
            />
            <div className='absolute  inset-0 bg-gradient-to-r from-black to-transparent opacity-85' />
          </div>
          <div className='absolute mx-auto py-12 md:py-24 px-12'>
            <h1 className='md:text-5xl text-2xl font-bold text-white mb-6 '>
              ...Where Technology Meets Expertise
            </h1>
            <p className='text-lg leading-[2rem]  text-gray-100 md:text-3xl md:leading-[3rem]  md:max-w-2xl'>
              We're the welding superheroes you need! Our skilled team delivers
              top-quality welding services with{" "}
              <span className='text-[#fdd028]'>precision</span> and{" "}
              <span className='text-[#fdd028]'>expertise</span>.
            </p>
            <a href="/contact" >
              <button className='mt-8 md:mt-16 mx-auto text-white text-lg md:text-2xl bg-transparent border rounded-md px-2 md:px-4 py-1 md:py-2 hover:bg-primary hover:text-black hover:text-bold'>
                About Us
              </button>
            </a>
          </div>
        </div>
      </div>
      <OurExperience />
      <div className='mt-8 mx-auto'>
      <div
      className={` transition-all duration-1000 ${
        isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
      }`}
      ref={ref}
    >
        <h2 className=' text-center text-4xl font-bold pt-8'>
          Our Core Values
        </h2>
        <div className=' py-8 px-4 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 justify-content-center justify-items-center '>
          <Cards
            img={integrity}
            title='Integrity'
            body='Integrity is a core value at our engineering company, and it is ingrained in everything we do. We believe that integrity is the foundation of trust and credibility, which are essential for building strong relationships with our clients, partners, and employees.'
          />
          <Cards
            img={durable}
            title='Durable'
            body=' We define durability as the ability to withstand wear and tear, harsh conditions, and the test of time without compromising quality or performance. We strive to build products and systems that are not only reliable and efficient but also resilient and durable.'
          />
          <Cards
            img={partnership}
            title='Partnership'
            body='We believe that true partnership is about working collaboratively with our clients, partners, and stakeholders to achieve shared goals and create lasting value. We are committed to building trust, mutual respect, and a shared commitment to excellence. '
          />
          <Cards
            img={quality}
            title='Quality'
            body='We believe that quality is not just a feature of our products and services, but a mindset that informs everything we do. We use the best materials and equipment, follow strict quality control procedures, and continually seeking to improve our processes and techniques. '
          />
        </div>
      </div>
      <div>
        <ValueProposition />
      </div>

      <Services />
      <div className='mb-8'>
        <h2 className=' text-center text-4xl font-bold  py-10 border-t-2'>
          Our Partners
        </h2>
        <div className='grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4 justify-content-center justify-items-center'>
          <img className='h-20' src={part1} />
          <img className='h-20' src={part2} />
          <img className='h-20' src={part3} />
          <img className='h-20' src={part4} />
          <img className='h-20' src={part5} />
          <img className='h-20' src={part6} />
          <img className='h-20' src={part7} />
          <img className='h-20' src={part8} />
        </div>
      </div>

      <div>
        <Footer />
      </div>
      </div>
    </div>
  );
}
