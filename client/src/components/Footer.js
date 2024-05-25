import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='w-full mt-[30px]'>
      <div className='w-full px-24'>
        <div className='py-[50px] border-b border-b-black dark:border-b-white flex flex-col items-center justify-center'>
          <h1 className='text-black dark:text-white text-[30px] font-[600] text-center'>
            Empower Your Future with Our Innovative E-Learning Platform
          </h1>
          <p className='text-black dark:text-white text-[16px] my-8 text-center px-28'>
            {`Discover a new way of learning with our cutting-edge e-learning platform, designed to provide you with flexible, high-quality education tailored to your needs. Whether you're advancing your career, picking up a new skill, or diving into a passion project, our comprehensive courses and expert instructors are here to guide you every step of the way.`}
          </p>
          <div className='w-[30%]'>
            <button
              type='button'
              className='bg-[#6126DD] p-2 rounded font-[500] text-[18px] text-white w-full text-center'
            >
              Get in Touch
            </button>
          </div>
        </div>
        <div className='flex items-center py-[50px]'>
          <div className='max-w-[30%] w-auto text-center'>
            <h1 className='text-black dark:text-white text-[20px] font-[600] text-center'>
              Lamp Learning
            </h1>
            <p className='text-[14px] text-black dark:text-white font-[500]'>
              Lamp Learning is a platform for student to learn and get help from
              teacher
            </p>
            <div className='flex items-center gap-6 mt-2 justify-center'>
              <FaInstagram size={30} className='cursor-pointer' />
              <FaTwitter size={30} className='cursor-pointer' />
              <FaLinkedin size={30} className='cursor-pointer' />
              <FaGithub size={30} className='cursor-pointer' />
            </div>
          </div>
          <div>
            <div>
              <h3></h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
