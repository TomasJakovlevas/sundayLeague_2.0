import { MainTemplate } from '@/components/Templates/MainTemplate';
import { Template } from '@/components/Templates/Template';
import { mainPageRoutes } from '@/lib/routes';

export default function Home() {
  return (
    <Template>
      <MainTemplate menuItems={mainPageRoutes}>va</MainTemplate>
    </Template>
  );
}
