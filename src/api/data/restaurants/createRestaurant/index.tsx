'use server';

import { createClient } from '@/utils/supabase/server';

const supabase = createClient();

export async function createRestaurant(prevState: unknown, formData: FormData) {
  try {
    const { name, description, formality, type } = Object.fromEntries(
      formData.entries()
    );

    const response = await supabase
      .from('restaurants')
      .insert({ name, description, formality, food_type: type });

    if (response.error) {
      return {
        message: `An error ocurred while creating a restaurant. ${response.error.message}`,
      };
    }

    return {
      message: 'Restaurant created successfully!',
      ...response,
    };
  } catch (e: unknown) {
    console.log('request failed', e);
  }
}
