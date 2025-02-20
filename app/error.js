'use client';

import Link from 'next/link';

export default function Error({ error, reset }) {
  return (
    <main className='flex justify-center items-center flex-col gap-6'>
      <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
      <p className='text-lg'>{error.message}</p>

      <div className='flex flex-col sm:flex-row gap-6'>
        <Link
          href='/'
          className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'
        >
          Go back home
        </Link>

        <button
          onClick={reset}
          className='inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg'
        >
          Try again
        </button>
      </div>
    </main>
  );
}
