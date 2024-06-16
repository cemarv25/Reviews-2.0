'use server';

import { createClient } from '@/utils/supabase/server';

const supabase = createClient();

export async function login(prevState: unknown, formData: FormData) {
  try {
    const email = formData.get('email')?.toString() ?? '';
    const password = formData.get('password')?.toString() ?? '';
    const loginResponse = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginResponse.error) {
      return {
        message: `An error ocurred while logging in. ${loginResponse.error.message}`,
        data: null,
      };
    }

    return {
      message: 'User logged in successfully!',
      data: { user: loginResponse.data.user },
    };
  } catch (e: unknown) {
    console.log('request failed ', e);
  }
}
