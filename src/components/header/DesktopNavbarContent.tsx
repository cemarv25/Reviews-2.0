'use client';

import useIsMobile from '@/hooks/useIsMobile';
import { usePathname } from 'next/navigation';
import { NavbarContent, NavbarItem } from './Navbar';
import Link from 'next/link';
import AuthButtons from './AuthButtons';

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

export default DesktopNavbarContent;
