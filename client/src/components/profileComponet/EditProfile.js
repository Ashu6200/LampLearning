import React from "react";

const EditProfile = () => {
  return (
    <section className='w-full flex items-center justify-center'>
      <form className='w-[50%] flex flex-col gap-3'>
        <h1 className='text-center text-black dark:text-white font-[600] text-[24px]'>
          Edit Profile
        </h1>
        <div className='flex flex-col gap-2 mb-4'>
          <label className='text-black dark:text-white font-[600] text-[16px]'>
            Name
          </label>
          <input
            type='text'
            placeholder='Enter your name'
            className='rounded h-[50px] p-2 text-[12px] outline-none dark:bg-[#212121] bg-[#cfd8dc] focus:border-black dark:focus:border-white focus:border-[1px] resize-y dark:placeholder:text-white placeholder:text-black focus:p-[6px]'
          />
        </div>
        <div className='flex flex-col gap-2 mb-4'>
          <label className='text-black dark:text-white  font-[600] text-[16px]'>
            Description
          </label>
          <textarea
            rows={6}
            type='text'
            placeholder='Enter your name'
            className='rounded p-2 text-[12px] outline-none dark:bg-[#212121] bg-[#cfd8dc] focus:border-black dark:focus:border-white focus:border-[1px] resize-none dark:placeholder:text-white placeholder:text-black focus:p-[6px]'
          />
        </div>
        <div className='flex flex-col gap-2 mb-54 w-full'>
          <button
            type='button'
            className='bg-[#6126DD] p-2 rounded font-[500] text-[16px] text-white w-full text-center h-[50px] '
          >
            Generate
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditProfile;
