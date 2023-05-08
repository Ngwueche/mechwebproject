import React from 'react'
import logo from "./img/logo/MechWeld logo.png"
import { NavLink } from 'react-router-dom'


export default function Footer() {

    const year = new Date().getFullYear()
  return (
    <div>
      <div className='flex flex-col  bg-black'>
        <div className=' mt-20 flex flex-col md:flex-row border-b-2 items-center gap-8 px-8 md:px-24 '>
          <div className=''>
            <img src={logo} className='flex w-17 h-12' />
            <p className=' text-start text-white pt-4 font-mono text-sm'>
              We are engineering service company based in Nigeria and dedicated
              to offering excellent mechanical engineering, fabrication and
              welding services to companies around the world.
            </p>
          </div>
          <div className='md:px-6 '>
            <h2 className='text-white font-bold space-x-2 text-2xl '>
              Contact Info
            </h2>
            <div className=' text-white mt-2 md:mt-6'>
              <p className=' font-mono text-sm'>
                #1 Mech Weld Lane, Opposite Nigeria Breweries, Amaeke, Ngwo,
                Enugu State, Nigeria.
              </p>
              <div className='flex items-center gap-2'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  class='w-5 h-5 mt-2 md:mt-6'
                >
                  <path
                    fill-rule='evenodd'
                    d='M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z'
                    clip-rule='evenodd'
                  />
                </svg>
                <p typeof='telephone' className='mt-2 md:mt-6 font-mono'>
                  +23480 386 06 044
                </p>
              </div>
            </div>
          </div>
          <div className='w-full md:w-[50%]'>
            <h2 className='text-white font-bold text-2xl'>Links</h2>
            <div className='flex flex-col text-blue-800 font-medium my-6 text-l'>
              <NavLink to='/'>
                Home
              </NavLink>
              <NavLink to='/about'>
                About
              </NavLink>
              <NavLink to='/services'>
                Services
              </NavLink>
              <NavLink to='/contact'>
                Contact
              </NavLink>
            </div>
          </div>
        </div>
        <div className='bg-[#000000af]'>
          <footer className='text-white text-center pt-12'>
            © {year} Mazal-Tov Limited, Inc. All right reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}
