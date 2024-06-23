'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AuthButtons from './AuthButtons';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from './Navbar';

const Header = () => {
  const pathname = usePathname();
  return (
    <Navbar isBordered className="py-2">
      <NavbarBrand>
        <Link href="/" className="font-bold text-4xl">
          Reviews
        </Link>
      </NavbarBrand>
      <NavbarContent>
        <NavbarItem>
          <Link
            href="/restaurants"
            className={`text-2xl underline decoration-transparent  transition-colors ${
              pathname.includes('/restaurants')
                ? 'text-primary hover:decoration-primary'
                : 'hover:decoration-primary-foreground'
            } `}
          >
            Restaurants
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/dishes"
            className={`text-2xl underline decoration-transparent  transition-colors ${
              pathname.includes('/dishes')
                ? 'text-primary hover:decoration-primary'
                : 'hover:decoration-primary-foreground'
            } `}
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
