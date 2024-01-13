'use client';
import { Input as Inp, InputProps } from '@nextui-org/react';
import { useState } from 'react';

export const Input = ({ ...rest }: InputProps) => {
  const [value, setValue] = useState('');

  const variant = value !== '' ? 'flat' : 'bordered';

  return (
    <Inp
      {...rest}
      variant={variant}
      value={value}
      color='primary'
      onValueChange={setValue}
    />
  );
};
