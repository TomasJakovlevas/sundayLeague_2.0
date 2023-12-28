'use client';

import { Button, Modal, ModalContent, useDisclosure } from '@nextui-org/react';
import { addDays } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const DateRanges = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [state, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  const getDateToString = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    });
  };

  return (
    <div className='flex items-center gap-3'>
      <div className='w-[20px] h-[20px] border border-[red]'>
        {
          // TODO: filter icon
        }
      </div>
      <Button variant='flat' onPress={onOpen} color='primary'>
        {`${getDateToString(state[0].startDate)} - ${getDateToString(
          state[0].endDate
        )}`}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className='w-fit'>
          {() => (
            <DateRange
              className='w-fit'
              editableDateInputs={false}
              onChange={(item) => setState([item.selection])}
              moveRangeOnFirstSelection={true}
              ranges={state}
            />
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DateRanges;
