"use client";
import { navItems } from "@/constant";
import ThemeSwitcher from "@/constant/ThemeSwitcher";
import { useNavHook } from "@/constant/customhook";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const { active } = useNavHook();
  const pathName = usePathname()
  return (
    <nav className={`w-full sticky top-0 z-50 ${active && "glass"}`}>
      <div className='w-full px-24 py-5 flex items-center justify-between'>
        <div className='flex items-center gap-6'>
          <Link href="/" className='text-[20px] font-Poppins font-[600] text-black dark:text-white'>
            Lamp Learning
          </Link>
          <div className='flex items-end gap-5'>
            {navItems &&
              navItems.map(nav => {
                const { name, id, url } = nav;
                return (
                  <Link
                    key={id}
                    href={url}
                    className={`text-[14px] font-Poppins font-[500] ${pathName === url ? "dark:text-[#46e256] text-[crimson]" : 'text-black dark:text-white'}`}
                  >
                    {name}
                  </Link>
                );
              })}
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <ThemeSwitcher />
          <Link href="/profile/1" className='text-[14px] font-Poppins font-[500] text-black dark:text-white'>
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
