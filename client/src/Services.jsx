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
        <div className='mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  text-gray-300 '>
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
          <button className='mx-auto py-1 font-bold px-4 flex mt-8 justify-center text-white hover:bg-primary hover:text-black text-center border rounded-2xl'>Learn More
          </button>
        </a>
      </div>
    </div>
  );
}
