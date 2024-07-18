'use server';

import Title from '@/components/ui/Title';
import { cn } from '@/lib/utils';
import { Restaurant } from '@/types/tables';
import { calculateGradeTextColor } from '@/utils';
import RestaurantReviewHistory from './ReviewHistory';
import AttributeList from './AttributeList';

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
      <div className="w-full h-[1px] bg-gray-700 my-3" />
      <div className="flex gap-3 items-stretch min-h-[50vh]">
        <p className="w-3/4">{description}</p>
        <div className="w-[1px] bg-gray-700" />
        <AttributeList {...otherAttributes} />
      </div>
      <div className="w-full h-[1px] bg-gray-700 my-3" />
      <RestaurantReviewHistory />
    </>
  );
};

export default RestaurantDetails;
