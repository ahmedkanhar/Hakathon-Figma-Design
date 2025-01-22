'use client';
import { useRouter } from 'next/navigation';
import React, { FormEvent, useRef } from 'react';

const Auth = () => {
  const email = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailResponse = email?.current?.value;
    console.log('from CLIENT', emailResponse);

    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: emailResponse }),
    });

    const data = await res.json();

    // Redirect based on the response
    if (data.redirectUrl) {
      router.push(data.redirectUrl);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FBEBB5] py-10 px-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-2xl p-8">
        {/* Top Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-800">Welcome Back!</h1>
          <p className="text-gray-600 mt-2">
            Please log in to your account to continue. We're excited to have you!
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleForm} className="space-y-6">
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-gray-700 font-medium mb-2"
            >
              Email Address
            </label>
            <input
              className="w-full border border-gray-300 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ref={email}
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-lg shadow-md"
            >
              Log In
            </button>
          </div>
        </form>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-600">
          <p>
            Don't have an account?{' '}
            <a
              href="/signup"
              className="text-blue-600 hover:underline font-medium"
            >
              Sign up here
            </a>
          </p>
          <p className="mt-4 text-sm">
            Trouble logging in?{' '}
            <a
              href="/forgot-password"
              className="text-blue-600 hover:underline font-medium"
            >
              Reset your password
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
