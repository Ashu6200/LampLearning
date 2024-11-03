"use client"
import { DashboardSidebar } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const Sidebar = () => {
  const pathname = usePathname()
  // const role1 = ["user"]
  // const role2 = ["instructor", "user"]
  const role3 = ['admin', "instructor", "user"]
  return (
    <aside className='w-[15%] h-full cardGlass rounded-xl'>
      <div className='h-full flex justify-center flex-col'>
        <Link href={"/"} className='text-xl font-semibold text-white px-5'>
          Lamp Learning
        </Link>
        <div className='mt-2 h-[90%] overflow-y-scroll scrollbar-hide2 ml-5'>
          {DashboardSidebar.map((navItem, navKey) => {
            const hasAccessibleItems = navItem.navigationItems.some((subNavItem) =>
              subNavItem.accessBy.some((access) => role3.includes(access))
            );
            if (hasAccessibleItems) {
              return (
                <div key={navKey} className='grid my-1'>
                  <h1 className='text-base golden_text font-semibold'>
                    {navItem.navigationSectionName}
                  </h1>
                  <div className='ml-2 grid gap-2 my-2'>
                    {navItem.navigationItems
                      .filter((subNavItem) => subNavItem.accessBy.some((access) => role3.includes(access)))
                      .map((subNavItem, subNavKey) => {
                        const { url, title, icon } = subNavItem;
                        return (
                          <Link key={subNavKey} href={url}>
                            <p
                              className={`flex gap-2 items-center text-sm ${pathname === url ? "text-[#f8d487]" : "text-white"
                                }`}
                            >
                              {icon}
                              {title}
                            </p>
                          </Link>
                        );
                      })}
                  </div>
                </div>
              )
            }
            return null;
          })}

        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
