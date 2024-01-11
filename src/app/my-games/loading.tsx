import { Progress } from '@nextui-org/react';
import SundayLeaguLogo from '@/assets/icons/sundayLeague.svg';

export default function Loading() {
  return (
    <main className='h-screen flex flex-col items-center justify-center gap-10 p-3'>
      <h2 className='text-[60px] sm:text-[100px]'>
        <SundayLeaguLogo />
      </h2>
      <div className='w-1/2 flex justify-center'>
        <Progress
          size='sm'
          isIndeterminate
          aria-label='Loading...'
          className='max-w-md'
          color='primary'
        />
      </div>
    </main>
  );
}
