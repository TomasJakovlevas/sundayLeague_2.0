'use client';

import useNavbarScroll from '@/hooks/useNavbarScroll';
import { LinkType } from '@/types';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { Listbox, ListboxItem } from '@nextui-org/listbox';

import { usePathname, useRouter } from 'next/navigation';
import { HTMLAttributes, useState } from 'react';

interface CustomDivProps extends HTMLAttributes<HTMLDivElement> {
  menuItems: LinkType[];
}

export const InnerNavbar = ({ menuItems, ...rest }: CustomDivProps) => {
  const scrolled = useNavbarScroll();
  const router = useRouter();
  const pathname = usePathname();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <div {...rest}>
        <Navbar
          shouldHideOnScroll={false}
          height={'50px'}
          isMenuOpen={menuIsOpen}
          onMenuOpenChange={setMenuIsOpen}
          maxWidth='xl'
          className={`!backdrop-blur-sm !backdrop-saturate-100 md:border-b transition-colors duration-1000  ${
            scrolled ? 'bg-[#c7c4be99]' : 'bg-[#F9F6EE99]'
          }`}
        >
          <Dropdown onClose={() => setMenuIsOpen(false)}>
            <DropdownTrigger>
              <NavbarMenuToggle
                aria-label={menuIsOpen ? 'Close menu' : 'Open menu'}
                className='sm:hidden'
              />
            </DropdownTrigger>
            <DropdownMenu variant='bordered'>
              {menuItems.map((item) => (
                <DropdownItem
                  onClick={() => router.push(item.route)}
                  key={item.route}
                  className={`w-[calc(100vw-40px)] ${
                    item.route === pathname ? 'border border-primary-500' : ''
                  }`}
                  textValue='Menu Item'
                  title={item.title}
                  color='primary'
                />
              ))}
            </DropdownMenu>
          </Dropdown>
        </Navbar>
      </div>

      <div className='hidden sm:block mt-6 sticky top-[88px] h-full w-1/4 border-small rounded-small px-1 py-2'>
        <Listbox
          aria-label='Actions'
          onAction={(key) => router.push(key.toString())}
          shouldFocusOnHover
          variant='bordered'
          color='primary'
        >
          {menuItems.map((item) => (
            <ListboxItem
              key={item.route}
              className={`${
                item.route === pathname
                  ? 'border border-[2px] border-primary-500'
                  : ''
              }`}
            >
              {item.title}
            </ListboxItem>
          ))}
        </Listbox>
      </div>
    </>
  );
};
