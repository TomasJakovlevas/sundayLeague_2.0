import { currentUser } from '@clerk/nextjs';

export default async function DashboardPage() {
  const user = await currentUser();

  return <div>DASHBOARD, hello {user?.firstName}</div>;
}
