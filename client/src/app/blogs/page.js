
import BlogCard from '@/components/BlogCard';
import Pagination from '@/components/layout/Pagination';
import { courseItems } from '@/constant';
import React from 'react'

const page = () => {
    return (
        <section className='w-full py-8  px-40' >
            <h1 className='text-center text-white  text-[30px] font-[600] '>
                Blogs
            </h1>
            <p className='text-center text-white text-lg font-[500] '>
                Discover a world of knowledge with our extensive library of
                [CourseNumber] online courses. Join a thriving community of
                [UserNumber] registered students who are already benefiting from our
                expert-led classes. Browse our diverse selection and find the perfect
                course to meet your learning goals today.
            </p>
            <div className='grid grid-cols-3 mt-10 gap-10 '>
                {courseItems.map((item, key) => {
                    const { thumbnail, title, description } = item;
                    return (
                        <BlogCard key={key} thumbnail={thumbnail} title={title} description={description} />
                    );
                })}
            </div>
            <Pagination />
        </section>
    )
}

export default page