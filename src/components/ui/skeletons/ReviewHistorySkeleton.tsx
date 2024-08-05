import { Skeleton } from '../Skeleton';

const ReviewHistorySkeleton = () => {
  return (
    <div className="w-full">
      <div className="flex items-center w-full">
        <Skeleton className="w-52 h-9" />
        <Skeleton className="ml-5 w-20 h-6" />
      </div>
      <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-3">
        <Skeleton color="card" className="h-52" />
        <Skeleton color="card" className="h-52" />
        <Skeleton color="card" className="h-52" />
      </div>
    </div>
  );
};

export default ReviewHistorySkeleton;
