'use server';

import { Restaurant } from '@/types/tables';
import { calculateGradeTextColor } from '@/utils';
import {
  CardLink,
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
  const { name, grade, description, food_type, formality, id } = restaurant;

  return (
    <CardLink
      linkProps={{ href: `/restaurants/${name}` }}
      cardProps={{ className: 'h-full' }}
    >
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="font-bold text-lg">{name}</CardTitle>
        <CardDescription className={cn('text-slate-500', gradeTextColor)}>
          {grade} / 100
        </CardDescription>
      </CardHeader>
      <CardContent>{description}</CardContent>
      <CardFooter className="flex justify-self-end gap-2">
        <Badge>{food_type}</Badge>
        <Badge>{formality}</Badge>
      </CardFooter>
    </CardLink>
  );
};

export default RestaurantCard;
