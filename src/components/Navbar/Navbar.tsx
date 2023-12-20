'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
} from '@nextui-org/react';

import { useUser, useClerk } from '@clerk/nextjs';

export const Navbar = () => {
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuItems = ['Profile', 'Dashboard', 'Activity', 'Analytics', 'System'];

  return (
    <Nav
      shouldHideOnScroll={true}
      height={'50px'}
      maxWidth='xl'
      onMenuOpenChange={setMenuIsOpen}
      className='border-b'
    >
      <NavbarBrand>
        <span>SL</span>
      </NavbarBrand>
      <NavbarMenuToggle
        aria-label={menuIsOpen ? 'Close menu' : 'Open menu'}
        className='sm:hidden'
      />

      <NavbarContent
        className='hidden sm:flex gap-6 font-medium'
        justify='center'
      >
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`} className=''>
            <Link href='#'>{item}</Link>
          </NavbarItem>
        ))}

        {!isSignedIn && (
          <NavbarItem>
            <Button
              variant='ghost'
              color='primary'
              onClick={() => router.push('/sign-in')}
            >
              Sign in
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu className='gap-8'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              // color={
              //   index === 2
              //     ? 'primary'
              //     : index === menuItems.length - 1
              //     ? 'danger'
              //     : 'foreground'
              // }
              className='w-full font-medium'
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
