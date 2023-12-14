import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <main className='flex flex-col md:h-screen'>
      <div className='h-full bg-accent-500 px-20 flex aling-center items-center'>
        <div className='justify-center items-center w-full flex gap-[200px]'>
          <div className='flex justify-end w-1/2'>
            <div className='h-[750px] w-[750px] relative'>
              <Image
                src={'/assets/images/football-battle.png'}
                alt='football-battle'
                layout='fill'
                objectFit='contain'
              />
            </div>
          </div>
          <div className='flex flex-col gap-6 w-1/2'>
            <div className='text-primary-500 w-fit px-[27px]'>
              <h1 className='text-8xl mb-8 flex flex-col font-black font-bungy leading-none'>
                <span>SUNDAY</span>
                <span>LEAGUE</span>
              </h1>
              <p className='font-bold text-2xl'>
                Explore top sports organization app!
              </p>
            </div>
            <div className='[&_.cl-internal-b3fm6y]:hidden'>
              <SignIn afterSignInUrl={'/'} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
