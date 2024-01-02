import { Image } from '@nextui-org/react';

export const GameCardHeader = () => {
  return (
    <>
      <Image
        alt='nextui logo'
        radius='sm'
        src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
        className='h-[30px] w-[30px] sm:h-[40px] sm:w-[40px]'
      />
      <div className='flex justify-between gap-2 flex-1'>
        <span className='text-sm sm:text-base'>Garbanelius</span>
      </div>
    </>
  );
};
