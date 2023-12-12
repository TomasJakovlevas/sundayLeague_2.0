import { UserButton, SignIn, SignUp } from '@clerk/nextjs';

export default function Page() {
  return (
    <main className='flex flex-col md:h-screen'>
      <div className='h-full bg-accent-500'>
        {/* <div className='h-full bg-gradient-to-b from-primary-500 to-secondary-500 relative'> */}

        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-[50px] [&_.cl-card]:bg-primary-500 [&_.cl-footerActionLink]:text-accent-500 [&_.cl-formButtonPrimary]:bg-accent-500 hover:[&_.cl-formButtonPrimary]:bg-accent-700 [&_.cl-dividerLine]:bg-accent-500 [&_.cl-dividerText]:text-accent-500 [&_.cl-headerTitle]:text-accent-500 [&_.cl-headerSubtitle]:text-accent-100 hover:[&_.cl-socialButtonsIconButton]:bg-accent-500'>
          <div className=''>
            <h1 className='text-[100px] text-center font-black font-bungy leading-none'>
              SUNDAY LEAGUE
            </h1>
          </div>
          <SignIn signUpUrl={'http://localhost:3000/sign-up'} />
        </div>
      </div>
      {/* <div className='bg-indigo-200 h-full bg-accent-700'></div> */}
    </main>
  );
}
