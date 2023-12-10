import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <>
      <p>Hello</p>
      <UserButton afterSignOutUrl='http://localhost:3000/sing-in' />
    </>
  );
}
