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
                             <span className="text-xl font-bold leading-tight text-gray-950 md:text-xl">৪৮৷ তল্লাশীর ক্ষমতা---</span><sup className='text-blue-500 cursor-pointer' title='দাঁড়ির (৷) পরিবর্তে কোলন (:) প্রতিস্থাপিত এবং অতঃপর শর্তাংশটি অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে সংযোজিত'>১</sup>[ <sup className='text-blue-500 cursor-pointer' title='“বোর্ড বা বোর্ডের নিকট হইতে এতদুদ্দেশ্যে ক্ষমতাপ্রাপ্ত যথাযথ এখতিয়ারসম্পন্ন কমিশনার, মূল্য সংযোজন কর বা মহাপরিচালক, পরিদর্শন পরিদপ্তর (কাষ্টমস এন্ড এক্সাইজ) বা” শব্দগুলি, কমাগুলি ও বন্ধনী অর্থ আইন, ২০০৪ (২০০৪ সনের ১৬ নং আইন) এর ৫৮ ধারাবলে বিলুপ্ত'>২</sup>[***] <sup className='text-blue-500 cursor-pointer' title='“সহকারী কমিশনার বা সহকারী পরিচালক, মূল্য সংযোজন কর পদমর্যাদার” শব্দগুলি ও কমা “পদমর্যাদায় সহকারী কমিশনার, মূল্য সংযোজন কর এর” শব্দগুলি ও কমার পরিবর্তে অর্থ আইন, ২০১৫ (২০১৫ সনের ১০ নং আইন) এর ৭২ ধারাবলে প্রতিস্থাপিত ।'>৩</sup>[সহকারী কমিশনার বা সহকারী পরিচালক, মূল্য সংযোজন কর পদমর্যাদার]- এর নিম্ন নহেন এইরূপ কোন মূল্য সংযোজন কর কমকতা লিখিত আদেশ দ্বারা যে কোন মূল্য সংযোজন কর কর্মকর্তাকে এইরূপ যে কোন স্থান, ঘরবাড়ী, নৌযান বা অন্য কোন যানবাহনে প্রবেশ করিবার ক্ষমতা দান করিতে পারিবে যে স্থান, ঘরবাড়ী, নৌযান বা অন্য কোন যানবাহন হইতে বা দ্বারা এই আইনের অধীন মূল্য সংযোজন কর আরোপযোগ্য কোন পণ্য বা কোন সেবা এই আইন বা কোন বিধির বিধান লংঘন করিয়া সরবরাহ, প্রদত্ত বা বহন করা হয় বা হইয়াছে বলিয়া তিনি বিশ্বাস করেন বা তাহার উক্তরূপ বিশ্বাস করার যুক্তিসংঘত কারণ থাকে এবং উক্ত আদেশে উক্তরূপ স্থান, ঘরবাড়ী, নৌযান বা যানবাহন তল্লাশীর ক্ষমতাও প্রদান করা যাইতে পারে৷]
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
                <div className="space-y-2 text-xs italic text-gray-600">
                    <p>
                        <sup className="font-bold">১</sup> দাঁড়ির (৷) পরিবর্তে কোলন (:) প্রতিস্থাপিত এবং অতঃপর শর্তাংশটি অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে সংযোজিত
                    </p>
                    <p>
                        <sup className="font-bold">২</sup> “বোর্ড বা বোর্ডের নিকট হইতে এতদুদ্দেশ্যে ক্ষমতাপ্রাপ্ত যথাযথ এখতিয়ারসম্পন্ন কমিশনার, মূল্য সংযোজন কর বা মহাপরিচালক, পরিদর্শন পরিদপ্তর (কাষ্টমস এন্ড এক্সাইজ) বা” শব্দগুলি, কমাগুলি ও বন্ধনী অর্থ আইন, ২০০৪ (২০০৪ সনের ১৬ নং আইন) এর ৫৮ ধারাবলে বিলুপ্ত
                    </p>
                    <p>
                        <sup className="font-bold">২</sup> “সহকারী কমিশনার বা সহকারী পরিচালক, মূল্য সংযোজন কর পদমর্যাদার” শব্দগুলি ও কমা “পদমর্যাদায় সহকারী কমিশনার, মূল্য সংযোজন কর এর” শব্দগুলি ও কমার পরিবর্তে অর্থ আইন, ২০১৫ (২০১৫ সনের ১০ নং আইন) এর ৭২ ধারাবলে প্রতিস্থাপিত ।
                    </p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}