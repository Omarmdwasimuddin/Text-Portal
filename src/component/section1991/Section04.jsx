import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
        {/* Banner Section */}
        <div className="relative px-4 py-8 text-white bg-gradient-to-r from-green-600 to-green-800 md:px-8">
          <div className="text-center">
            <h1 className="mb-2 text-2xl font-bold md:text-4xl">
              মূল্য সংযোজন কর আইন, ১৯৯১
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              ( ১৯৯১ সনের ২২ নং আইন )
            </p>
            <div className="inline-block px-4 py-1 mt-3 bg-green-500 rounded-full shadow-md">
              <p className="text-sm font-medium md:text-base">[ ৩০ জুন, ১৯৯১ ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/vat-acts/value-added-tax-act"
            className="absolute flex items-center gap-2 px-3 py-2 text-green-700 transition-all bg-white rounded-full shadow top-4 left-4 hover:bg-green-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
        </div>

        {/* Header Section */}
        <div className="">
          <div className="flex flex-col md:flex-row">
              <div className="p-6">
                <div className="space-y-6 text-justify text-black">
                  {/* Section 1 */}
                  <div>
                    <p className="mb-4">
                       <span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">৪৷ কর হার প্রয়োগ---</span>(১) করযোগ্য পণ্যের সরবরাহ বা করযোগ্য সেবা প্রদানের ক্ষেত্রে মূল্য সংযোজন করের হার হইবে, উক্ত পণ্য বা সেবার উপর ধারা ৬ এর উপ-ধারা (২) বা ক্ষেত্রমত, উপ-ধারা (৩) এ উল্লিখিত সময়ে যে হারে মূল্য সংযোজন কর প্রযোজ্য হয় সেই হার৷<br/>
                      <sup className='text-blue-500' title='উপ-ধারা (২) অর্থ আইন, ২০০৬ (২০০৬ সনের ২২ নং আইন) এর ৩২ ধারাবলে প্রতিস্থাপিত'>১</sup>[(২) করযোগ্য পণ্য আমদানির ক্ষেত্রে, মূল্য সংযোজন করের হার হইবে <Link href='/' className='text-blue-500'>Customs Act, 1969</Link> (IV of 1969) এর section 30 এর অধীন নির্ধারিত তারিখে যেই হারে মূল্য সংযোজন কর প্রযোজ্য হয় সেই হার৷]<br/>
                      <sup className='text-blue-500' title='উপ-ধারা (৩) অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৭৩ ধারাবলে সংযোজিত ।'>২</sup>[(৩) করযোগ্য সেবা আমদানির ক্ষেত্রে,মূল্য সংযোজন করের হার হইবে, উক্ত সেবার মূল্য পরিশোধের সময়ে প্রযোজ্য মূল্য সংযোজন করের হার।]
                    </p>
                  </div>
                </div>
              </div>

          </div>
        </div>

        {/* Footer Section */}
          <div className="">
            <div className="p-6">
              <div className="w-1/2 pb-2 mb-4 border-b border-gray-400">
                {/* Horizontal line */}
              </div>
              <p className="text-xs italic text-gray-600">
                <sup className="font-bold">১</sup>উপ-ধারা (২) অর্থ আইন, ২০০৬ (২০০৬ সনের ২২ নং আইন) এর ৩২ ধারাবলে প্রতিস্থাপিত
              </p>
              <p className="mt-2 text-xs italic text-gray-600">
                <sup className="font-bold">২</sup>উপ-ধারা (৩) অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৭৩ ধারাবলে সংযোজিত ।
              </p>
            </div>
          </div>

      </div>
    </div>
  );
}