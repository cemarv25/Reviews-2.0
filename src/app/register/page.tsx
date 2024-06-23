'use server';
import RegisterForm from '@/components/forms/register';

const Register = async () => {
  return (
    <div className="p-10 lg:px-32 lg:py-10">
      <RegisterForm />
    </div>
  );
};

export default Register;
