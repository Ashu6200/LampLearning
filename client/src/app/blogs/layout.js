import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import React from "react";

const Layout = ({ children }) => {
    return (
        <main className='w-full relative'>
            <Navbar />
            {children}
            <Footer />
        </main>
    );
};

export default Layout;
