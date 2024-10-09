import React from 'react'
import { CiLocationOn } from 'react-icons/ci';
import { MdAttachEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="bg-white font-semibold font-poppins">
      <br />
      <div className="mt-14">
        <div className="w-full md:w-[80%] mx-auto p-5 rounded-md flex flex-col md:flex-row items-center justify-around text-center md:text-left" style={{ background: 'linear-gradient(90deg, rgba(255,95,109,1) 0%, rgba(255,195,113,1) 35%)' }}>
          <p className="text-black mb-4 md:mb-0 text-[24px] md:text-[28px] font-Stylish font-semibold">Have any questions?</p>
          <a href="mailto:info@victoriametals.space" className='bg-white text-black font-Stylish px-4 py-2 text-[18px] md:text-[20px] rounded-md cursor-pointer'>
            <p>info@victoriametals.space</p>
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-[90%] text-[#1f3b64] mx-auto mt-10">
        <div className="text-left lg:text-left">
          <h3 className="font-semibold text-[17px] md:text-[20px]">Address</h3>
          <hr className='w-14 border-[#ffc371] border-[2px] mt-0' />
          <p className="py-2 text-[13px]">
            <CiLocationOn className='w-6 h-6' />
            <a
              href="https://www.google.com/maps/search/?api=1&query=No+2D-1+Jalan+Jubli+Perak+22/1+Seksyen+22+40400+Shah+Alam+Selangor+Darul+Ehsan"
              target="_blank"
              rel="noopener noreferrer"
              className='hover:underline'
            >
              No 2D-1 Jalan Jubli Perak <br /> 22/1 Seksyen 22 40400 <br /> Shah Alam Selangor Darul Ehsan
            </a>
          </p>
          <p className="py-2 text-[13px]">
            <MdAttachEmail className='w-6 h-6' />
            <a href="mailto:info@victoriametals.space" className='hover:underline'>
              <p>info@victoriametals.space</p>
            </a>
          </p>
        </div>

        <div className="text-left lg:text-left text-[#1f3b64]">
          <h3 className="font-semibold text-[17px]">Quick Menu</h3>
          <hr className="w-14 border-[#ffc371] border-[2px] mt-0" />
          <p
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/');
            }}
            className="py-1 cursor-pointer hover:text-[#ffc371] w-[50%] text-[13px]"
          >
            Home
          </p>
          <p
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/about-us');
            }}
            className="py-1 cursor-pointer hover:text-[#ffc371] w-[50%] text-[13px]"
          >
            About Us
          </p>
          <p
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/Corporate-Responsibility');
            }}
            className="py-1 cursor-pointer hover:text-[#ffc371] w-[50%] text-[13px]"
          >
            Corporate Responsibility
          </p>
          <p
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/contact-us');
            }}
            className="py-1 cursor-pointer hover:text-[#ffc371] w-[50%] text-[13px]"
          >
            Contact Us
          </p>
        </div>

        <div className="w-full max-w-lg mx-auto">
          <h3 className="font-semibold text-[17px]">Reach Us</h3>
          <hr className='w-14 border-[#ffc371] border-[2px] mt-0' />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0943741728292!2d101.555514!3d3.0694515000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4d0ed0d73e6b%3A0x8953c9d5c96bd6ae!2s2%2C%20Jalan%20Jubli%20Perak%2022%2F1%2C%20Seksyen%2022%2C%2040400%20Shah%20Alam%2C%20Selangor%2C%20Malaysia!5e0!3m2!1sen!2sin!4v1727868853531!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0, marginTop: '10px', borderRadius: "15px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
      <div className='bg-black mt-5 text-white text-center'>
        <p className="py-2 text-[10px] tracking-wider"> &copy; 2018 - 2024 Victoria Metals. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer