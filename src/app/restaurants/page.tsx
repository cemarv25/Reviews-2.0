'use server';

import CreateRestaurantButton from '@/components/restaurants/CreateRestaurantButton';
import RestaurantCard from '@/components/restaurants/RestaurantCard';
import Title from '@/components/ui/Title';
import { Restaurant } from '@/types/tables';
import { createClient } from '@/utils/supabase/server';

const Restaurants = async () => {
  const supabase = createClient();
  const { data: restaurants } = await supabase
    .from('restaurants')
    .select()
    .returns<Restaurant[]>();
  return (
    <>
      <Title text="Restaurants" />
      <div className="flex justify-between items-center">
        <p className="py-10 text-lg">
          Take a look at the Restaurants that have been reviewed!
        </p>
        <CreateRestaurantButton />
      </div>
      <main className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {restaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </main>
    </>
  );
};

export default Restaurants;
