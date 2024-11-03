"use client";
import React, { useState } from "react";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import {
  DynamicBlogs,
  DynamicCourses,
} from ".";

const TabSection = () => {
  const TabSectionList = [
    {
      label: "Realesed Blogs",
      value: "realesed_blogs",
      component: <DynamicBlogs />,
    },
    {
      label: "Saved Blogs",
      value: "saved_blogs",
      component: <DynamicBlogs />,
    },
    {
      label: "Enrolled Courses",
      value: "enrolled_courses",
      component: <DynamicCourses />,
    },
    {
      label: "Saved Courses",
      value: "saved_courses",
      component: <DynamicCourses />,
    },
  ];
  const [activeTab, setActiveTab] = useState(null);
  return (
    <div className='mt-4'>
      <Tabs value={activeTab}>
        <TabsHeader
          className='rounded-none border-b border-blue-gray-50  bg-transparent p-0'
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-black shadow-none rounded-none",
          }}
        >
          {TabSectionList.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(activeTab === value ? null : value)}
              className={
                activeTab === value
                  ? "text-white "
                  : "text-white "
              }
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {TabSectionList.map(({ value, component }) => (
            <TabPanel key={value} value={value}>
              {activeTab && (
                <>
                  {component}
                </>
              )}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default TabSection;
