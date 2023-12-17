import { Template } from '@/components/Template/Template';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <Template>
      <section>
        <p>Hello</p>
        <UserButton afterSignOutUrl='http://localhost:3000/sing-in' />
      </section>
    </Template>
  );
}
