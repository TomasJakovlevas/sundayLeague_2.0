import { ScrollShadow } from '@nextui-org/react';
import DateRanges from '../DateRange/DateRange';
import { Select } from '../Select/Select';
import { ToggleButton } from '../ToggleButton/ToggleButton';

export const Filters = () => {
  return (
    <ScrollShadow
      orientation='horizontal'
      className='flex flex-1 gap-3'
      hideScrollBar
    >
      <div className='flex items-center'>
        <div className='w-[20px] h-[20px] border border-[red] '>
          {
            // TODO: filter icon
          }
        </div>
      </div>
      <DateRanges />
      <Select type='place' label='Place' />
      <Select type='category' label='Category' />
      <ToggleButton />
    </ScrollShadow>
  );
};
