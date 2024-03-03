'use client';
import { login } from '@/api/auth/login';
import { useFormState } from 'react-dom';
import Input from '../input';
import FormCTA from './formCTA';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(login, {
    message: null,
  });

  useEffect(() => {
    if (state.message === 'User logged in successfully!') {
      router.push('/');
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="flex flex-col box-border bg-content1 shadow-medium rounded-large"
    >
      <h1 className="flex w-full justify-start items-center rounded-t-large p-5">
        Welcome back! Login with your credentials
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
        <FormCTA text="Login" />
      </section>
    </form>
  );
};

export default LoginForm;
