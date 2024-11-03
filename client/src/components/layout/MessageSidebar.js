"use client"
import { courseItems } from '@/constant';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const MessageSidebar = () => {
    const pathname = usePathname()
    return (
        <aside className='w-[15%] h-full cardGlass rounded-xl'>
            <div className='h-full flex justify-center flex-col'>
                <Link href={"/"} className='text-xl font-semibold text-white px-5'>
                    Conversations
                </Link>
                <div className='mt-2 h-[90%] overflow-y-scroll scrollbar-hide2 ml-5'>
                    {courseItems.map((navItem, key) => {
                        return (
                            <Link
                                key={key}
                                href={`/conversation/${navItem.title}`}
                                className={`text-sm ${pathname === `/conversation/${navItem.title}` ? "golden_text" : "text-white"}`}
                            >
                                <div className='flex items-center gap-2 mb-2'>
                                    <Image src={navItem.thumbnail} alt={navItem.title} width={40} height={40} className='min-w-[40px] min-h-[40px] rounded-full' priority={false} />
                                    <h1 className='text-sm font-semibold'>
                                        {navItem.title}
                                    </h1>
                                </div>
                            </Link>

                        );
                    })}
                </div>
            </div>
        </aside>
    )
}

export default MessageSidebar