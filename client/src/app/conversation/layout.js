import MessageSidebar from '@/components/layout/MessageSidebar'
import React from 'react'

const ConverstionLayout = ({ children }) => {
    return (
        <main className='w-full h-lvh'>
            <div className='w-full h-lvh p-2 flex gap-2'>
                <MessageSidebar />
                <div className="w-[85%] h-full">{children}</div>
            </div>
        </main>
    )
}

export default ConverstionLayout