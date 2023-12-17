'use client';

import useNavbarScroll from '@/app/hooks/useNavbarScroll';
import React from 'react';

export const Navbar = () => {
  const navbarScroll = useNavbarScroll();

  return (
    <div
      className={`mx-auto border flex items-center px-5 h-full transition-all duration-500 ${
        navbarScroll ? 'w-1/2' : 'w-full  '
      }`}
    >
      NAVIGATION
    </div>
  );
};
