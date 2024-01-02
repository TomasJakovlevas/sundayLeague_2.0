import { Button } from '@nextui-org/react';

export const GameCardBody = () => {
  return (
    <>
      <div className='flex flex-row gap-2 items-center whitespace-nowrap sm:gap-3'>
        <div className='flex items-center gap-2 sm:gap-3'>
          <div className='w-[20px] h-[20px] border border-[red]'>
            {
              // TODO: place icon
            }
          </div>
          <span className='text-sm sm:text-base'>Place</span>
        </div>
        <div>
          <div className='flex items-center gap-2 sm:gap-3'>
            <div className='w-[20px] h-[20px] border border-[red]'>
              {
                // TODO: Type icon
              }
            </div>
            <span>Type</span>
          </div>
        </div>
        <div className='flex items-center gap-2 sm:gap-3'>
          <div className='w-[20px] h-[20px] border border-[red]'>
            {
              // TODO: calendar icon
            }
          </div>
          <span>Tomorow</span>
        </div>
      </div>
      <div className='flex items-center justify-end gap-2 sm:gap-3'>
        <div className='w-[20px] h-[20px] border border-[red]'>
          {
            // TODO: players icon
          }
        </div>
        <span className='text-base font-semibold sm:text-lg'>3/14</span>
        {/* <Button size='sm' variant='flat' color='primary'>
          Join
        </Button> */}
      </div>
    </>
  );
};
