import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
    return (
        <div className='w-full py-8 px-40 relative'>
            <div class="flex items-center gap-[60px]">
                <div class="relative w-2/5">
                    <Image
                        src="/images/aboutIcon1.png"
                        alt="/"
                        width="324"
                        height="420"
                        class=""
                    />
                    <Image
                        src="/images/aboutIcon2.png"
                        alt="/"
                        width="220"
                        height="285"
                        class="absolute bottom-[-20px] right-0"
                    />
                </div>
                <div class="w-3/5">
                    <h5 class="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(248,212,135,0.8)] to-[rgba(153,153,153,0.8)] mb-2 text-base font-semibold leading-8 tracking-[0.1em]">
                        ABOUT
                    </h5>
                    <p class="font-montserrat text-3xl font-medium tracking-[0.06em] text-white">
                        Lamp Learning Pvt Ltd.
                    </p>
                    <p class="mt-8 text-base font-medium leading-[32px] text-white">
                        LampLearning is a cutting-edge e-learning company committed to transforming education through innovative digital solutions. Our platform offers a wide range of courses tailored to meet the diverse learning needs of students, professionals, and organizations. With a focus on high-quality content, interactive learning experiences, and personalized pathways, LampLearning ensures that learners can achieve their educational goals efficiently and effectively. We blend technology with expert knowledge to provide flexible, accessible, and engaging learning experiences. At LampLearning, we believe in empowering individuals with the skills and knowledge needed to excel in an ever-evolving global landscape.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default AboutPage