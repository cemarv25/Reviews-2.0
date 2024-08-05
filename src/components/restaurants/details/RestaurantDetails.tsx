'use server';

import Title from '@/components/ui/Title';
import { cn } from '@/lib/utils';
import { Restaurant } from '@/types/tables';
import { calculateGradeTextColor } from '@/utils';
import RestaurantReviewHistory from './ReviewHistory';
import AttributeList from './AttributeList';
import { Suspense } from 'react';
import ReviewHistorySkeleton from '@/components/ui/icons/skeletons/ReviewHistorySkeleton';

type RestaurantDetailsProps = {
  restaurant: Restaurant;
};

const RestaurantDetails = ({ restaurant }: RestaurantDetailsProps) => {
  const { name, grade, description, ...otherAttributes } = restaurant;

  return (
    <>
      <div className="flex w-full">
        <Title text={name} customClasses="grow" />
        <p className={cn('text-5xl', calculateGradeTextColor(grade ?? 0))}>
          {grade}
        </p>
      </div>
      <div className="bg-gray-700 my-3 w-full h-[1px]" />
      <div className="flex items-stretch gap-3 min-h-[50vh]">
        <p className="w-3/4">{description}</p>
        <div className="bg-gray-700 w-[1px]" />
        <AttributeList {...otherAttributes} />
      </div>
      <div className="bg-gray-700 my-3 w-full h-[1px]" />
      <Suspense fallback={<ReviewHistorySkeleton />}>
        <RestaurantReviewHistory
          restaurantName={restaurant.name}
          restaurantId={restaurant.id}
        />
      </Suspense>
    </>
  );
};

export default RestaurantDetails;
