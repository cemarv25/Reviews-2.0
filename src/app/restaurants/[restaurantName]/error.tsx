'use client';

import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useEffect } from 'react';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.log({ error });
  }, [error]);

  return (
    <>
      <h1 className="text-5xl mb-5">Oops!</h1>
      <p>Something went wrong!</p>
      <p>{error.message}</p>
      <Button variant="link" className="p-0">
        <Link href="/restaurants">Return to Restaurants page</Link>
      </Button>
    </>
  );
};

export default Error;
