import { MainTemplate } from '@/components/Templates/MainTemplate';
import { Template } from '@/components/Templates/Template';
import { mainPageRoutes } from '@/lib/routes';

export default function Home() {
  return (
    <Template>
      <MainTemplate menuItems={mainPageRoutes}>
        <div className='border mb-3'>filter? selects?</div>
        <div className='border flex flex-col gap-5'>
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className='border w-fit px-2 py-3'>
              card
            </div>
          ))}
        </div>
      </MainTemplate>
    </Template>
  );
}
