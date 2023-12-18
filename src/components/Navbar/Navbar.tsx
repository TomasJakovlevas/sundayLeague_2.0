'use client';

import useNavbarScroll from '@/app/hooks/useNavbarScroll';
import { useState } from 'react';

export const Navbar = () => {
  const navbarScroll = useNavbarScroll();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div
      className={`mx-auto border px-5 h-full transition-all duration-500 w-full flex items-center relative ${
        navbarScroll && 'md:w-3/4'
      }`}
    >
      <div className='border w-full flex items-center justify-between'>
        <div>SL</div>
        <div
          className='z-50 md:hidden'
          onClick={() => setMenuIsOpen((prev) => !prev)}
        >
          {menuIsOpen ? 'X' : '|||'}
        </div>
      </div>

      <div
        className={`absolute top-0 bg-secondary-500 w-5/6 h-screen z-0 transition-all duration-500 md:hidden ${
          menuIsOpen ? 'right-0' : '-right-full'
        }`}
      >
        <ul className='border border-transparent m-8 text-lg'>
          <li className='my-6'>Vienas</li>
          <li className='my-6'>Du</li>
          <li className='my-6'>Trys</li>
          <li className='my-6'>Keturi</li>
        </ul>
      </div>
    </div>
  );
};
