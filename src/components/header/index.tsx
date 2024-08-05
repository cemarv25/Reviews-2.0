'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AuthButtons from './AuthButtons';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from './Navbar';
import MobileNavbarContent from './MobileNavbarContent';
import useIsMobile from '@/hooks/useIsMobile';

const DesktopNavbarContent = () => {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  if (isMobile) {
    return null;
  }

  return (
    <>
      <NavbarContent className="sm:flex hidden">
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
      <AuthButtons className="sm:flex hidden" />
    </>
  );
};

const Header = () => (
  <Navbar isBordered className="py-2">
    <NavbarBrand>
      <Link href="/" className="font-bold text-4xl">
        Reviews
      </Link>
    </NavbarBrand>
    <DesktopNavbarContent />
    <MobileNavbarContent />
  </Navbar>
);

export default Header;
