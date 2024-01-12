import { MainTemplate } from '@/components/Templates/MainTemplate';
import { Template } from '@/components/Templates/Template';
import { myGamesRoutes } from '@/lib/routes';

export default function Page() {
  return (
    <Template>
      <MainTemplate menuItems={myGamesRoutes}>
        <div>
          <div className='border w-fit p-3 rounded-small'>
            <div>Date: Input</div>
            <div>Type: Input</div>
            <div>Place: Input</div>
            <div>Players: Input</div>
            <div>Players: Input</div>
            <div>Price: Input</div>
            <div>Price: Input</div>
            <div>Price: Input</div>
          </div>
        </div>
      </MainTemplate>
    </Template>
  );
}
