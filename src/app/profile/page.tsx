'use server';

import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

const supabase = createClient();

const Profile = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/');
  }

  return (
    <>
      <h1>In the Profile Page</h1>
    </>
  );
};

export default Profile;
