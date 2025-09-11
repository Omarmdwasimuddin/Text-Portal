"use client";

import React, { useState } from 'react';
import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage('দয়া করে একটি VALID ইমেইল দিন');
      setStatus('error');
      return;
    }

    try {
      setStatus('loading');
      setMessage('');

      // Replace this with your actual API route (e.g. /api/subscribe)
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error('Subscription failed');

      setStatus('success');
      setMessage('আপনার ইমেইল কনফার্ম করা হয়েছে — ধন্যবাদ!');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage('সাবস্ক্রাইব করতে সমস্যা হয়েছে — পরে আবার চেষ্টা করুন');
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#0f2027] via-[#2c5364] to-[#203a43] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {/* Left: Text + Form */}
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Subscribe to our newsletter</h2>
            <p className="mt-4 text-lg text-gray-300">
              পেশাদার ট্যাক্স, ভ্যাট ও কাস্টমস আপডেট, সিলেকটেড আর্টিকেল ও নতুন প্রকাশনা—সপ্তাহে একবার আপনার ইনবক্সে।
            </p>

            <form onSubmit={handleSubscribe} className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-auto rounded-md bg-white/10 px-3.5 py-2.5 text-base text-white border border-gray-600/50 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:bg-white/15 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 focus:outline-none focus:shadow-lg focus:shadow-cyan-400/20"
              />

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex-none rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </span>
                ) : 'Subscribe'}
              </button>
            </form>

            {/* Message area */}
            {message && (
              <p
                className={`mt-3 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}
                role="status"
              >
                {message}
              </p>
            )}
          </div>

          {/* Right: Features */}
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 text-base text-gray-400">সপ্তাহিক প্রাসঙ্গিক আর্টিকেল ও টিউটোরিয়াল।</dd>
            </div>

            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-white" />
              </div>
              <dt className="mt-4 text-base font-semibold text-white">No spam</dt>
              <dd className="mt-2 text-base text-gray-400">কেবল মানসম্মত, প্রয়োজনীয় ইমেইল — কোন অনাবশ্যক স্প্যাম নয়।</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Decorative background blob (keeps the same aesthetic) */}
      <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-green-400 to-red-500 opacity-30"
        />
      </div>
    </section>
  );
}