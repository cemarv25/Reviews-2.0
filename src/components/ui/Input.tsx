import { cn } from '@/lib/utils';

type InputProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  labelId?: string;
  customClasses?: string;
};

const Input = ({
  name,
  label,
  placeholder,
  type,
  labelId,
  customClasses,
}: InputProps) => {
  return (
    <div
      className={cn(
        'w-full inline-flex shadow-sm px-3 bg-zinc-900 rounded-md flex-col items-start justify-center gap-0 transition-all outline-none h-14 py-2 hover:bg-zinc-800',
        customClasses
      )}
    >
      <label
        className="block font-medium text-foreground-600 text-xs transition-all !duration-200"
        htmlFor={name}
        id={labelId ?? `input-label-${name}`}
      >
        {label}
      </label>
      <input
        className="w-full h-full font-base !bg-transparent outline-none placeholder:text-foreground-500 text-small"
        aria-label={label}
        aria-labelledby={labelId ?? `input-label-${name}`}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Input;
