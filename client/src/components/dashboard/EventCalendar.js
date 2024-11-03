'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";

const EventCalendar = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className="cardGlass p-4 rounded-md">
            <Calendar onChange={onChange} value={value} />
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold my-4 golden_text">Events</h1>
                <p className=" text-white text-base">
                    {value.toDateString()}
                </p>
            </div>
            <div className="flex flex-col gap-4">
                {events.map((event) => (
                    <div
                        className="p-5 rounded-md border-t-4 "
                        key={event.id}
                    >
                        <div className="flex items-center justify-between">
                            <h1 className="font-semibold golden_text">{event.title}</h1>
                            <span className="text-white text-xs">{event.time}</span>
                        </div>
                        <p className="mt-2 text-white text-sm">{event.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalendar
const events = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];