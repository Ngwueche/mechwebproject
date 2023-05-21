import React from 'react'
import ServicesCard from './ServicesCard';
import crane from "./img/site_images/crane-4.jpg"
import agric from "./img/site_images/Agric equipments.jpg"
import BT from "./img/site_images/brew tanks.jpg"
import tractor from "./img/site_images/tractor.jpg"

export default function Services() {
  return (
    <div>
      <div className='bg-black py-10'>
        <h2 className='text-center mb-10 text-white  font-bold text-4xl'>
          {" "}
          Our <span className='text-primary'>Services</span>
        </h2>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  text-gray-300 '>
          <ServicesCard
            img={crane}
            title='Machine Hiring'
            body='We offer equipment hiring services, where clients can rent our high-quality welding equipment and machinery for their projects.'
          />
          <ServicesCard
            img={agric}
            title='Agric Processing Machines'
            body='We offer equipment hiring services, where clients can rent our high-quality welding equipment and machinery for their projects.'
          />
          <ServicesCard
            img={BT}
            title='Factory Installation'
            body='We offer equipment hiring services, where clients can rent our high-quality welding equipment and machinery for their projects.'
          />
          <ServicesCard
            img={tractor}
            title='Tractor Hiring'
            body='We offer equipment hiring services, where clients can rent our high-quality welding equipment and machinery for their projects.'
          />
        </div>
        <a href="/services" >
        <button className='flex justify-center mt-8 md:mt-16 mx-auto text-white text-lg md:text-2xl bg-transparent border rounded-md px-2 md:px-4 py-1 md:py-2 hover:bg-primary hover:text-black hover:text-bold'>
                Contact Us
        </button>
        </a>
      </div>
    </div>
  );
}
