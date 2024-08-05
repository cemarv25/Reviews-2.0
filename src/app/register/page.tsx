import RegisterForm from '@/components/forms/register';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register',
  description:
    'Register now to Reviews to be able to create reviews for your favorite restaurants!',
};

const Register = async () => {
  return (
    <div className="lg:px-32 lg:py-10 p-10">
      <RegisterForm />
    </div>
  );
};

export default Register;
