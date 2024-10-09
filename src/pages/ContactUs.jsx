import React, { useEffect } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdAttachEmail } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import AOS from 'aos';
import 'aos/dist/aos.css';


function ContactUs() {

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <div className='text-[#1f3b64] font-poppins'>
      <div className='bg-[#1f3b64]'>
        <h2 className='text-[25px] lg:text-[40px] text-white py-4 ml-10'>Contact Us</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-2 w-[90%] mx-auto text-center'>
        <a data-aos="zoom-in" href="https://www.google.com/maps/search/?api=1&query=No+2D-1+Jalan+Jubli+Perak+22/1+Seksyen+22+40400+Shah+Alam+Selangor+Darul+Ehsan">
          <CiLocationOn className='w-10 lg:w-14 h-10 lg:h-14 text-[#ffc371] hover:text-[#1f3b64] mx-auto mt-10' />
          <p className='font-semibold text-[20px] lg:text-[24px]'>Location</p>
          <p className='text-[14px] lg:text-[16px]'>Selangor Darul Ehsan</p>
        </a>
        <a href="mailto:info@victoriametals.space" data-aos="zoom-in">
          <MdAttachEmail className='w-10 lg:w-14 h-10 lg:h-14 text-[#ffc371] hover:text-[#1f3b64] mx-auto mt-10' />
          <p className='font-semibold text-[20px] lg:text-[24px]'>Email Us</p>
          <p className='text-[14px] lg:text-[16px]'>info@victoriametals.space</p>
        </a>
        <div data-aos="zoom-in">
          <CiClock2 className='w-10 lg:w-14 h-10 lg:h-14 text-[#ffc371] hover:text-[#1f3b64] mx-auto mt-10' />
          <p className='font-semibold text-[20px] lg:text-[24px]'>Working Hours</p>
          <p className='text-[14px] lg:text-[16px]'>MON-SAT | 9am to 6pm
            SUN | Holiday</p>
        </div>
      </div>
    </div>
  )
}

export default ContactUs