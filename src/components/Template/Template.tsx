import React from 'react';
import { Navbar } from '../Navbar/Navbar';

export const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className='h-[calc(200svh-50px)]'>{children}</main>
      <footer className='border'>FOOTER</footer>
    </>
  );
};
