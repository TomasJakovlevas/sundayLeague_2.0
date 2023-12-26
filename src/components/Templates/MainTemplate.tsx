'use client';

import { LinkType } from '@/types';
import { InnerNavbar } from '../InnerNavbar/InnerNavbar';
import { usePathname } from 'next/navigation';

type MainTemplateProps = {
  children: React.ReactNode;
  menuItems: LinkType[];
};

export const MainTemplate = ({ children, menuItems }: MainTemplateProps) => {
  const pathname = usePathname();

  const activeRoute = menuItems.find((item) => item.route === pathname);

  return (
    <section className='relative sm:flex sm:gap-8'>
      <InnerNavbar
        className='sticky top-[64px] sm:hidden'
        menuItems={menuItems}
      />

      <div className='p-6 w-full sm:px-0 '>
        <h1 className='text-3xl font-extrabold mb-4'>{activeRoute?.title}</h1>
        {children}
      </div>
    </section>
  );
};
