'use client';

import { Input as BaseInput, InputProps } from '@nextui-org/react';
import { forwardRef, useState } from 'react';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ ...rest }, ref) => {
    const [value, setValue] = useState('');

    const variant = value !== '' ? 'flat' : 'bordered';

    return (
      <BaseInput
        ref={ref}
        {...rest}
        variant={variant}
        value={value}
        onValueChange={setValue}
        color='primary'
      />
    );
  }
);

Input.displayName = 'Input';
