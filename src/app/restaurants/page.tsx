'use server';

import RestaurantCard from '@/components/restaurants/RestaurantCard';
import { Restaurant } from '@/types/tables';
import { createClient } from '@/utils/supabase/server';

const supabase = createClient();

const Restaurants = async () => {
  const { data: restaurants } = await supabase
    .from('restaurants')
    .select()
    .returns<Restaurant[]>();
  return (
    <div className="p-10 lg:px-32 lg:py-10">
      <h1 className="text-2xl font-bold">Restaurants</h1>
      <p className="py-10 text-lg">
        Take a look at the Restaurants that have been reviewed!
      </p>
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {restaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </main>
    </div>
  );
};

export default Restaurants;
