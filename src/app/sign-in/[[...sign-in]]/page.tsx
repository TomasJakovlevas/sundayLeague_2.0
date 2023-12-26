import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';
import { Footer } from '@/components/Footer/Footer';

import SundayLeaguLogo from '@/assets/icons/sundayLeague.svg';

export default function Page() {
  return (
    <>
      <main className='px-5 pt-5 flex flex-col min-h-screen md:flex md:justify-center xl:px-20 xl:pt-20 '>
        <div className='mt-[40px] flex flex-col items-center flex-1 md:justify-center md:flex-row md:mt-0 gap-12 md:gap-[50px] xl:gap-[100px] xl:mt-0 xl:flex-nowrap 2xl:gap-[150px] transition-all'>
          <div className='xl:w-1/2'>
            {/* <div className='relative h-[250px] w-[250px] md:h-[450px] md:w-[450px] xl:h-[750px] xl:w-[100%]'> */}
            {/* <Image
                src={'/assets/images/football-battle.png'}
                alt='football-battle'
                layout='fill'
                objectFit='contain'
              /> */}
            <div className='relative h-[100px] w-[100px] md:h-[300px] md:w-[300px] xl:h-[400px] xl:w-[100%]'>
              <SundayLeaguLogo className='w-full h-full' />
            </div>
          </div>
          <div className='flex flex-col gap-5 xl:gap-6 xl:w-1/2'>
            <div className='xl:w-full xl:w-fit'>
              <h1 className='text-3xl mb-8 font-black font-bungy flex flex-wrap gap-2 xl:text-8xl mb-8 xl:flex-col xl:leading-none'>
                <span>SUNDAY</span>
                <span>LEAGUE</span>
              </h1>
              <p className='font-bold text-lg xl:text-2xl'>
                Explore top sports organization app!
              </p>
            </div>
            <div className='[&_.cl-internal-b3fm6y]:hidden max-w-[430px]'>
              <SignIn afterSignInUrl={'/'} />
            </div>
          </div>
        </div>
        <footer className='m-5'>
          <Footer />
        </footer>
      </main>
    </>
  );
}
