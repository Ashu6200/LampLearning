import React from "react";
import ThemeSwitcher from "@/constant/ThemeSwitcher";

const Sidebar = () => {
  return (
    <aside className='w-[15%] h-full glass rounded-[10px]'>
      <div className='p-[20px]'>
        <div className="flex items-center gap-3">
          <h1 className='text-[20px] font-[600] text-black dark:text-white'>Lamp Learning</h1>
          <ThemeSwitcher />
        </div>
        <div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
