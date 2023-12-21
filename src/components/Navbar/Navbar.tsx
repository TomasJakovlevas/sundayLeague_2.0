'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import {
  Avatar,
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Divider,
} from '@nextui-org/react';

import Link from 'next/link';

import { useUser, useClerk } from '@clerk/nextjs';

export const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  const pathname = usePathname();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuItems = [
    {
      title: 'Profile',
      route: '/profile',
    },
    {
      title: 'Dashboard',
      route: '/dashboard',
    },
    {
      title: 'Activity',
      route: '/activity',
    },
    {
      title: 'System',
      route: '/system',
    },
  ];

  return (
    <Nav
      shouldHideOnScroll={true}
      height={'64px'}
      maxWidth='xl'
      onMenuOpenChange={setMenuIsOpen}
      className='border-b'
    >
      <NavbarBrand>
        <Link href='/'>
          <span>SL</span>
        </Link>
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
          <NavbarItem
            key={`${item.title}-${index}`}
            isActive={item.route === pathname}
          >
            <Link href={item.route}>{item.title}</Link>
          </NavbarItem>
        ))}

        {!isSignedIn ? (
          <NavbarItem>
            <Button
              variant='ghost'
              color='primary'
              onClick={() => router.push('/sign-in')}
            >
              Sign in
            </Button>
          </NavbarItem>
        ) : (
          <Dropdown>
            <DropdownTrigger>
              <Avatar
                name={user.firstName || ''}
                src={user.imageUrl || undefined}
                showFallback
                className='cursor-pointer'
                isBordered
                color='primary'
              />
            </DropdownTrigger>
            <DropdownMenu variant='bordered'>
              <DropdownItem color='primary'>
                <Link href={'/settings'}>Settings</Link>
              </DropdownItem>
              <DropdownItem
                onClick={() => signOut(() => router.push('/'))}
                className='text-danger'
                color='danger'
              >
                Log out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}
      </NavbarContent>

      <NavbarMenu className='gap-8'>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item.title}-${index}`}
            isActive={item.route === pathname}
          >
            <Link className='w-full' href={item.route}>
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
        <Divider />

        {/* TODO: add avatar maybe? */}
        {!isSignedIn ? (
          <NavbarMenuItem>
            <Button
              variant='ghost'
              color='primary'
              onClick={() => router.push('/sign-in')}
            >
              Sign in
            </Button>
          </NavbarMenuItem>
        ) : (
          <>
            <NavbarMenuItem>
              <Link href={'/settings'}>Settings</Link>
            </NavbarMenuItem>
            <NavbarMenuItem
              onClick={() => signOut(() => router.push('/'))}
              className='text-danger'
            >
              Log out
            </NavbarMenuItem>
          </>
        )}
      </NavbarMenu>
    </Nav>
  );
};
