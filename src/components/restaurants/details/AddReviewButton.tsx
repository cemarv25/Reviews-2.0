'use client';
import { useAuth } from '@/contexts/auth';
import AddIcon from '@/icons/Add';
import Link from 'next/link';

type AddReviewButtonProps = {
  restaurantName: string;
};

const AddReviewButton = ({ restaurantName }: AddReviewButtonProps) => {
  const { user } = useAuth();
  if (!user) {
    return null;
  }

  const url = `/reviews/create?restaurant=${encodeURIComponent(
    restaurantName
  )}`;
  return (
    <Link
      href={url}
      className="inline-flex justify-center items-center bg-primary hover:bg-primary/90 disabled:opacity-50 px-4 py-2 rounded-md focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 h-10 font-medium text-primary-foreground text-sm whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none"
    >
      <span className="md:block hidden pr-1">Add Review</span>
      <AddIcon type="outlined" />
    </Link>
  );
};

export default AddReviewButton;
