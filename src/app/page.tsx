import { Filters } from '@/components/Filters/Filters';
import GameCard from '@/components/GameCard/GameCard';
import { MainTemplate } from '@/components/Templates/MainTemplate';
import { Template } from '@/components/Templates/Template';
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
