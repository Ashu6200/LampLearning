import CourseCard from "@/components/CourseCard";
import { courseItems } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSaveDown2 } from "react-icons/ci";
import { GrView } from "react-icons/gr";

const page = () => {
    return (
        <section className='w-full my-[50px]'>
            <div className='w-full px-24'>
                <h1 className='text-center text-black dark:text-white text-[30px] font-[600] '>
                    Courses
                </h1>
                <p className='text-center text-black dark:text-white text-[16px] font-[500] '>
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
                            <CourseCard key={key} thumbnail={thumbnail} title={title} description={description} />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default page;
