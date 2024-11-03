import BarChartComponent from '@/components/charts/BarChartComponent'
import Infocard from '@/components/dashboard/Infocard'
import React from 'react'

const page = () => {
    return (
        <section className='w-full h-full overflow-y-scroll scrollbar-hide'>
            <div className="p-4 flex gap-4 flex-col md:flex-row">
                <div className="w-full lg:w-2/3 flex flex-col gap-4">
                    <div className="flex gap-4 justify-between flex-wrap">
                        <Infocard type="Revenue" />
                        <Infocard type="Profit" />
                        <Infocard type="Expense" />
                    </div>
                    <div className="flex gap-4 flex-col lg:flex-row">
                        <div className="w-full  h-[350px]">
                            <BarChartComponent />
                        </div>
                    </div>
                    {/* BOTTOM CHART */}
                    <div className="w-full h-[500px]">
                        {/* <FinanceChart /> */}
                    </div>
                </div>
                <div className="w-full lg:w-1/3 flex flex-col gap-8">
                    {/* <Announcements/> */}
                </div>
            </div>
        </section>
    )
}

export default page