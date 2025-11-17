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
                তল্লাশীর ক্ষমতা
              </h1>
            </div>
            
            {/* Right Side - Law Text */}
            <div className="md:w-4/5 p-6">
                <div className="space-y-6 text-black">
                    {/* Section 1 */}
                    <div>
                        <p className="mb-4">
                            ৪৮৷ <sup className='text-blue-500 cursor-pointer' title='দাঁড়ির (৷) পরিবর্তে কোলন (:) প্রতিস্থাপিত এবং অতঃপর শর্তাংশটি অর্থ আইন, ১৯৯৮ (১৯৯৮ সনের ১৪ নং আইন) এর ৭ ধারাবলে সংযোজিত'>১</sup>[ <sup className='text-blue-500 cursor-pointer' title='“বোর্ড বা বোর্ডের নিকট হইতে এতদুদ্দেশ্যে ক্ষমতাপ্রাপ্ত যথাযথ এখতিয়ারসম্পন্ন কমিশনার, মূল্য সংযোজন কর বা মহাপরিচালক, পরিদর্শন পরিদপ্তর (কাষ্টমস এন্ড এক্সাইজ) বা” শব্দগুলি, কমাগুলি ও বন্ধনী অর্থ আইন, ২০০৪ (২০০৪ সনের ১৬ নং আইন) এর ৫৮ ধারাবলে বিলুপ্ত'>২</sup>[***] <sup className='text-blue-500 cursor-pointer' title='“সহকারী কমিশনার বা সহকারী পরিচালক, মূল্য সংযোজন কর পদমর্যাদার” শব্দগুলি ও কমা “পদমর্যাদায় সহকারী কমিশনার, মূল্য সংযোজন কর এর” শব্দগুলি ও কমার পরিবর্তে অর্থ আইন, ২০১৫ (২০১৫ সনের ১০ নং আইন) এর ৭২ ধারাবলে প্রতিস্থাপিত ।'>৩</sup>[সহকারী কমিশনার বা সহকারী পরিচালক, মূল্য সংযোজন কর পদমর্যাদার]- এর নিম্ন নহেন এইরূপ কোন মূল্য সংযোজন কর কমকতা লিখিত আদেশ দ্বারা যে কোন মূল্য সংযোজন কর কর্মকর্তাকে এইরূপ যে কোন স্থান, ঘরবাড়ী, নৌযান বা অন্য কোন যানবাহনে প্রবেশ করিবার ক্ষমতা দান করিতে পারিবে যে স্থান, ঘরবাড়ী, নৌযান বা অন্য কোন যানবাহন হইতে বা দ্বারা এই আইনের অধীন মূল্য সংযোজন কর আরোপযোগ্য কোন পণ্য বা কোন সেবা এই আইন বা কোন বিধির বিধান লংঘন করিয়া সরবরাহ, প্রদত্ত বা বহন করা হয় বা হইয়াছে বলিয়া তিনি বিশ্বাস করেন বা তাহার উক্তরূপ বিশ্বাস করার যুক্তিসংঘত কারণ থাকে এবং উক্ত আদেশে উক্তরূপ স্থান, ঘরবাড়ী, নৌযান বা যানবাহন তল্লাশীর ক্ষমতাও প্রদান করা যাইতে পারে৷]
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
                <div className="text-xs text-gray-600 italic space-y-2">
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