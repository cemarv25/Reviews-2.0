import { Skeleton } from '@/components/ui/Skeleton';

const LoadingRestaurants = () => {
  return (
    <>
      <Skeleton className="mt-2 w-72 h-12" />
      <div className="flex justify-between items-center">
        <Skeleton className="mt-12 w-96 h-7" />
        <Skeleton color="button" className="mt-12 w-48 h-10" />
      </div>
      <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        <Skeleton color="card" className="h-56" />
        <Skeleton color="card" className="h-56" />
        <Skeleton color="card" className="h-56" />
        <Skeleton color="card" className="h-56" />
        <Skeleton color="card" className="h-56" />
        <Skeleton color="card" className="h-56" />
      </div>
    </>
  );
};

export default LoadingRestaurants;
