import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <main className='w-full h-lvh flex items-center justify-center'>
      {children}
    </main>
  );
};

export default AuthLayout;
