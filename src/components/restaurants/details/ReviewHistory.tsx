import { createClient } from '@/utils/supabase/server';
import AddReviewButton from './AddReviewButton';
import { RestaurantReview } from '@/types/tables';
import ReviewCard from '@/components/reviews/ReviewCard';
import Link from 'next/link';

type ReviewHistoryProps = {
  restaurantName: string;
  restaurantId: string;
};

const RestaurantReviewHistory = async ({
  restaurantName,
  restaurantId,
}: ReviewHistoryProps) => {
  const supabase = createClient();
  const { data: reviewsData, error } = await supabase
    .from('restaurant_reviews')
    .select()
    .eq('restaurantId', restaurantId)
    .returns<RestaurantReview[]>();

  if (error) {
    throw `There was a problem getting ${restaurantName}'s reviews. Please try again`;
  }

  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center gap-5">
          <h2 className="font-bold text-3xl">Review History</h2>
          <Link href="#">View all</Link>
        </div>
        <AddReviewButton restaurantName={restaurantName} />
      </div>
      <div className="gap-3 grid grid-cols-3 my-3">
        {reviewsData.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </>
  );
};

export default RestaurantReviewHistory;
