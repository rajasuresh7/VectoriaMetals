import React, { useEffect } from 'react'
import Lab from '../assets/Lab.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutUs() {

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <div className='font-poppins'>
      <div className="bg-[#1f3b64] text-white flex flex-col lg:flex-row items-center">
        <div className="w-[90%] lg:w-[50%] ml-6 lg:ml-24 py-10" data-aos="zoom-in">
          <h2>ABOUT US</h2>
          <hr className="w-10 border-[#ffc371] border-[2px] mt-1 mb-3" />
          <h3 className="text-[20px] md:text-[40px]">
            Victoria Lab - Space Science and Technology
          </h3>
          <p className="text-[13px] md:text-[20px]">
            Victoria Space Metals a multi-commodity project generator carries out research in the field of value
            added products from beach sand minerals, rare earth elements, iridium analysis, antiques purchase and
            sales, precious gems, undertakes consultancy projects on mineral separation and flow sheet development,
            carrying out mineral analysis and caters to the needs of internal and external customers.
          </p>
        </div>
        <img data-aos="zoom-in" className="w-[90%] mb-5 lg:w-[40%] h-auto object-cover rounded-md" src={Lab} alt="Lab" />
      </div>
      <div className='flex items-center justify-center h-screen relative'>
        <div className='absolute -z-10 w-[40%] h-auto'>
          <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'rgb(255, 95, 109)' }}></stop>
                <stop offset="100%" style={{ stopColor: 'rgb(255, 195, 113)' }}></stop>
              </linearGradient>
            </defs>
            {/* <path fill="url(#gradient)">
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="
                    M404,304.5Q337,359,270,407Q203,455,140,394Q77,333,110.5,266Q144,199,179,145Q214,91,274,117.5Q334,144,402.5,197Q471,250,404,304.5Z;
                    M354.5,311.5Q348,373,276,413Q204,453,120,403Q36,353,93,277.5Q150,202,187.5,171.5Q225,141,279,143.5Q333,146,347,198Q361,250,354.5,311.5Z;
                    M383.5,324.5Q369,399,297,380Q225,361,128,358.5Q31,356,74.5,271.5Q118,187,168,148Q218,109,298,99Q378,89,388,169.5Q398,250,383.5,324.5Z;
                    M415,306Q339,362,271,410Q203,458,128.5,401Q54,344,55.5,250.5Q57,157,127,88.5Q197,20,295.5,45Q394,70,442.5,160Q491,250,415,306Z;
                  "
              />
            </path> */}
          </svg>
        </div>

        <div className='relative text-[#1f3b64]' data-aos="zoom-in">
          {/* <div className='absolute top-10 lg:top-0 inset-0 flex justify-center items-center z-0 md:flex'>
            <h1 className='text-[50px] md:text-[100px] lg:text-[150px] text-[#1f3b64] opacity-5 font-bold absolute transform -rotate-45 lg:-rotate-12 w-full text-center'>
              Victoria Metals
            </h1>
          </div> */}

          <div className='relative z-10'>
            <h2 className='text-center text-[20px] font-semibold lg:text-[24px] mt-2 mb-3'>
              Three Level Strategy
            </h2>
            <div className='w-[90%] mx-auto'>
              <h3 className='text-[17px] lg:text-[18px] font-semibold mb-2'>
                Business Level Strategy
              </h3>
              <p className='mb-10 text-[13px] lg:text-[16px]'>
                The business-level strategy is aimed at gaining a competitive advantage by offering true value for customers while being a unique and hard-to-imitate player within the competitive landscape. We have a good understanding of a business and its external environment, use internal analysis frameworks. When good strategic analysis has been done, we request top managements to move on to strategy formulation by using frameworks.
              </p>
              <h3 className='text-[17px] lg:text-[18px] font-semibold mb-2'>
                Functional Level Strategy
              </h3>
              <p className='mb-10 text-[13px] lg:text-[16px]'>
                Functional level strategy is often aimed at improving the effectiveness of a company’s operations within departments. Within these departments, workers often refer to their ‘Marketing Strategy’, ‘Human Resource Strategy’ or ‘R&D Strategy’. The goal is to align these strategies as much as possible with the greater business strategy.
              </p>
              <h3 className='text-[17px] lg:text-[18px] font-semibold mb-2'>
                Corporate Level Strategy
              </h3>
              <p className='mb-10 text-[13px] lg:text-[16px]'>
                At the corporate level strategy however, management not only considers how to gain a competitive advantage in each of the line of businesses the firm is operating in, but also which businesses should be in the first place. It is about selecting an optimal set of businesses and determining how they should be integrated into a corporate whole: a portfolio. Typically, major investment and divestment decisions are made at this level by the funding top managements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs