'use client';

import useNavbarScroll from '@/app/hooks/useNavbarScroll';
import { useState } from 'react';
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
} from '@nextui-org/react';

export const Navbar = () => {
  const navbarScroll = useNavbarScroll();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuItems = ['Profile', 'Dashboard', 'Activity', 'Analytics', 'System'];

  return (
    <Nav
      shouldHideOnScroll={true}
      height={'50px'}
      maxWidth='xl'
      onMenuOpenChange={setMenuIsOpen}
      className='border-b '
    >
      <NavbarBrand>
        <span>SL</span>
      </NavbarBrand>
      <NavbarMenuToggle
        aria-label={menuIsOpen ? 'Close menu' : 'Open menu'}
        className='sm:hidden bold'
      />

      <NavbarContent className='hidden sm:flex gap-6' justify='center'>
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link href='#'>{item}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu className='gap-8'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className='w-full'
              href='#'
              size='lg'
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Nav>
  );
};
