import Sidebar from "@/components/Sidebar";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <main className='w-full relative'>
      <div className='w-full h-lvh p-2 flex gap-2'>
        <Sidebar />
        <div>{children}</div>
      </div>
    </main>
  );
};

export default AdminLayout;
