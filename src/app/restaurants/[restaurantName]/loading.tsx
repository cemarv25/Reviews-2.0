import ReviewHistorySkeleton from '@/components/ui/skeletons/ReviewHistorySkeleton';
import { Skeleton } from '@/components/ui/Skeleton';

const RestaurantDetailsSkeleton = () => {
  return (
    <>
      <div className="flex justify-between mb-8">
        <Skeleton className="w-56 h-12" />
        <Skeleton className="w-12 h-12" />
      </div>
      <div className="bg-gray-700 my-3 w-full h-[1px]" />
      <div className="flex items-stretch gap-3 w-full min-h-[50vh]">
        <div className="w-3/4">
          <Skeleton className="my-2 h-6" />
          <Skeleton className="my-2 h-6" />
          <Skeleton className="my-2 h-6" />
          <Skeleton className="my-2 h-6" />
          <Skeleton className="my-2 h-6" />
          <Skeleton className="my-2 w-1/5 h-6" />
        </div>
        <div className="bg-gray-700 w-[1px]" />
        <div className="flex flex-col gap-3 w-1/6">
          <Skeleton className="my-1 h-6" />
          <Skeleton className="my-1 h-6" />
          <Skeleton className="my-1 h-6" />
          <Skeleton className="my-1 h-6" />
          <Skeleton className="my-1 h-6" />
        </div>
      </div>
      <div className="bg-gray-700 my-3 w-full h-[1px]" />
      <ReviewHistorySkeleton />
    </>
  );
};

export default RestaurantDetailsSkeleton;
