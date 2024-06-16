'use server';

import { Restaurant } from '@/types/tables';
import { calculateGradeTextColor } from '@/utils';
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/ui/Card';
import { Badge } from '@/ui/Badge';
import { cn } from '@/lib/utils';

type RestaurantCardProps = {
  restaurant: Restaurant;
};

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const gradeTextColor = calculateGradeTextColor(restaurant.grade ?? 0);
  const { name, grade, description, food_type, formality } = restaurant;

  return (
    <Card>
      <CardHeader className="flex justify-between">
        <CardTitle className="text-lg font-bold">{name}</CardTitle>
        <CardDescription className={cn('text-slate-500', gradeTextColor)}>
          {grade} / 100
        </CardDescription>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter className="flex gap-2">
        <Badge>{food_type}</Badge>
        <Badge>{formality}</Badge>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
