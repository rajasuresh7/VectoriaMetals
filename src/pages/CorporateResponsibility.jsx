import React, { useEffect } from 'react'
import corporate_responsibility from '../assets/corporate-responsibility.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { FaRegCalendarCheck } from 'react-icons/fa';

function CorporateResponsibility() {

  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <div className='font-poppins text-[#1f3b64]'>
      <div className='bg-[#1f3b64]'>
        <h2 className='text-[20px] lg:text-[40px] text-white py-4 ml-5 lg:ml-10'>Corporate Responsibility</h2>
      </div>
      <div className='relative w-[90%] mx-auto flex flex-col md:flex-row mt-10' data-aos="zoom-in">
        {/* Watermark (hidden on mobile and tablet) */}
        {/* <div className='absolute -top-72 lg:top-0 inset-0 flex justify-center items-center z-0 md:flex'>
          <h1 className='text-[50px] md:text-[100px] lg:text-[150px] text-[#1f3b64] opacity-5 font-bold absolute transform -rotate-45 lg:-rotate-12 w-full text-center'>
            Victoria Metals
          </h1>
        </div> */}

        {/* Main content */}
        <div className='relative z-10 md:w-[60%] w-full'>
          <h3 className='text-[20px] lg:text-[28px] font-semibold my-4'>
            The Next Big Think In Data Analysis
          </h3>
          <p className='text-[15px]'>
            We believe sustainable success can only be built on a foundation of responsible business practices, and that everyone gains an advantage
            by adopting the values of RISE (Respect, Integrity, Service and Excellence).
          </p>

          <p className='my-4 text-[15px]'>
            We recognize the impact we have on our communities, clients, employees, and stakeholders – and why our pillars of corporate responsibility are key to providing
            industry leadership that grows our business in socially responsible ways.
          </p>

          <p className='my-3 text-[15px]'>1. Delivering value to customers.</p>
          <p className='my-3 text-[15px]'>2. Investing in employees.</p>
          <p className='my-3 text-[15px]'>3. Dealing fairly and ethically with suppliers.</p>
          <p className='my-3 text-[15px]'>4. Supporting the communities where the companies operate.</p>
          <p className='my-3 text-[15px]'>5. Generating long-term value for shareholders.</p>
          <p className='my-3 text-[15px]'>6. Noting that each company stakeholder is essential.</p>

          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/contact-us');
            }}
            href="#_"
            className="relative inline-flex items-center justify-center overflow-hidden font-medium px-10 py-2 my-10 text-indigo-600 border-[#ffc371] transition duration-300 ease-out border-2 rounded-full shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  color='#1f3b64'
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute text-[20px] flex items-center justify-center w-full h-full text-[#1f3b64] font-semibold transition-all duration-300 transform group-hover:translate-x-full ease">
              <FaRegCalendarCheck className='text-[#1f3b64] text-[20px] mr-2' />Enquiry Now
            </span>
            <span className="relative invisible">Enquiry Now</span>
          </button>
        </div>

        <div className='relative z-10 my-6 md:my-0 md:w-[50%] w-full flex justify-center'>
          <img src={corporate_responsibility} alt="corporate_responsibility" className="w-full h-auto rounded-md" />
        </div>
      </div>

    </div>
  )
}

export default CorporateResponsibility