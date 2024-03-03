'use server';
import RegisterForm from '@/components/forms/register';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

const supabase = createClient();

const Register = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect('/');
  }

  return (
    <div className="p-10 lg:px-32 lg:py-10">
      <RegisterForm />
    </div>
  );
};

export default Register;
