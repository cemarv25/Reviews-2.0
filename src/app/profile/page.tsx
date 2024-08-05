'use server';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Profile | Reviews',
  description: 'Manage your profile at Reviews.',
};

const Profile = async () => {
  return (
    <>
      <h1>In the Profile Page</h1>
    </>
  );
};

export default Profile;
