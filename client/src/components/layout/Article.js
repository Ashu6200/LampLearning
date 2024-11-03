import Image from 'next/image'
import React from 'react'

const Article = () => {
    return (
        <section className="w-full py-8 px-40 relative">
            <div className="absolute w-[150px] h-[150px] bottom-0 left-[160px] rotate-[13.83deg] bg-[#fca016] blur-[200px]"></div>
            <div className="w-full flex items-center">
                <div className="min-w-[50%] z-10">
                    <Image
                        src='/images/group.png'
                        alt="logo"
                        width={560}
                        height={380}
                        className="w-full h-auto"
                        priority={false}
                    />
                </div>
                <div className="ml-8">
                    <h5 className="bg-gradient-to-r from-[rgba(248,212,135,0.8)] to-[rgba(153,153,153,0.8)] bg-clip-text text-transparent mb-2 text-[17px] font-semibold leading-[32px] tracking-[0.1em]">
                        HOW WE WORK?
                    </h5>
                    <p className="font-montserrat text-3xl font-medium tracking-[0.06em] text-white">
                        E-Learning Company: LampLearning
                    </p>
                    <p className="mt-[30px] text-lg font-medium leading-[32px] text-[#FFFFFF99]">
                        LampLearning is a leading e-learning company that offers a dynamic online platform for students and educators. It features interactive courses, personalized learning paths, and live classes to provide a flexible and engaging educational experience. LampLearning connects global learners with high-quality content and expert instructors, making education accessible anytime, anywhere.
                    </p>
                </div>
            </div>
        </section>

    )
}

export default Article