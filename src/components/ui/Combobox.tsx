import { cn } from '@/lib/utils';
import UpDownSelector from './icons/UpDownSelector';
import Search from './icons/Search';
import {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

const keysToHandle = ['Enter', 'ArrowUp', 'ArrowDown'];
const OPTION_HEIGHT = 30;
const MAX_OPTIONS = 5;
const OPTIONS_CONTAINER_PADDING = 4;

type ComboboxProps = {
  name: string;
  label: string;
  labelId?: string;
  values: string[];
  placeholder: string;
  defaultSelectedValue: string | null;
};

const Combobox = ({
  name,
  label,
  labelId,
  values,
  placeholder,
  defaultSelectedValue,
}: ComboboxProps) => {
  const [showOptions, setShowOptions] = useState(false);
  const [options, setOptions] = useState(values);
  const [cursor, setCursor] = useState<number>();
  const optionsContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const selectOption = (position?: number) => {
    const option = options.at(position ?? cursor!);
    const input = inputRef.current;
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value'
    )?.set;
    nativeInputValueSetter?.call(input, option ?? '');

    input?.dispatchEvent(new Event('input', { bubbles: true }));
    handleInputBlur();
  };

  const highlightOption = (position: number) => {
    if (!optionsContainerRef.current?.hasChildNodes) {
      return;
    }

    for (let i = 0; i < optionsContainerRef.current.children.length; i++) {
      const option = optionsContainerRef.current.children.item(
        i
      ) as HTMLDivElement;
      if (i === position) {
        option.style.backgroundColor = 'rgb(39 39 42 / var(--tw-bg-opacity))';
      } else {
        option.style.backgroundColor = '';
      }
    }
  };

  const filterOptions = (value: string) => {
    let filteredOptions = [...values];
    if (value) {
      filteredOptions = filteredOptions.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase())
      );
    }
    setOptions(filteredOptions);
  };

  const resizeOptionsContainer = () => {
    let totalHeight;
    if (options.length > 6) {
      totalHeight =
        OPTION_HEIGHT * MAX_OPTIONS +
        OPTIONS_CONTAINER_PADDING * 2 +
        OPTION_HEIGHT / 2;
    } else {
      totalHeight =
        OPTION_HEIGHT * options.length +
        OPTIONS_CONTAINER_PADDING * 2 +
        OPTION_HEIGHT / 2;
    }

    optionsContainerRef.current &&
      (optionsContainerRef.current.style.height = `${totalHeight}px`);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    filterOptions(value);
  };

  const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!keysToHandle.includes(event.key)) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();

    if (event.key === 'Enter' && cursor != null) {
      selectOption();
    }

    if (event.key === 'ArrowUp') {
      if (!cursor) {
        setCursor(options.length - 1);
        return;
      }

      setCursor(cursor - 1);
      return;
    }

    if (event.key === 'ArrowDown') {
      if (cursor == null || cursor === options.length - 1) {
        setCursor(0);
        return;
      }

      setCursor(cursor + 1);
    }
  };

  const handleInputFocus = (event: FocusEvent<HTMLInputElement>) => {
    setShowOptions(true);
    filterOptions(event.target.value);
  };

  const handleInputBlur = () => {
    setShowOptions(false);
    setCursor(undefined);

    optionsContainerRef.current &&
      (optionsContainerRef.current.style.height = '');
    setTimeout(() => inputRef.current?.blur(), 400);
  };

  const handleOptionClick = (event: MouseEvent<HTMLDivElement>) => {
    const position = options.findIndex(
      (option) => option === (event.target as HTMLDivElement).textContent
    );
    selectOption(position);
  };

  useEffect(() => {
    if (showOptions) {
      resizeOptionsContainer();
    }
  }, [options, showOptions]);

  useEffect(() => {
    if (showOptions && cursor != null) {
      highlightOption(cursor);
    }
  }, [cursor, showOptions]);

  useEffect(() => {
    if (inputRef.current && defaultSelectedValue) {
      inputRef.current.value = defaultSelectedValue;
    }
  }, [defaultSelectedValue, inputRef.current]);

  return (
    <div>
      <div
        className={cn(
          'w-full inline-flex shadow-sm px-3 bg-zinc-900 rounded-md flex-col items-start justify-center transition-all outline-none py-3 hover:bg-zinc-800',
          showOptions && 'rounded-b-none'
        )}
      >
        <label
          className="block font-medium text-foreground-600 text-xs transition-all !duration-200 mb-1"
          htmlFor={name}
          id={labelId ?? `input-label-${name}`}
        >
          {label}
        </label>
        <div className="flex w-full gap-2 transition-all">
          <Search height={20} width={20} />
          <input
            className="w-full h-full font-base !bg-transparent outline-none placeholder:text-foreground-500 text-small"
            aria-label={label}
            aria-labelledby={labelId ?? `combobox-label-${name}`}
            id={name}
            name={name}
            placeholder={placeholder}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            ref={inputRef}
          />
          <UpDownSelector height={20} width={20} />
        </div>
      </div>
      <div
        className={cn(
          'flex flex-col w-full transition-all delay-100 duration-300 overflow-scroll top-8 bg-zinc-900 justify-center',
          !showOptions && 'h-0'
        )}
        ref={optionsContainerRef}
      >
        {options.map((value) => (
          <div
            key={value}
            className="py-[3px] pl-6 hover:bg-zinc-800 hover:cursor-pointer"
            onClick={handleOptionClick}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Combobox;
