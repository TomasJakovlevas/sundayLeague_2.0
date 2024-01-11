import { MainTemplate } from '@/components/Templates/MainTemplate';
import { Template } from '@/components/Templates/Template';
import { groupRoutes } from '@/lib/routes';

const page = () => {
  return (
    <Template>
      <MainTemplate menuItems={groupRoutes}>Groups</MainTemplate>
    </Template>
  );
};

export default page;
