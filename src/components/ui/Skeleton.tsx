import { cn } from '@/lib/utils';

type SkeletonProps = {
  color?: 'text' | 'button' | 'card';
} & React.HTMLAttributes<HTMLDivElement>;

function Skeleton({ className, color = 'text', ...props }: SkeletonProps) {
  const colorClassName =
    color === 'text'
      ? 'bg-skeleton-text'
      : color === 'button'
        ? 'bg-skeleton-button'
        : 'bg-skeleton-card';
  return (
    <div
      className={cn('animate-pulse rounded-md', colorClassName, className)}
      {...props}
    />
  );
}

export { Skeleton };
