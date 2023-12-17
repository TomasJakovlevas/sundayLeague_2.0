import React from 'react';

export const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className='border h-[50px] fixed w-full top-0 z-50'>NAVIGATION</nav>
      <main className='border mt-[50px] h-[calc(200svh-50px)]'>{children}</main>
      <footer className='border'>FOOTER</footer>
    </>
  );
};
