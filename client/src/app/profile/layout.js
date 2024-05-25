import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const ProfileLayout = ({ children }) => {
  return (
    <main className='w-full relative'>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default ProfileLayout;
