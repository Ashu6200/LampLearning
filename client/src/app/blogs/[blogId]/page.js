'use client'
import ProfileCard from "@/components/courseComponents/ProfileCard";
import VideoPlayer from "@/components/fargments/VideoPlayer";
import Image from "next/image";
import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/ext-language_tools";
import { courseTags, dummyBlogData } from "@/constant";

const page = () => {
    const enrolled = true;
    return (
        <section className='w-full py-8 px-40'>
            <div className='w-full flex gap-5'>
                <div className='w-[70%] flex flex-col gap-2'>
                    <h1 className='golden_text text-3xl font-semibold mb-2'>
                        Introduction to JavaScript
                    </h1>
                    <div className="flex items-center gap-2">
                        <p className='text-base text-white'>
                            Created By:{" "}
                            <span className='text-base golden_text'>Ashutosh</span>
                        </p>
                        <p className='text-base text-white'>
                            Published on:{" "}
                            <span className='text-base golden_text'>24/05/2024</span>
                        </p>
                    </div>
                    <div className='flex flex-col gap-4 mt-4'>
                        {dummyBlogData.content.map((item, index) => {
                            switch (item.type) {
                                case "image":
                                    return (
                                        <div key={index} className='image-content'>
                                            <Image
                                                src={item.imageUrl}
                                                priority={false}
                                                alt='courseImage'
                                                placeholder='empty'
                                                className='object-contain max-w-[100%] w-full h-[auto] rounded-t-2xl'
                                                width={300}
                                                height={300}
                                            />
                                        </div>
                                    );
                                case "text":
                                    return (
                                        <div key={index} className='text-content'>
                                            <p className='text-base text-white'>{item.text}</p>
                                        </div>
                                    );
                                case "code":
                                    return (
                                        <div key={index} className='cardGlass p-4'>
                                            <AceEditor
                                                mode={item.codeLanguga}
                                                theme="tomorrow"
                                                value={item.codeContent}
                                                defaultValue={item.codeContent}
                                                name={`code-editor-${index}`}
                                                editorProps={{ $blockScrolling: false }}
                                                width="100%"
                                                fontSize={14}
                                                readOnly
                                                showPrintMargin={false}
                                                showGutter={false}
                                                highlightActiveLine={false}
                                                minLines={1}
                                                maxLines={Infinity}
                                                setOptions={{
                                                    enableBasicAutocompletion: false,
                                                    enableLiveAutocompletion: false,
                                                    enableSnippets: false,
                                                    showLineNumbers: false,
                                                    tabSize: 2,
                                                }}
                                                style={{
                                                    backgroundColor: 'transparent'
                                                }}
                                            />
                                        </div>
                                    );
                                case "video":
                                    return (
                                        <div key={index} className='video-content'>
                                            <VideoPlayer heigt={315} url={item.videoUrl} />
                                        </div>
                                    );
                                case "links":
                                    return (
                                        <div key={index} className='link-content'>
                                            <a
                                                href={item.linkUrl}
                                                className='text-blue-500 underline'
                                            >
                                                {item.resourceName}
                                            </a>
                                        </div>
                                    );
                                default:
                                    return null;
                            }
                        })}
                    </div>
                </div>
                <div className='w-[30%] flex flex-col gap-2'>
                    <div className='w-full cardGlass flex flex-col gap-2 p-2'>
                        <Image
                            src={
                                "https://th.bing.com/th/id/OIP.UOA5gt3JJSBRwlxkIXFjsgHaEy?w=900&h=582&rs=1&pid=ImgDetMain"
                            }
                            priority={false}
                            alt='courseImage'
                            placeholder='empty'
                            className='object-contain max-w-[100%] w-full h-[auto] rounded-t-2xl'
                            width={300}
                            height={300}
                        />
                        {enrolled ? (
                            <button
                                type='button'
                                className='bg-green-600 py-[10px] rounded font-[500]text-lg text-white text-center outline-none min-w-[200px] w-full'
                            >
                                Already saved
                            </button>
                        ) : (
                            <button
                                type='button'
                                className='btn-bg py-[10px] rounded font-[500]text-lg text-white text-center outline-none min-w-[200px] w-full'
                            >
                                Save
                            </button>
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
        </section>
    );
};

export default page;
