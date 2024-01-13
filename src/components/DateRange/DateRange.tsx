'use client';

import { getDateToString } from '@/helpers/dates';
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
      endDate: addDays(new Date(), 6),
      key: 'selection',
    },
  ]);

  return (
    <div className='flex items-center gap-3'>
      <Button
        variant='flat'
        onPress={onOpen}
        color='primary'
        className='h-full bg-primary-50'
      >
        {`${getDateToString(state[0].startDate)} - ${getDateToString(
          state[0].endDate
        )}`}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className='w-fit'>
          {() => (
            <div>
              <DateRange
                className='w-fit'
                editableDateInputs={false}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={true}
                ranges={state}
              />
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default DateRanges;
