import DateRanges from '@/components/DateRange/DateRange';
import { Select } from '@/components/Select/Select';
import { MainTemplate } from '@/components/Templates/MainTemplate';
import { Template } from '@/components/Templates/Template';
import { myGamesRoutes } from '@/lib/routes';
import { Button } from '@nextui-org/react';
import { Input } from '@/components/Input/Input';

export default function Page() {
  return (
    <Template>
      <MainTemplate menuItems={myGamesRoutes}>
        <form>
          <div className='border border-primary-500 flex flex-col items-center p-6 gap-6 rounded-small w-1/2 '>
            <div className='flex w-full'>
              <div className='flex h-[50px]'>
                <DateRanges />
              </div>
            </div>
            <div className='flex gap-5 h-[50px] w-full'>
              <div className='flex'>
                <Select type='category' label='Category' />
              </div>
              <div className='flex flex-1'>
                <Input
                  type='number'
                  labelPlacement='inside'
                  label='Player amount'
                  variant='bordered'
                  isClearable
                />
              </div>
            </div>
            <div className='flex gap-5 h-[50px] w-full'>
              <div className='flex flex-1'>
                <Input
                  type='text'
                  labelPlacement='inside'
                  label='Place'
                  isClearable
                />
              </div>
              <div className='flex flex-1'>
                <Input
                  type='number'
                  labelPlacement='inside'
                  label='Price'
                  endContent='€'
                  isClearable
                />
              </div>
            </div>
            <div className='flex w-full'>
              <Input
                type='text'
                labelPlacement='inside'
                label='Note'
                isClearable
              />
            </div>
            <div className='flex justify-end w-full'>
              <Button variant={'solid'} color='primary'>
                Create
              </Button>
            </div>
          </div>
        </form>
      </MainTemplate>
    </Template>
  );
}

{
  /* <div className='flex gap-2'>
              <span>Select date </span>
              <DateRanges />
            </div>
            <div>
              <Select type='category' label='Category' />
            </div>
            <div>
              <Input
                type='text'
                labelPlacement='inside'
                label='How many people?'
              />
            </div>
            <div>Players: Input</div>
            <div>Price: Input</div>
            <div>Price: Input</div>
            <div>Price: Input</div> */
}
