import React from 'react'

export  function ServicesPageCard(props) {
  return (
    <section>
      <div className='flex flex-col  mx-auto justify-evenly items-center px-8'>
          <h2 className='text-center font-bold text-3xl mb-12'>{props.title}</h2>
        <div className='flex flex-col md:flex-row-reverse items-center'>
        <div className='flex md:w-[50%] w-full flex-col mb-8 text-justify px-8'>
          <p classname=''>
            {props.body}
          </p>
        </div>
        <div classname=' '>
          <img src={props.img} alt='' className='shadow-md rounded-2xl' />
        </div>
        </div>
      </div>
    </section>
  );
}
export function ServicesPageCard2(props) {
  return (
    <section>
      <div className='flex flex-col mx-auto justify-evenly items-center p-20 px-8'>
          <h2 className='text-center font-bold text-3xl mb-12'>{props.title}</h2>
        <div className='flex flex-col md:flex-row items-center'>
        <div className='flex md:w-[50%] w-full flex-col mb-8 text-justify px-8'>
          <p classname=''>
            {props.body}
          </p>
        </div>
        <div classname=' '>
          <img src={props.img} alt='' className=' shadow-md rounded-2xl' />
        </div>
        </div>
      </div>
    </section>
  );
}
