import { MainTemplate } from '@/components/Templates/MainTemplate';
import { Template } from '@/components/Templates/Template';
import { mainPageRoutes } from '@/lib/routes';

const page = () => {
  return (
    <Template>
      <MainTemplate menuItems={mainPageRoutes}>Upcoming games</MainTemplate>
    </Template>
  );
};

export default page;
