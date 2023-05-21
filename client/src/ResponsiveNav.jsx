import React, { useEffect, useState } from "react";
import { NavLink, useLocation  } from "react-router-dom";
import logo from "./img/logo/MechWeld logo5.png";
import './css/App.css';


export default function ResponsiveNav() {
  // const [activeLink, setActiveLink] = useState("");
  let [isScrolled, setIsScrolled] = useState(false);
    // const [isToggled, setIsToggled] = useState(false)
  // const handleActiveLink = (event) => {
  //   setActiveLink(event.target.innerText);
  // };
  // const isActiveLink = (className) => {
  //   return className === activeLink
  //     ? "bg-blue-900 text-white px-4 py-2 rounded-2xl"
  //     : "text-[#fdd028]";
  // };

  // const location = useLocation();
  // const isActive = (pathname) => {
  //   return location.pathname === pathname ? 'bg-blue-900 text-white px-4 py-2 rounded-2xl' : '';
  // };

  const handleActiveLink = (event)=>{
    setActiveLink(event.target.innerText);
  };
  const isActiveLink = (className)=>{
    return className === activeLink ?  'bg-blue-900 text-white px-4 py-2 rounded-2xl': 'text-[#fdd028]';
  }
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);


  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > window.innerHeight / 4) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav
        className={`fixed w-full justify-between shadow-2xl
        z-50 ${
          !isScrolled ? "" : "bg-gray-100"
        } transition-colors duration-0 ease-in-out`}
      >
        <div className=' px-4 md:px-8'>
          <div className='flex  h-16 justify-between items-center'>
              <div className='md:block'>
                <NavLink to='/' className=' '>
                  <img
                    className='w-17 h-12 p-2'
                    src={logo}
                    alt='MechWeld_logo'
                  />
                </NavLink>
              </div>
              <div className='  hidden md:block'>
                <div className=''>
                  <div className='flex gap-12 font-bold text-white'>
                    <NavLink
                      to='/'
                      className={`font-bold text-lg px-4 py-2 text-primary ${activeLink === '/' ? 'bg-blue-900 text-white px-4 py-2 rounded-2xl' : ''}`}
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to='/about'
                      className= {`font-bold text-lg px-4 py-2 text-primary ${activeLink === '/about' ? 'bg-blue-900 text-white px-4 py-2 rounded-2xl' : ''}`}
                    >
                      About
                    </NavLink>
                    <NavLink
                      to='/services'
                      className={`font-bold text-lg px-4 py-2 text-primary ${activeLink === '/services' ? 'bg-blue-900 text-white px-4 py-2 rounded-2xl' : ''}`}
                    >
                      Services
                    </NavLink>
                    <NavLink
                      to='/contact'
                      className={` font-bold text-lg px-4 py-2 text-primary ${activeLink === '/contact' ? 'bg-blue-900 text-white px-4 py-2 rounded-2xl' : ''}`}
                    >
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>

            <div className='-mr-2  md:hidden'>
              <button
                type='button'
                onClick={toggleMenu}
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded={isOpen}
              >
                {isOpen ? (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                ) : (
                  <svg
                    className='block h-6 w-6'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className=' bg-gray-800 md:hidden' id='mobile-menu'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
              <div className='flex flex-col gap-4 items-center font-bold text-white'>
                <NavLink
                  to='/'
                  onClick={handleActiveLink}
                  className=''
                >
                  Home
                </NavLink>
                <NavLink
                  to='/about'
                  onClick={handleActiveLink}
                  className=''
                >
                  About
                </NavLink>
                <NavLink
                  to='/services'
                  onClick={handleActiveLink}
                  className=''
                >
                  Services
                </NavLink>
                <NavLink
                  to='/contact'
                  onClick={handleActiveLink}
                  className=''
                >
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
