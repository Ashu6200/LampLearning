import { DynamicTabsections } from "@/components/profileComponet";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <section className='w-full my-[50px]'>
      <div className='w-full px-24'>
        <div className='flex gap-8'>
          <Image
            src={"/images/banner-img-1.png"}
            alt='profile-picture'
            priority={false}
            placeholder='empty'
            className='object-contain max-w-[200px] w-[200px] h-[200px] rounded-[50%] bg-white'
            width={200}
            height={200}
          />
          <div className='text-start'>
            <h1 className='text-black dark:text-white font-[600] text-[32px] flex items-center gap-4'>
              Ashutosh kewat{" "}
              <spna className='text-white bg-[#6126DD] py-2 px-4 text-[10px] rounded-2xl'>
                Admin
              </spna>
            </h1>
            <p className='text-black dark:text-white font-[500] text-[16px]'>
              Discover a world of knowledge with our extensive library of
              [CourseNumber] online courses. Join a thriving community of
              [UserNumber] registered students who are already benefiting from
              our expert-led classes. Browse our diverse selection and find the
              perfect course to meet your learning goals today.
            </p>
            <div></div>
          </div>
        </div>
        <DynamicTabsections />
      </div>
    </section>
  );
};

export default Page;
