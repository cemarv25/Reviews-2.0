import Button from '@/components/ui/Button';
import AddReviewButton from './AddReviewButton';

type ReviewHistoryProps = {
  restaurantName: string;
};

const RestaurantReviewHistory = ({ restaurantName }: ReviewHistoryProps) => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold">Review History</h2>
        <AddReviewButton restaurantName={restaurantName} />
      </div>
      <p>Coming soon!</p>
    </>
  );
};

export default RestaurantReviewHistory;
