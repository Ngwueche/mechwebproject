import React from 'react'


export default function Cards(props) {

  return (
    <div className='mx-auto lg:px-6 sm:px-4 flex flex-col items-center  overflow-hidden'>
        <img className='p-8 w-32 h-32' src = {props.img} />
        <h2 className='text-xl mb-2 -mt-4 font-bold'>{props.title}</h2>
        <div className=' rounded-2xl h-[70%]  bg-gray-100 border-2 border-gray-350 flex '>
            <p className='py-8 px-6 font-normal text-center leading-6' >{props.body}</p>
        </div>
    </div>
  )
}
