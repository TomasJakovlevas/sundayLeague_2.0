'use client';
import { getDateToString } from '@/helpers/dates';
import { Button, Modal, ModalContent, useDisclosure } from '@nextui-org/react';
import { useState } from 'react';
import { Calendar as Cal } from 'react-date-range';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export const Calendar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [date, setDate] = useState<any>(new Date());

  return (
    <div className='flex items-center gap-3'>
      <Button
        variant='flat'
        onPress={onOpen}
        color='primary'
        className='h-full bg-primary-50'
      >
        {`${getDateToString(date)}`}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className='w-fit'>
          {() => (
            <div>
              <Cal date={date} onChange={(item) => setDate(item)} />
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
