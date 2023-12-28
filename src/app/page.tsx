import DateRanges from '@/components/DateRange/DateRange';
import GameCard from '@/components/GameCard/GameCard';
import { MainTemplate } from '@/components/Templates/MainTemplate';
import { Template } from '@/components/Templates/Template';
import { mainPageRoutes } from '@/lib/routes';

export default function Home() {
  return (
    <Template>
      <MainTemplate menuItems={mainPageRoutes}>
        <div className='border mb-5'>
          <DateRanges />
        </div>
        <div className='border grid gap-5 grid-cols-2'>
          {Array.from({ length: 20 }).map((_, index) => (
            <div key={index} className='border w-full'>
              <GameCard />
            </div>
          ))}
        </div>
      </MainTemplate>
    </Template>
  );
}
