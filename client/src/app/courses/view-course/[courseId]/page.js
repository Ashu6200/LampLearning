"use client";
import VideoPlayer from "@/components/fargments/VideoPlayer";
import { dummyCourses } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaLevelUpAlt } from "react-icons/fa";
import { MdSlowMotionVideo } from "react-icons/md";

const ViewCoursePage = () => {
    const [currentVideoSectionObject, setCurrentVideoSectionObject] = useState(
        dummyCourses[0].videoSection[0]);
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [currentVideoSectionIndex, setCurrentVideoSectionIndex] = useState(0);

    const currentSection = dummyCourses[currentSectionIndex];
    const next = () => {
        if (currentVideoSectionIndex < currentSection.videoSection.length - 1) {
            const nextVideoIndex = currentVideoSectionIndex + 1;
            setCurrentVideoSectionIndex(nextVideoIndex);
            setCurrentVideoSectionObject(currentSection.videoSection[nextVideoIndex]);
        } else if (currentSectionIndex < dummyCourses.length - 1) {
            const nextSectionIndex = currentSectionIndex + 1;
            setCurrentSectionIndex(nextSectionIndex);
            setCurrentVideoSectionIndex(0);
            setCurrentVideoSectionObject(
                dummyCourses[nextSectionIndex].videoSection[0]
            );
        }
    };

    const prev = () => {
        if (currentVideoSectionIndex > 0) {
            const prevVideoIndex = currentVideoSectionIndex - 1;
            setCurrentVideoSectionIndex(prevVideoIndex);
            setCurrentVideoSectionObject(currentSection.videoSection[prevVideoIndex]);
        } else if (currentSectionIndex > 0) {
            const prevSectionIndex = currentSectionIndex - 1;
            const prevVideoCount =
                dummyCourses[prevSectionIndex].videoSection.length - 1;
            setCurrentSectionIndex(prevSectionIndex);
            setCurrentVideoSectionIndex(prevVideoCount);
            setCurrentVideoSectionObject(
                dummyCourses[prevSectionIndex].videoSection[prevVideoCount]
            );
        }
    };

    return (
        <div className='text-white py-8 px-40'>
            <div className='w-full flex gap-5'>
                <div className='w-[70%]'>
                    <VideoPlayer url={currentVideoSectionObject.videoUrl} heigt={450} />
                    <div className='flex items-center justify-between mt-2'>
                        <div
                            onClick={prev}
                            className='flex items-center justify-center bg-[#6126DD] py-[10px]   rounded font-[500]text-lg text-white text-center outline-none min-w-[150px]'
                        >
                            <FaAngleLeft /> Prev
                        </div>
                        <div
                            onClick={next}
                            className='flex items-center justify-center bg-[#6126DD] py-[10px]  rounded font-[500]text-lg text-white text-center outline-none min-w-[150px]'
                        >
                            Next <FaAngleRight />
                        </div>
                    </div>
                    <div className="mt-5 max-h-[600px] overflow-y-scroll scrollbar-hide w-full">
                        <h1 className='golden_text text-2xl font-semibold mb-2'>
                            Questions
                        </h1>
                        <div className="w-full">
                            {currentVideoSectionObject.questions.length >= 1 && currentVideoSectionObject.questions.map((questions, index) => {
                                return (
                                    <div className="relative" key={index}>
                                        <div className="flex gap-2 cardGlass p-2">
                                            <div className='flex items-start gap-2'>
                                                <Image
                                                    src={"https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?rs=1&pid=ImgDetMain"}
                                                    alt={"abcbakbsc"}
                                                    width={50}
                                                    height={50}
                                                    className='rounded-full'
                                                />
                                            </div>
                                            <div>
                                                <div className="flex gap-2 items-center">
                                                    <p className='text-base golden_text'>{"Alice"}</p>
                                                    <p className=' text-white text-sm'>
                                                        {new Date("2024-08-25").toDateString()}
                                                    </p>
                                                </div>
                                                <p>Question: {questions.comment}</p>
                                            </div>
                                        </div>
                                        <div className=" flex items-center ml-4">
                                            <FaLevelUpAlt className="text-3xl rotate-90" />
                                            <div className="flex gap-2 p-2">
                                                <div className='flex items-start gap-2'>
                                                    <Image
                                                        src={"https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?rs=1&pid=ImgDetMain"}
                                                        alt={"abcbakbsc"}
                                                        width={50}
                                                        height={50}
                                                        className='rounded-full'
                                                    />
                                                </div>
                                                <div>
                                                    <div className="flex gap-2 items-center">
                                                        <p className='text-base golden_text'>{"Alice"}</p>
                                                        <p className=' text-white text-sm'>
                                                            {new Date("2024-08-25").toDateString()}
                                                        </p>
                                                    </div>
                                                    <p>Answer: {questions.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}


                        </div>
                    </div>
                </div>
                <div className="w-[30%]">
                    <div className='w-ful cardGlass overflow-y-scroll scrollbar-hide relative min-h-[500px] h-[500px]'>
                        <div className='top-0 sticky p-4 z-10 bg-black h-max'>
                            <h1 className='golden_text text-lg font-semibold'>
                                Introduction to JavaScript
                            </h1>
                        </div>
                        <div className='px-4 flex flex-col gap-2 bg-[#FFFFFF0D] h-full '>
                            {dummyCourses.map((course, sectionIndex) => {
                                return (
                                    <div key={sectionIndex}>
                                        <h1 className='text-base'>{course.sectionName}</h1>
                                        <div className='flex flex-col gap-2 cursor-pointer'>
                                            {course.videoSection.map((video, videoIndex) => {
                                                return (
                                                    <div
                                                        key={videoIndex}
                                                        className=' text-white flex items-center justify-between'
                                                        onClick={() =>
                                                            setCurrentVideoSectionObject(
                                                                dummyCourses[sectionIndex].videoSection[
                                                                videoIndex
                                                                ]
                                                            )
                                                        }
                                                    >
                                                        <div className='flex items-center gap-2'>
                                                            <div className='w-[40px] h-[30px] bg-[#FFFFFF0D] rounded-xl flex items-center justify-center'>
                                                                <MdSlowMotionVideo />
                                                            </div>
                                                            <div>
                                                                <p
                                                                    className={`text-sm ${currentVideoSectionObject.title ===
                                                                        video.title && "golden_text"
                                                                        }`}
                                                                >
                                                                    {video.title}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className='w-ful cardGlass h-fit mt-5'>
                        <div className='p-4 z-10 bg-black h-max rounded-t-2xl'>
                            <h1 className='golden_text text-lg font-semibold'>
                                Resource
                            </h1>
                        </div>
                        <div className='px-4 flex flex-col gap-2 bg-[#FFFFFF0D] '>
                            {currentVideoSectionObject.links.length >= 1 && currentVideoSectionObject.links.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <h1 className='text-base'>{item.description}</h1>
                                        <Link href={item.url} target="blank" className="text-[#6126DD] text-sm">
                                            View Resourse
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewCoursePage;
