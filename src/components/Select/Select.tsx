'use client';

import {
  Select as S,
  SelectItem,
  Selection,
  SkeletonProps,
} from '@nextui-org/react';
import { getPreset } from './SelectPresets';
import { forwardRef, useState } from 'react';

type SelectProps = {
  label: string;
  value?: string;
  type: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, value, type, ...rest }, ref) => {
    const preset = getPreset(type);

    const [selectValue, setSelectValue] = useState<Selection>(new Set([]));

    const variant = Array.from(selectValue).length ? 'flat' : 'bordered';

    return (
      <S
        {...rest}
        ref={ref}
        items={preset?.items}
        label={label}
        className='min-w-[120px] w-[120px]'
        classNames={{
          trigger: 'data-[hover]:hover:border-primary-500 h-full',
          mainWrapper: 'h-full',
        }}
        selectedKeys={selectValue}
        variant={variant}
        color={'primary'}
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
