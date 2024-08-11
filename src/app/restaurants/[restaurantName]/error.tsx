'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/Button';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.log({ error });
  }, [error]);

  return (
    <>
      <h1 className="mb-5 text-5xl">Oops!</h1>
      <p>Something went wrong!</p>
      <p>{error.message}</p>
      <Link
        href="/restaurants"
        className={cn('p-0', buttonVariants({ variant: 'link' }))}
      >
        Return to Restaurants page
      </Link>
    </>
  );
};

export default Error;
