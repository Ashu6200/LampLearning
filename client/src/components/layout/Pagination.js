'use client'
import { Button, IconButton } from '@material-tailwind/react';
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from "react-icons/fa6";

const Pagination = () => {
    const [active, setActive] = React.useState(1);

    const getItemProps = (index) =>
    ({
        variant: active === index ? "filled" : "text",
        color: "white",
        onClick: () => setActive(index),
    });

    const next = () => {
        if (active === 5) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    return (
        <div className="flex items-center justify-between gap-4 w-full mt-5">
            <Button
                variant="text"
                className="flex items-center gap-2 text-white"
                onClick={prev}
                disabled={active === 1}
            >
                <FaArrowLeft strokeWidth={2} className="h-4 w-4" /> Previous
            </Button>
            <div className="flex items-center gap-2">
                <IconButton {...getItemProps(1)} className={`${active === 1 && "bg-[#6126DD] text-white"}`}>1</IconButton>
                <IconButton {...getItemProps(2)} className={`${active === 2 && "bg-[#6126DD] text-white"}`}>2</IconButton>
                <IconButton {...getItemProps(3)} className={`${active === 3 && "bg-[#6126DD] text-white"}`}>3</IconButton>
                <IconButton {...getItemProps(4)} className={`${active === 4 && "bg-[#6126DD] text-white"}`}>4</IconButton>
                <IconButton {...getItemProps(5)} className={`${active === 5 && "bg-[#6126DD] text-white"}`}>5</IconButton>
            </div>
            <Button
                variant="text"
                className="flex items-center gap-2 text-white"
                onClick={next}
                disabled={active === 5}
            >
                Next
                <FaArrowRight strokeWidth={2} className="h-4 w-4" />
            </Button>
        </div>
    )
}

export default Pagination