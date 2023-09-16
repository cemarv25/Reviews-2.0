'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';

const Header = () => {
  const pathname = usePathname();
  return (
    <Navbar isBordered className="py-2">
      <NavbarBrand>
        <Link href="/" as={NextLink} className="font-bold text-4xl">
          Reviews
        </Link>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Link
            href="/restaurants"
            size="lg"
            as={NextLink}
            underline={pathname === '/restaurants' ? 'always' : 'none'}
            isBlock
          >
            Restaurants
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/dishes"
            size="lg"
            as={NextLink}
            underline={pathname === '/dishes' ? 'always' : 'none'}
            isBlock
          >
            Dishes
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <NavbarItem>
          <Button variant="light" color="primary">
            Log In
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button variant="ghost" color="primary">
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
