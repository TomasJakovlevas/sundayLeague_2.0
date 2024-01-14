'use client';

import { Select } from '@/components/Select/Select';
import { MainTemplate } from '@/components/Templates/MainTemplate';
import { Template } from '@/components/Templates/Template';
import { myGamesRoutes } from '@/lib/routes';
import { Button } from '@nextui-org/react';
import { Input } from '@/components/Input/Input';
import { Calendar } from '@/components/Calendar/Calendar';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { useEffect, useState } from 'react';

type Inputs = {};

export default function Page() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<Inputs> = (data: any) => {
    console.log(data);
  };

  const [date, setDate] = useState<any>(new Date());

  useEffect(() => {
    register('date', { value: date });
  }, [register, date]);

  return (
    <Template>
      <MainTemplate menuItems={myGamesRoutes}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='border border-primary-200 flex flex-col items-center p-6 gap-6 rounded-small w-1/2 '>
            <div className='flex w-full'>
              <div className='flex h-[50px]'>
                <Calendar />
              </div>
            </div>
            <div className='flex gap-5 h-[50px] w-full'>
              <div className='flex'>
                <Controller
                  name='category'
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      {...register('category')}
                      type='category'
                      label='Category'
                    />
                  )}
                />
              </div>
              <div className='flex flex-1'>
                <Controller
                  name='number_of_players'
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      {...register('number_of_players')}
                      type='number'
                      labelPlacement='inside'
                      label='Number of players'
                      variant='bordered'
                      isClearable
                    />
                  )}
                />
              </div>
            </div>
            <div className='flex gap-5 h-[50px] w-full'>
              <div className='flex flex-1'>
                <Controller
                  name='place'
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      {...register('place')}
                      type='text'
                      labelPlacement='inside'
                      label='Place'
                      isClearable
                    />
                  )}
                />
              </div>
              <div className='flex flex-1'>
                <Controller
                  name='price'
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      {...register('price')}
                      type='number'
                      labelPlacement='inside'
                      label='Price'
                      endContent='€'
                      isClearable
                    />
                  )}
                />
              </div>
            </div>
            <div className='flex w-full'>
              <Controller
                name='note'
                control={control}
                render={({ field }) => (
                  <Input
                    {...field}
                    {...register('note')}
                    type='text'
                    labelPlacement='inside'
                    label='Note'
                    isClearable
                  />
                )}
              />
            </div>
            <div className='flex justify-end w-full'>
              <Button variant={'solid'} color='primary' type='submit'>
                Create
              </Button>
            </div>
          </div>
        </form>
      </MainTemplate>
    </Template>
  );
}
