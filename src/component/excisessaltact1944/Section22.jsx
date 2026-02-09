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
                         <span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">২২। ক্ষমতা অর্পণ---</span><sup className='text-blue-500 cursor-pointer' title='ধারা ২২ অর্থ আইন, ২০০৪ (২০০৩ সনের ১৬ নং আইন) এর ৫১ ধারাবলে প্রতিস্থাপিত'>১</sup>[ <sup className='text-blue-500 cursor-pointer' title='উপ-ধারা (১) অর্থ আইন, ২০১২ এর ৬৫ ধারাবলে প্রতিস্থাপিত ।'>২</sup>[ (১) বোর্ড, সরকারি গেজেটে প্রজ্ঞাপন দ্বারা, প্রজ্ঞাপনে উল্লিখিত পরিসীমা ও শর্তাবলি, যদি থাকে, সাপেক্ষে, নাম বা পদবি উল্লেখপূর্বক-
                    </p>

                    <p className="pl-4 mb-4">
                        (ক) যে কোন কমিশনার বা মহাপরিচালক, মূল্য সংযোজন করকে এই আইন বা বিধির অধীন চীফ কমিশনার, মূল্য সংযোজন কর,
                    </p>

                    <p className="pl-4 mb-4">
                        (খ) যে কোন অতিরিক্ত কমিশনার বা অতিরিক্ত মহাপরিচালক বা পরিচালক (সিআইসি), মূল্য সংযোজন করকে এই আইন বা বিধির অধীন কমিশনার, কমিশনার (আপীল) বা মহাপরিচালক, মূল্য সংযোজন কর,
                    </p>

                    <p className="pl-4 mb-4">
                        (গ) যে কোন যুগ্ম-কমিশনার বা যুগ্ম পরিচালক (সিআইসি) বা পরিচালক, মূল্য সংযোজন করকে এই আইন বা বিধির অধীন অতিরিক্ত কমিশনার, অতিরিক্ত মহাপরিচালক বা পরিচালক (সিআইসি), মূল্য সংযোজন কর, বা কমিশনার, কমিশনার (আপীল) বা মহাপরিচালক, মূল্য সংযোজন কর,
                    </p>

                    <p className="pl-4 mb-4">
                        (ঘ) যে কোন উপ-কমিশনার বা উপ-পরিচালক, মূল্য সংযোজন করকে এই আইন বা বিধির অধীন যুগ্ম-কমিশনার, যুগ্ম পরিচালক (সিআইসি) বা পরিচালক, মূল্য সংযোজন কর, বা অতিরিক্ত কমিশনার, অতিরিক্ত মহাপরিচালক বা পরিচালক (সিআইসি), মূল্য সংযোজন কর,
                    </p>

                    <p className="pl-4 mb-4">
                        (ঙ) যে কোন সহকারী কমিশনার বা সহকারী পরিচালক, মূল্য সংযোজন করকে এই আইন বা বিধির অধীন উপ-কমিশনার বা উপ-পরিচালক, মূল্য সংযোজন কর,
                    </p>

                    <p className="pl-4 mb-4">
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
        <div className="">
          <div className="p-6">
            <div className="w-1/2 pb-2 mb-4 border-b border-gray-400">
              {/* Horizontal line */}
            </div>
            <p className="mb-2 text-xs italic text-gray-600">
              <sup className="font-bold">১</sup>ধারা ২২ অর্থ আইন, ২০০৪ (২০০৩ সনের ১৬ নং আইন) এর ৫১ ধারাবলে প্রতিস্থাপিত
            </p>
            <p className="mb-2 text-xs italic text-gray-600">
              <sup className="font-bold">২</sup>উপ-ধারা (১) অর্থ আইন, ২০১২ এর ৬৫ ধারাবলে প্রতিস্থাপিত ।
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}