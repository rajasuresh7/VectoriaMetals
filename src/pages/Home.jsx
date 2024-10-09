import React, { useEffect, useState } from 'react'
import Radiation_Safety_and_Protection from '../assets/Radiation-Safety-and-Protection (1).jpg'
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import Card_01 from "../assets/Card_1.png"
import Card_02 from "../assets/Experience.png"
import Card_03 from "../assets/Finance.png"
import Card_04 from "../assets/about.png"
import Antiques from "../assets/Antiques-1.jpg"
import Radiation_Safety from "../assets/Radiation-Safety-and-Protection (1).jpg"
import Rare_Earth_metals from "../assets/Rare-Earth-metals.jpg"
import Platinum from "../assets/Platinum-groupmetals.jpg"
import Precious from "../assets/Precious-stones.jpg"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css'
import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import backgroundVideo from '../assets/bg-video.mp4';
import Typical from 'react-typical';
import Footer from '../components/Footer';


const Card = ({ title, image, contant }) => (
  <div className="w-[90%] h-64 overflow-hidden rounded-lg mx-auto shadow-lg">
    <div className="relative h-full overflow-hidden group">
      <img
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
        src={image}
        alt={title}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white h-28">
        <h3 className="text-[10px] font-semibold text-[#1f3b64]">{title}</h3>
        <p className="text-sm font-semibold text-[#1f3b64] line-clamp-2">
          {contant}
        </p>
        <div className='flex text-[12px] items-center w-[100%] gap-3 mt-2 font-semibold text-[#ffc371] hover:text-[#1f3b64] transition-all duration-300 ease-out hover:scale-105'>
          FIND OUT MORE <FaArrowRight />
        </div>
      </div>
    </div>
  </div>
);

