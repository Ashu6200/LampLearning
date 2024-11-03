import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className='w-full flex'>
      <div className="w-1/2"></div>
      <div className="w-1/2 flex items-center justify-center">
        <form className='flex flex-col gap-3'>
          <h1 className='text-center text-white  font-[600] text-[24px]'>
            Sign In
          </h1>
          <p className='text-center text-white  font-[500]text-lg'>
            {` Welcome! We're excited to have you join us. Please sign in to get
          started.`}
          </p>
          <div className='flex flex-col gap-2 mb-4'>
            <label className='text-white  font-[600] text-lg'>
              Email
            </label>
            <input
              type='email'
              required
              placeholder='Enter your email'
              className='text-white text-base rounded h-[50px] p-2 text-[12px] outline-none  bg-[#FFFFFF0D]  focus:border-black  focus:border-[1px] resize-y  placeholder:text-white focus:p-[6px]'
            />
          </div>
          <div className='flex flex-col gap-2 mb-4'>
            <label className='text-white   font-[600] text-lg'>
              Password
            </label>
            <input
              type='password'
              placeholder='Enter your password'
              className='text-white text-base rounded h-[50px] p-2 text-[12px] outline-none  bg-[#FFFFFF0D]  focus:border-black  focus:border-[1px] resize-y  placeholder:text-white focus:p-[6px]'
              required
            />
          </div>
          <div className='flex flex-col gap-2 mb-54 w-full'>
            <button
              type='button'
              className='bg-[#6126DD] p-2 rounded font-[500]text-lg text-white w-full text-center h-[50px] '
            >
              SIGN UP
            </button>
          </div>
          <p className='mt-4 text-center text-white  font-normaltext-lg'>
            {` Don't have an account?`}{" "}
            <Link href='/signup' className='font-medium text-[#6126DD]'>
              Sign Up
            </Link>
          </p>
        </form></div>

    </section>
  );
};

export default Page;
