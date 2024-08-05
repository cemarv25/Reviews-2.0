'use client';

import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useEffect } from 'react';

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
      <Button variant="link" className="p-0">
        <Link href="/restaurants">Return to Restaurants page</Link>
      </Button>
    </>
  );
};

export default Error;
