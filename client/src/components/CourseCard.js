import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiSaveDown2 } from 'react-icons/ci'

const CourseCard = ({ thumbnail, title, description, key }) => {
    return (
        <div key={key} className='cardGlass rounded-3xl'>
            <div>
                <Image
                    src={thumbnail}
                    priority={false}
                    alt='courseImage'
                    placeholder='empty'
                    className='object-contain max-w-[100%] w-full h-[auto] z-[10] rounded-t-2xl'
                    width={300}
                    height={300}
                />
                <div className='py-2 px-4'>
                    <h4 className='text-black dark:text-white text-[16px] font-[600] '>
                        {title}
                    </h4>
                    <p className='text-black dark:text-white text-[14px] font-[500] '>
                        {description}
                    </p>
                    <div className='flex items-center my-2 justify-between'>
                        <Link
                            href={"/"}
                            className='py-1 px-3 bg-[#6126DD] rounded-[5px] cursor-pointer text-[12px] text-white'
                        >
                            View
                        </Link>
                        <CiSaveDown2 size={25} className='cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseCard