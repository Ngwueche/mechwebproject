import React from 'react'
import twitter from "./img/icons/twitter.png"
import linkedin from "./img/icons/linkedin.png"


export default function ContactCards() {
  return (
    <section className='bg-black py-10 '>
      <div className='text-white text-center mt-24'>
        <h2 className='text-2xl md:text-3xl font-bold'>
          Leverage our Decades of Engineering Experience
        </h2>
        <p></p>
      </div>
      <div className='container flex flex-col md:flex-row justify-evenly mt-12 gap-6  items-center'>
        <div className='justify-center  border rounded-2xl bg-white mt-4 '>
          <div className='p-4 overflow-hidden  text-center  w-[300px] h-[300px]'>
            <div className=' flex flex-col'>
              <div className='flex flex-col gap-2'>
                <span className='flex p-4 justify-center '>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    class='w-12 h-12'
                  >
                    <path d='M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z' />
                    <path
                      fill-rule='evenodd'
                      d='M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z'
                      clip-rule='evenodd'
                    />
                  </svg>
                </span>

                <h5 className='mb-4 font-bold text-[20px]'> Social Media </h5>
                <p>
                  Stay informed on our recuitment, technologies and innoavtions
                  via our social media handles.
                </p>
              </div>
            </div>
            <div className='  mt-4'>
              <ul className='flex gap-4 justify-center items-center '>
                <li className=''>
                  <a href='https://twitter.com/_mechweld' target='_blank'>
                    <img src={twitter} className=' h-[30px]'></img>
                  </a>
                </li>
                <li>
                  <a href='https://Linkedin.medium.com/' target='_blank'>
                    <img src={linkedin} className=' h-[30px]'></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-4 '>
          <div className='p-4 bg-white border rounded-2xl text-center flex-col w-[300px] h-[300px] '>
            <span className='flex p-4 justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                class='w-12 h-12'
              >
                <path d='M19.5 22.5a3 3 0 003-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 01-.712 1.321l-5.683-3.06a1.5 1.5 0 00-1.422 0l-5.683 3.06a.75.75 0 01-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 003 3h15z' />
                <path d='M1.5 9.589v-.745a3 3 0 011.578-2.641l7.5-4.039a3 3 0 012.844 0l7.5 4.039A3 3 0 0122.5 8.844v.745l-8.426 4.926-.652-.35a3 3 0 00-2.844 0l-.652.35L1.5 9.59z' />
              </svg>
            </span>
            <div className=' mb-4'>
              <h5 className='mb-4 font-bold text-[20px]'>Email Us</h5>
              <p>
                Send us an email at: <br />
                <strong>contact@mech-weld.com</strong>
              </p>
            </div>
            <div className='mt-12'>
              <a
                href='mailto:contact@mech-weld.com'
                className=' border px-4 py-2 bg-gray-100 hover:bg-transparent font-bold shadow-md rounded-2xl'
              >
                Email Us
              </a>
            </div>
          </div>
        </div>

        <div className=' mt-4 mt-lg-0'>
          <div className='p-4 bg-white border rounded-2xl text-center flex-col w-[300px] h-[300px]'>
            <span className='flex p-4 justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                class='w-12 h-12'
              >
                <path
                  fill-rule='evenodd'
                  d='M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z'
                  clip-rule='evenodd'
                />
              </svg>
            </span>
            <div className=' mb-4'>
              <h5 className='mb-4 font-bold text-[20px]'>Office Location</h5>
              <p>
                #1 Mech Weld Lane, Opposite Nigeria Breweries, Amaeke, Ngwo,
                Enugu State, Nigeria.
              </p>
              <div className='flex mt-6 justify-center gap-2 border rounded-xl bg-gray-100 py-1 px-1 '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  class='w-6 h-6'
                >
                  <path
                    fill-rule='evenodd'
                    d='M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z'
                    clip-rule='evenodd'
                  />
                </svg>
                <a
                  href='https://goo.gl/maps/Z1aBs6QBSTrtKAFu5'
                  target='_blank'
                  className='font-bold'
                >
                  Direction on Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
