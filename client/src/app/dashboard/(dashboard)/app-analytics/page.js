import BarChartComponent from "@/components/charts/BarChartComponent";
import EventCalendar from "@/components/dashboard/EventCalendar";
import Infocard from "@/components/dashboard/Infocard";
import React from "react";

export const metadata = {
  title: "Dashboard: Lamp Learning",
};

const page = () => {
  return (
    <section className='w-full h-full overflow-y-scroll scrollbar-hide'>
      <div className="p-4 flex gap-4 flex-col md:flex-row">
        <div className="w-full lg:w-2/3 flex flex-col gap-4">
          <div className="flex gap-4 justify-between flex-wrap">
            <Infocard type="Users" />
            <Infocard type="Instructors" />
            <Infocard type="Courses" />
            <Infocard type="Blogs" />
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
          <EventCalendar />
          {/* <Announcements/> */}
        </div>
      </div>
    </section>
  );
};

export default page;
