'use server';

import { createClient } from '@/utils/supabase/server';

export async function register(prevState: unknown, formData: FormData) {
  try {
    const supabase = createClient();
    const email = formData.get('email')?.toString() ?? '';
    const password = formData.get('password')?.toString() ?? '';
    const signUpResponse = await supabase.auth.signUp({ email, password });

    if (signUpResponse.error) {
      return {
        message: `An error ocurred while creating the user. ${signUpResponse.error.message}`,
      };
    }

    return {
      message: 'User created successfully!',
      data: { user: signUpResponse.data.user },
    };
  } catch (e: unknown) {
    console.log('request failed ', e);
  }
}
