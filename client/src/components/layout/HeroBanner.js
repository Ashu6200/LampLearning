import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiSearch } from "react-icons/bi";

const HeroBanner = () => {
  return (
    <section className='w-full py-8 px-40'>
      <div className='w-full flex items-center max-[890px]:text-white'>
        <div className='max-w-[55%] w-[55%] py-[50px]'>
          <h1 className='text-white  text-4xl font-[600] '>
            Enhance Your Online Learning Experience Instantly{" "}
          </h1>
          <p className='text-white text-lg my-8'>
            Discover a world of knowledge with our extensive library of
            [CourseNumber] online courses. Join a thriving community of
            [UserNumber] registered students who are already benefiting from our
            expert-led classes. Browse our diverse selection and find the
            perfect course to meet your learning goals today.
          </p>
          <div className='w-[80%] h-[50px] bg-transparent relative'>
            <input
              type='text'
              placeholder='Search for courses...'
              className='rounded-[5px] p-2 w-full h-full outline-none placeholder:text-[16px] btn-bg placeholder:text-white'
            />
            <div className='absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#6126DD] rounded-r-[5px]'>
              <BiSearch className='text-white' size={30} />
            </div>
          </div>
          <div className='mt-3'>
            <p className=' text-white text-sm font-[600]'>
              500k+ people already trusted us.{" "}
              <Link
                href={"/courses"}
                className='golden_text'
              >
                View Courses
              </Link>
            </p>
          </div>
        </div>
        <div className='max-w-[45%] w-[45%] flex items-center justify-end z-10'>
          <Image
            src='/images/banner-img-1.png'
            priority={false}
            alt='HeroImage'
            className='object-contain max-w-[90%] w-[90%] h-[auto] z-[10]'
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
