import { Filters } from '@/components/Filters/Filters';
import GameCard from '@/components/GameCard/GameCard';
import { MainTemplate } from '@/components/Templates/MainTemplate';
import { Template } from '@/components/Templates/Template';
import { myGamesRoutes } from '@/lib/routes';
import { Button, Tooltip } from '@nextui-org/react';
import Link from 'next/link';

const getGames = async () => {
  await new Promise((res) => setTimeout(res, 1000));

  return Array.from({ length: 5 });
};

export default async function Page() {
  const games = await getGames();

  return (
    <Template>
      <MainTemplate menuItems={myGamesRoutes}>
        <div className='mb-5 flex items-stretch h-[38px] sm:h-[50px]'>
          <Filters />
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
