'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { IoIosSend } from "react-icons/io";
import { FaFile } from "react-icons/fa6";

const Messagepage = () => {
    const messageBox = useRef(null)
    const textareaRef = useRef(null);
    useEffect(() => {
        const adjustTextareaHeight = () => {
            if (textareaRef.current) {
                textareaRef.current.style.height = "auto";
                textareaRef.current.style.height = `${Math.min(
                    textareaRef.current.scrollHeight,
                    400,
                )}px`;
            }
        };
        adjustTextareaHeight();
    }, []);
    useEffect(() => {
        if (messageBox.current) {
            messageBox.current.scrollTop = messageBox.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className='w-full h-full relative flex flex-col'>
            <div className='top-0 sticky cardGlass bg-[#FFFFFF0D] p-2 z-50'>
                <div className='flex items-center gap-2'>
                    <Image
                        src={'https://th.bing.com/th/id/OIP.UOA5gt3JJSBRwlxkIXFjsgHaEy?w=900&h=582&rs=1&pid=ImgDetMain'}
                        alt="ashu"
                        width={40}
                        height={40}
                        className='min-w-[40px] min-h-[40px] rounded-full'
                    />
                    <h1 className='text-sm font-semibold text-white'>Ashu</h1>
                </div>
            </div>
            <div className='w-full h-[80%] p-2 overflow-y-scroll scrollbar-hide' ref={messageBox} >
                <div className='h-full'>
                    {messages.map((item) => {
                        return (
                            <div key={item.id} className={`flex items-center mb-2 ${item.type === "sender" ? "flex-row-reverse" : "flex-row"}`}>
                                <div className={`flex items-center gap-2 max-w-[80%] ${item.type === "sender" ? "flex-row-reverse" : "flex-row"}`}>
                                    <Image
                                        src={'https://th.bing.com/th/id/OIP.UOA5gt3JJSBRwlxkIXFjsgHaEy?w=900&h=582&rs=1&pid=ImgDetMain'}
                                        alt="ashu"
                                        width={40}
                                        height={40}
                                        className='min-w-[40px] min-h-[40px] rounded-full'
                                    />
                                    <p className='text-white cardGlass p-2'>{item.content}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='bottom-0 sticky z-50 p-2'>
                <div className='flex items-center justify-between w-full gap-2 cardGlass p-2'>
                    <input type='file' className='hidden' id="messageFile" />
                    <label htmlFor='messageFile'>
                        <div>
                            <FaFile className='text-xl text-white' />
                        </div>
                    </label>
                    <textarea ref={textareaRef} type='text' className='min-w-[90%] text-base rounded text-[12px] outline-none  bg-[#FFFFFF0D]   placeholder:text-white text-white scrollbar-hide' />
                    <button className='p-2 bg-[#6126DD] rounded-full'>
                        <IoIosSend className='text-xl text-white' />
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Messagepage
const messages = [
    {
        id: 1,
        content: 'Hey John, how are you?',
        timestamp: '2024-09-13T09:15:00Z',
        type: 'sender',
        sender: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        },
        receiver: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        }
    },
    {
        id: 2,
        content: 'I am good, Ashu! How about you?',
        timestamp: '2024-09-13T09:16:30Z',
        type: 'receiver',
        sender: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        },
        receiver: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        }
    },
    {
        id: 3,
        content: 'Doing great! Are we still on for the meeting later?',
        timestamp: '2024-09-13T09:17:45Z',
        type: 'sender',
        sender: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        },
        receiver: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        }
    },
    {
        id: 4,
        content: 'Yes, I will be there at 3 PM. Looking forward to it!',
        timestamp: '2024-09-13T09:19:00Z',
        type: 'receiver',
        sender: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        },
        receiver: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        }
    },
    {
        id: 5,
        content: 'Great! See you then.',
        timestamp: '2024-09-13T09:20:00Z',
        type: 'sender',
        sender: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        },
        receiver: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        }
    },
    {
        id: 6,
        content: 'What will the agenda be for the meeting?',
        timestamp: '2024-09-13T09:21:00Z',
        type: 'receiver',
        sender: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        },
        receiver: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        }
    },
    {
        id: 7,
        content: 'We’ll be discussing the project roadmap for Q4.',
        timestamp: '2024-09-13T09:22:00Z',
        type: 'sender',
        sender: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        },
        receiver: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        }
    },
    {
        id: 8,
        content: 'Perfect, I’ll prepare the reports.',
        timestamp: '2024-09-13T09:23:00Z',
        type: 'receiver',
        sender: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        },
        receiver: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        }
    },
    {
        id: 9,
        content: 'That would be great, thanks!',
        timestamp: '2024-09-13T09:24:00Z',
        type: 'sender',
        sender: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        },
        receiver: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        }
    },
    {
        id: 10,
        content: 'By the way, are we covering the new feature launch as well?',
        timestamp: '2024-09-13T09:25:30Z',
        type: 'receiver',
        sender: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        },
        receiver: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        }
    },
    {
        id: 11,
        content: 'Yes, that will be one of the key topics.',
        timestamp: '2024-09-13T09:26:30Z',
        type: 'sender',
        sender: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        },
        receiver: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        }
    },
    {
        id: 12,
        content: 'Awesome! I’m really excited for the feedback.',
        timestamp: '2024-09-13T09:28:00Z',
        type: 'receiver',
        sender: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        },
        receiver: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        }
    },
    {
        id: 13,
        content: 'Same here. Should be great!',
        timestamp: '2024-09-13T09:29:15Z',
        type: 'sender',
        sender: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        },
        receiver: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        }
    },
    {
        id: 14,
        content: 'Have you seen the latest design mockups?',
        timestamp: '2024-09-13T09:30:00Z',
        type: 'receiver',
        sender: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        },
        receiver: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        }
    },
    {
        id: 15,
        content: 'Yes, they look fantastic!',
        timestamp: '2024-09-13T09:31:00Z',
        type: 'sender',
        sender: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        },
        receiver: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        }
    },
    {
        id: 16,
        content: 'Agreed! The UX is much smoother now.',
        timestamp: '2024-09-13T09:32:00Z',
        type: 'receiver',
        sender: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        },
        receiver: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        }
    },
    {
        id: 17,
        content: 'Totally, I think the users will love it.',
        timestamp: '2024-09-13T09:33:00Z',
        type: 'sender',
        sender: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        },
        receiver: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        }
    },
    {
        id: 18,
        content: 'What do you think the feedback will focus on?',
        timestamp: '2024-09-13T09:34:00Z',
        type: 'receiver',
        sender: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        },
        receiver: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        }
    },
    {
        id: 19,
        content: 'Probably ease of use and the new features.',
        timestamp: '2024-09-13T09:35:30Z',
        type: 'sender',
        sender: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        },
        receiver: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        }
    },
    {
        id: 20,
        content: 'I agree, especially with the focus on accessibility.',
        timestamp: '2024-09-13T09:36:00Z',
        type: 'receiver',
        sender: {
            id: 'user_2',
            name: 'John',
            avatar: 'https://example.com/avatar2.jpg'
        },
        receiver: {
            id: 'user_1',
            name: 'Ashu',
            avatar: 'https://example.com/avatar1.jpg'
        }
    },
    // Repeat similar pattern to reach 50 messages
];

