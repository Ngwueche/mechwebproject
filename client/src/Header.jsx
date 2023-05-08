import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "./img/logo/MechWeld logo5.png"
import ResponsiveNav from './ResponsiveNav';
// import {Link} from 'react-router-dom'

export default function Header() {
  const [activeLink, setActiveLink] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  // const [loading, setLoading] = useState('Home')

  const handleActiveLink = (event)=>{
    setActiveLink(event.target.innerText);
  };
  const isActiveLink = (className)=>{
    return className === activeLink ?  'bg-blue-900 text-white px-4 py-2 rounded-2xl': 'text-[#fdd028]';
  }
  // const handleLoaded = (event)=>{
  //   setLoading(event.target.innerText);
  // };
  // const isloaded = (className)=>{
  //   return className === activeLink ?  'bg-blue-900 text-white px-4 py-2 rounded-2xl': '';
  // }

    useEffect(() => {
      function handleScroll() {
        if (window.pageYOffset > window.innerHeight/4) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    //Responsive Navigation

  return (
    <ResponsiveNav />

  )
}
