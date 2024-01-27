import { LinkType } from '@/types';
import { useClerk, useUser } from '@clerk/nextjs';
import {
  Button,
  Divider,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type MobileMenuProps = {
  menuIsOpen: boolean;
  routes: LinkType[];
};

export const MobileMenu = ({ menuIsOpen, routes }: MobileMenuProps) => {
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <NavbarMenuToggle
        aria-label={menuIsOpen ? 'Close menu' : 'Open menu'}
        className='sm:hidden'
      />
      <NavbarMenu className='gap-8'>
        {routes.map((item, index) => (
          <NavbarMenuItem
            key={`${item.title}-${index}`}
            isActive={item.route.split('')[1] === pathname.split('')[1]}
          >
            <Link className='w-full' href={item.route}>
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
        <Divider />

        {!isSignedIn ? (
          <NavbarMenuItem>
            <Button
              variant='ghost'
              color='primary'
              onClick={() => router.push('/sign-in')}
            >
              Sign in
            </Button>
          </NavbarMenuItem>
        ) : (
          <>
            <NavbarMenuItem>
              <Link href={'/settings'}>Settings</Link>
            </NavbarMenuItem>
            <NavbarMenuItem
              onClick={() => signOut(() => router.push('/'))}
              className='text-danger'
            >
              Log out
            </NavbarMenuItem>
          </>
        )}
      </NavbarMenu>
    </>
  );
};
