import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
    return (
        <div className='w-full cardGlass p-2'>
            <div className='flex items-start gap-2 mb-2'>
                <Image src={'https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?rs=1&pid=ImgDetMain'} alt={'Ashu'} width={50} height={50} className='rounded-full' />
                <div>
                    <p className='text-base golden_text'>{"Ashu"}</p>
                    <p className=' text-white text-xs'>{new Date("2024-09-05").toDateString()}</p>
                </div>
            </div>
            <p className='text-sm text-white'>
                A MERN Developer Teacher specializes in teaching the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. They guide students through building full-stack web applications using these technologies, covering everything from database management and server-side development to client-side interfaces and application architecture. Their role involves explaining concepts, demonstrating best practices, and providing hands-on coding exercises to help learners understand and apply the MERN stack effectively.
            </p>

        </div>
    )
}

export default ProfileCard