'use client';

import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';
import AuthButtons from './AuthButtons';

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
      <AuthButtons />
    </Navbar>
  );
};

export default Header;
