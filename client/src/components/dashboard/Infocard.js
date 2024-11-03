import React from 'react'

const Infocard = ({ type }) => {
    return (
        <div className="rounded-2xl odd:bg-lamaPurple even:bg-lamaYellow p-4 flex-1 min-w-[130px] cardGlass">
            <div className="flex justify-between items-center">
                <span className="text-[10px] bg-white px-2 py-1 font-semibold rounded-full text-[#6126DD]">
                    2024/25
                </span>
            </div>
            <h1 className="text-2xl font-semibold my-4 text-white">1,234</h1>
            <h2 className="capitalize text-sm font-semibold golden_text">{type}</h2>
        </div>
    )
}

export default Infocard