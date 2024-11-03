import React from "react";

const EditProfile = () => {
  return (
    <section className='w-full flex items-center justify-center'>
      <form className='w-[50%] flex flex-col gap-3'>
        <h1 className='text-center text-white  font-[600] text-[24px]'>
          Edit Profile
        </h1>
        <div className='flex flex-col gap-2 mb-4'>
          <label className='text-white  font-[600] text-lg'>
            Name
          </label>
          <input
            type='text'
            placeholder='Enter your name'
            className='text-white text-base rounded h-[50px] p-2 text-[12px] outline-none  bg-[#FFFFFF0D]  focus:border-black  focus:border-[1px] resize-y  placeholder:text-white focus:p-[6px]'
          />
        </div>
        <div className='flex flex-col gap-2 mb-4'>
          <label className='text-white  font-[600] text-lg'>
            Description
          </label>
          <textarea
            rows={6}
            type='text'
            placeholder='Enter your name'
            className='rounded p-2 text-white text-base outline-none  bg-[#FFFFFF0D]  focus:border-black  focus:border-[1px] resize-none  placeholder:text-white focus:p-[6px]'
          />
        </div>
        <div className='flex flex-col gap-2 mb-54 w-full'>
          <button
            type='button'
            className='bg-[#6126DD] p-2 rounded font-[500]text-lg text-white w-full text-center h-[50px] '
          >
            Generate
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditProfile;
