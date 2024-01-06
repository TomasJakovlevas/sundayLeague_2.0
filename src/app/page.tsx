import DateRanges from '@/components/DateRange/DateRange';
import GameCard from '@/components/GameCard/GameCard';
import { Select } from '@/components/Select/Select';
import { MainTemplate } from '@/components/Templates/MainTemplate';
import { Template } from '@/components/Templates/Template';
import { ToggleButton } from '@/components/ToggleButton/ToggleButton';
import { mainPageRoutes } from '@/lib/routes';

const getGames = async () => {
  await new Promise((res) => setTimeout(res, 2000));

  return Array.from({ length: 20 });
};

export default async function Home() {
  const games = await getGames();

  return (
    <Template>
      <MainTemplate menuItems={mainPageRoutes}>
        <div className='mb-5 flex gap-3 items-stretch'>
          <div className='flex items-center'>
            <div className='w-[20px] h-[20px] border border-[red] '>
              {
                // TODO: filter icon
              }
            </div>
          </div>
          <DateRanges />
          <Select type='place' label='Place' />
          <Select type='category' label='Category' />
          <ToggleButton />
        </div>

        <div className='border grid gap-3 grid-cols-1 md:gap-5 md:grid-cols-2'>
          {games.map((_, index) => (
            <div key={index} className='border w-full'>
              <GameCard />
            </div>
          ))}
        </div>
      </MainTemplate>
    </Template>
  );
}