function Home() {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 2);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <div className=' font-poppins'>
      <div className='relative'>
        <video
          autoPlay
          loop
          muted
          className="absolute -top-20 lg:-top-8 inset-0 w-full h-[600px] object-cover -z-10"
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className='w-[90%] mx-auto my-0 lg:my-0 flex flex-col lg:flex-row justify-between'>
          <div className='w-[100%] lg:w-[70%]' data-aos="zoom-in">
            <p className='text-[25px] lg:text-[60px] pt-10 font-semibold text-white'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#ff5f6d] to-[#ffc371]'>
                <Typical
                  steps={[
                    'Victoria Metals', 2000,
                    '', 1000,
                  ]}
                  loop={Infinity}
                  wrapper="span"
                />
              </span>
              for Space <br />
              Science and Technology
            </p>

            <hr className='w-20 border-[#ffc371] border-[2px] mt-2 mb-10' />

            <div>
              <p className='flex items-center gap-3 text-[18px] font-semibold text-white hover:text-[#ffc371] transition-colors duration-300'>
                <FaCheckCircle className='text-[#ffc371] text-[16px]' /> Professional Team
              </p>
              <p className='flex items-center gap-3 text-[18px] font-semibold text-white hover:text-[#ffc371] transition-colors duration-300'>
                <FaCheckCircle className='text-[#ffc371] text-[16px]' /> Finance & Banking
              </p>
              <p className='flex items-center gap-3 text-[18px] font-semibold text-white hover:text-[#ffc371] transition-colors duration-300'>
                <FaCheckCircle className='text-[#ffc371] text-[16px]' /> 12 Years of Experience
              </p>
              <p className='flex items-center gap-3 text-[18px] font-semibold text-white hover:text-[#ffc371] transition-colors duration-300'>
                <FaCheckCircle className='text-[#ffc371] text-[16px]' /> It’s all about you
              </p>
            </div>

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
                  />
                </svg>
              </span>
              <span className="absolute text-[20px] flex items-center justify-center w-full h-full text-[white] font-semibold transition-all duration-300 transform group-hover:translate-x-full ease">
                <FaRegCalendarCheck className='text-white text-[20px] mr-2' /> Enquiry Now
              </span>
              <span className="relative invisible">Enquiry Now</span>
            </button>
          </div>
        </div>
      </div>
      <br />
      <div className='bg-[#eaedf2] h-auto'>
        <br />
        <div className='w-[90%] mx-auto' data-aos="zoom-in">
          <div className='p-4 md:p-8 lg:p-12'>
            <div className='flex flex-col lg:flex-row gap-10'>
              <div className="flex-1">
                <h3 className='text-[16px] font-semibold text-[#1f3b64]'>About Us</h3>
                <hr className='w-10 border-[#ffc371] border-[2px] mb-5' />
                <h1 className='text-[20px] md:text-[32px] font-bold text-[#1f3b64]'>We'll Ensure You Always get the Best Results</h1>
                <h4 className='text-[16px] md:text-[22px] font-medium text-[#1f3b64]'>Your full-service lab for clinical trials. Our mission is to ensure the generation of accurate.</h4>
                <p className='text-[13px] md:text-[17px] text-[#1f3b64]'>
                  Victoria Space Metals a multi-commodity project generator carries out research in the field of value added products from beach sand minerals, rare earth elements, iridium analysis, antiques purchase and sales, precious gems, undertakes consultancy projects on mineral separation and flow sheet development, carrying out mineral analysis and caters to the needs of internal and external customers.
                </p>
              </div>

              <div className="flex flex-col lg:flex-row gap-10">
                <div
                  className={`w-full sm:w-[260px] h-auto bg-white rounded-2xl overflow-hidden`}
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', background: 'linear-gradient(90deg, rgba(255,95,109,1) 0%, rgba(255,195,113,1) 35%)' }}
                >
                  <img src={Card_01} alt="Card 1" className="w-full h-[270px]" />
                  <p className="text-center font-semibold text-[#1f3b64] text-[18px]">Professional Team</p>
                  <p className="text-[14px] text-center text-[#1f3b64] px-5 my-2">
                    Just dream! We are ready to do it with our professional team.
                  </p>
                </div>

                <div
                  className={`w-full sm:w-[260px] h-auto bg-white rounded-2xl overflow-hidden`}
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', background: 'linear-gradient(90deg, rgba(255,95,109,1) 0%, rgba(255,195,113,1) 35%)' }}
                >
                  <img src={Card_02} alt="Card 2" className="w-full h-[270px]" />
                  <p className="text-center font-semibold text-[#1f3b64] text-[18px]">12 Years of Experience</p>
                  <p className="text-[14px] text-center text-[#1f3b64] px-5 my-2">We are ready to grow your business.</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-between gap-10 mt-10 text-[#1f3b64]'>
              <div className="flex flex-col lg:flex-row gap-10">
                <div
                  className={`w-full sm:w-[260px] h-auto rounded-2xl overflow-hidden`}
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', background: 'linear-gradient(90deg, rgba(255,95,109,1) 0%, rgba(255,195,113,1) 35%)' }}
                >
                  <img src={Card_03} alt="Card 3" className='w-full h-[270px]' />
                  <p className='text-center font-semibold text-[18px]'>Finance & Banking</p>
                  <p className='text-[14px] text-center px-5 my-2'>We offer our years of experience for your business. We also use new technologies and systems for you.</p>
                </div>
                <div
                  className={`w-full sm:w-[260px] h-auto rounded-2xl overflow-hidden`}
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px', background: 'linear-gradient(90deg, rgba(255,95,109,1) 0%, rgba(255,195,113,1) 35%)' }}
                >
                  <img src={Card_04} alt="Card 4" className='w-full h-[270px]' />
                  <p className='text-center font-semibold text-[18px]'>It’s all about you</p>
                  <p className='text-[14px] text-center px-5 my-2'>We have the right to detail about your work.</p>
                </div>
              </div>
              <div className="flex-1">
                <h3 className='text-[18px] font-semibold text-[#1f3b64]'>Three level strategy:</h3>
                <ul className='list-disc list-inside text-[#1f3b64] text-[14px]'>
                  <li className='mt-2'>Business-level strategy</li>
                  <p className='line-clamp-3 mb-6'>The business-level strategy is aimed at gaining a competitive advantage by offering true value for customers while being a unique and hard-to-imitate player within the competitive landscape. We have a good understanding of a business and its external environment, use internal analysis frameworks.</p>
                  <li className='mt-2'>Functional level strategy</li>
                  <p className='line-clamp-3 mb-6'>Functional level strategy is often aimed at improving the effectiveness of a company’s operations within departments. Within these departments, workers often refer to their ‘Marketing Strategy’, ‘Human Resource Strategy’ or ‘R&D Strategy’. </p>
                  <li className='mt-2'>Corporate level strategy</li>
                  <p className='line-clamp-3'>At the corporate level strategy however, management not only considers how to gain a competitive advantage in each of the line of businesses the firm is operating in, but also which businesses should be in in the first place. It is about selecting</p>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[90%] mx-auto my-10' data-aos="zoom-in">
          <h1 className='text-center mb-5 text-[28px] font-semibold text-[#1f3b64]'>Services</h1>
          <hr className='w-20 border-[#ffc371] border-[2px] mb-10 -mt-5 mx-auto' />
          <div className="w-full px-5 grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 gap-2">
            <div>
              <Card title="Antiques" image={Antiques} contant="Classic, vintage, timeless, shabby chic – whatever you call them, antiques can be truly beautiful and soulful. They connect us to those who have come before, who have lived different lives. " />
            </div>
            <div className='mt-4 lg:mt-6'>
              <Card title="Radiation Safety" image={Radiation_Safety} contant="Any radiation exposure poses a potential risk to all involved in the process. Radiation protection aims to reduce unnecessary radiation exposure with a goal to minimize the harmful effects of ionizing radiation." />
            </div>
            <div className='mt-4 lg:mt-12'>
              <Card title="Rare Earth Metals" image={Rare_Earth_metals} contant="Rare earth metals are becoming increasingly important to the electronics industry and technological advancements." />
            </div>
            <div className='mt-4 lg:mt-6'>
              <Card title="Platinum Group Metals" image={Platinum} contant="Platinum group metals (PGM) consist of iridium (Ir), osmium, (Om), platinum (Pt), palladium (Pd), rhodium (Rh), and ruthenium (Ru). " />
            </div>
            <div className="mt-4">
              <Card title="Rare Earth Metals" image={Precious} contant="Rare earth metals are becoming increasingly important to the electronics industry and technological advancements." />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <Footer />
    </div >
  )
}

export default Home