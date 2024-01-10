import { Filters } from '@/components/Filters/Filters';
import { MainTemplate } from '@/components/Templates/MainTemplate';
import { Template } from '@/components/Templates/Template';
import { mainPageRoutes } from '@/lib/routes';
import { Button, Tooltip } from '@nextui-org/react';

const page = () => {
  return (
    <Template>
      <MainTemplate menuItems={mainPageRoutes}>
        <div className='mb-5 flex items-stretch h-[38px] sm:h-[50px]'>
          <Filters />
        </div>
        <div className='border'>
          <Tooltip
            color={'foreground'}
            delay={0}
            closeDelay={0}
            placement={'right-start'}
            content='Create new game'
          >
            <Button isIconOnly radius={'full'} color='primary'>
              +
            </Button>
          </Tooltip>
        </div>
      </MainTemplate>
    </Template>
  );
};

export default page;
