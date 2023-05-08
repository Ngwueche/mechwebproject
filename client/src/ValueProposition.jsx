import React from 'react'
import vp from './img/site_images/vp.png'

export default function ValueProposition() {
  return (
    <div className='bg-black p-5 text-white'>
        <div className="flex gap-6 justify-center items-center py-20">
        <img src={vp} className='h-20' />
        <h2 className='text-center text-4xl font-bold py-2 border-b-2'>Our Value Proposition</h2>
        </div>
        <p className='sm:mx-auto md:mx-20 p-[5%] border-gray-500 shadow-sm leading-8 text-justify font-medium border'>
            At our welding professional company, we strive to provide exceptional welding services that meet and exceed the expectations of our clients. We specialize in delivering high-quality welding solutions that are customized to fit the unique needs of each customer.

            Our experienced and skilled welding professionals are equipped with the latest tools and techniques to provide seamless and efficient welding services. We use only the highest quality materials to ensure that our work is durable and long-lasting.

            We understand the importance of delivering projects on time and within budget, which is why we are committed to completing all projects promptly and efficiently. Our team is dedicated to providing outstanding customer service, and we pride ourselves on our ability to communicate effectively with our clients throughout every stage of the welding process.

            Whether you require welding services for commercial, industrial, or residential purposes, our team is equipped to handle any project, no matter how big or small. At our welding professional company, we are passionate about delivering exceptional quality, value, and service to every customer.
        </p>
    </div>
  )
}
