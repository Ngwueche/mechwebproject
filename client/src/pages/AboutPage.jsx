import React from 'react'
import heroImage from "../img/site_images/service-hero3.jpg"
import Footer from '../Footer';

export default function AboutPage() {
  return (
    <div>
      <div className=' mx-auto  grow bg-gray-900'>
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
              We have been around for a while now
            </h1>
            <p className='text-lg leading-[2rem]  text-gray-100 md:text-3xl md:leading-[3rem]  md:max-w-2xl'>
              We Celebrate Two Decades of{" "}
              <span className='text-[#fdd028]'>Excellent Services</span> and{" "}
              <span className='text-[#fdd028]'>Professional Growth</span>.
            </p>
            <a href="/contact" >
              <button className='mt-8 md:mt-16 mx-auto text-white text-lg md:text-2xl bg-transparent border rounded-md px-2 md:px-4 py-1 md:py-2 hover:bg-primary hover:text-black hover:text-bold'>
                contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <h2>
          About Mech-Weld
        </h2>
          <p>
          </p>
      </div>
      <h2 className=' text-center text-4xl mt-12 font-bold '>Our Mission & Vision</h2>
      <div className="px-10 mx-auto sm:flex-col py-12 lg:flex lg:flex-row items-center gap-10  ">
        <div className='flex flex-col '>
          <h2 className=' text-center text-2xl font-bold '>Mission</h2>
          <div className=' border-t-4 mt-10 bg-gray-100 shadow-md border-blue-700 rounded-2xl '>
            <p className=' text-justify py-8 px-4 leading-7'>
              our mission is to provide high-quality and innovative solutions to
              our clients' welding and engineering needs. We are passionate
              about delivering exceptional service and exceeding expectations,
              while fostering a culture of safety, teamwork, and continuous
              improvement. Our team of experienced and skilled professionals is
              committed to using the latest technology and techniques to ensure
              that our clients receive the best possible results. We strive to
              build long-term relationships with our clients based on trust,
              respect, and open communication. We take pride in our work and
              strive to make a positive impact on our community and the
              environment. We are dedicated to providing sustainable solutions
              that meet the needs of our clients, while minimizing our impact on
              the environment.
            </p>
          </div>
        </div>
        <div className='flex flex-col'>
        <h2 className=' text-center text-2xl font-bold '>Vision</h2>
        <div className=' border-t-4 mt-10 bg-gray-100 shadow-md border-blue-700 rounded-2xl '>
          <p className='py-8 px-4  text-justify  leading-7'>
            With years of experience and a team of skilled professionals, we are
            committed to providing the highest quality welding services to meet
            our clients' needs and exceed their expectations. From custom
            fabrication to repair and maintenance, we have the expertise and
            resources to tackle even the most complex welding projects. We use
            state-of-the-art equipment and the latest techniques to ensure that
            every project is completed on time, on budget, and to the highest
            standards of quality.
            We understand that durability is critical to the success of our
            clients and their projects. We work closely with our clients to
            understand their needs and requirements and to design and build
            products and systems that meet their unique needs. We believe that
            by delivering durable solutions, we help our clients achieve their
            goals and make a positive impact on the world.
            Contact us today to learn more about our welding services and how we
            can help you achieve your welding goals.
          </p>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}
