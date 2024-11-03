"use client";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdSlowMotionVideo } from "react-icons/md";
const CourseData = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = index => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div>
            <h1 className='golden_text text-xl font-semibold mb-2'>Course content</h1>
            <div className='flex flex-col gap-2'>
                {dummyCourses.map((course, key) => {
                    return (
                        <AccordionItem
                            key={key}
                            data={course}
                            isOpen={openIndex === key}
                            onClick={() => handleClick(key)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CourseData;

const AccordionItem = ({ data, isOpen, onClick }) => {
    return (
        <div className='cardGlass'>
            <div
                className='text-white p-4 flex items-center justify-between'
                onClick={onClick}
            >
                <div className='flex items-center gap-2'>
                    {isOpen ? <FaAngleUp /> : <FaAngleDown />}{" "}
                    <span>{data.sectionName}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <p>{data.videoSection.length} Lecture</p>
                </div>
            </div>
            {isOpen && (
                <div className='bg-[#FFFFFF0D] p-4 rounded-b-[16px]'>
                    {data.videoSection.map((video, key) => {
                        return (
                            <div key={key} className=" text-white flex items-center justify-between mb-2">
                                <div className='flex items-center gap-2'>
                                    <div className='w-[40px] h-[30px] bg-[#FFFFFF0D] rounded-xl flex items-center justify-center'>
                                        <MdSlowMotionVideo />
                                    </div>
                                    <span>{video.title}</span>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <p>{data.videoSection.length} Lecture</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

const dummyCourses = [
    {
        sectionName: "Introduction to Programming",
        description:
            "This section covers the basics of programming, including variables, data types, and control structures.",
        videoSection: [
            {
                title: "Variables and Data Types",
                videoUrl: "https://example.com/video1.mp4",
                videoLength: 1200,
                links: [
                    {
                        url: "https://example.com/resource1",
                        description: "Read more about variables",
                    },
                    {
                        url: "https://example.com/resource2",
                        description: "Learn about data types",
                    },
                ],
                questions: [
                    {
                        userId: "64e84f99f5f0d6e1a8f4c1c0",
                        comment:
                            "Can you explain the difference between local and global variables?",
                        timestamp: new Date(),
                    },
                    {
                        userId: "64e84f99f5f0d6e1a8f4c1c1",
                        comment: "What are the best practices for managing data types?",
                        timestamp: new Date(),
                    },
                ],
            },
            {
                title: "Control Structures",
                videoUrl: "https://example.com/video2.mp4",
                videoLength: 1500,
                links: [
                    {
                        url: "https://example.com/resource3",
                        description: "Understanding control structures",
                    },
                ],
                questions: [],
            },
        ],
        videoPlayer: "VLC Media Player",
    },
    {
        sectionName: "Advanced Programming Concepts",
        description:
            "This section delves into more complex topics such as algorithms, data structures, and object-oriented programming.",
        videoSection: [
            {
                title: "Algorithms",
                videoUrl: "https://example.com/video3.mp4",
                videoLength: 1800,
                links: [
                    {
                        url: "https://example.com/resource4",
                        description: "Read about algorithms",
                    },
                ],
                questions: [
                    {
                        userId: "64e84f99f5f0d6e1a8f4c1c2",
                        comment: "Can you provide examples of common algorithms?",
                        timestamp: new Date(),
                    },
                ],
            },
            {
                title: "Data Structures",
                videoUrl: "https://example.com/video4.mp4",
                videoLength: 2000,
                links: [
                    {
                        url: "https://example.com/resource5",
                        description: "Understanding data structures",
                    },
                ],
                questions: [],
            },
        ],
        videoPlayer: "Media Player Classic",
    },
    {
        sectionName: "Web Development Basics",
        description:
            "Learn the fundamentals of web development, including HTML, CSS, and JavaScript.",
        videoSection: [
            {
                title: "HTML and CSS",
                videoUrl: "https://example.com/video5.mp4",
                videoLength: 1500,
                links: [
                    {
                        url: "https://example.com/resource6",
                        description: "HTML and CSS reference",
                    },
                ],
                questions: [
                    {
                        userId: "64e84f99f5f0d6e1a8f4c1c3",
                        comment: "What are the key differences between HTML and CSS?",
                        timestamp: new Date(),
                    },
                ],
            },
            {
                title: "JavaScript Basics",
                videoUrl: "https://example.com/video6.mp4",
                videoLength: 2400,
                links: [
                    {
                        url: "https://example.com/resource7",
                        description: "JavaScript guide",
                    },
                ],
                questions: [],
            },
        ],
        videoPlayer: "QuickTime Player",
    },
];