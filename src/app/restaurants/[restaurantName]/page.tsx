'use server';

import RestaurantDetails from '@/components/restaurants/details/RestaurantDetails';
import { Restaurant } from '@/types/tables';
import { createClient } from '@/utils/supabase/server';

const RestaurantDetailsPage = async ({
  params,
}: {
  params: { restaurantName: string };
}) => {
  const supabase = createClient();
  const { restaurantName } = params;
  const { data: restaurants } = await supabase
    .from('restaurants')
    .select()
    .eq('name', decodeURIComponent(restaurantName))
    .returns<Restaurant[]>();

  const restaurant = restaurants?.[0];

  if (!restaurant) {
    throw new Error(
      'The requested restaurant could not be found, please try again.'
    );
  }

  return <RestaurantDetails restaurant={restaurant} />;
};

export default RestaurantDetailsPage;
