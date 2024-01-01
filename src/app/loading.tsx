import { Progress } from '@nextui-org/react';
import SundayLeaguLogo from '@/assets/icons/sundayLeague.svg';

export default function Loading() {
  return (
    <main className='h-screen flex flex-col items-center justify-center gap-10'>
      <h2 className='text-[100px]'>
        <SundayLeaguLogo />
      </h2>
      <div className='w-full flex justify-center'>
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
