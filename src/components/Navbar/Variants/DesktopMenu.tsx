import { LinkType } from '@/types';
import { useClerk, useUser } from '@clerk/nextjs';
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

type DesktopMenuProps = {
  routes: LinkType[];
};

export const DesktopMenu = ({ routes }: DesktopMenuProps) => {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <NavbarContent className='hidden sm:flex gap-6' justify='center'>
      {routes.map((item, index) => (
        <NavbarItem
          key={`${item.title}-${index}`}
          isActive={item.route.split('')[1] === pathname.split('')[1]}
        >
          <Link href={item.route}>{item.title}</Link>
        </NavbarItem>
      ))}

      {!isSignedIn ? (
        <NavbarItem>
          <Button
            variant='ghost'
            color='primary'
            onClick={() => router.push('/sign-in')}
          >
            Sign in
          </Button>
        </NavbarItem>
      ) : (
        <Dropdown>
          <DropdownTrigger>
            <Avatar
              name={user.firstName || ''}
              src={user.imageUrl || undefined}
              showFallback
              className='cursor-pointer'
              isBordered
              color='primary'
            />
          </DropdownTrigger>
          <DropdownMenu variant='bordered'>
            <DropdownItem color='primary'>
              <Link href={'/settings'}>Settings</Link>
            </DropdownItem>
            <DropdownItem
              onClick={() => signOut(() => router.push('/'))}
              className='text-danger'
              color='danger'
            >
              Log out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )}
    </NavbarContent>
  );
};
