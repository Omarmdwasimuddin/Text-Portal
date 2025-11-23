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
                ক্ষমতা অর্পণ
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
                <div className="md:w-4/5 p-6">
                <div className="space-y-6 text-gray-700">
                    {/* Section 1 */}
                    <div>
                    <p className="mb-4">
                        ২২। <sup className='text-blue-500 cursor-pointer' title='ধারা ২২ অর্থ আইন, ২০০৪ (২০০৩ সনের ১৬ নং আইন) এর ৫১ ধারাবলে প্রতিস্থাপিত'>১</sup>[ <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (১) অর্থ আইন, ২০১২ এর ৬৫ ধারাবলে প্রতিস্থাপিত ।'>২</sup>[ (১) বোর্ড, সরকারি গেজেটে প্রজ্ঞাপন দ্বারা, প্রজ্ঞাপনে উল্লিখিত পরিসীমা ও শর্তাবলি, যদি থাকে, সাপেক্ষে, নাম বা পদবি উল্লেখপূর্বক-
                    </p>

                    <p className="mb-4 pl-4">
                        (ক) যে কোন কমিশনার বা মহাপরিচালক, মূল্য সংযোজন করকে এই আইন বা বিধির অধীন চীফ কমিশনার, মূল্য সংযোজন কর,
                    </p>

                    <p className="mb-4 pl-4">
                        (খ) যে কোন অতিরিক্ত কমিশনার বা অতিরিক্ত মহাপরিচালক বা পরিচালক (সিআইসি), মূল্য সংযোজন করকে এই আইন বা বিধির অধীন কমিশনার, কমিশনার (আপীল) বা মহাপরিচালক, মূল্য সংযোজন কর,
                    </p>

                    <p className="mb-4 pl-4">
                        (গ) যে কোন যুগ্ম-কমিশনার বা যুগ্ম পরিচালক (সিআইসি) বা পরিচালক, মূল্য সংযোজন করকে এই আইন বা বিধির অধীন অতিরিক্ত কমিশনার, অতিরিক্ত মহাপরিচালক বা পরিচালক (সিআইসি), মূল্য সংযোজন কর, বা কমিশনার, কমিশনার (আপীল) বা মহাপরিচালক, মূল্য সংযোজন কর,
                    </p>

                    <p className="mb-4 pl-4">
                        (ঘ) যে কোন উপ-কমিশনার বা উপ-পরিচালক, মূল্য সংযোজন করকে এই আইন বা বিধির অধীন যুগ্ম-কমিশনার, যুগ্ম পরিচালক (সিআইসি) বা পরিচালক, মূল্য সংযোজন কর, বা অতিরিক্ত কমিশনার, অতিরিক্ত মহাপরিচালক বা পরিচালক (সিআইসি), মূল্য সংযোজন কর,
                    </p>

                    <p className="mb-4 pl-4">
                        (ঙ) যে কোন সহকারী কমিশনার বা সহকারী পরিচালক, মূল্য সংযোজন করকে এই আইন বা বিধির অধীন উপ-কমিশনার বা উপ-পরিচালক, মূল্য সংযোজন কর,
                    </p>

                    <p className="mb-4 pl-4">
                        (চ) অন্য যে কোন মূল্য সংযোজন কর কর্মকর্তাকে এই আইন বা বিধির অধীন সহকারী কমিশনার বা সহকারী পরিচালক, মূল্য সংযোজন কর, এর যে কোন ক্ষমতা প্রয়োগের অধিকার অর্পণ করিতে পারিবে।]
                    </p>

                    <p className="mb-4">
                        (২) কোন ক্ষেত্রে বোর্ড ভিন্নতর নির্দেশ না দিলে, কমিশনার বা মহাপরিচালক তাহার অধস্তন যে কোন কর্মকর্তাকে, তাহার অধিক্ষেত্রের সর্বত্র বা কোন নির্দিষ্ট এলাকায়, এই আইন বা বিধির অধীন কমিশনারের বা মহাপরিচালকের বা এই আইনের অধীন অন্য যে কোন কর্মকর্তার যে কোন ক্ষমতা প্রয়োগের কর্তৃত্ব দান করিতে পারিবেন৷]
                    </p>
                    </div>
                </div>
                </div>

          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t border-gray-300">
          <div className="p-6">
            <div className="w-1/2 border-b border-gray-400 pb-2 mb-4">
              {/* Horizontal line */}
            </div>
            <p className="text-xs text-gray-600 italic mb-2">
              <sup className="font-bold">১</sup>ধারা ২২ অর্থ আইন, ২০০৪ (২০০৩ সনের ১৬ নং আইন) এর ৫১ ধারাবলে প্রতিস্থাপিত
            </p>
            <p className="text-xs text-gray-600 italic mb-2">
              <sup className="font-bold">২</sup>উপ-ধারা (১) অর্থ আইন, ২০১২ এর ৬৫ ধারাবলে প্রতিস্থাপিত ।
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}