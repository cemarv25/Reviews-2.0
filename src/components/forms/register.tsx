'use client';
import { register } from '@/api/auth/register';
import { useActionState } from 'react';
import Input from '../ui/Input';
import FormCTA from './formCTA';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const router = useRouter();
  const [state, formAction] = useActionState(register, {
    message: '',
  });

  useEffect(() => {
    if (state?.message === 'User created successfully!') {
      router.push('/');
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="flex flex-col box-border bg-content1 shadow-medium rounded-large"
    >
      <h1 className="flex w-full justify-start items-center rounded-t-large p-5">
        Join Reviews now!
      </h1>
      <fieldset className="flex w-full p-5 flex-auto flex-col h-auto gap-4">
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          labelId="email-label"
          name="email"
        />
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
          labelId="password-label"
          name="password"
        />
      </fieldset>
      <section className="h-auto flex w-full items-center rounded-b-large p-5">
        <FormCTA text="Register" />
      </section>
    </form>
  );
};

export default RegisterForm;
