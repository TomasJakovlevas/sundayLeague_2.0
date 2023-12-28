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
        <div className='border flex flex-col gap-5'>
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className='border w-fit'>
              <GameCard />
            </div>
          ))}
        </div>
      </MainTemplate>
    </Template>
  );
}
