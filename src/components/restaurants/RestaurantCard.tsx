'use server';

import { Restaurant } from '@/types/tables';
import { calculateGradeTextColor } from '@/utils';
import {
  Card,
  CardHeader,
  CardBody,
  Chip,
  CardFooter,
} from '@nextui-org/react';

type RestaurantCardProps = {
  restaurant: Restaurant;
};

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const gradeTextColor = calculateGradeTextColor(restaurant.grade ?? 0);
  const { name, grade, description, food_type, formality } = restaurant;

  return (
    <Card>
      <CardHeader className="flex justify-between">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-slate-500">
          <span className={gradeTextColor}>{grade}</span> / 100
        </p>
      </CardHeader>
      <CardBody>{description}</CardBody>
      <CardFooter className="flex gap-2">
        <Chip>{food_type}</Chip>
        <Chip>{formality}</Chip>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
