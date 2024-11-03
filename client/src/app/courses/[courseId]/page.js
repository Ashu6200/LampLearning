import CourseData from "@/components/courseComponents/CourseData";
import Review from "@/components/courseComponents/Review";
import ReviewStar from "@/components/fargments/ReviewStar";
import VideoPlayer from "@/components/fargments/VideoPlayer";
import Link from "next/link";
import React from "react";
import ProfileCard from "@/components/courseComponents/ProfileCard";
import { benefits, coachingPoints, courseTags, prerequisites } from "@/constant";



const page = () => {
    const enrolled = true;
    return (
        <section className='w-full py-8 px-40'>
            <div className='w-full flex gap-5'>
                <div className='w-[70%] flex flex-col gap-2'>
                    <h1 className='golden_text text-3xl font-semibold mb-2'>
                        Introduction to JavaScript
                    </h1>
                    <p className='text-lg text-white'>
                        Learn the fundamental concepts of data structures and algorithms,
                        essential for coding interviews and competitive programming. Learn
                        the fundamental concepts of data structures and algorithms,
                        essential for coding interviews and competitive programming. Learn
                        the fundamental concepts of data structures and algorithms,
                        essential for coding interviews and competitive programming.
                    </p>
                    <div className='flex gap-2 items-center'>
                        <div className='flex gap-2 items-center'>
                            <ReviewStar />
                            <p className='text-base golden_text'>{"(2,121 ratings)"}</p>
                        </div>
                        <p className='text-base text-white'>12000 Student</p>
                    </div>
                    <div>
                        <p className='text-base text-white'>
                            Created By:{" "}
                            <span className='text-base golden_text'>Ashutosh</span>
                        </p>
                        <p className='text-base text-white'>
                            Published on:{" "}
                            <span className='text-base golden_text'>24/05/2024</span>
                        </p>
                    </div>
                    <div className='cardGlass flex flex-col gap-5 p-4'>
                        <div>
                            <h1 className='golden_text text-xl font-semibold mb-2'>
                                What youll learn
                            </h1>
                            <ul className='grid grid-cols-2 gap-2'>
                                {coachingPoints.map((item, index) => (
                                    <li
                                        key={index}
                                        className='text-sm text-white list-inside list-disc'
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h1 className='golden_text text-xl font-semibold mb-2'>
                                Benefits of course
                            </h1>
                            <ul className=''>
                                {benefits.map((item, index) => (
                                    <li
                                        key={index}
                                        className='text-sm text-white list-inside list-disc'
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h1 className='golden_text text-xl font-semibold mb-2'>
                                Prerequisites of course
                            </h1>
                            <ul className=''>
                                {prerequisites.map((item, index) => (
                                    <li
                                        key={index}
                                        className='text-sm text-white list-inside list-disc'
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <CourseData />
                </div>
                <div className='w-[30%] flex flex-col gap-2 '>
                    <div className='w-full cardGlass flex flex-col gap-2 p-2'>
                        <VideoPlayer />
                        {enrolled ? (
                            <div className=' flex flex-col gap-2'>
                                <Link href={`/courses/view-course/${1}`}>
                                    <button
                                        type='button'
                                        className='bg-[#6126DD] py-[10px]  rounded font-[500]text-lg text-white text-center outline-none min-w-[200px] w-full'
                                    >
                                        View
                                    </button>
                                </Link>
                                <Link href={`/conversation/${1}`}>
                                    <button
                                        type='button'
                                        className='bg-yellow-300 py-[10px]  rounded font-[500]text-lg text-white text-center outline-none min-w-[200px] w-full'
                                    >
                                        Conversation
                                    </button>
                                </Link>
                                <button
                                    type='button'
                                    className='bg-green-600 py-[10px] rounded font-[500]text-lg text-white text-center outline-none min-w-[200px] w-full'
                                >
                                    Already saved
                                </button>
                            </div>
                        ) : (
                            <div className=' flex flex-col gap-2'>
                                <button
                                    type='button'
                                    className='bg-[#6126DD] py-[10px]  rounded font-[500]text-lg text-white text-center outline-none min-w-[200px] w-full'
                                >
                                    Buy
                                </button>

                                <button
                                    type='button'
                                    className='btn-bg py-[10px] rounded font-[500]text-lg text-white text-center outline-none min-w-[200px] w-full'
                                >
                                    Save
                                </button>
                            </div>
                        )}

                        <div>
                            <div className='text-base text-white'>
                                Tags:{" "}
                                <ul className='flex gap-2 flex-wrap'>
                                    {courseTags.map((tag, i) => (
                                        <li key={i}>
                                            <p className='bg-[#6126DD] p-1 text-xs rounded-lg font-semibold'>{`#${tag}`}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ProfileCard />
                </div>
            </div>
            <Review />
        </section>
    );
};

export default page;
