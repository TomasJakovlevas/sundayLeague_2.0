import { MainTemplate } from '@/components/Templates/MainTemplate';
import { Template } from '@/components/Templates/Template';
import { myGamesRoutes } from '@/lib/routes';

export default function Page() {
  return (
    <Template>
      <MainTemplate menuItems={myGamesRoutes}>
        <div>CREATE GAME FORM</div>
      </MainTemplate>
    </Template>
  );
}
