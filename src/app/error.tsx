'use client';

import Button from '@/components/ui/Button';
import ExclamationCircle from '@/components/ui/icons/ExclamationCircle';
import { useEffect } from 'react';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.log({ error });
  }, [error]);

  return (
    <div className="flex items-center gap-4 lg:px-32 lg:py-10 p-10 h-[70vh]">
      <div className="shrink-0">
        <ExclamationCircle type="filled" width={45} height={45} />
      </div>
      <div className="flex flex-col items-start gap-2">
        <h2 className="font-bold text-3xl">Something went wrong!</h2>
        <p>{error.message}</p>
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Try again
        </Button>
      </div>
    </div>
  );
};

export default Error;
