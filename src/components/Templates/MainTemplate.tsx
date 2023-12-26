import { LinkType } from '@/types';
import { InnerNavbar } from '../InnerNavbar/InnerNavbar';

type MainTemplateProps = {
  children: React.ReactNode;
  menuItems: LinkType[];
};

export const MainTemplate = ({ children, menuItems }: MainTemplateProps) => {
  return (
    <section className='relative sm:flex sm:gap-8'>
      <InnerNavbar
        className='sticky top-[64px] sm:hidden'
        menuItems={menuItems}
      />

      <div className='p-6 w-full sm:px-0'>
        <h1 className='text-xl font-extrabold mb-4'>Title</h1>
        {children}
      </div>
    </section>
  );
};
