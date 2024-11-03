"use client";
import { navItems } from "@/constant";
import { useNavHook } from "@/hooks/customhook";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const { active } = useNavHook();
  const pathName = usePathname()
  return (
    <nav className={`w-full sticky top-0 z-50 ${active && "cardGlass"}`}>
      <div className='w-full px-24 py-5 flex items-center justify-between'>
        <div className='flex items-center'>
          <Link href="/" className='text-[24px] font-Poppins font-[600] golden_text '>
            Lamp Learning
          </Link>
        </div>
        <div className='flex items-end gap-8'>
          {navItems &&
            navItems.map(nav => {
              const { name, id, url } = nav;
              return (
                <Link
                  key={id}
                  href={url}
                  className={`text-sm font-Poppins font-[400] ${pathName === url ? " golden_text" : 'text-white '}`}
                >
                  {name}
                </Link>
              );
            })}
        </div>
        <div className='flex items-center gap-3'>
          <Link href="/me" className='text-sm font-Poppins font-[500] text-white '>
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
