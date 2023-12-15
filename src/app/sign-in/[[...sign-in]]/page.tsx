import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <main className='flex flex-col bg-accent-500 min-h-screen xl:p-20 xl:flex xl:justify-center'>
      <div className='mx-5 mt-[51px] flex flex-wrap justify-center items-center gap-8  xl:gap-[100px] xl:mt-0 xl:flex-nowrap 2xl:gap-[200px] transition-all'>
        <div className='xl:w-1/2'>
          <div className='h-[250px] w-[250px] xl:h-[750px] xl:w-[750px] relative  '>
            <Image
              src={'/assets/images/football-battle.png'}
              alt='football-battle'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>
        <div className='flex flex-col gap-5 xl:gap-6 xl:w-1/2'>
          <div className='text-primary-500 xl:w-full xl:w-fit xl:px-[27px]'>
            <h1 className='text-3xl mb-8 font-black font-bungy flex flex-wrap gap-2 xl:text-8xl mb-8 xl:flex-col xl:leading-none'>
              <span>SUNDAY</span>
              <span>LEAGUE</span>
            </h1>
            <p className='font-bold text-lg xl:text-2xl'>
              Explore top sports organization app!
            </p>
          </div>
          <div className='[&_.cl-internal-b3fm6y]:hidden'>
            <SignIn afterSignInUrl={'/'} />
          </div>
        </div>
      </div>
    </main>
  );
}
