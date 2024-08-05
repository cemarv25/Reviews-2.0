import CreateReviewForm from '@/components/forms/createReview';
import { Restaurant } from '@/types/tables';
import { createClient } from '@/utils/supabase/server';

const CreateReview = async () => {
  const supabase = createClient();
  const { data: restaurants } = await supabase
    .from('restaurants')
    .select()
    .order('name')
    .returns<Restaurant[]>();
  const restaurantsArray =
    restaurants?.map((restaurant) => restaurant.name) ?? [];
  return <CreateReviewForm restaurants={restaurantsArray} />;
};

export default CreateReview;
