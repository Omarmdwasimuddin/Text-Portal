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
                    <sup className='text-blue-500 cursor-pointer' title='৪০।'>১</sup>[<span className="text-xl font-bold leading-tight text-gray-800 md:text-xl">৪০। ন্যায় নির্ণয়নের ক্ষমতা---</span> এই আইন বা এই আইনের অধীন প্রণীত বিধির অধীনে বাজেয়াপ্তকরণ এবং অর্থদণ্ড <sup className='text-blue-500 cursor-pointer' title='বা অর্থদন্ড'>২</sup>[ বা অর্থদন্ড] আরোপকরণ সংক্রান্ত মামলাসমূহের ন্যায় নির্ণয়ন করা হইবে, -]
                </p>

                <p className="mb-4">
                    (ক) আমদানি ও রপ্তানির ক্ষেত্রে Customs Act,1969 এর Section 179 এর বিধান অনুযায়ী; এবং
                </p>

                <p className="mb-4">
                    <sup className='text-blue-500 cursor-pointer' title='পণ্য সরবরাহ বা সেবা প্রদানের ক্ষেত্রে, মূল্য সংযোজন কর কর্মকর্তাগণ কর্তৃক নিম্নবর্ণিত টেবিল অনুযায়ী-'>৩</sup>[(খ) পণ্য সরবরাহ বা সেবা প্রদানের ক্ষেত্রে, মূল্য সংযোজন কর কর্মকর্তাগণ কর্তৃক নিম্নবর্ণিত টেবিল অনুযায়ী-
                </p>

                <div className="mb-4 overflow-x-auto">
                    <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                        <th className="px-4 py-2 text-center border border-gray-300">ন্যায় নির্ণয়নের ধরণ</th>
                        <th className="px-4 py-2 text-center border border-gray-300">ক্ষমতাপ্রাপ্ত কর্মকর্তা</th>
                        <th className="px-4 py-2 text-center border border-gray-300">ক্ষমতা</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="px-4 py-2 border border-gray-300" rowSpan="6">
                            (অ) পণ্য বা সেবা বাজেয়াপ্তকরণ এবং কর ফাঁকি অথবা বাজেয়াপ্তকরণ বা কর ফাঁকি সংশ্লিষ্ট অর্থদন্ড আরোপ
                        </td>
                        <td className="px-4 py-2 border border-gray-300">কমিশনার</td>
                        <td className="px-4 py-2 border border-gray-300">পণ্য মূল্য বা করযোগ্য সেবা মূল্য ৪০ (চল্লিশ) লক্ষ টাকার অধিক হইলে;</td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border border-gray-300">অতিরিক্ত কমিশনার</td>
                        <td className="px-4 py-2 border border-gray-300">পণ্য মূল্য বা করযোগ্য সেবা মূল্য অনধিক ৪০ (চল্লিশ) লক্ষ টাকা হইলে;</td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border border-gray-300">যুগ্ম-কমিশনার</td>
                        <td className="px-4 py-2 border border-gray-300">পণ্য মূল্য বা করযোগ্য সেবা মূল্য অনধিক ৩০ (ত্রিশ) লক্ষ টাকা হইলে;</td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border border-gray-300">উপ-কমিশনার</td>
                        <td className="px-4 py-2 border border-gray-300">পণ্য মূল্য বা করযোগ্য সেবা মূল্য অনধিক ২০ (বিশ) লক্ষ টাকা হইলে;</td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border border-gray-300">সহকারী কমিশনার</td>
                        <td className="px-4 py-2 border border-gray-300">পণ্য মূল্য বা করযোগ্য সেবা মূল্য অনধিক ১০ (দশ) লক্ষ টাকা হইলে;</td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border border-gray-300">রাজস্ব কর্মকর্তা</td>
                        <td className="px-4 py-2 border border-gray-300">পণ্য মূল্য বা করযোগ্য সেবা মূল্য অনধিক ৪ (চার) লক্ষ টাকা হইলে;</td>
                        </tr>
                        <tr>
                        <td className="px-4 py-2 border border-gray-300">(আ) দফা (অ) তে বর্ণিত কর ফাঁকি ব্যতীত অন্যান্য অনিয়মের ক্ষেত্রে অর্থদন্ড আরোপ</td>
                        <td className="px-4 py-2 border border-gray-300">বিভাগীয় কর্মকর্তা</td>
                        <td className="px-4 py-2 border border-gray-300">পূর্ণ ক্ষমতা।</td>
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
        <div className="">
        <div className="p-6">
            <div className="w-1/2 pb-2 mb-4 border-b border-gray-400">
            {/* Horizontal line */}
            </div>
            <div className="space-y-2 text-xs italic text-gray-600">
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