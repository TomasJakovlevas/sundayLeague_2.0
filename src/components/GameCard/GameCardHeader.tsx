import { Image } from '@nextui-org/react';

export const GameCardHeader = () => {
  return (
    <>
      <Image
        alt='nextui logo'
        height={40}
        radius='sm'
        src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
        width={40}
      />
      <div className='flex justify-between gap-2 flex-1'>
        <span className='text-md'>Garbanelius</span>
      </div>
    </>
  );
};
