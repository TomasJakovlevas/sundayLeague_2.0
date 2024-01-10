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

  const activeRoute = menuItems.find(
    (item) => item.route.split('/')[1] === pathname.split('/')[1]
  );

  return (
    <section className='relative sm:flex sm:gap-8'>
      <InnerNavbar
        className='sticky top-[64px] z-30 sm:hidden'
        menuItems={menuItems}
      />

      <div className='p-3 sm:p-6 w-full sm:px-0 sm:w-[calc(100%-200px)] '>
        {activeRoute?.title && (
          <h1 className='text-xl mb-3 font-extrabold sm:mb-6 sm:text-3xl'>
            {activeRoute.title}
          </h1>
        )}
        {children}
      </div>
    </section>
  );
};
