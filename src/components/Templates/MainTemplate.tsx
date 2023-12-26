import { InnerNavbar } from '../InnerNavbar/InnerNavbar';

export const MainTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className='relative sm:flex sm:gap-8'>
      <InnerNavbar className='sticky top-[64px] sm:hidden' />

      <div className='p-6 w-full sm:px-0'>
        <h1 className='text-xl font-extrabold mb-4'>Title</h1>
        {children}
      </div>
    </section>
  );
};
