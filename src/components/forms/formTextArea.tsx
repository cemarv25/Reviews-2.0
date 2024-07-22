import React, { TextareaHTMLAttributes } from 'react';
import { Textarea } from '../ui/Textarea';

type FormTextareaProps = {
  label: string;
  name: string;
  placeholder: string;
  labelId?: string;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name' | 'placeholder'>;

const FormTextarea = ({
  placeholder,
  name,
  label,
  labelId,
}: FormTextareaProps) => {
  return (
    <div className="w-full">
      <label htmlFor={name} id={labelId ?? `${name}-textarea`}>
        {label}
      </label>
      <Textarea placeholder={placeholder} name={name} id={name} />
    </div>
  );
};

export default FormTextarea;
