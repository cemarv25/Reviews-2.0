import AddIcon from '@/icons/Add';
import Link from 'next/link';

type AddReviewButtonProps = {
  restaurantName: string;
};

const AddReviewButton = ({ restaurantName }: AddReviewButtonProps) => {
  const url = `/reviews/create?restaurant=${encodeURIComponent(
    restaurantName
  )}`;
  return (
    <Link
      href={url}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
    >
      <span className="pr-1">Add Review</span>
      <AddIcon type="outlined" />
    </Link>
  );
};

export default AddReviewButton;
