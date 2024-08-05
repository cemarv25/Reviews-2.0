import LoginForm from '@/components/forms/login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login at Reviews!',
};

const Login = async () => {
  return (
    <div className="lg:px-32 lg:py-10 p-10">
      <LoginForm />
    </div>
  );
};

export default Login;
