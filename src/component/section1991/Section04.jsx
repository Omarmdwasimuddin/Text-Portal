import React from 'react';
import Link from 'next/link';

export default function LawPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Banner Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-8 px-4 md:px-8 relative">
          <div className="text-center">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">
              মূল্য সংযোজন কর আইন, ১৯৯১
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              ( ১৯৯১ সনের ২২ নং আইন )
            </p>
            <div className="mt-3 inline-block bg-green-500 px-4 py-1 rounded-full shadow-md">
              <p className="text-sm md:text-base font-medium">[ ৩০ জুন, ১৯৯১ ]</p>
            </div>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/regulations/acts/vat-acts/value-added-tax-act"
            className="absolute top-4 left-4 flex items-center gap-2 bg-white text-green-700 hover:bg-green-100 transition-all px-3 py-2 rounded-full shadow"
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
        <div className="border-b border-gray-300">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Heading */}
            <div className="md:w-1/5 bg-blue-50 p-6 border-r border-gray-300">
              <h1 className="text-xl md:text-xl font-bold text-gray-800 leading-tight">
                কর হার প্রয়োগ
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
              <div className="md:w-4/5 p-6">
                <div className="space-y-6 text-gray-700">
                  {/* Section 1 */}
                  <div>
                    <p className="mb-4">
                      ৪৷ (১) করযোগ্য পণ্যের সরবরাহ বা করযোগ্য সেবা প্রদানের ক্ষেত্রে মূল্য সংযোজন করের হার হইবে, উক্ত পণ্য বা সেবার উপর ধারা ৬ এর উপ-ধারা (২) বা ক্ষেত্রমত, উপ-ধারা (৩) এ উল্লিখিত সময়ে যে হারে মূল্য সংযোজন কর প্রযোজ্য হয় সেই হার৷<br/>
                      <sup className='text-blue-500' title='উপ-ধারা (২) অর্থ আইন, ২০০৬ (২০০৬ সনের ২২ নং আইন) এর ৩২ ধারাবলে প্রতিস্থাপিত'>১</sup>[(২) করযোগ্য পণ্য আমদানির ক্ষেত্রে, মূল্য সংযোজন করের হার হইবে <Link href='/' className='text-blue-500'>Customs Act, 1969</Link> (IV of 1969) এর section 30 এর অধীন নির্ধারিত তারিখে যেই হারে মূল্য সংযোজন কর প্রযোজ্য হয় সেই হার৷]<br/>
                      <sup className='text-blue-500' title='উপ-ধারা (৩) অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৭৩ ধারাবলে সংযোজিত ।'>২</sup>[(৩) করযোগ্য সেবা আমদানির ক্ষেত্রে,মূল্য সংযোজন করের হার হইবে, উক্ত সেবার মূল্য পরিশোধের সময়ে প্রযোজ্য মূল্য সংযোজন করের হার।]
                    </p>
                  </div>
                </div>
              </div>

          </div>
        </div>

        {/* Footer Section */}
          <div className="border-t border-gray-300">
            <div className="p-6">
              <div className="border-b border-gray-400 pb-2 mb-4">
                {/* Horizontal line */}
              </div>
              <p className="text-xs text-gray-600 italic">
                <sup className="font-bold">১</sup>উপ-ধারা (২) অর্থ আইন, ২০০৬ (২০০৬ সনের ২২ নং আইন) এর ৩২ ধারাবলে প্রতিস্থাপিত
              </p>
              <p className="text-xs text-gray-600 italic mt-2">
                <sup className="font-bold">২</sup>উপ-ধারা (৩) অর্থ আইন, ২০১০ (২০১০ সনের ৩৩ নং আইন) এর ৭৩ ধারাবলে সংযোজিত ।
              </p>
            </div>
          </div>

      </div>
    </div>
  );
}