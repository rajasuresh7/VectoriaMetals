import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaRegWindowClose } from "react-icons/fa";
import { CiLocationOn } from 'react-icons/ci';
import { MdAttachEmail } from 'react-icons/md';
import { MdHome } from "react-icons/md";
import { MdPermContactCalendar } from "react-icons/md";
import { FaSquarePollHorizontal } from "react-icons/fa6";
import { FaUsersGear } from "react-icons/fa6";



function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="lg:hidden">
        <div className="flex justify-between items-center bg-[#ffc371] p-4 text-white">
          <div>
            <p className='text-[40px] font-semibold font-Stylish text-[#1f3b64]'>Victoria Metals</p>
          </div>
          <button onClick={() => {
            setIsNavOpen(!isNavOpen)
          }} className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 text-left bg-white z-50 overflow-scroll transform ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
        <div className="p-6">
          <FaRegWindowClose onClick={() => setIsNavOpen(false)} className='w-7 h-7 ml-auto text-[#1f3b64]' />
          <div className="flex flex-col items-center">
            <p className="text-[40px] font-semibold font-Stylish text-[#1f3b64]">Victoria Metals</p>
            <hr className="w-20 border-[#ffc371] border-[2px] mt-1" />
          </div>
          <ul className="space-y-6 mt-10 ml-5">
            <li onClick={() => { setIsNavOpen(false); navigate('/'); }} className="font-semibold hover:text-[#ffc371] text-[18px] flex items-center gap-5  text-[#1f3b64] cursor-pointer">
              <MdHome className='w-6 h-6' /> HOME</li>
            <li onClick={() => { setIsNavOpen(false); navigate('/about-us'); }} className="font-semibold hover:text-[#ffc371] text-[16px] flex items-center gap-5 text-[#1f3b64] cursor-pointer">
              <FaSquarePollHorizontal className='w-6 h-6' /> ABOUT US</li>

            {/* SERVICES */}
            {/* <li className="font-semibold">
              SERVICES
              <ul className="pl-4 space-y-2">
                <li className="cursor-pointer" onClick={() => { setIsNavOpen(false); navigate('/antiques'); }}>Antiques</li>
                <li className="cursor-pointer" onClick={() => { setIsNavOpen(false); navigate('/radiation-safety'); }}>Radiation Safety</li>
                <li className="cursor-pointer" onClick={() => { setIsNavOpen(false); navigate('/rare-earth-metals'); }}>Rare Earth Metals</li>
                <li className="cursor-pointer" onClick={() => { setIsNavOpen(false); navigate('/pgm-metals'); }}>PG Metals</li>
                <li className="cursor-pointer" onClick={() => { setIsNavOpen(false); navigate('/precious-stones'); }}>Precious Stones</li>
              </ul>
            </li> */}

            {/* INVESTMENTS */}
            {/* <li className="font-semibold">
              INVESTMENTS
              <ul className="pl-4 space-y-2">
                <li className="cursor-pointer" onClick={() => { setIsNavOpen(false); navigate('/research-funding-one'); }}>Research Funding One</li>
                <li className="cursor-pointer" onClick={() => { setIsNavOpen(false); navigate('/research-funding-two'); }}>Research Funding Two</li>
              </ul>
            </li> */}

            <li onClick={() => { setIsNavOpen(false); navigate('/Corporate-Responsibility'); }} className="font-semibold hover:text-[#ffc371] text-[#1f3b64] text-[16px] flex items-center gap-5 cursor-pointer">
              <FaUsersGear className='w-6 h-6' />CORPORATE RESPONSIBILITY</li>
            <li onClick={() => { setIsNavOpen(false); navigate('/contact-us'); }} className="font-semibold hover:text-[#ffc371] text-[#1f3b64] text-[16px] flex items-center gap-5 cursor-pointer">
              <MdPermContactCalendar className='w-6 h-6' /> CONTACT US</li>
          </ul>
        </div>
        {/* <div className='bg-[#1f3b64] text-white px-6 h-[400px]'>
          <br />
          <div>
            <MdAttachEmail className='w-10 h-10 mx-auto text-[#33d1cb]' />
            <a href="mailto:info@victoriametals.space" className='hover:underline font-semibold'>
              <p>info@victoriametals.space</p>
            </a>
          </div>
          <br />
          <div>
            <CiLocationOn className='w-10 h-10 mx-auto text-[#33d1cb]' />
            <p className='mt-5 text-[16px] font-semibold'>No 2D-1 Jalan Jubli Perak 22/1</p>
            <p className='mt-2 text-[16px] font-semibold'>Seksyen 22 40400 Shah Alam</p>
            <p className='mt-2 text-[16px] font-semibold'>Selangor Darul Ehsan</p>
          </div>
          <br />
          <button href="#_" className="relative inline-flex items-center justify-center overflow-hidden font-medium px-4 my-1 text-indigo-600 transition duration-300 ease-out border-2 border-white rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#33d1cb] group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="absolute text-[13px] flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Enquiry Now</span>
            <span className="relative invisible">Enquiry Now</span>
          </button>
        </div> */}
      </div>

      {/* Laptop view*/}
      <div className='hidden lg:block bg-white font-poppins'>
        <div className='w-[90%] flex items-center justify-between mx-auto my-6'>
          {/* <img onClick={() => navigate('/')} src={logo} alt="logo" className='w-38 h-20 cursor-pointer' /> */}
          <div>
            <p className='text-[40px] font-semibold font-Stylish text-[#1f3b64]'>Victoria Metals</p>
            <hr className='w-20 border-[#ffc371] border-[2px] -mt-3 ml-2' />
          </div>
          <ul className='flex gap-12'>
            <li onClick={() => navigate('/')} className={`under-line flex items-center gap-1 text-[#1f3b64] font-semibold cursor-pointer relative ${isActive('/') ? 'active' : ''}`}>
              <MdHome className='w-5 h-5' />  HOME
            </li>
            <li onClick={() => navigate('/about-us')} className={`under-line flex items-center gap-1 text-[#1f3b64] font-semibold cursor-pointer relative ${isActive('/about-us') ? 'active' : ''}`}>
              <FaSquarePollHorizontal className='w-5 h-5' /> ABOUT US
            </li>

            {/* <li className='relative font-semibold cursor-pointer group'>
              SERVICES
              <ul className='absolute hidden group-hover:block bg-white text-black py-2 shadow-lg rounded'>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/antiques')}>Antiques</li>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/radiation-safety')}>Radiation Safety</li>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/rare-earth-metals')}>Rare Earth Metals</li>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/pgm-metals')}>PG Metals</li>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/precious-stones')}>Precious Stones</li>
              </ul>
            </li>

            <li className='relative font-semibold cursor-pointer group'>
              INVESTMENTS
              <ul className='absolute hidden group-hover:block bg-white text-black py-2 shadow-lg rounded'>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/research-funding-one')}>Research Funding One</li>
                <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={() => navigate('/research-funding-two')}>Research Funding Two</li>
              </ul>
            </li> */}

            <li onClick={() => navigate('/Corporate-Responsibility')} className={`under-line flex items-center gap-1 text-[#1f3b64] font-semibold cursor-pointer relative ${isActive('/Corporate-Responsibility') ? 'active' : ''}`}>
              <FaUsersGear className='w-5 h-5' /> CORPORATE RESPONSIBILITY
            </li>
            <li onClick={() => navigate('/contact-us')} className={`under-line flex items-center gap-1 text-[#1f3b64] font-semibold cursor-pointer relative ${isActive('/contact-us') ? 'active' : ''}`}>
              <MdPermContactCalendar className='w-5 h-5' />  CONTACT US
            </li>
          </ul>
        </div>
      </div>
      <div className='font-poppins hidden py-2 lg:block bg-[#1f3b64] text-white' style={{ background: 'linear-gradient(90deg, rgba(255,95,109,1) 0%, rgba(255,195,113,1) 35%)' }}>
        <div className='w-[90%] flex justify-between mx-auto my-0'>
          <div className='flex items-center gap-8'>
            <a href="mailto:info@victoriametals.space" className='hover:underline flex items-center gap-1 font-semibold text-[14px]'>
              <MdAttachEmail />
              <p>info@victoriametals.space</p>
            </a>
            <div className='flex items-center gap-1'>
              <CiLocationOn />
              <a
                href="https://www.google.com/maps/search/?api=1&query=No+2D-1+Jalan+Jubli+Perak+22/1+Seksyen+22+40400+Shah+Alam+Selangor+Darul+Ehsan"
                target="_blank"
                rel="noopener noreferrer"
                className='hover:underline text-[14px] font-semibold'
              >
                Selangor Darul Ehsan
              </a>
            </div>
          </div>
          {/* <button onClick={() => navigate("/contact-us")} href="#_" className="relative inline-flex items-center justify-center overflow-hidden font-medium px-4 my-1 text-indigo-600 transition duration-300 ease-out border-2 border-[#1f3b64] rounded-full shadow-md group">
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-[#1f3b64] duration-300 -translate-x-full bg-[#ffc371] group-hover:translate-x-0 ease">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path color='#1f3b64' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span className="absolute text-[13px] flex items-center justify-center w-full h-full text-[#1f3b64] transition-all duration-300 transform group-hover:translate-x-full ease">
              <FaRegCalendarCheck className='text-[#1f3b64] text-[20px] mr-2' />Enquiry Now</span>
            <span className="relative invisible">Enquiry Now</span>
          </button> */}
        </div>
      </div>

      <style jsx>{`
        .under-line::after {
          content: '';
          position: absolute;
          width: 0;
          height: 3px;
          left: 0;
          bottom: -4px;
          background-color: #ff5f6d;
          transition: width 0.3s ease;
        }
        .under-line:hover::after,
        .active::after {
          width: 100%;
        }
      `}</style>
    </>
  );
}

export default Header;
