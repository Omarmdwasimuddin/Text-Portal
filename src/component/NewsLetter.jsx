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
      setMessage('দয়া করে একটি বৈধ ইমেইল ঠিকানা দিন');
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
      setMessage('আপনার ইমেইল সাবস্ক্রিপশন সফলভাবে নিশ্চিত করা হয়েছে — ধন্যবাদ!');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setMessage('সাবস্ক্রাইব করতে সমস্যা হয়েছে — অনুগ্রহ করে পরে আবার চেষ্টা করুন');
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center">
          {/* Left: Text + Form */}
          <div className="max-w-xl lg:max-w-lg">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                নিউজলেটার সাবস্ক্রাইব করুন
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                পেশাদার ট্যাক্স, ভ্যাট ও কাস্টমস আপডেট, নির্বাচিত আর্টিকেল ও নতুন প্রকাশনা—সপ্তাহে একবার সরাসরি আপনার ইনবক্সে পৌঁছে যাবে।
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label htmlFor="email-address" className="sr-only">
                    ইমেইল ঠিকানা
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="আপনার ইমেইল ঠিকানা লিখুন"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                    className="w-full rounded-lg bg-white/5 px-4 py-3.5 text-base text-white border border-gray-600/50 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:bg-white/10 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 focus:outline-none focus:shadow-lg focus:shadow-cyan-400/20 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 hover:scale-[1.02] active:scale-[0.98] min-w-[120px]"
                >
                  {status === 'loading' ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      পাঠানো হচ্ছে...
                    </span>
                  ) : (
                    'সাবস্ক্রাইব করুন'
                  )}
                </button>
              </div>

              {/* Message area */}
              {message && (
                <div
                  className={`rounded-lg px-4 py-3 text-sm ${
                    status === 'success' 
                      ? 'bg-green-500/10 text-green-400 border border-green-500/20' 
                      : 'bg-red-500/10 text-red-400 border border-red-500/20'
                  }`}
                  role="status"
                >
                  {message}
                </div>
              )}
            </form>
          </div>

          {/* Right: Features */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-3 ring-1 ring-cyan-500/20">
                <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-cyan-400" />
              </div>
              <dt className="mt-4 text-lg font-semibold text-white">সাপ্তাহিক আপডেট</dt>
              <dd className="mt-2 text-base text-gray-400 leading-relaxed">
                সপ্তাহিক প্রাসঙ্গিক আর্টিকেল, টিউটোরিয়াল এবং পেশাদার গাইডেন্স।
              </dd>
            </div>

            <div className="flex flex-col items-start p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-3 ring-1 ring-green-500/20">
                <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-green-400" />
              </div>
              <dt className="mt-4 text-lg font-semibold text-white">স্প্যাম মুক্ত</dt>
              <dd className="mt-2 text-base text-gray-400 leading-relaxed">
                কেবল মানসম্মত, প্রয়োজনীয় কন্টেন্ট — কোন অনাবশ্যক স্প্যাম বা বিজ্ঞাপন নেই।
              </dd>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced background effects */}
      <div aria-hidden="true" className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-[1155/678] w-[72rem] bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-40"
        />
      </div>
      
      {/* Additional background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 transform translate-x-1/2 translate-y-1/2">
          <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20 dark:opacity-10 blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}