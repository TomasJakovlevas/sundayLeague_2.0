import { Button } from '@nextui-org/react';

export const GameCardBody = () => {
  return (
    <>
      <div className='flex flex-row gap-3 items-center whitespace-nowrap'>
        <div className='flex items-center gap-3'>
          <div className='w-[20px] h-[20px] border border-[red]'>
            {
              // TODO: place icon
            }
          </div>
          <span>Place</span>
        </div>
        <div>
          <div className='flex items-center gap-3'>
            <div className='w-[20px] h-[20px] border border-[red]'>
              {
                // TODO: Type icon
              }
            </div>
            <span>Type</span>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <div className='w-[20px] h-[20px] border border-[red]'>
            {
              // TODO: calendar icon
            }
          </div>
          <span>Tomorow</span>
        </div>
      </div>
      <div className='flex items-center justify-end gap-3'>
        <div className='w-[20px] h-[20px] border border-[red]'>
          {
            // TODO: players icon
          }
        </div>
        <span className='text-lg font-semibold'>3/14</span>
        {/* <Button size='sm' variant='flat' color='primary'>
          Join
        </Button> */}
      </div>
    </>
  );
};
