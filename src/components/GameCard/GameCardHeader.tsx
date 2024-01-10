import { Image } from '@nextui-org/react';
import Link from 'next/link';

export const GameCardHeader = () => {
  return (
    <>
      <Image
        alt='nextui logo'
        radius='sm'
        src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
        className='h-[30px] w-[30px] sm:h-[40px] sm:w-[40px]'
      />
      <div className='flex justify-between flex-1'>
        <div className='flex items-center gap-2'>
          <span className='text-sm sm:text-base'>Garbanelius</span>
          <Link href={'/games/69'}>
            <div className='w-[20px] h-[20px] border border-[red] hover:cursor-pointer'>
              {
                // TODO: link
              }
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
