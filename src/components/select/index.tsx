import { ChangeEventHandler } from 'react';

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  name: string;
  label: string;
  options: Option[];
  className?: string;
  placeholder: string;
  labelId?: string;
  value?: string;
  onSelectionChange?: ChangeEventHandler<HTMLSelectElement>;
};

const Select = ({
  name,
  label,
  options,
  className,
  placeholder,
  labelId,
  value,
  onSelectionChange,
}: SelectProps) => {
  const selectProps = {
    ...(value && {
      value,
    }),
    ...(onSelectionChange && {
      onChange: onSelectionChange,
    }),
    className,
  };

  return (
    <div className="w-full inline-flex shadow-sm px-3 bg-default-100 rounded-medium flex-col items-start justify-center gap-0 transition-background outline-none h-14 py-2 hover:bg-default-200">
      <label
        className="block font-medium text-foreground-600 text-tiny transition-all !duration-200"
        htmlFor={name}
        id={labelId || `input-label-${name}`}
      >
        {label}
      </label>
      <select
        {...selectProps}
        aria-label={label}
        id={name}
        name={name}
        defaultValue=""
      >
        <option hidden>{placeholder}</option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
