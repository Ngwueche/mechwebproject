import React from 'react'

export default function ServicesCard(props) {
  return (
    <section>
      <div className='mx-auto  border flex rounded-2xl text-center flex-col w-[250px] h-[450px]  items-center  overflow-hidden  '>
        <img className='w-[300px] h-[200px] aspect ' src={props.img} />
        <h2 className='text-xl mb-2 mt-4 font-bold'>{props.title}</h2>
        <div className='border-t-2 bg-transparent text-gray-300  flex flex-col'>
          <p className=' px-4 my-4 text-center'>{props.body}</p>
          {/* <button className='mx-auto my-4 w-40 hover:bg-primary hover:text-black text-center border'>Learn More </button> */}
        </div>
      </div>
    </section>
  );
}
