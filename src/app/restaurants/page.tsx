'use server';

import { createClient } from '@/utils/supabase/server';

const Restaurants = async () => {
  const supabase = createClient();
  const { data: restaurants } = await supabase.from('restaurants').select();
  return (
    <>
      <h1>Restaurants</h1>
      <p>In the Restaurants page</p>
      <pre>{JSON.stringify(restaurants)}</pre>
    </>
  );
};

export default Restaurants;
