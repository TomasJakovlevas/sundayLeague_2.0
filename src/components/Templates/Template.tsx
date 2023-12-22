import { Navbar } from '../Navbar/Navbar';

export const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className='min-h-[calc(100svh-64px)] md:px-6 md:container md:mx-auto md:max-w-screen-xl'>
        {children}
      </main>
      <footer className='border'>FOOTER</footer>
    </>
  );
};
