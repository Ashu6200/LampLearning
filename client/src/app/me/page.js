import { DynamicTabsections } from "@/components/profileComponet";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className='w-full py-8  px-40' >
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
          <h1 className='text-white  font-[600] text-[32px] flex items-center gap-4'>
            Ashutosh kewat{" "}
            <span className='text-white bg-[#6126DD] py-2 px-4 text-[10px] rounded-2xl'>
              Admin
            </span>
          </h1>
          <p className='text-white  font-[500]text-lg'>
            Discover a world of knowledge with our extensive library of
            [CourseNumber] online courses. Join a thriving community of
            [UserNumber] registered students who are already benefiting from
            our expert-led classes. Browse our diverse selection and find the
            perfect course to meet your learning goals today.
          </p>
          <div className="flex items-center gap-2 mt-5">
            <Link href={'/dashboard/overview'} className='text-white bg-[#6126DD] py-2 px-4 text-[10px] rounded-2xl font-medium cursor-pointer'>
              Dashboard
            </Link>
          </div>
        </div>
      </div>
      <DynamicTabsections />
    </section>
  );
};

export default Page;
