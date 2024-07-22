import { Slider } from '@/ui/Slider';
import { useEffect, useState } from 'react';

type FormSliderProps = Omit<React.ComponentProps<typeof Slider>, 'name'> & {
  withRightValue?: boolean;
  withLeftValue?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  label: string;
  name: string;
  labelStyles?: string;
};

const FormSlider = ({
  label,
  withLeftValue,
  withRightValue,
  inputRef,
  name,
  labelStyles,
  ...props
}: FormSliderProps) => {
  const [value, setValue] = useState(props.defaultValue?.[0] ?? 0);

  useEffect(() => {
    const input = document.querySelector<HTMLInputElement>(
      `input[name="${name}"]`
    );
    if (input && inputRef) {
      inputRef.current = input;
    }
  }, [inputRef, name]);
  return (
    <div className="flex items-center gap-6">
      <label htmlFor={name} id={`${name}-label`} className={labelStyles}>
        {label}
      </label>
      {withLeftValue && (
        <div className="inline-flex flex-col justify-center items-start gap-0 bg-zinc-900 hover:bg-zinc-800 shadow-sm px-3 py-2 rounded-md w-12 transition-all outline-none">
          <input
            value={value}
            name={name}
            id={name}
            onChange={(e) => setValue(parseInt(e.target.value))}
            type="number"
            className="!bg-transparent w-full font-base text-small placeholder:text-foreground-500 outline-none"
          />
        </div>
      )}
      <Slider
        value={[value]}
        onValueChange={(value) => setValue(value[0])}
        {...props}
      />
      {withRightValue && (
        <div className="inline-flex flex-col justify-center items-start gap-0 bg-zinc-900 hover:bg-zinc-800 shadow-sm px-3 py-2 rounded-md w-12 transition-all outline-none">
          <input
            value={value}
            name={name}
            id={name}
            onChange={(e) => setValue(parseInt(e.target.value))}
            type="number"
            className="!bg-transparent w-full font-base text-small placeholder:text-foreground-500 outline-none"
          />
        </div>
      )}
    </div>
  );
};

export default FormSlider;
