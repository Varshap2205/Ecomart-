'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SubmissionSuccess() {
  const router = useRouter();

<<<<<<< HEAD
=======
  // Optional: Auto-redirect after 5 seconds
>>>>>>> 29874944f90eba266cb612ecbc4c576d9af4f7f9
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg text-center">
<<<<<<< HEAD
=======
        {/* Success Icon */}
>>>>>>> 29874944f90eba266cb612ecbc4c576d9af4f7f9
        <div className="mx-auto h-24 w-24 flex items-center justify-center rounded-full bg-green-100 mb-8">
          <svg
            className="h-16 w-16 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

<<<<<<< HEAD
=======
        {/* Success Message */}
>>>>>>> 29874944f90eba266cb612ecbc4c576d9af4f7f9
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Successfully Submitted!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Your product has been registered successfully. Our team will review your submission.
        </p>

<<<<<<< HEAD
=======
        {/* Status Message */}
>>>>>>> 29874944f90eba266cb612ecbc4c576d9af4f7f9
        <p className="text-sm text-gray-500 mb-8">
          You will be redirected to the home page in 5 seconds...
        </p>

<<<<<<< HEAD
=======
        {/* Navigation Buttons */}
>>>>>>> 29874944f90eba266cb612ecbc4c576d9af4f7f9
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
          >
            Return Home
          </Link>
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
          >
            View Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
} 