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
                ন্যায় নির্ণয়নের ক্ষমতা
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
            <div className="space-y-6 text-gray-700">
                {/* Section 1 */}
                <div>
                <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='৪০।'>১</sup>[৪০। এই আইন বা এই আইনের অধীন প্রণীত বিধির অধীনে বাজেয়াপ্তকরণ এবং অর্থদণ্ড <sup className='text-blue-500 cursor-pointer' title='বা অর্থদন্ড'>২</sup>[ বা অর্থদন্ড] আরোপকরণ সংক্রান্ত মামলাসমূহের ন্যায় নির্ণয়ন করা হইবে, -]
                </p>

                <p className="mb-4">
                    (ক) আমদানি ও রপ্তানির ক্ষেত্রে Customs Act,1969 এর Section 179 এর বিধান অনুযায়ী; এবং
                </p>

                <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='পণ্য সরবরাহ বা সেবা প্রদানের ক্ষেত্রে, মূল্য সংযোজন কর কর্মকর্তাগণ কর্তৃক নিম্নবর্ণিত টেবিল অনুযায়ী-'>৩</sup>[(খ) পণ্য সরবরাহ বা সেবা প্রদানের ক্ষেত্রে, মূল্য সংযোজন কর কর্মকর্তাগণ কর্তৃক নিম্নবর্ণিত টেবিল অনুযায়ী-
                </p>

                <div className="overflow-x-auto mb-4">
                    <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-center">ন্যায় নির্ণয়নের ধরণ</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">ক্ষমতাপ্রাপ্ত কর্মকর্তা</th>
                        <th className="border border-gray-300 px-4 py-2 text-center">ক্ষমতা</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="border border-gray-300 px-4 py-2" rowSpan="6">
                            (অ) পণ্য বা সেবা বাজেয়াপ্তকরণ এবং কর ফাঁকি অথবা বাজেয়াপ্তকরণ বা কর ফাঁকি সংশ্লিষ্ট অর্থদন্ড আরোপ
                        </td>
                        <td className="border border-gray-300 px-4 py-2">কমিশনার</td>
                        <td className="border border-gray-300 px-4 py-2">পণ্য মূল্য বা করযোগ্য সেবা মূল্য ৪০ (চল্লিশ) লক্ষ টাকার অধিক হইলে;</td>
                        </tr>
                        <tr>
                        <td className="border border-gray-300 px-4 py-2">অতিরিক্ত কমিশনার</td>
                        <td className="border border-gray-300 px-4 py-2">পণ্য মূল্য বা করযোগ্য সেবা মূল্য অনধিক ৪০ (চল্লিশ) লক্ষ টাকা হইলে;</td>
                        </tr>
                        <tr>
                        <td className="border border-gray-300 px-4 py-2">যুগ্ম-কমিশনার</td>
                        <td className="border border-gray-300 px-4 py-2">পণ্য মূল্য বা করযোগ্য সেবা মূল্য অনধিক ৩০ (ত্রিশ) লক্ষ টাকা হইলে;</td>
                        </tr>
                        <tr>
                        <td className="border border-gray-300 px-4 py-2">উপ-কমিশনার</td>
                        <td className="border border-gray-300 px-4 py-2">পণ্য মূল্য বা করযোগ্য সেবা মূল্য অনধিক ২০ (বিশ) লক্ষ টাকা হইলে;</td>
                        </tr>
                        <tr>
                        <td className="border border-gray-300 px-4 py-2">সহকারী কমিশনার</td>
                        <td className="border border-gray-300 px-4 py-2">পণ্য মূল্য বা করযোগ্য সেবা মূল্য অনধিক ১০ (দশ) লক্ষ টাকা হইলে;</td>
                        </tr>
                        <tr>
                        <td className="border border-gray-300 px-4 py-2">রাজস্ব কর্মকর্তা</td>
                        <td className="border border-gray-300 px-4 py-2">পণ্য মূল্য বা করযোগ্য সেবা মূল্য অনধিক ৪ (চার) লক্ষ টাকা হইলে;</td>
                        </tr>
                        <tr>
                        <td className="border border-gray-300 px-4 py-2">(আ) দফা (অ) তে বর্ণিত কর ফাঁকি ব্যতীত অন্যান্য অনিয়মের ক্ষেত্রে অর্থদন্ড আরোপ</td>
                        <td className="border border-gray-300 px-4 py-2">বিভাগীয় কর্মকর্তা</td>
                        <td className="border border-gray-300 px-4 py-2">পূর্ণ ক্ষমতা।</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
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
            <div className="text-xs text-gray-600 italic space-y-2">
            <p>
                <sup className="font-bold">১</sup>'টেবিল' অর্থ আইন, ২০১৮ (২০১৮ সনের ২২ নং আইন) এর ৫২ ধারাবলে প্রতিস্থাপিত। যাহা ১ জুলাই ২০১৮ তারিখ হইতে কার্যকর।
            </p>
            <p>
                <sup className="font-bold">২</sup>"বা অর্থদন্ড" শব্দগুলি অর্থ আইন, ২০০৯ (২০০৯ সনের ৩৬ নং আইন) এর ৫৬ ধারাবলে সন্নিবেশিত যাহা ১ জুলাই ২০০৯ তারিখ হইতে কার্যকর।
            </p>
            <p>
                <sup className="font-bold">৩</sup>দফা (খ) অর্থ আইন, ২০০৬ (২০০৬ সনের ২২ নং আইন) এর ৩৯ ধারাবলে প্রতিস্থাপিত
            </p>
            </div>
        </div>
        </div>

      </div>
    </div>
  );
}