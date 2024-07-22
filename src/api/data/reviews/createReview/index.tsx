'use server';

import { Restaurant } from '@/types/tables';
import { createClient } from '@/utils/supabase/server';

const supabase = createClient();

export async function createReview(prevState: unknown, formData: FormData) {
  try {
    const { restaurant, cost, service, taste, place, variety, value, comment } =
      Object.fromEntries(formData.entries());

    const restaurantResponse = await supabase
      .from('restaurants')
      .select()
      .eq('name', restaurant)
      .returns<Restaurant[]>();

    if (restaurantResponse.error) {
      return {
        message: `An error ocurred while creating the review. ${restaurantResponse.error.message}`,
      };
    }

    if (!restaurantResponse.data?.[0]) {
      return {
        message:
          'There was no restaurant found with that name, try with an existing restaurant.',
      };
    }

    const { id: restaurantId } = restaurantResponse.data[0];
    const response = await supabase.from('restaurant_reviews').insert({
      restaurantId,
      cost,
      service,
      taste,
      place,
      variety,
      value,
      comment,
    });

    if (response.error) {
      console.log(response.error);
      return {
        message: `An error ocurred while creating the review. ${response.error.message}`,
      };
    }

    return {
      message: 'Review created successfully!',
      restaurantName: restaurant.toString(),
    };
  } catch (e: unknown) {
    console.error('request failed', e);
  }
}
