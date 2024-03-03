import { Spinner } from '@nextui-org/react';

type ButtonProps = {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
};

const Button = ({
  onClick,
  type,
  disabled = false,
  children,
  loading = false,
}: ButtonProps) => {
  return (
    <button
      type={type ?? 'button'}
      onClick={onClick}
      disabled={disabled}
      className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none bg-default text-default-foreground"
    >
      {children}
      {loading && <Spinner />}
    </button>
  );
};

export default Button;
