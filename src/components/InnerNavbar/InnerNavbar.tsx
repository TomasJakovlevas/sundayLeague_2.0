'use client';

import useNavbarScroll from '@/hooks/useNavbarScroll';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Navbar,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { HTMLAttributes, useRef, useState } from 'react';

interface CustomDivProps extends HTMLAttributes<HTMLDivElement> {
  // TODO: accept menut items list
  // menuItems: [];
}

export const InnerNavbar = ({ ...rest }: CustomDivProps) => {
  const scrolled = useNavbarScroll();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
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
            <DropdownItem
              className='w-[calc(100vw-40px)]'
              textValue='Menu Item'
              title='Menu Item '
              color='primary'
            />
          </DropdownMenu>
        </Dropdown>
      </Navbar>
    </div>
  );
};
