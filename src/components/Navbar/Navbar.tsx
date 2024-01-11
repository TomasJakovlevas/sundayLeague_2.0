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
import useNavbarScroll from '@/hooks/useNavbarScroll';
import SundayLeagueLogo from '@/assets/icons/sundayLeague.svg';
import { mainNavRoutes } from '@/lib/routes';
import { SearchModal } from '../SearchModal/SearchModal';

export const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  const pathname = usePathname();
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
    >
      <NavbarBrand>
        <Link href='/'>
          <SundayLeagueLogo className='h-7 w-[18px] sm:h-10 sm:w-[25px]' />
        </Link>
      </NavbarBrand>

      <SearchModal />

      <NavbarMenuToggle
        aria-label={menuIsOpen ? 'Close menu' : 'Open menu'}
        className='sm:hidden'
      />

      <NavbarContent
        className='hidden sm:flex gap-6 font-medium'
        justify='center'
      >
        {mainNavRoutes.map((item, index) => (
          <NavbarItem
            key={`${item.title}-${index}`}
            isActive={item.route.split('')[1] === pathname.split('')[1]}
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
        {mainNavRoutes.map((item, index) => (
          <NavbarMenuItem
            key={`${item.title}-${index}`}
            isActive={item.route.split('')[1] === pathname.split('')[1]}
          >
            <Link className='w-full' href={item.route}>
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
        <Divider />

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
