import { UserButton, SignIn, SignUp } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <main className='flex flex-col md:h-screen'>
      <div className='h-full bg-accent-500 px-20 flex aling-center items-center'>
        <div className='[&_.cl-card]:bg-primary-500 [&_.cl-footerActionLink]:text-accent-500 [&_.cl-formButtonPrimary]:bg-accent-500 hover:[&_.cl-formButtonPrimary]:bg-accent-700 [&_.cl-dividerLine]:bg-accent-500 [&_.cl-dividerText]:text-accent-500 [&_.cl-headerTitle]:text-accent-500 [&_.cl-headerSubtitle]:text-accent-100 [&_.cl-card]:mx-0 [&_.cl-internal-b3fm6y]:hidden hover:[&_.cl-socialButtonsIconButton] :bg-accent-500 justify-center items-center w-full flex gap-[200px]'>
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
          <div className='flex flex-col gap-7 w-1/2'>
            <div className='text-primary-500 w-fit'>
              <h1 className='text-8xl mb-5 flex flex-col font-black font-bungy leading-none'>
                <span>SUNDAY</span>
                <span>LEAGUE</span>
              </h1>
              <p className='font-bold text-xl'>
                Explore top sports organization app!
              </p>
            </div>

            <div>
              <SignIn signUpUrl={'http://localhost:3000/sign-up'} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className='bg-indigo-200 h-full bg-accent-700'></div> */}
    </main>
  );
}
