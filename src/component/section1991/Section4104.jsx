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
              <h1 className="text-xl md:text-xl font-bold text-black leading-tight">
                বিকল্প বিরোধ-নিষ্পত্তি প্রক্রিয়ায় সহায়তাকারী(Facilitator)নিয়োগ এবং সংশ্লিষ্ট পক্ষসমুহের দায়-দায়িত্ব
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
                <div className="space-y-6 text-black">
                    {/* Section 1 */}
                    <div>
                        <p className="mb-4">
                            ৪১ঘ। বিকল্প বিরোধ-নিষ্পত্তি প্রক্রিয়ার জন্য সহায়তাকারী (Facilitator) নির্বাচন (selection) বা <sup className='text-blue-500 cursor-pointer' title=''>১</sup>[নিয়োগ ও তাহাকে প্রদেয় ফি,] সংক্ষুব্ধ আবেদনকারী ব্যক্তির কর্তব্য ও দায়িত্ব এবং বিকল্প বিরোধ নিষ্পত্তি প্রক্রিয়ায় সমঝোতার (Negotiation) জন্য মূল্য সংযোজন কর কর্তৃপক্ষের প্রতিনিধি নির্বাচন এবং তাহাদের দায়-দায়িত্ব বিধি দ্বারা নির্ধারিত হইবে।
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
              <sup className="font-bold">১</sup>‘‘নিয়োগ ও তাহাকে প্রদেয় ফি,’’ শব্দগুলি ও কমা ‘‘নিয়োগ,’’ শব্দ ও কমার পরিবর্তে অর্থ আইন, ২০১২ এর ৭৫ ধারাবলে প্রতিস্থাপিত।
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}