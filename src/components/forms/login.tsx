'use client';
import { login } from '@/api/auth/login';
import { useActionState } from 'react';
import Input from '../ui/Input';
import FormCTA from './formCTA';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/auth';

const LoginForm = () => {
  const router = useRouter();
  const { setUser } = useAuth();
  const [state, formAction] = useActionState(login, {
    message: '',
    data: null,
  });

  useEffect(() => {
    if (state?.message === 'User logged in successfully!') {
      router.push('/');
      if (state.data && state.data.user) {
        setUser(state.data.user);
      }
    }
  }, [state]);

  return (
    <form
      action={formAction}
      className="flex flex-col box-border border-zinc-500 rounded-lg"
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
