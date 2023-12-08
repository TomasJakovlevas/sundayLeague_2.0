'use client';

import { authenticate } from '@/lib/actions';
import { useFormState, useFormStatus } from 'react-dom';

export const LoginForm = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  const { pending } = useFormStatus();

  return (
    <form action={dispatch} className='space-y-3'>
      <div className='flex-1 rounded-lg  px-6 pb-4 pt-8'>
        <h1 className={`mb-3 text-2xl`}>Please log in to continue.</h1>
        <div className='w-full'>
          <div>
            <label
              className='mb-3 mt-5 block text-xs font-medium '
              htmlFor='email'
            >
              Email
            </label>
            <div className='relative'>
              <input
                className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-gray-500'
                id='email'
                type='email'
                name='email'
                placeholder='Enter your email address'
                required
              />
            </div>
          </div>
        </div>
        <button className='mt-4 w-full' aria-disabled={pending}>
          Log in
        </button>

        <div
          className='flex h-8 items-end space-x-1'
          aria-live='polite'
          aria-atomic='true'
        >
          {errorMessage && (
            <>
              <p className='text-sm text-red-500'>{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
};
