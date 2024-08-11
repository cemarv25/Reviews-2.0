import Link from 'next/link';
import { Navbar, NavbarBrand } from './Navbar';
import dynamic from 'next/dynamic';

const MobileNavbarContent = dynamic(() => import('./MobileNavbarContent'), {
  ssr: false,
});
const DesktopNavbarContent = dynamic(() => import('./DesktopNavbarContent'), {
  ssr: false,
});

const Header = () => {
  return (
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
};

export default Header;
