"use client"
import React from 'react'
import ReactPlayer from "react-player";

const VideoPlayer = ({ heigt = 300, url = "https://www.youtube.com/watch?v=8uAkZHnnt5k&t=412s" }) => {
    return (
        <ReactPlayer url={url} height={heigt} width={"100%"} controls />
    )
}

export default VideoPlayer