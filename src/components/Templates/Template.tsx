import { Navbar } from '../Navbar/Navbar';

export const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className='min-h-[calc(100svh-64px)] sm:px-6 sm:container sm:mx-auto sm:max-w-screen-xl'>
        {children}
      </main>
      <footer className='border'>FOOTER</footer>
    </>
  );
};
