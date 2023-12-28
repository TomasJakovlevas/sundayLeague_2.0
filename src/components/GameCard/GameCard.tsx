import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Image,
} from '@nextui-org/react';

const GameCard = () => {
  return (
    <Card isPressable className='text-primary-700'>
      <CardHeader className='flex items-start gap-3 flex border'>
        <Image
          alt='nextui logo'
          height={40}
          radius='sm'
          src='https://avatars.githubusercontent.com/u/86160567?s=200&v=4'
          width={40}
        />
        <div className='flex justify-between gap-2 flex-1'>
          <span className='text-md'>Garbanelius</span>
        </div>
      </CardHeader>

      <CardBody className='flex flex-col gap-3 border'>
        <div className='flex flex-row gap-3 items-center whitespace-nowrap'>
          <div className='flex items-center gap-3'>
            <div className='w-[20px] h-[20px] border border-[red]'>
              {
                // TODO: place icon
              }
            </div>
            <span>Place</span>
          </div>
          <div>
            <div className='flex items-center gap-3'>
              <div className='w-[20px] h-[20px] border border-[red]'>
                {
                  // TODO: Type icon
                }
              </div>
              <span>Type</span>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <div className='w-[20px] h-[20px] border border-[red]'>
              {
                // TODO: calendar icon
              }
            </div>
            <span>Tomorow</span>
          </div>
        </div>
        <div className='flex items-center justify-end gap-3'>
          <div className='w-[20px] h-[20px] border border-[red]'>
            {
              // TODO: players icon
            }
          </div>
          <span className='text-lg font-semibold'>3/14</span>
          <Button size='sm' variant='flat' color='primary'>
            Join
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default GameCard;
