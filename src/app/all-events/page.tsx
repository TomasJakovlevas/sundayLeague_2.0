import { MainTemplate } from '@/components/Templates/MainTemplate';
import { Template } from '@/components/Templates/Template';
import { mainPageRoutes } from '@/lib/routes';

const page = () => {
  return (
    <Template>
      <MainTemplate menuItems={mainPageRoutes}>All events</MainTemplate>
    </Template>
  );
};

export default page;
