'use client';

import { buttonVariants } from '../ui/Button';
import Menu from '../ui/icons/Menu';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '../ui/Sheet';
import { usePathname } from 'next/navigation';
import { NavbarContent, NavbarItem } from './Navbar';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AuthButtons from './AuthButtons';

const MobileNavbarContent = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <NavbarContent className="sm:hidden">
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetTrigger className={buttonVariants({ variant: 'default' })}>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Welcome!</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 my-8">
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
          </div>
          <SheetFooter>
            <div className="flex">
              <AuthButtons className="flex sm:hidden" />
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </NavbarContent>
  );
};

export default MobileNavbarContent;
