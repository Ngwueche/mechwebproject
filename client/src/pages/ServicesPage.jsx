import React from 'react'
import heroImage from "../img/site_images/lateMachine.jpeg"
import Footer from '../Footer'
import OurServies from '../OurServies';


export default function ServicesPage() {
  return (
    <div>
      <section className=' mx-auto  grow bg-gray-900'>
        <div className='relative h-[60vh] md:h-[100vh] flex flex-col justify-center shadow-lg overflow-hidden'>
          <div className='absolute inset-0'>
            <img
              className='relative w-full h-full object-cover bg-no-repeat'
              src={heroImage}
              alt='Hero'
            />
            <div className='absolute  inset-0 bg-gradient-to-r from-black to-transparent opacity-85' />
          </div>
          <div className='absolute container mx-auto py-24 px-12'>
            <h1 className='md:text-5xl text-2xl font-bold text-white mb-6 '>
              Leverage our Experience and Expertise
            </h1>
            <p className='text-lg leading-[2rem]  text-gray-100 md:text-3xl md:leading-[3rem]  md:max-w-2xl'>
              We offer a range of services that will greatly impact your
              business.
            </p>
            <a href="/contact" >
              <button className='mt-8 md:mt-16 mx-auto text-white text-lg md:text-2xl bg-transparent border rounded-md px-2 md:px-4 py-1 md:py-2 hover:bg-primary hover:text-black hover:text-bold'>
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div className='bg-black p-20 text-white'>
          <div className=''>
            <p className='text-2xl md:text-3xl mb-6  tracking-[5px] line-clamp-3 font-bold'>
              Build Your High Quality Steel Project{" "}
            </p>
            <p className='text-2xl md:text-3xl mb-6 font-bold tracking-[5px]'>
              With Qualified Engineers From{" "}
            </p>
            <p className='text-2xl md:text-3xl font-bold text-primary'>
              Mech-Weld<span className='t'>.</span>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className='flex flex-col'>
          <div className='flex'></div>
        </div>
      </section>
      <OurServies />
      <div className='p-16 text-center'>
        <a href='/contact' className='-mt-8 mx-auto font-bold text-black text-2xl  border rounded-md px-4 py-2 hover:bg-primary hover:text-black hover:font-bold'>
          Contact Us
        </a>
      </div>

      <Footer />
    </div>
  );
}
