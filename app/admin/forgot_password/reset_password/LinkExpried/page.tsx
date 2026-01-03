import React from 'react';
import Link from 'next/link';
import { SlashIcon } from 'lucide-react';                     

const page = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-md w-full bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center">
        <SlashIcon className='w-20 h-20 mb-10'/>
        <h1 className="text-xl font-bold  mb-4">Reset password link expired</h1>
        <p className="text-gray-700  mb-6 font-medium">
          The link you followed is no longer valid. It may have expired or already been used.
        </p>
        <Link
          href="/ForgotPassword/ConfirmEmail"
          className="inline-block mt-4  bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          Request a New Link
        </Link>
      </div>
    </div>
  )
}

export default page