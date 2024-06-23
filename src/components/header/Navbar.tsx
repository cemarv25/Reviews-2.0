type NavbarBrandProps = {
  children: React.ReactNode;
};

export const NavbarBrand = ({ children }: NavbarBrandProps) => {
  return (
    <div className="flex basis-0 flex-row flex-nowrap justify-start bg-transparent items-center no-underline text-medium whitespace-nowrap box-border">
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
      className={`h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 hidden sm:flex gap-4 ${className}`}
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
    <li className="text-medium whitespace-nowrap box-border list-none data-[active=true]:font-semibold">
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
      className={`z-40 w-full h-auto flex justify-center sticky top-0 inset-x-0 backdrop-blur-lg backdrop-saturate-150 bg-background/70 ${
        isBordered ? 'border-b border-divider' : ''
      } ${className}`}
    >
      <header className="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between h-[var(--navbar-height)] max-w-[1024px]">
        {children}
      </header>
    </nav>
  );
};
