'use client';

import { Select as S, SelectItem, Selection } from '@nextui-org/react';
import { getPreset } from './SelectPresets';
import { useState } from 'react';

type SelectProps = {
  label: string;
  value?: string;
  type: string;
};

export const Select = ({ label, value, type }: SelectProps) => {
  const preset = getPreset(type);

  const [selectValue, setSelectValue] = useState<Selection>(new Set([]));

  const color = Array.from(selectValue).length ? 'primary' : 'default';

  return (
    <S
      items={preset?.items}
      label={label}
      className='max-w-xs w-28'
      selectedKeys={selectValue}
      variant='flat'
      color={color}
      size='sm'
      radius='md'
      onSelectionChange={setSelectValue}
    >
      {preset?.items.map((item) => (
        <SelectItem key={item.value} value={item.value} color={color}>
          {item.label}
        </SelectItem>
      ))}
    </S>
  );
};
