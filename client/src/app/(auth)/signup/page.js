import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className='w-full flex items-center justify-center'>
      <form className='w-[30%] flex flex-col gap-3'>
        <h1 className='text-center text-black dark:text-white font-[600] text-[24px]'>
          Sign Up
        </h1>
        <p className='text-center text-black dark:text-white font-[500] text-[16px]'>
          {` Welcome! We're excited to have you join us. Please sign up to get
          started.`}
        </p>
        <div className='flex flex-col gap-2 mb-4'>
          <label className='text-black dark:text-white font-[600] text-[16px]'>
            Name
          </label>
          <input
            type='text'
            placeholder='Enter your name'
            className='rounded h-[50px] p-2 text-[12px] outline-none dark:bg-[#212121] bg-[#cfd8dc] focus:border-black dark:focus:border-white focus:border-[1px] resize-y dark:placeholder:text-white placeholder:text-black focus:p-[6px]'
            required
          />
        </div>
        <div className='flex flex-col gap-2 mb-4'>
          <label className='text-black dark:text-white font-[600] text-[16px]'>
            Email
          </label>
          <input
            type='email'
            required
            placeholder='Enter your email'
            className='rounded h-[50px] p-2 text-[12px] outline-none dark:bg-[#212121] bg-[#cfd8dc] focus:border-black dark:focus:border-white focus:border-[1px] resize-y dark:placeholder:text-white placeholder:text-black focus:p-[6px]'
          />
        </div>
        <div className='flex flex-col gap-2 mb-4'>
          <label className='text-black dark:text-white  font-[600] text-[16px]'>
            Password
          </label>
          <input
            type='password'
            placeholder='Enter your password'
            className='rounded h-[50px] p-2 text-[12px] outline-none dark:bg-[#212121] bg-[#cfd8dc] focus:border-black dark:focus:border-white focus:border-[1px] resize-y dark:placeholder:text-white placeholder:text-black focus:p-[6px]'
            required
          />
        </div>
        <div className='flex flex-col gap-2 mb-54 w-full'>
          <button
            type='button'
            className='bg-[#6126DD] p-2 rounded font-[500] text-[16px] text-white w-full text-center h-[50px] '
          >
            SIGN UP
          </button>
        </div>
        <p className='mt-4 text-center text-black dark:text-white font-normal text-[16px]'>
          Already have an account?{" "}
          <Link href='/signin' className='font-medium text-[#6126DD]'>
            Sign In
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Page;
