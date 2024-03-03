'use client';

import { useAuth } from '@/contexts/auth';
import {
  Button,
  Link,
  NavbarContent,
  NavbarItem,
  Spinner,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';

const LoggedInButtons = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.refresh();
  };

  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Button variant="light" color="primary">
            User
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu aria-label="Profile Actions">
        <DropdownItem textValue="Go to your Profile">
          <Link href="/profile" as={NextLink}>
            Go to your Profile
          </Link>
        </DropdownItem>
        <DropdownItem textValue="Log out ">
          <Button variant="ghost" color="primary" onClick={handleLogout}>
            Log Out
          </Button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

const LoggedOutButtons = () => {
  return (
    <>
      <NavbarItem>
        <Link href="/login" as={NextLink}>
          <Button variant="light" color="primary">
            Log In
          </Button>
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="/register" as={NextLink}>
          <Button variant="ghost" color="primary">
            Register
          </Button>
        </Link>
      </NavbarItem>
    </>
  );
};

const AuthButtons = () => {
  const { user, loading } = useAuth();
  return (
    <NavbarContent justify="end">
      {loading && <Spinner />}
      {!loading && !user && <LoggedOutButtons />}
      {!loading && user && <LoggedInButtons />}
    </NavbarContent>
  );
};

export default AuthButtons;
