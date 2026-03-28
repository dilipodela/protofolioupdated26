// 'use client';
// import React, { useEffect, useState } from 'react'
// import { FaCode } from 'react-icons/fa'
// import Link from 'next/link';
// import { Navlinks } from '../../../constant/constant';
// import { BiDownload } from 'react-icons/bi';
// import { HiBars3BottomRight } from 'react-icons/hi2';

// type Props = {
//     onav:()=>void;
// }

// const Nav = ({onav}:Props) => {
//     const [navbg,setnavbg] = useState(false);    // scroll to change nav bar transmittion

//     useEffect(() => {
//         const handler=() =>{
//         if(window.scrollY >=90) setnavbg(true);
//         if(window.scrollY <90) setnavbg(false);
//     };
//     window.addEventListener('scroll',handler);

//     return () => window.removeEventListener('scroll',handler);
// },[]);




//   return (
//     <div className={`transition-all ${navbg ? "bg-[#0f142ed9] shadow-md":""} duration-200 h-[12vh] z-[10000] fixed w-full`}>
//         <div className="flex items-center h-full justify-between w-[90%] mx-auto">
//             {/* logo */}
//             <div className="flex items-center space-x-2">
//                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
//                     <FaCode className="w-5 h-5 text-black" />
//                 </div>
//                 <h1 className=" text-xl hidden sm:block md:text-2xl text-white font-bold" >Dilip</h1>
//             </div>
//              {/*navlinks*/}
//              <div className="hidden lg:flex items-center space-x-10">
//                 {Navlinks.map((link)=>(
//                     <Link key={link.id} href={link.url} className="text-base hover:text-cyan-300 text-white font-medium  transition-all duration-200"><p>{link.label}</p></Link>
//                 ))}
//              </div>
//              {/* buttons*/}
//              <div className="flex items-center space-x-4">
//                 {/* CV button */}
//                 <button className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2">
//                 <BiDownload className="w-5 h-5" />
//                 <span>Download CV</span>
//                 </button>
//                 {/* Burger menu */}
//                 <HiBars3BottomRight className="w-8 h-8 cursor-pointer text-white lg:hidden" onClick={onav} />
//              </div>
//             </div>
//             </div>
        
//   )
// }

// export default Nav;


'use client';
import React, { useEffect, useState } from 'react';
import { FaCode } from 'react-icons/fa';
import Link from 'next/link';
import { Navlinks } from '../../../constant/constant';
import { BiDownload } from 'react-icons/bi';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
  onav: () => void;
};

const Nav = ({ onav }: Props) => {
  const [navbg, setnavbg] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll effect for navbar background and visibility
  useEffect(() => {
    const handler = () => {
      const currentScrollY = window.scrollY;
      
      // Control background color change
      if (currentScrollY >= 90) setnavbg(true);
      else setnavbg(false);

      // Control show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, [lastScrollY]);

  return (
    <div
      className={`transition-all duration-500 ease-in-out h-[12vh] z-[10000] fixed w-full ${
        navbg ? 'bg-[#0f142ed9] shadow-md' : ''
      } ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            Dilip
          </h1>
        </div>

        {/* navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {Navlinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="text-base hover:text-cyan-300 text-white font-medium transition-all duration-200"
            >
              <p>{link.label}</p>
            </Link>
          ))}
        </div>

        {/* buttons */}
        <div className="flex items-center space-x-4">
          {/* CV button */}
          <a href="/images/DilipResume.pdf" download={true}>
          <button className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 hover:bg-blue-900 transition-all duration-300 text-white flex items-center space-x-2">
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </button></a>

          {/* Burger menu */}
          <HiBars3BottomRight
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
            onClick={onav}
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
