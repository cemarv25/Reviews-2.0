'use server';

import RestaurantDetails from '@/components/restaurants/details/RestaurantDetails';
import { Restaurant } from '@/types/tables';
import { createClient } from '@/utils/supabase/server';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata(
  { params }: { params: { restaurantName: string } },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const supabase = createClient();
  const { restaurantName } = params;
  const { data: restaurants } = await supabase
    .from('restaurants')
    .select()
    .eq('name', decodeURIComponent(restaurantName))
    .returns<Restaurant[]>();
  const restaurant = restaurants?.[0];

  if (!restaurant) {
    notFound();
  }

  return {
    title: `${restaurant.name} | Reviews`,
    description: `See all the info about ${restaurant.name} on Reviews.`,
  };
}

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
