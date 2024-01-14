'use client';

import {
  Select as S,
  SelectItem,
  Selection,
  SelectProps as Sprops,
} from '@nextui-org/react';
import { getPreset } from './SelectPresets';
import { forwardRef, useState } from 'react';

type SelectProps = Partial<Sprops> & {
  type: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ type, isInvalid, ...rest }, ref) => {
    const preset = getPreset(type);

    const [selectValue, setSelectValue] = useState<Selection>(new Set([]));

    const variant = Array.from(selectValue).length ? 'flat' : 'bordered';

    return (
      <S
        {...rest}
        ref={ref}
        items={preset?.items}
        className='min-w-[120px] w-[120px]'
        classNames={{
          trigger: `h-full ${
            isInvalid
              ? 'data-[hover]:hover:border-danger-500 border-danger-500'
              : 'data-[hover]:hover:border-primary-500'
          }`,
          mainWrapper: 'h-full',
        }}
        selectedKeys={selectValue}
        variant={variant}
        color={isInvalid ? 'danger' : 'primary'}
        radius='md'
        onSelectionChange={setSelectValue}
      >
        {preset?.items.map((item) => (
          <SelectItem key={item.value} value={item.value} color={'primary'}>
            {item.label}
          </SelectItem>
        ))}
      </S>
    );
  }
);

Select.displayName = 'Select';
