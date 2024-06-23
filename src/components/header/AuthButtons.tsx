'use client';

import { useAuth } from '@/contexts/auth';
import Link from 'next/link';
import LoadingSpinner from '@/ui/LoadingSpinner';
import Button from '@/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/ui/DropdownMenu';
import { useRouter } from 'next/navigation';
import { NavbarContent, NavbarItem } from '@/components/header/Navbar';

const LoggedInButtons = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.refresh();
  };

  return (
    <DropdownMenu>
      <NavbarItem>
        <DropdownMenuTrigger>
          <Button size="sm">User</Button>
        </DropdownMenuTrigger>
      </NavbarItem>
      <DropdownMenuContent aria-label="Profile Actions">
        <DropdownMenuItem textValue="Go to your Profile">
          <Link href="/profile">Go to your Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem textValue="Log out ">
          <Button variant="ghost" size="sm" onClick={handleLogout}>
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const LoggedOutButtons = () => {
  return (
    <>
      <NavbarItem>
        <Link href="/login">
          <Button>Log In</Button>
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link href="/register">
          <Button variant="ghost">Register</Button>
        </Link>
      </NavbarItem>
    </>
  );
};

const AuthButtons = () => {
  const { user, loading } = useAuth();
  return (
    <NavbarContent className="justify-end">
      {loading && <LoadingSpinner />}
      {!loading && !user && <LoggedOutButtons />}
      {!loading && user && <LoggedInButtons />}
    </NavbarContent>
  );
};

export default AuthButtons;
