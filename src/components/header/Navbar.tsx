import { cn } from '@/lib/utils';

type NavbarBrandProps = {
  children: React.ReactNode;
};

export const NavbarBrand = ({ children }: NavbarBrandProps) => {
  return (
    <div className="box-border flex flex-row flex-nowrap justify-start items-center bg-transparent text-medium no-underline whitespace-nowrap basis-0">
      {children}
    </div>
  );
};

type NavbarContentProps = {
  className?: string;
  children: React.ReactNode;
};

export const NavbarContent = ({ className, children }: NavbarContentProps) => {
  return (
    <ul
      className={cn(
        'h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 gap-4',
        className
      )}
    >
      {children}
    </ul>
  );
};

type NavbarItemProps = {
  children: React.ReactNode;
};

export const NavbarItem = ({ children }: NavbarItemProps) => {
  return (
    <li className="box-border data-[active=true]:font-semibold text-medium whitespace-nowrap list-none">
      {children}
    </li>
  );
};

type NavbarProps = {
  isBordered: boolean;
  className: string;
  children: React.ReactNode;
};

export const Navbar = ({ isBordered, className, children }: NavbarProps) => {
  return (
    <nav
      className={cn(
        'z-40 w-full h-auto flex justify-center sticky top-0 inset-x-0 backdrop-blur-lg backdrop-saturate-150 bg-background/70',
        isBordered && 'border-b border-divider',
        className
      )}
    >
      <header className="relative z-40 flex flex-row flex-nowrap justify-between items-center gap-4 px-6 w-full max-w-[1024px] h-[var(--navbar-height)]">
        {children}
      </header>
    </nav>
  );
};
