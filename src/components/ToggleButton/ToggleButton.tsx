'use client';
import { Button } from '@nextui-org/react';
import { useState } from 'react';

export const ToggleButton = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div>
      <Button
        className={`h-full text-primary shadow-sm border border-[2px]  ${
          selected
            ? 'border-transparent bg-primary-50'
            : 'border-default-200 bg-transparent hover:border-primary-500'
        }`}
        // variant={selected ? 'flat' : 'ghost'}
        //   onPress={onOpen}
        // color='primary'
        onClick={() => setSelected((prev) => !prev)}
      >
        Available
      </Button>
    </div>
  );
};
