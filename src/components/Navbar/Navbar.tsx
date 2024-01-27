'use client';

import { useState } from 'react';

import { Navbar as Nav, NavbarBrand } from '@nextui-org/react';

import Link from 'next/link';
import useNavbarScroll from '@/hooks/useNavbarScroll';
import SundayLeagueLogo from '@/assets/icons/sundayLeague.svg';
import { mainNavRoutes } from '@/lib/routes';
import { SearchModal } from '../SearchModal/SearchModal';
import { DesktopMenu } from './Variants/DesktopMenu';
import { MobileMenu } from './Variants/MobileMenu';

export const Navbar = () => {
  const scrolled = useNavbarScroll();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <Nav
      shouldHideOnScroll={false}
      height={'64px'}
      maxWidth='2xl'
      onMenuOpenChange={setMenuIsOpen}
      className={`backdrop-blur-sm backdrop-saturate-100 md:border-b transition-colors duration-1000  ${
        scrolled ? 'bg-[#c7c4be99]' : 'bg-[#F9F6EE99]'
      }`}
      classNames={{
        item: ['data-[active=true]:text-primary-500', 'hover:text-primary-500'],
      }}
    >
      <NavbarBrand>
        <Link href='/'>
          <SundayLeagueLogo className='h-7 w-[18px] sm:h-10 sm:w-[25px]' />
        </Link>
      </NavbarBrand>

      <SearchModal />

      <DesktopMenu routes={mainNavRoutes} />
      <MobileMenu menuIsOpen={menuIsOpen} routes={mainNavRoutes} />
    </Nav>
  );
};
