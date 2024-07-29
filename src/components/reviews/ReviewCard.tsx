'use server';
import { RestaurantReview } from '@/types/tables';
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardLink,
  CardTitle,
} from '@/ui/Card';
import { Badge } from '../ui/Badge';
import { calculateGradeTextColor } from '@/utils';
import { cn } from '@/lib/utils';

const ReviewCard = ({
  comment,
  title,
  cost,
  place,
  value,
  variety,
  service,
  taste,
}: RestaurantReview) => {
  const totalAvg = Math.round(
    ((cost ?? 0) +
      (place ?? 0) +
      (value ?? 0) +
      (variety ?? 0) +
      (service ?? 0) +
      (taste ?? 0)) /
      6
  );
  const totalAvgTextColor = calculateGradeTextColor(totalAvg);

  return (
    <CardLink
      linkProps={{ href: '#' }}
      cardProps={{ className: 'h-full flex flex-col justify-between' }}
    >
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="font-bold text-lg">{title}</CardTitle>
        <CardDescription
          className={cn('text-slate-500 min-w-[60px]', totalAvgTextColor)}
        >
          {totalAvg} / 100
        </CardDescription>
      </CardHeader>
      <CardContent>{comment}</CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        <Badge>Taste: {taste ?? 0}</Badge>
        <Badge>Cost: {cost ?? 0}</Badge>
        <Badge>Service: {service ?? 0}</Badge>
        <Badge>Value: {value ?? 0}</Badge>
        <Badge>Place: {place ?? 0}</Badge>
        <Badge>Variety: {variety ?? 0}</Badge>
      </CardFooter>
    </CardLink>
  );
};

export default ReviewCard;
