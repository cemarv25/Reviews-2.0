'use client';

import Link from 'next/link';
import AddIcon from '@/ui/icons/Add';
import { useAuth } from '@/contexts/auth';

const CreateRestaurantButton = () => {
  const { user } = useAuth();
  if (!user) {
    return null;
  }

  return (
    <Link
      href="/restaurants/create"
      className="inline-flex justify-center items-center bg-primary hover:bg-primary/90 disabled:opacity-50 px-4 py-2 rounded-md focus-visible:ring-2 focus-visible:ring-ring ring-offset-background focus-visible:ring-offset-2 h-10 font-medium text-primary-foreground text-sm whitespace-nowrap transition-colors focus-visible:outline-none disabled:pointer-events-none"
    >
      <span className="md:block hidden pr-1">Create a Restaurant</span>
      <AddIcon type="outlined" />
    </Link>
  );
};

export default CreateRestaurantButton;
