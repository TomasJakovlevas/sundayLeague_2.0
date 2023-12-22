import { Template } from '@/components/Templates/Template';
import { currentUser } from '@clerk/nextjs';

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <Template>
      <div>DASHBOARD, hello {user?.firstName}</div>
    </Template>
  );
}
