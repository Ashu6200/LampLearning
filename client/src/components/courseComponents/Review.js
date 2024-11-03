import Image from "next/image";
import React from "react";

const Review = () => {
    const dummyReviews = [
        {
            comment:
                "This course was really helpful in understanding full-stack development!",
            rating: 5,
            user: {
                _id: "64f089d5c29a5b001d5f10a9", // Replace with actual user ObjectId
                name: "John Doe",
                image:
                    "https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?rs=1&pid=ImgDetMain",
            },
            course: "64f089d5c29a5b001d5f10b0", // Replace with actual course ObjectId
            createdAt: new Date("2024-08-15"),
        },
        {
            comment:
                "The content is good, but I think more real-world examples could be added.",
            rating: 4,
            user: {
                _id: "64f089d5c29a5b001d5f10a7", // Replace with actual user ObjectId
                name: "Jane Smith",
                image:
                    "https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?rs=1&pid=ImgDetMain",
            },
            course: "64f089d5c29a5b001d5f10b1", // Replace with actual course ObjectId
            createdAt: new Date("2024-08-20"),
        },
        {
            comment:
                "I struggled with some concepts, but the instructor was very responsive!",
            rating: 3,
            user: {
                _id: "64f089d5c29a5b001d5f10b2", // Replace with actual user ObjectId
                name: "Alice Johnson",
                image:
                    "https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?rs=1&pid=ImgDetMain",
            },
            course: "64f089d5c29a5b001d5f10b0", // Replace with actual course ObjectId
            createdAt: new Date("2024-08-25"),
        },
        {
            comment: "Amazing course! The projects were really fun to build.",
            rating: 5,
            user: {
                _id: "64f089d5c29a5b001d5f10a8",
                name: "Bob Williams",
                image:
                    "https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?rs=1&pid=ImgDetMain",
            },
            course: "64f089d5c29a5b001d5f10b1",
            createdAt: new Date("2024-09-01"),
        },
        {
            comment:
                "Good overview of full-stack development, but could use more in-depth explanations on backend topics.",
            rating: 4,
            user: {
                _id: "64f089d5c29a5b001d5f10a9",
                name: "John Doe",
                image:
                    "https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?rs=1&pid=ImgDetMain",
            },
            course: "64f089d5c29a5b001d5f10b2",
            createdAt: new Date("2024-09-05"),
        },
    ];

    return (
        <div className='w-full'>
            <h1 className='golden_text text-xl font-semibold mb-2'>Course Review</h1>
            <div className='w-full flex gap-5 overflow-x-scroll scrollbar-hide'>
                {dummyReviews.map((review, key) => {
                    return (
                        <div
                            key={key}
                            className='bg-[#FFFFFF0D] p-5 min-w-[320px] rounded-xl'
                        >
                            <div className='flex items-start gap-2 mb-2'>
                                <Image
                                    src={review.user.image}
                                    alt={review.user.name}
                                    width={50}
                                    height={50}
                                    className='rounded-full'
                                />
                                <div>
                                    <p className='text-base golden_text'>{review.user.name}</p>
                                    <p className=' text-white text-sm'>
                                        {review.createdAt.toDateString()}
                                    </p>
                                </div>
                            </div>
                            <p className='text-base text-white'>{review.comment}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Review;
