type InputProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  labelId?: string;
};

const Input = ({ name, label, placeholder, type, labelId }: InputProps) => {
  return (
    <div className="w-full inline-flex shadow-sm px-3 bg-default-100 rounded-medium flex-col items-start justify-center gap-0 transition-background outline-none h-14 py-2 hover:bg-default-200">
      <label
        className="block font-medium text-foreground-600 text-tiny transition-all !duration-200"
        htmlFor={name}
        id={labelId || `input-label-${name}`}
      >
        {label}
      </label>
      <input
        className="w-full h-full font-normal !bg-transparent outline-none placeholder:text-foreground-500 text-small"
        aria-label={label}
        aria-labelledby={labelId || `input-label-${name}`}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};

export default Input;
